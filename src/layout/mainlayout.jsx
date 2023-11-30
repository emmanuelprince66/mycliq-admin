import React from "react";
import { Sidebar } from "../components/sidebar";
import { Topbar } from "../components/topbar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export const Mainlayout = ({ component }) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Box sx={{ flex: "0 0 230px" }}>
        {/* Your Sidebar component here */}
        <Sidebar />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", flex: "1" }}>
        {/* Navbar */}
        <Box sx={{ width: "100%" }}>
          {/* Your Navbar component here */}
          <Topbar />
        </Box>

        {/* Content */}
        <Box sx={{ flex: "1", padding: "1rem" }}>
          {/* Your Content component here */}
          {component}
        </Box>
      </Box>
    </Box>
  );
};
