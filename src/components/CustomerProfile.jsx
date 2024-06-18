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
import DoughnutChart from "./DoughnutChart";
import CustomerProfileDetails from "./CustomerProfileDetails";
import celeb from "../assets/celeb.svg";
import bage1 from "../assets/bage1.svg";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import Switch from "@mui/material/Switch";
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
const CustomerProfile = ({
  customerDataById,
  showCustomerProfile,
  handleCloseShowCustomerProfile,
}) => {
  console.log(customerDataById);

  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const handleCloseProfileDetails = () => setShowProfileDetails(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  return (
    <Box className="w-full ">
      <Grid container spacing={2}>
        <Grid xs={12}></Grid>
        <Grid item xs={7}>
          <Box className="w-full bg-white rounded-md p-4 flex-col border-grey-400 border-[1px]  overflow-y-scroll items-start justify-center">
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "500",
                fontSize: "15px",
                p: "1rem",
              }}
            >
              Customer Profile
            </Typography>

            <Box className="w-full flex items-start flex-col   gap-[4rem] my-3 border-b border-grey-400  pb-1">
              <Box className="ml-3">
                <img src={bigavatar} className="object-contain" alt="b-a" />
              </Box>
              <Box className="flex flex-col items-start w-full justify-center">
                <Typography
                  sx={{
                    color: "grey",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  BASIC
                </Typography>
                <Box className="flex items-center mt-2 mb-1">
                  <Box className="flex items-center gap-1 w-[200px] ">
                    <PersonOutlineRoundedIcon sx={{ color: "grey" }} />
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: "300",
                        fontSize: "13px",
                      }}
                    >
                      Name:
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "500",
                      fontSize: "15px",
                    }}
                  >
                    {`${customerDataById?.lastName}  ${customerDataById?.firstName}`}
                  </Typography>
                </Box>
                <Box className="flex items-center mt-2 mb-1 justify-between ">
                  <Box className="flex items-center gap-1 w-[200px] ">
                    <TransgenderRoundedIcon sx={{ color: "grey" }} />
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: "300",
                        fontSize: "13px",
                      }}
                    >
                      Gender:
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "500",
                      fontSize: "15px",
                    }}
                  >
                    Male
                  </Typography>
                </Box>
                <Box className="flex  items-center mt-2 mb-1 justify-between ">
                  <Box className="flex items-center gap-1 w-[200px] ">
                    <EmailOutlinedIcon sx={{ color: "grey" }} />
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: "300",
                        fontSize: "13px",
                      }}
                    >
                      Email:
                    </Typography>
                  </Box>

                  <div className="flex gap-2 items-center">
                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "500",
                        fontSize: "15px",
                      }}
                    >
                      {customerDataById?.email}
                    </Typography>

                    <div className="bg-[#FFF0F0] py-1 px-2 flex items-center gap-1 rounded-md">
                      <ReportProblemOutlinedIcon className="text-[#E52929] text-[10px] font-[500]" />
                      <p className="text-[#E52929] text-[10px] font-[500]">
                        Unverified
                      </p>
                    </div>
                  </div>
                </Box>
                <Box className="flex  items-center mt-2 mb-1 justify-between ">
                  <Box className="flex items-center gap-1 w-[200px]">
                    <LocalPhoneOutlinedIcon sx={{ color: "grey" }} />
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: "300",
                        fontSize: "13px",
                      }}
                    >
                      Phone Num:
                    </Typography>
                  </Box>

                  <div className="flex gap-2 items-center">
                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "500",
                        fontSize: "15px",
                      }}
                    >
                      {customerDataById?.phoneNumber}
                    </Typography>

                    <div className="bg-[#EBFFF3] py-1 px-2 flex items-center gap-1 rounded-md">
                      <VerifiedOutlinedIcon className="text-[#1E854A] text-[10px] font-[500]" />
                      <p className="text-[#1E854A] text-[10px] font-[500]">
                        Verified
                      </p>
                    </div>
                  </div>
                </Box>
                <Box className="flex  items-center mt-2 mb-1 justify-between ">
                  <Box className="flex items-center gap-1 w-[200px]">
                    <FmdGoodRoundedIcon sx={{ color: "grey" }} />
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: "300",
                        fontSize: "13px",
                      }}
                    >
                      Address:
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "500",
                      fontSize: "15px",
                    }}
                  >
                    {" "}
                    {customerDataById?.address || "address is here"}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="flex flex-col items-start w-full justify-center py-2">
              <Typography
                sx={{
                  color: "grey",
                  fontWeight: "500",
                  fontSize: "15px",
                }}
              >
                BASIC INFORMATION FOR BVN
              </Typography>
              <Box className="flex items-center mt-2 mb-1 ">
                <Box className="flex items-center gap-1 w-[200px] ">
                  <CabinRoundedIcon sx={{ color: "grey" }} />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "13px",
                    }}
                  >
                    Name:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  {`${customerDataById?.lastName}  ${customerDataById?.firstName}`}
                </Typography>
              </Box>
              <Box className="flex items-center mt-2 mb-1 justify-between ">
                <Box className="flex items-center gap-1 w-[200px] ">
                  <PersonOutlineRoundedIcon sx={{ color: "grey" }} />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "13px",
                    }}
                  >
                    Gender:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  Male
                </Typography>
              </Box>
              <Box className="flex items-center mt-2 mb-1 ">
                <Box className="flex items-center gap-1 w-[200px] ">
                  <CabinRoundedIcon sx={{ color: "grey" }} />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "13px",
                    }}
                  >
                    Email:
                  </Typography>
                </Box>

                <div className="flex gap-2 items-center">
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "500",
                      fontSize: "15px",
                    }}
                  >
                    {customerDataById?.email}
                  </Typography>

                  <div className="bg-[#FFF0F0] py-1 px-2 flex items-center gap-1 rounded-md">
                    <ReportProblemOutlinedIcon className="text-[#E52929] text-[10px] font-[500]" />
                    <p className="text-[#E52929] text-[10px] font-[500]">
                      Unverified
                    </p>
                  </div>
                </div>
              </Box>
              <Box className="flex items-center mt-2 mb-1 justify-between ">
                <Box className="flex items-center gap-1 w-[200px] ">
                  <PersonOutlineRoundedIcon sx={{ color: "grey" }} />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "13px",
                    }}
                  >
                    Phone Number:
                  </Typography>
                </Box>

                <div className="flex gap-2 items-center">
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "500",
                      fontSize: "15px",
                    }}
                  >
                    {customerDataById?.phoneNumber}
                  </Typography>

                  <div className="bg-[#EBFFF3] py-1 px-2 flex items-center gap-1 rounded-md">
                    <VerifiedOutlinedIcon className="text-[#1E854A] text-[10px] font-[500]" />
                    <p className="text-[#1E854A] text-[10px] font-[500]">
                      Verified
                    </p>
                  </div>
                </div>
              </Box>
              <Box className="flex  items-center mt-2 mb-1 justify-between ">
                <Box className="flex items-center gap-1 w-[200px]">
                  <FmdGoodRoundedIcon sx={{ color: "grey" }} />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "13px",
                    }}
                  >
                    Address:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  {" "}
                  {customerDataById?.address || "address is here"}
                </Typography>
              </Box>
            </Box>
            <Box className="flex flex-col items-start w-full justify-center py-2">
              <Typography
                sx={{
                  color: "grey",
                  fontWeight: "500",
                  fontSize: "15px",
                }}
              >
                BANK DETAILS
              </Typography>
              <Box className="flex items-center mt-2 mb-1 ">
                <Box className="flex items-center gap-1 w-[200px] ">
                  <CabinRoundedIcon sx={{ color: "grey" }} />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "13px",
                    }}
                  >
                    Bank Name:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  Providus Bank
                </Typography>
              </Box>
              <Box className="flex items-center mt-2 mb-1 justify-between ">
                <Box className="flex items-center gap-1 w-[200px] ">
                  <PersonOutlineRoundedIcon sx={{ color: "grey" }} />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "13px",
                    }}
                  >
                    Account Number:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  2211223445
                </Typography>
              </Box>
              <Box className="flex items-center mt-2 mb-1 ">
                <Box className="flex items-center gap-1 w-[200px] ">
                  <CabinRoundedIcon sx={{ color: "grey" }} />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "13px",
                    }}
                  >
                    Bank Name:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  Safe Haven
                </Typography>
              </Box>
              <Box className="flex items-center mt-2 mb-1 justify-between ">
                <Box className="flex items-center gap-1 w-[200px] ">
                  <PersonOutlineRoundedIcon sx={{ color: "grey" }} />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "13px",
                    }}
                  >
                    Account Number:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  2211223445
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Grid item xs={12}>
            <Box className="w-full mb-3 bg-white rounded-md p-2 flex-col border-grey-400  border-[1px] items-start justify-center">
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "500",
                  fontSize: "14px",
                  gap: "5px",
                  py: "1rem",
                }}
              >
                Customer Account & Activity
              </Typography>

              <Box className="flex items-center mt-2 mb-1 ">
                <Box className="flex items-center gap-1  w-[150px] ">
                  <PersonOutlineRoundedIcon sx={{ color: "grey" }} />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "13px",
                    }}
                  >
                    Account status:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "12px",
                    background: "#EBFFF3",
                    py: "5px",
                    px: "10px",
                    color: "#1E854A",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span className="w-[10px] h-[10px] rounded-full  bg-green-600" />
                  Active
                </Typography>
              </Box>
              <Box className="flex  items-center mt-2 mb-1 ">
                <Box className="flex items-center gap-1 w-[150px] ">
                  <PersonOutlineRoundedIcon sx={{ color: "grey" }} />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "13px",
                    }}
                  >
                    KYC Level:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img src={bage1} alt="b-img" />
                  <span className="font-bold ml-2">Tier 1</span>
                </Typography>
              </Box>
              <Box className="flex  items-center mt-2 mb-1 ">
                <Box className="flex items-center gap-1 w-[150px]">
                  <CalendarMonthRoundedIcon sx={{ color: "grey" }} />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "13px",
                    }}
                  >
                    Date Registered:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  01/05/2023 at 08:54 PM
                </Typography>
              </Box>
              <Box className="flex  items-center mt-2 mb-1  ">
                <Box className="flex items-center gap-1 w-[150px]">
                  <AccessTimeRoundedIcon sx={{ color: "grey" }} />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "13px",
                    }}
                  >
                    Last Seen:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  01/05/2023 at 08:54 PM
                </Typography>
              </Box>

              <Box className="flex  items-center mt-2 mb-1 ">
                <Box className="flex items-center gap-1 w-[150px]">
                  <HttpsOutlinedIcon sx={{ color: "red" }} />
                  <Typography
                    sx={{
                      color: "red",
                      fontWeight: "300",
                      fontSize: "13px",
                    }}
                  >
                    Disable Account:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  <Switch
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "#fff",
                        // "&:hover": {
                        //   backgroundColor: alpha(
                        //     pink[600],
                        //     theme.palette.action.hoverOpacity
                        //   ),
                        // },
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: "#DC0019",
                        },
                    }}
                    defaultChecked
                    color="default"
                  />
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className="w-full bg-white rounded-md p-2 flex-col border-grey-400  border-[1px] items-start justify-center">
              {/* <DoughnutChart
                title="Transaction Insight"
                values={[100, 40, 90, 50]}
                label={["Orders", "Bank Transfer", "Wallet To wallet", "Bills"]}
                color={["#FF4069", "#36A2EB", "#FF9F40", "#27AE60"]}
              /> */}
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "15px",
                  color: "#000",
                  py: "10px",
                  pl: "10px",
                }}
              >
                Customer Transaction Insight
              </Typography>
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
            </Box>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box className="w-full bg-white rounded-md p-2 flex flex-col border-grey-400  border-[1px] items-start justify-center">
            {/* customers  */}
            <Box sx={{ maxHeight: "55vh", overflowY: "scroll", width: "100%" }}>
              <Box className="text-left">
                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "15px",
                    py: "1rem",
                  }}
                >
                  Recent Transactions
                </Typography>
              </Box>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 100, padding: "8px" }}>
                  <TableHead
                    sx={{
                      background: "#F8F8F8",
                    }}
                  >
                    <TableRow>
                      <TableCell>S/N</TableCell>
                      <TableCell> Full Name</TableCell>
                      <TableCell> Transaction ID</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Amount</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
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
                        <TableRow key={item.id}>
                          <TableCell>{page * rowsPerPage + i + 1}</TableCell>
                          <TableCell>
                            <Typography
                              sx={{
                                fomtWeight: "400",
                                fontSize: "16px",
                                color: "#828282",
                              }}
                            >
                              item?.name
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              sx={{
                                fomtWeight: "400",
                                fontSize: "16px",
                                color: "#828282",
                              }}
                            >
                              SN25553333
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              sx={{
                                fomtWeight: "400",
                                fontSize: "16px",
                                color: "#828282",
                              }}
                            >
                              Funding{" "}
                            </Typography>
                          </TableCell>
                          <TableCell>200,000</TableCell>
                          <TableCell>
                            <Typography
                              sx={{
                                color: "#1E1E1E",
                                fontWeight: "500",
                                fontSize: "12px",
                                background: "#EBFFF3",
                                py: "5px",
                                px: "10px",
                                color: "#1E854A",
                                borderRadius: "10px",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                justifyContent: "center",
                                width: "120px",
                              }}
                            >
                              <span className="w-[10px] h-[10px] rounded-full  bg-green-600" />
                              Successfull
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="outlined"
                              sx={{
                                textTransform: "capitalize",
                                display: "flex",
                                gap: "4px",
                                width: "100px",
                                alignItems: "center",
                                color: "#ff7f00",
                                fontWeight: "400",
                                fontSize: "10px",
                                border: "1px solid #E0E0E0",
                                "&:hover": {
                                  backgroundColor: "#fff",
                                  border: "1px solid #E0E0E0",
                                },
                                // lineHeight: "26.4px",
                              }}
                            >
                              View Profile
                            </Button>
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
      </Grid>

      {/* Modall for  deposit detailsl */}

      <Modal
        open={showProfileDetails}
        onClose={handleCloseProfileDetails}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        PaperProps={{
          sx: {
            border: "none", // Remove the border
            boxShadow: "none", // Remove the box shadow
          },
        }}
      >
        <CustomerProfileDetails setShowProfileDetails={setShowProfileDetails} />
      </Modal>
      {/* Modal deposit ends */}
    </Box>
  );
};

export default CustomerProfile;
