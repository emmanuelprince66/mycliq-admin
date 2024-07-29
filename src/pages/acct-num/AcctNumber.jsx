import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import search from "../../../src/assets/search.svg";
import InputAdornment from "@mui/material/InputAdornment";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
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
import UpdateAcctNumber from "./UpdateAcctNumber";
const AcctNumber = () => {
  const [showUpdateAcctNo, setShowUpdateAcctNo] = useState(false);
  const handleCloseUpdateAcctNo = () => setShowUpdateAcctNo(false);
  const totalPages = 8;
  const rowsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const dummy = [
    {
      id: 1,
      reference: "Commission Account",
      acct: "6758733455",
      bname: "Providus Bank",
      datec: "01-03-2023",
      changew: "Tobi Olosunde",
    },
    {
      id: 2,
      reference: "Commission Account",
      acct: "6758733455",
      bname: "Providus Bank",
      datec: "01-03-2023",
      changew: "Tobi Olosunde",
    },
    {
      id: 3,
      reference: "KYC",
      acct: "6758733455",
      bname: "Providus Bank",
      datec: "01-03-2023",
      changew: "Tobi Olosunde",
    },
    {
      id: 4,
      reference: "Commission Account",
      acct: "6758733455",
      bname: "Providus Bank",
      datec: "01-03-2023",
      changew: "Tobi Olosunde",
    },
    {
      id: 5,
      reference: "Account Loss Balancing",
      acct: "6758733455",
      bname: "Providus Bank",
      datec: "01-03-2023",
      changew: "Tobi Olosunde",
    },
  ];
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="w-[90%] mx-auto p-3 flex flex-col bg-white items-start gap-3 border-slate-200 border-[1px] rounded-md">
      <div className="flex items-center  justify-between w-full mb-5">
        <p className="text-[#1E1E1E] font-[500] text-[20px]">Account Numbers</p>

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

        <Button
          variant="contained"
          sx={{
            color: "#fff",
            background: "#FF7F00",
            display: "flex",
            alignItem: "center",
            gap: "5px",
            padding: ".6em",
            boxShadow: "none",
            "&:hover": {
              background: "#FF7F00",
            },
          }}
        >
          <AddRoundedIcon />
          Add Activity
        </Button>
      </div>

      {/* table */}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, padding: "8px" }}>
          <TableHead sx={{ background: "#F8F8F8" }}>
            <TableRow>
              <TableCell>S/N</TableCell>
              <TableCell>Reference</TableCell>
              <TableCell>Bank Account</TableCell>
              <TableCell>Bank Name</TableCell>
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
                  <TableCell>{item?.reference}</TableCell>
                  <TableCell>{item?.acct}</TableCell>
                  <TableCell>{item?.bname}</TableCell>
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

      {/* Add activity Modal */}

      {/* update act number modal */}
      <CustomModal
        open={!showUpdateAcctNo}
        closeModal={handleCloseUpdateAcctNo}
      >
        <UpdateAcctNumber handleCloseUpdateAcctNo={handleCloseUpdateAcctNo} />
      </CustomModal>
      {/* update act number modal ends */}
    </div>
  );
};

export default AcctNumber;
