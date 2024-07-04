// src/Routes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Overview } from "./pages/Overview";
import { Mainlayout } from "./layout/mainlayout";
import Students from "./pages/Students";
import Transaction from "./pages/Transaction";
import { queryClient } from "./helpers/queryClient";
import Withdrawal from "./pages/Withdrawal";
import ManageBills from "./pages/ManageBills";
import SuperAdmin from "./pages/SuperAdmin";
import Support from "./pages/Support";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@mui/material/";
import ResetPassword from "./pages/ResetPassword";
import ForgetPassword from "./pages/ForgetPassword";
import Notification from "./pages/Notification";
import Onboarding from "./pages/Onboarding";
import Customer from "./pages/Customer";
import Billers from "./pages/Billers";
import GMerchants from "./pages/GMerchants";
import { AuthProvider } from "./utils/AuthContext";
import Gtransportaton from "./components/Gtransportaton";
import Gassociation from "./components/Gassociation";
import Gticket from "./components/Gticket";
import Gvendor from "./components/Gvendor";

const myRoutes = [
  { component: <Login />, path: "/", name: "Login Page" },
  { component: <Overview />, path: "/overview", name: "Overview Page" },
  { component: <Students />, path: "/students", name: "Students" },
  {
    component: <Notification />,
    path: "/p-notification",
    name: "Notification",
  },
  {
    component: <GMerchants />,
    path: "/merchants",
    name: "Merchants",
  },
  {
    component: <Gtransportaton />,
    path: "/gtransportations",
    name: "gtransport",
  },
  {
    component: <Gassociation />,
    path: "/gassociations",
    name: "gassociation",
  },
  {
    component: <Gticket />,
    path: "/gtickets",
    name: "gticket",
  },
  {
    component: <Gvendor />,
    path: "/gvendors",
    name: "gvendor",
  },
  {
    component: <Billers />,
    path: "/billers",
    name: "Billers",
  },
  {
    component: <Customer />,
    path: "/customers",
    name: "Customer",
  },
  {
    component: <Onboarding />,
    path: "/onboarding",
    name: "Onboarding",
  },
  { component: <ManageBills />, path: "/manage-bills", name: "Manage Bills" },
  { component: <Transaction />, path: "/transaction", name: "transaction" },
  { component: <Withdrawal />, path: "/withdrawal", name: "withdrawal" },
  { component: <SuperAdmin />, path: "/super-admin", name: "SuperAdmin" },
  { component: <Support />, path: "/support", name: "Support" },
  { component: <ResetPassword />, path: "/reset", name: "Reset" },
];

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    "&::placeholder": {
      fontFamily: "Poppins",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
});
const RoutesContainer = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            {myRoutes.map((item) => {
              // For the login page, render without AuthProvider
              if (item.path === "/") {
                return (
                  <Route
                    key={item.name}
                    path={item.path}
                    element={item.component}
                  />
                );
              } else {
                // For other pages, wrap with AuthProvider
                const ComponentWithAuth = (
                  <AuthProvider>
                    <Mainlayout component={item.component} />
                  </AuthProvider>
                );
                return (
                  <Route
                    key={item.name}
                    path={item.path}
                    element={ComponentWithAuth}
                  />
                );
              }
            })}
            <Route index path="/f-password" element={<ForgetPassword />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default RoutesContainer;
