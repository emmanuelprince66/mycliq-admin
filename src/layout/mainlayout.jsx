import React from "react";
import { Sidebar } from "../components/sidebar";
import { Topbar } from "../components/topbar";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import SearchComp from "../components/search/SearchComp";

export const Mainlayout = ({ component }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      {/* Sidebar */}
      <Box sx={{ flex: "0 0 230px" }}>
        {/* Your Sidebar component here */}
        <Sidebar />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", flex: "1" }}>
        {/* Navbar */}
        <Box sx={{ width: "100%" }}>
          {/* Your Navbar component here */}
          <Topbar setSearchTerm={setSearchTerm} />
        </Box>

        {/* Content */}
        <Box sx={{ flex: "1", background: "#FCFCFC", padding: "1rem" }}>
          {/* Your Content component here */}

          {searchTerm === "" && (
            <Box className="h-[80vh] overflow-y-auto ">{component}</Box>
          )}

          {searchTerm !== "" && (
            <Box className="h-[80vh] overflow-y-auto ">
              <SearchComp searchTerm={searchTerm} />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
