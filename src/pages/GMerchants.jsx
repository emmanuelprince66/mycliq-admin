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
import { useMutation, useQuery } from "@tanstack/react-query";

import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import avatar from "../assets/avatar.svg";
import DoughnutChart from "../components/DoughnutChart";
import { styled } from "@mui/material/styles";
import { AuthAxios } from "../helpers/axiosInstance";
import { useSelector } from "react-redux";
import SelectDate from "../components/SelectDate";
import fdown from "../assets/fdown.svg";
import profileNew from "../assets/images/admin/profile-new.svg";
import GmerchantProfile from "../components/GmerchantProfile";
import house from "../assets/images/outletHouseIcon.svg";
import arrRight from "../assets/images/arrow-right.svg";
import { formatToIsoDateStr } from "../utils/formatIsoDateString";
import AllMerchants from "./merchants/AllMerchants";
const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  border: "1px solid #E0E0E0",
  color: theme.palette.text.secondary,
  borderRadius: "8px",
  maxHeight: "100%",
}));
const GMerchants = () => {
  const navigate = useNavigate();

  const { selectedDates } = useSelector((state) => state);

  const startDate = formatToIsoDateStr(selectedDates?.startDate);
  const endDate = formatToIsoDateStr(selectedDates?.endDate);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [showInStore, setShowInStore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [merchantId, setMerchantId] = useState("");

  const [showMerchantProfile, setShowMerchantProfile] = useState(false);

  const {
    data: merchantData,
    error,
    isLoading: merchantLoading,
  } = useQuery({
    queryKey: ["merchantData", startDate, endDate],
    queryFn: async () => {
      try {
        const response = await AuthAxios.get(`/admin/analytics/merchant`, {
          params: {
            startDate: startDate,
            endDate: endDate,
          },
        });
        return response?.data?.data;
      } catch (error) {
        throw new Error("Failed to fetch merchant data");
      }
    },
    onSuccess: (data) => {},
    staleTime: 5000, // Cache data for 5 seconds
  });

  const handleClose = () => {
    setShowMerchantProfile(false);
  };

  const handleNavigateMerchant = (link) => {
    navigate(link);
  };

  const handleOpenCustomerProfile = (id) => {
    setMerchantId(id);
    setShowMerchantProfile((prev) => !prev);
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: "1rem",
      }}
    >
      {showMerchantProfile ? (
        <GmerchantProfile
          merchantId={merchantId}
          setShowMerchantProfile={setShowMerchantProfile}
        />
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
                  General <br />
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
                  {merchantLoading ? (
                    <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                  ) : (
                    <FormattedPrice
                      amount={merchantData?.transactions?.totalInwardsSum || 0}
                    />
                  )}
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
                    General <br />
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
                  {merchantLoading ? (
                    <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                  ) : (
                    <FormattedPrice
                      amount={merchantData?.transactions?.totalOutwardsSum || 0}
                    />
                  )}
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
                  }}
                >
                  Merchant
                  <br />
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
                  {merchantLoading ? (
                    <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                  ) : (
                    <FormattedPrice
                      amount={merchantData?.transactions?.totalWalletCount || 0}
                    />
                  )}
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
                    fontSize: "15px",
                    minHeight: "2.7rem",
                    color: "#4F4F4F",
                  }}
                >
                  General Merchant's Commission{" "}
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
                  {merchantData?.commissions?.totalInwardSum || 0}
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
                    fontSize: "15px",
                    color: "#4F4F4F",
                  }}
                >
                  Total Merchant
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
                  {merchantLoading ? (
                    <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                  ) : (
                    merchantData?.merchants?.totalMerchantCount || 0
                  )}
                </Typography>
              </Box>
            </Card>
          </Box>
          {/* card */}

          {/*  */}

          <Box className="w-full bg-white p-3  flex flex-col items-start  border-grey-400 border-[1px] rounded-md">
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "15px",
                color: "#4F4F4F",
                my: "10px",
              }}
            >
              Merchant Order Overview
            </Typography>

            <div className="w-full flex gap-4 justify-between items-center">
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
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <Box
                    sx={{
                      width: "28px",
                      height: "28px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src={mOne} className="fd" alt="m-one" />
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#4F4F4F",
                      }}
                    >
                      Vendors
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
                      2,122
                    </Typography>
                  </Box>
                  <Box
                    className="flex gap-3 items-center cursor-pointer"
                    onClick={() => handleNavigateMerchant("/gvendors")}
                  >
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "14px",
                        color: "#FF7F00",
                      }}
                    >
                      View More
                    </Typography>

                    <ChevronRightRoundedIcon sx={{ color: "#FF7F00" }} />
                  </Box>
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
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <Box
                    sx={{
                      width: "28px",
                      height: "28px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src={mTwo} className="fd" alt="m-2" />
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#4F4F4F",
                      }}
                    >
                      Transportation
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
                      2,122
                    </Typography>
                  </Box>
                  <Box
                    className="flex gap-3 items-center cursor-pointer"
                    onClick={() => handleNavigateMerchant("/gtransportations")}
                  >
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "14px",
                        color: "#FF7F00",
                      }}
                    >
                      View More
                    </Typography>

                    <ChevronRightRoundedIcon sx={{ color: "#FF7F00" }} />
                  </Box>
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
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <Box
                    sx={{
                      width: "28px",
                      height: "28px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src={mThree} className="fd" alt="m-3" />
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#4F4F4F",
                      }}
                    >
                      Association
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
                      2,122
                    </Typography>
                  </Box>
                  <Box
                    className="flex gap-3 items-center cursor-pointer"
                    onClick={() => handleNavigateMerchant("/gassociations")}
                  >
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "14px",
                        color: "#FF7F00",
                      }}
                    >
                      View More
                    </Typography>

                    <ChevronRightRoundedIcon sx={{ color: "#FF7F00" }} />
                  </Box>
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
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <Box
                    sx={{
                      width: "28px",
                      height: "28px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src={mFour} className="fd" alt="m-4" />
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#4F4F4F",
                      }}
                    >
                      Ticketing
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
                      2,122
                    </Typography>
                  </Box>
                  <Box
                    onClick={() => handleNavigateMerchant("/gtickets")}
                    className="flex gap-3 items-center cursor-pointer"
                  >
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "14px",
                        color: "#FF7F00",
                      }}
                    >
                      View More
                    </Typography>

                    <ChevronRightRoundedIcon sx={{ color: "#FF7F00" }} />
                  </Box>
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
                    flexDirection: "column",
                    alignItems: "start",
                  }}
                >
                  <Box
                    sx={{
                      width: "28px",
                      height: "28px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img src={mFive} className="fd" alt="m-5" />
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#4F4F4F",
                      }}
                    >
                      Add Merchant
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
                      2,122
                    </Typography>
                  </Box>
                  <Box className="flex gap-3 items-center cursor-pointer">
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "14px",
                        color: "#FF7F00",
                      }}
                    >
                      View More
                    </Typography>

                    <ChevronRightRoundedIcon sx={{ color: "#FF7F00" }} />
                  </Box>
                </Box>
              </Card>
            </div>
          </Box>

          {/*  */}

          <Box className="w-full  mt-3">
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <AllMerchants
                  handleOpenCustomerProfile={handleOpenCustomerProfile}
                />
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
                          General Active Merchant
                          {isLoading ? (
                            <CircularProgress
                              size="0.3rem"
                              sx={{ color: "#DC0019" }}
                            />
                          ) : (
                            `[${
                              merchantData?.merchants?.activeMerchantCount || 0
                            }]`
                          )}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-[24px] h-[8px] bg-[#E52929]"></div>

                        <p className="text-[#828282] font-normal text-[14px]">
                          General Inactive Merchant
                          {isLoading ? (
                            <CircularProgress
                              size="0.3rem"
                              sx={{ color: "#DC0019" }}
                            />
                          ) : (
                            `[${
                              merchantData?.merchants?.inactiveMerchantCount ||
                              0
                            }]`
                          )}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                        <p className="text-[#828282] font-normal text-[14px]">
                          General Suspended Merchant
                          {isLoading ? (
                            <CircularProgress
                              size="0.3rem"
                              sx={{ color: "#DC0019" }}
                            />
                          ) : (
                            `[${
                              merchantData?.merchants?.suspendedMerchantCount ||
                              0
                            }]`
                          )}
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
                          General Closed Merchant
                          {isLoading ? (
                            <CircularProgress
                              size="0.3rem"
                              sx={{ color: "#DC0019" }}
                            />
                          ) : (
                            `[${
                              merchantData?.merchants?.disabledMerchantCount ||
                              0
                            }]`
                          )}
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
                        fontSize: "15px ",
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
                          BVN Verified
                          {isLoading ? (
                            <CircularProgress
                              size="0.3rem"
                              sx={{ color: "#DC0019" }}
                            />
                          ) : (
                            `[${
                              merchantData?.merchants?.bvnVerifiedCount || 0
                            }]`
                          )}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-[24px] h-[8px] bg-[#E52929]"></div>

                        <p className="text-[#828282] font-normal text-[14px]">
                          NIN Verified
                          {isLoading ? (
                            <CircularProgress
                              size="0.3rem"
                              sx={{ color: "#DC0019" }}
                            />
                          ) : (
                            `[${merchantData?.merchants?.ninVerfiedCount || 0}]`
                          )}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                        <p className="text-[#828282] font-normal text-[14px]">
                          Not Verified
                          {isLoading ? (
                            <CircularProgress
                              size="0.3rem"
                              sx={{ color: "#DC0019" }}
                            />
                          ) : (
                            `[${merchantData?.merchants?.unverifiedCount || 0}]`
                          )}
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
                          Inward Transfer
                          {isLoading ? (
                            <CircularProgress
                              size="0.3rem"
                              sx={{ color: "#DC0019" }}
                            />
                          ) : (
                            `[${
                              merchantData?.transactions?.totalInwardCount || 0
                            }]`
                          )}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-[24px] h-[8px] bg-[#E52929]"></div>

                        <p className="text-[#828282] font-normal text-[14px]">
                          Outward Transfer
                          {isLoading ? (
                            <CircularProgress
                              size="0.3rem"
                              sx={{ color: "#DC0019" }}
                            />
                          ) : (
                            `[${
                              merchantData?.transactions?.totalOutwardsCount ||
                              0
                            }]`
                          )}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                        <p className="text-[#828282] font-normal text-[14px]">
                          Wallet to Wallet
                          {isLoading ? (
                            <CircularProgress
                              size="0.3rem"
                              sx={{ color: "#DC0019" }}
                            />
                          ) : (
                            `[${
                              merchantData?.transactions?.totalWalletCount || 0
                            }]`
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                        <p className="text-[#828282] font-normal text-[14px]">
                          Mycliq
                          {isLoading ? (
                            <CircularProgress
                              size="0.3rem"
                              sx={{ color: "#DC0019" }}
                            />
                          ) : (
                            `[${
                              merchantData?.transactions?.totalCliqPayCount || 0
                            }]`
                          )}
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

export default GMerchants;
