import React from "react";
import { useState, useEffect } from "react";
import CustomPagination from "../CustomPagination";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import CircularProgress from "@mui/material/CircularProgress";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import cThree from "../../assets/images/admin/compliance/c-3.svg";
import {
  Table,
  Box,
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Container,
  TextField,
  TablePagination,
  ToggleButtonGroup,
  ToggleButton,
  Card,
  Typography,
  Modal,
} from "@mui/material";
import modDate from "../../utils/moddate";

const TableThree = ({
  currentPage,
  rowsPerPage,
  tableData,
  usersThreeCompLoading,
  totalPages,
  setCurrentPage,
}) => {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  console.log("zeta", tableData);
  const dummy = [
    {
      id: 1,
      name: "Jenny Wison",
      category: "Merchant",
      phone: "08166557773",
      date: "12-08-2924. 01:00pm",
      status: "success",
    },
    {
      id: 2,
      name: "Jenny Wison",
      category: "Customer",
      phone: "08166557773",
      date: "12-08-2924. 01:00pm",
      status: "success",
    },
    {
      id: 3,
      name: "Jenny Wison",
      category: "Merchant",
      phone: "08166557773",
      date: "12-08-2924. 01:00pm",
      status: "failed  ",
    },
    {
      id: 4,
      name: "Jenny Wison",
      category: "Merchant",
      phone: "08166557773",
      date: "12-08-2924. 01:00pm",
      status: "pending",
    },
    {
      id: 5,
      name: "Jenny Wison",
      category: "Merchant",
      phone: "08166557773",
      date: "12-08-2924. 01:00pm",
      status: "processing",
    },
    {
      id: 6,
      name: "Jenny Wison",
      category: "Merchant",
      phone: "08166557773",
      date: "12-08-2924. 01:00pm",
      status: "success",
    },
  ];
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, padding: "8px" }}>
          <TableHead sx={{ background: "#F8F8F8" }}>
            <TableRow>
              <TableCell>S/N</TableCell>
              <TableCell>Onboarded Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Date & Time</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersThreeCompLoading ? (
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
            ) : tableData?.records?.length > 0 ? (
              tableData?.records?.map((item, i) => (
                <TableRow key={item.id}>
                  <TableCell>
                    {i + 1 + (currentPage - 1) * rowsPerPage}
                  </TableCell>
                  <TableCell>{item?.name} </TableCell>
                  <TableCell>{item?.phone}</TableCell>
                  <TableCell>{item?.category}</TableCell>
                  <TableCell>{modDate(item?.createdAt)}</TableCell>
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
                      View More
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <Typography className="flex self-center p-3 min-w-full">
                No Data yet.
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
    </>
  );
};

export default TableThree;
