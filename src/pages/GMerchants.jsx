import React from "react";
import { useState, useEffect } from "react";
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
import download from "../assets/images/download.svg";
import info from "../assets/images/admin/info.svg";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import CabinRoundedIcon from "@mui/icons-material/CabinRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import TransgenderRoundedIcon from "@mui/icons-material/TransgenderRounded";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import bigavatar from "../assets/images/bigavatar.svg";
import celeb from "../assets/celeb.svg";
import bage1 from "../assets/bage1.svg";
import InputAdornment from "@mui/material/InputAdornment";
import side from "../assets/images/admin/side.svg";
import percent from "../assets/images/admin/percent.svg";
import upcolor from "../assets/images/admin/upcolor.svg";
import FormattedPrice from "../components/FormattedPrice";
import ArrowRight from "../assets/images/arrow-right.svg";
import bluepending from "../assets/images/bluepending.svg";
import serving from "../assets/images/serving.svg";
import cancelled from "../assets/images/cancelled.svg";
import completed from "../assets/images/completed.svg";
import search from "../../src/assets/search.svg";

import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import avatar from "../assets/avatar.svg";
import DoughnutChart from "../components/DoughnutChart";
import SelectDate from "../components/SelectDate";
import fdown from "../assets/fdown.svg";

const GMerchants = () => {
  const dummyCustomers = [
    {
      id: 1,
      name: "Eleanor Poe",
      img: "",
    },
    {
      id: 2,
      name: "Pleanor Poe",
      img: "",
    },
    {
      id: 3,
      name: "Sleanor Poe",
      img: "",
    },
    {
      id: 4,
      name: "Bleanor Poe",
      img: "",
    },
    {
      id: 5,
      name: "Gleanor Poe",
      img: "",
    },
    {
      id: 6,
      name: "Gleanor Poe",
      img: "",
    },
    {
      id: 7,
      name: "Gleanor Poe",
      img: "",
    },
    {
      id: 8,
      name: "Gleanor Poe",
      img: "",
    },
    {
      id: 9,
      name: "Gleanor Poe",
      img: "",
    },
    {
      id: 10,
      name: "Gleanor Poe",
      img: "",
    },
    {
      id: 11,
      name: "Gleanor Poe",
      img: "",
    },
    {
      id: 12,
      name: "Gleanor Poe",
      img: "",
    },
  ];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [showInStore, setShowInStore] = useState(true);

  return (
    <Box
      sx={{
        width: "100%",
        padding: "1rem",
        backgroundColor: "#fffcfc",
      }}
    >
      <SelectDate />
      {/* card */}
      <Box
        sx={{
          width: "1080px",
          display: "flex",
          gap: "2rem",
          mb: "1rem",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            width: "356px",
            gap: "0.8rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                width: "28px",
                height: "28px",
              }}
            >
              <img src={fdown} className="fd" alt="f-down" />
            </Box>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "14px",
                color: "#4F4F4F",
              }}
            >
              Total <br />
              Inflow
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "24px",
                color: "#1E1E1E",
              }}
            >
              <FormattedPrice amount={2000} />
            </Typography>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            width: "356px",
            gap: "0.8rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <Box
                sx={{
                  width: "28px",
                  height: "28px",
                }}
              >
                <img src={upcolor} className="fd" alt="f-down" />
              </Box>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#4F4F4F",
                }}
              >
                Total <br />
                Outflow
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "24px",
                color: "#1E1E1E",
              }}
            >
              <FormattedPrice amount={1000} />
            </Typography>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            width: "356px",
            gap: "0.8rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                width: "28px",
                height: "28px",
              }}
            >
              <img src={percent} className="fd" alt="f-down" />
            </Box>
            <Typography
              sx={{
                fomtWeight: "500",
                fontSize: "14px",
                color: "#4F4F4F",
              }}
            >
              Merchant's Total
              <br />
              Wallet Balance
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "24px",
                color: "#1E1E1E",
              }}
            >
              <FormattedPrice amount={Number(200000 || 0)} />
            </Typography>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            width: "356px",
            gap: "0.8rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                width: "28px",
                height: "28px",
              }}
            >
              <img src={side} className="fd" alt="f-down" />
            </Box>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "14px",
                color: "#4F4F4F",
              }}
            >
              Commission
              <br />
              From Merchants{" "}
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "24px",
                color: "#1E1E1E",
              }}
            >
              <FormattedPrice amount={Number(20000 || 0)} />
            </Typography>
          </Box>
        </Card>
      </Box>
      {/* card */}

      <Box className="w-full bg-white p-3 max-h-[70vh] flex flex-col items-center  border-grey-400 border-[1px] rounded-md">
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "15px",
            color: "#4F4F4F",
            my: "10px",
          }}
        >
          Merchant's Order Overview
        </Typography>
      </Box>

      <Box className="w-full max-h-[60vh] overflow-y-scroll mt-3">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className="w-full bg-white rounded-md p-2 flex-col border-grey-400 border-[1px] items-start justify-center">
              <Box className="flex w-full justify-between items-center">
                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "15px",
                    display: "flex",
                    gap: "6px",
                    alignItems: "center",
                  }}
                >
                  All Merchants
                  <span
                    className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
                  >
                    730
                  </span>
                </Typography>

                <Button
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: "400",
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    color: "#DC0019",
                  }}
                >
                  <img src={download} className="d-icon" alt="d-icon" />
                  download
                </Button>
              </Box>

              {/* search  */}
              <Box className="my-[1rem]">
                <TextField
                  sx={{
                    borderRadius: "10px",
                    width: "100%",
                    // padding: { xs: "4px", sm: "12px 16px", md: " 12px 16px" },
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
                  placeholder="Search Customer..."
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

              {/* merchants  */}
              <Box sx={{ maxHeight: "100vh", overflowY: "scroll" }}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 100, padding: "8px" }}>
                    <TableBody>
                      {!dummyCustomers ? (
                        <CircularProgress
                          size="4.2rem"
                          sx={{
                            color: "#DC0019",
                            marginLeft: "auto",
                            padding: "1em",
                          }}
                        />
                      ) : dummyCustomers &&
                        Array.isArray(dummyCustomers) &&
                        dummyCustomers.length > 0 ? (
                        dummyCustomers.map((item, i) => (
                          <TableRow key={item.id} className="cursor-pointer">
                            <TableCell sx={{ width: "50px" }}>
                              {page * rowsPerPage + i + 1}
                            </TableCell>
                            <TableCell>
                              <Box className="flex items-center gap-2 ">
                                <Box
                                  sx={{
                                    height: "40px",
                                    width: "40px",
                                    border: "1px solid #E0E0E0",
                                    borderRadius: "8px",
                                    p: "5px",
                                  }}
                                >
                                  {item?.img === "" ? (
                                    <img
                                      src={avatar}
                                      className="cat-img"
                                      alt="p-img"
                                    />
                                  ) : (
                                    <img
                                      src={item?.img}
                                      className="cat-img"
                                      alt="p-img"
                                    />
                                  )}
                                </Box>
                                <Typography
                                  sx={{
                                    fomtWeight: "400",
                                    fontSize: "16px",
                                    color: "#828282",
                                  }}
                                >
                                  {item?.name}
                                </Typography>
                              </Box>
                            </TableCell>
                            <TableCell>
                              <Box
                                sx={{
                                  cursor: "pointer",
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "end",
                                }}
                              >
                                <img src={ArrowRight} alt="a-right" />
                              </Box>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan="7">No data found</TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>

                <TablePagination
                  rowsPerPageOptions={[]}
                  component="div"
                  count={dummyCustomers?.totalCount || 0}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={(event, newPage) => setPage(newPage)}
                  // onRowsPerPageChange is removed as the number of rows per page is fixed
                />
              </Box>
              {/* customers end */}
            </Box>
          </Grid>
          {/* another grid box here */}
        </Grid>
      </Box>
    </Box>
  );
};

export default GMerchants;
