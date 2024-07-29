import React from "react";
import { useState } from "react";
import SelectDate from "../../components/SelectDate";
import { TextField, Box, Button } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

import search from "../../../src/assets/search.svg";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  Paper,
  CircularProgress,
  TableHead,
  TableRow,
} from "@mui/material";
import CustomPagination from "../../components/CustomPagination";
import CustomModal from "../../components/CustomModal";
import EditCommission from "./EditCommission";

const Commission = () => {
  const [showUsers, setShowUsers] = useState(true);
  const [showUpdateCommmission, setShowUpdateCommission] = useState(false);
  const handleCloseUpdateCommission = () => setShowUpdateCommission(false);
  const totalPages = 8;
  const rowsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const dummy = [
    {
      id: 1,
      product: "Airtime",
      charges: "2.5%",
      datec: "01-03-2023",
      changew: "Tobi Olosunde",
    },
    {
      id: 2,
      product: "Data",
      charges: "2.5%",
      datec: "01-03-2023",
      changew: "Tobi Olosunde",
    },
    {
      id: 3,
      product: "Wallet to Wallet",
      charges: "2.5%",
      datec: "01-03-2023",
      changew: "Tobi Olosunde",
    },
    {
      id: 4,
      product: "Association",
      charges: "2.5%",
      datec: "01-03-2023",
      changew: "Tobi Olosunde",
    },
    {
      id: 5,
      product: "Data",
      charges: "2.5%",
      datec: "01-03-2023",
      changew: "Tobi Olosunde",
    },
  ];
  return (
    <div className="w-full flex flex-col items-start gap-3">
      <div className="w-full flex justify-end">
        <SelectDate />
      </div>

      {/*  */}

      <div className="w-full mx-auto p-3 flex flex-col bg-white items-start gap-3 border-slate-200 border-[1px] rounded-md">
        <div className="flex gap-6 items-center w-full">
          <p className="font-[500] text-[20px] text-[#1E1E1E]">Commission</p>
          {/* search  */}
          <Box className="w-1/2">
            <TextField
              sx={{
                borderRadius: "10px",
                width: "100%",
                color: "#D1D1D1",
                "& .MuiOutlinedInput-root": {
                  padding: "8px", // Adjust padding to reduce height
                  height: "36px", // Set the desired height here
                  lineHeight: "36px", // Match the height to avoid overflow
                  "& fieldset": {
                    borderColor: "#D1D1D1", // Set the desired border color here
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#FF7F00", // Set the border color on hover here
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#FF7F00", // Set the border color on focus here
                  },
                },
              }}
              placeholder="Search Merchant..."
              variant="outlined"
              required
              id="firstName-input"
              InputProps={{
                style: { color: "#818181" },
                startAdornment: (
                  <InputAdornment>
                    <img src={search} alt="s-logo" />
                    &nbsp;&nbsp;&nbsp;
                  </InputAdornment>
                ),
              }}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </Box>
          {/* search ends */}
        </div>

        {/*  */}

        {/* tabs */}

        <div className="  mt-7  mb-2 w-full flex items-center gap-5">
          <div
            className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
            onClick={() => setShowUsers(true)}
          >
            <div className="flex gap-2 items-center ">
              <p
                className={`text-[16px] ${
                  showUsers ? "text-[#F78105]" : "text-[#828282]"
                } font-[600]`}
              >
                Users
              </p>
            </div>
            {showUsers && (
              <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
            )}
          </div>
          <div
            className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
            onClick={() => setShowUsers(false)}
          >
            <div className="flex gap-2 items-center">
              <p
                className={`text-[16px] ${
                  !showUsers ? "text-[#F78105]" : "text-[#828282]"
                } font-[600]`}
              >
                Merchants
              </p>
              {/* <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                <p className="text-[12px] text-[#A86500] font-[500]">122</p>
              </span> */}
            </div>
            {!showUsers && (
              <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
            )}
          </div>
        </div>
        {/* tabs ends*/}

        {/* table */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, padding: "8px" }}>
            <TableHead sx={{ background: "#F8F8F8" }}>
              <TableRow>
                <TableCell>S/N</TableCell>
                <TableCell>Product</TableCell>
                <TableCell>Charges</TableCell>
                <TableCell>Date Changed</TableCell>
                <TableCell>Changed By Who</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!dummy ? (
                <TableRow>
                  <CircularProgress
                    size="4.2rem"
                    sx={{
                      color: "#f78105",
                      marginLeft: "auto",
                      padding: "1em",
                    }}
                  />
                </TableRow>
              ) : dummy?.length > 0 ? (
                dummy?.map((item, i) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      {i + 1 + (currentPage - 1) * rowsPerPage}
                    </TableCell>
                    <TableCell>{item?.product}</TableCell>
                    <TableCell>{item?.charges}</TableCell>
                    <TableCell>{item?.datec}</TableCell>
                    <TableCell>{item?.changew}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        sx={{
                          textTransform: "capitalize",
                          color: "#DC0019",
                          fontWeight: "600",
                          fontSize: "10px",
                          border: "1px solid #E0E0E0",
                          "&:hover": {
                            backgroundColor: "#fff",
                            border: "1px solid #E0E0E0",
                          },
                        }}
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <Typography className="flex self-center p-3 min-w-full">
                  No transactions yet.
                </Typography>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        {/* table ends */}
      </div>
      {/* update commission modal */}
      <CustomModal
        cwidth="40%"
        open={showUpdateCommmission}
        closeModal={handleCloseUpdateCommission}
      >
        <EditCommission
          handleCloseUpdateCommission={handleCloseUpdateCommission}
        />
      </CustomModal>
      {/* update commission modal ends */}
    </div>
  );
};

export default Commission;
