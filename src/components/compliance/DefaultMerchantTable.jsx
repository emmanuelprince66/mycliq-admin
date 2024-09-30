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

const DefaultMerchantTable = ({
  currentPage,
  setCurrentPage,
  tableData,
  totalPages,
  rowsPerPage,
  usersComplianceData,
  usersCompLoading,
}) => {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, padding: "8px" }}>
          <TableHead sx={{ background: "#F8F8F8" }}>
            <TableRow>
              <TableCell>S/N</TableCell>
              <TableCell>Onboarded Name</TableCell>
              <TableCell>BVN Name</TableCell>
              <TableCell>NIN Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Hold</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersCompLoading ? (
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
                  <TableCell>{item?.name}</TableCell>
                  <TableCell>
                    {`${item?.bvnMeta?.lastName || ""} ${
                      item?.bvnMeta?.firstName || ""
                    }`}
                  </TableCell>
                  <TableCell>
                    {`${item?.ninMeta?.lastName || ""} ${
                      item?.ninMeta?.firstName || ""
                    }`}
                  </TableCell>
                  <TableCell>{item?.phone}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "capitalize",
                        color: "#828282",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "10px",
                        border: "1px solid #F78105",
                        "&:hover": {
                          backgroundColor: "#fff",
                          border: "1px solid #F78105",
                        },
                      }}
                    >
                      <img src={cThree} alt="c-three" />
                      Holding
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        textTransform: "capitalize",
                        background:
                          item?.status === "failed"
                            ? "#FFF0F0"
                            : item.status === "success"
                            ? "#EBFFF3"
                            : item?.status === "pending"
                            ? "#FFF0F0"
                            : item?.status === "processing"
                            ? "#F4F1FE"
                            : "",
                        color:
                          item?.status === "failed"
                            ? "#E52929"
                            : item.status === "success"
                            ? "#1E854A"
                            : item?.status === "pending"
                            ? "#CDA11E"
                            : item?.status === "processing"
                            ? "#391E85"
                            : "",
                        fontWeight: "500",
                        fontSize: "12px",
                        padding: "4px 8px",
                        borderRadius: "8px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "5px",
                        border: "1px solid #E0E0E0",
                      }}
                    >
                      {item?.status === "failed" && (
                        <ReportOutlinedIcon sx={{ fontSize: "12px" }} />
                      )}
                      {item?.status === "success" && (
                        <CheckCircleOutlineRoundedIcon
                          sx={{ fontSize: "12px" }}
                        />
                      )}
                      {item?.status === "processing" && (
                        <CheckCircleOutlineRoundedIcon
                          sx={{ fontSize: "12px" }}
                        />
                      )}
                      {item?.status === "pending" && (
                        <HourglassBottomOutlinedIcon
                          sx={{ fontSize: "12px" }}
                        />
                      )}

                      {item?.status}
                    </Box>
                  </TableCell>
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

export default DefaultMerchantTable;
