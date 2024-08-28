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
  CircularProgress,
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
import mOne from "../assets/images/merchants/m-1.svg";
import mTwo from "../assets/images/merchants/m-2.svg";
import mThree from "../assets/images/merchants/m-3.svg";
import mFour from "../assets/images/merchants/m-4.svg";
import mFive from "../assets/images/merchants/m-5.svg";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
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
import { useNavigate } from "react-router-dom";

import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import avatar from "../assets/avatar.svg";
import DoughnutChart from "../components/DoughnutChart";
import { styled } from "@mui/material/styles";
import SelectDate from "../components/SelectDate";
import fdown from "../assets/fdown.svg";
import profileNew from "../assets/images/admin/profile-new.svg";
import GmerchantProfile from "../components/GmerchantProfile";
import house from "../assets/images/outletHouseIcon.svg";
import arrRight from "../assets/images/arrow-right.svg";
const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  border: "1px solid #E0E0E0",
  color: theme.palette.text.secondary,
  borderRadius: "8px",
  maxHeight: "100%",
}));
const Gtransportaton = () => {
  const navigate = useNavigate();
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
  const [isLoading, setIsLoading] = useState(false);

  const [showMerchantProfile, setShowMerchantProfile] = useState(false);

  const handleClose = () => {
    setShowMerchantProfile(false);
  };

  const handleNavigateMerchant = (link) => {
    navigate(link);
  };
  return (
    <Box
      sx={{
        width: "100%",
        padding: "1rem",
      }}
    >
      {showMerchantProfile ? (
        <GmerchantProfile setShowMerchantProfile={setShowMerchantProfile} />
      ) : (
        <>
          {/* card */}
          <div className="w-full flex items-center justify-between">
            <div className="flex gap-2 items-center">
              {showMerchantProfile && (
                <span
                  className="flex gap-1 items-center cursor-pointer"
                  onClick={handleClose}
                >
                  <ArrowBackRoundedIcon sx={{ color: "#F78105" }} />
                  <p className="font-[600] text-[#F78105] text-[14px]">
                    Go Back
                  </p>
                </span>
              )}

              <span className="flex gap-1">
                <img src={house} alt="h" />
                <p className="text-[14px] font-[400 text-[#828282]">
                  Merchants
                </p>
              </span>

              <img src={arrRight} alt="a-r" />

              <p className="text-[#F78105]">General</p>
            </div>
            <SelectDate />
          </div>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: "0.5rem",
              mb: "1rem",
            }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                width: "100%",
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
                  Transportation <br />
                  Inflow
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "15px",
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
                width: "100%",
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
                    Transportation <br />
                    Outflow
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "15px",
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
                width: "100%",
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
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#4F4F4F",
                    height: "2.4rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Wallet Balance
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "15px",
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
                width: "100%",
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
                  <img src={profileNew} className="fd" alt="p-new" />
                </Box>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#4F4F4F",
                  }}
                >
                  Transportations
                  <br />
                  Commission{" "}
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "15px",
                    color: "#1E1E1E",
                  }}
                >
                  <FormattedPrice amount={Number(20000 || 0)} />
                </Typography>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                width: "100%",
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
                  Transportations
                  <br />
                  Onboarded{" "}
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "15px",
                    color: "#1E1E1E",
                  }}
                >
                  423872
                </Typography>
              </Box>
            </Card>
          </Box>
          {/* card */}

          {/*  */}

          {/*  */}

          <Box className="w-full  mt-3">
            <Grid container spacing={2}>
              <Grid item xs={8}>
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
                      All Transportations
                      <span
                        className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
                      >
                        {!isLoading && dummyCustomers?.length > 0 ? (
                          dummyCustomers?.length
                        ) : (
                          <CircularProgress
                            size="1rem"
                            sx={{
                              color: "#f78105",
                              marginLeft: "auto",
                            }}
                          />
                        )}
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

                  {/* <div className="flex gap-[5rem]  mt-4 items-center">
                <Typography
                  sx={{
                    color: "#4F4F4F",
                    fontWeight: "500",
                    fontSize: "15px",
                    display: "flex",
                    gap: "6px",
                    alignItems: "center",
                  }}
                >
                  Suspended Accounts
                  <span
                    className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
                  >
                    {!isLoading && dummyCustomers?.length > 0 ? (
                      // customers?.length
                      0
                    ) : (
                      <CircularProgress
                        size="1rem"
                        sx={{
                          color: "#f78105",
                          marginLeft: "auto",
                        }}
                      />
                    )}
                  </span>
                </Typography>
                <Typography
                  sx={{
                    color: "#4F4F4F",
                    fontWeight: "500",
                    fontSize: "15px",
                    display: "flex",
                    gap: "6px",
                    alignItems: "center",
                  }}
                >
                  Reactivated Accounts
                  <span
                    className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
                  >
                    {!isLoading && dummyCustomers?.length > 0 ? (
                      // customers?.length
                      0
                    ) : (
                      <CircularProgress
                        size="1rem"
                        sx={{
                          color: "#f78105",
                          marginLeft: "auto",
                        }}
                      />
                    )}
                  </span>
                </Typography>
              </div> */}

                  {/* search  */}
                  <Box className="my-[1rem]">
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

                  {/* customers  */}
                  <Box className="max-h-[87vh] overflow-y-auto">
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 100, padding: "8px" }}>
                        <TableBody>
                          {dummyCustomers?.length === 0 ? (
                            <CircularProgress
                              size="4.2rem"
                              sx={{
                                color: "#f78105",
                                marginLeft: "auto",
                                padding: "1em",
                              }}
                            />
                          ) : dummyCustomers &&
                            Array.isArray(dummyCustomers) &&
                            dummyCustomers?.length > 0 ? (
                            dummyCustomers?.map((item, i) => (
                              <TableRow
                                onClick={() => setShowMerchantProfile(true)}
                                key={item.id}
                                className="cursor-pointer"
                              >
                                <TableCell sx={{ width: "50px" }}>
                                  {page * rowsPerPage + i + 1}
                                </TableCell>
                                <TableCell>
                                  <Box className="flex items-center gap-2 ">
                                    <Box
                                      sx={{
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
                                        fontWeight: "400",
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
                      // count={customers?.totalCount || 0}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onPageChange={(event, newPage) => setPage(newPage)}
                      // onRowsPerPageChange is removed as the number of rows per page is fixed
                    />
                  </Box>
                  {/* customers end */}
                </Box>
              </Grid>

              <Grid item xs={4}>
                <Item>
                  <Box sx={{ alignItems: "start", pt: "10px", px: "10px" }}>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "15px",
                        color: "#4F4F4F",
                        py: "10px",
                      }}
                    >
                      General Merchant & Activity Status
                    </Typography>
                  </Box>
                  <div className="w-full flex gap-5 p-3 items-start">
                    <div className="flex items-start flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-[24px] h-[8px] bg-[#27AE60]"></div>

                        <p className="text-[#828282] font-normal text-[14px]">
                          General Active Merchant [234]
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-[24px] h-[8px] bg-[#E52929]"></div>

                        <p className="text-[#828282] font-normal text-[14px]">
                          General Inactive Merchant [234]
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                        <p className="text-[#828282] font-normal text-[14px]">
                          General Suspended Merchant [234]
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-[24px] h-[8px] bg-[#1367D8]"></div>

                        <p className="text-[#828282] font-normal text-[14px]">
                          General Reactivated Merchant [234]
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-[24px] h-[8px] bg-black"></div>

                        <p className="text-[#828282] font-normal text-[14px]">
                          General Closed Merchant [234]
                        </p>
                      </div>
                    </div>
                  </div>
                </Item>
                <Item sx={{ mt: "10px" }}>
                  <Box sx={{ alignItems: "start", pt: "10px", px: "10px " }}>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "15px",
                        color: "#1E1E1E",
                        py: "10px",
                      }}
                    >
                      General Merchant Verification Status
                    </Typography>
                  </Box>
                  <div className="w-full flex gap-5 p-3 items-start">
                    <div className="flex items-start flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-[24px] h-[8px] bg-[#27AE60]"></div>

                        <p className="text-[#828282] font-normal text-[14px]">
                          BVN Verified [234]
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-[24px] h-[8px] bg-[#E52929]"></div>

                        <p className="text-[#828282] font-normal text-[14px]">
                          NIN Verified [234]
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                        <p className="text-[#828282] font-normal text-[14px]">
                          Not Verified [234]
                        </p>
                      </div>
                    </div>
                  </div>
                </Item>
                <Item sx={{ mt: "10px" }}>
                  <Box sx={{ alignItems: "start", pt: "10px", px: "10px " }}>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "15px",
                        color: "#1E1E1E",
                        py: "10px",
                      }}
                    >
                      General Merchant Transaction Insight
                    </Typography>
                  </Box>
                  <div className="w-full flex gap-5 p-3 items-start">
                    <div className="flex items-start flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-[24px] h-[8px] bg-[#27AE60]"></div>

                        <p className="text-[#828282] font-normal text-[14px]">
                          Inward Transfer [234]
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-[24px] h-[8px] bg-[#E52929]"></div>

                        <p className="text-[#828282] font-normal text-[14px]">
                          Outward Transfer [234]
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                        <p className="text-[#828282] font-normal text-[14px]">
                          Wallet to Wallet [234]
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                        <p className="text-[#828282] font-normal text-[14px]">
                          Mycliq [234]
                        </p>
                      </div>
                    </div>
                  </div>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Gtransportaton;
