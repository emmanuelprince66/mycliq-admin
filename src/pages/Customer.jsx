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
import avatar from "../assets/avatar.svg";
import divideNew from "../assets/images/admin/divide-new.svg";
import profileNew from "../assets/images/admin/profile-new.svg";

import search from "../../src/assets/search.svg";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import download from "../assets/images/download.svg";
import { useMutation, useQuery } from "@tanstack/react-query";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import FormattedPrice from "../components/FormattedPrice";
import fdown from "../assets/fdown.svg";
import ArrowRight from "../assets/images/arrow-right.svg";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { AuthAxios } from "../helpers/axiosInstance";
import arrowBack from "../assets/images/arrow-back.svg";
import InputAdornment from "@mui/material/InputAdornment";
import side from "../assets/images/admin/side.svg";
import upcolor from "../assets/images/admin/upcolor.svg";
import SelectDate from "../components/SelectDate";
import DoughnutChart from "../components/DoughnutChart";
import { styled } from "@mui/material/styles";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useDispatch } from "react-redux";
import { fillCustomersData } from "../utils/store/merchantSlice";
import wallet from "../assets/images/generalMerchants/wallet.svg";
import percent from "../assets/images/generalMerchants/percent.svg";
import CustomerProfile from "../components/CustomerProfile";
const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  border: "1px solid #E0E0E0",
  color: theme.palette.text.secondary,
  borderRadius: "8px",
  maxHeight: "100%",
}));
const Customer = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [showCustomerProfile, setShowCustomerProfile] = useState(false);
  const [profileAcive, setProfileActive] = useState(false);
  const [customerData, setCustomerData] = useState([]);
  const [customerDataById, setCustomerDataById] = useState([]);
  const {
    data: customers,
    error,
    isLoading,
  } = useQuery({
    queryKey: "customers",
    queryFn: async () => {
      try {
        const response = await AuthAxios.get("/admin/user");
        return response?.data?.data?.records;
      } catch (error) {
        throw new Error("Failed to fetch customer data");
      }
    },
    onSuccess: (data) => {
      console.log(data);
    },
    staleTime: 5000, // Cache data for 5 seconds
  });

  const handleShowCustomerProfile = () => setShowCustomerProfile(true);
  const handleCloseShowCustomerProfile = () => setShowCustomerProfile(false);
  const handleOpenCustomerProfile = (id) => {
    console.log(id);
    setCustomerDataById(customers[id]);
    setProfileActive(true);
    handleShowCustomerProfile();
  };

  const closeUp = () => {
    setShowCustomerProfile(false);
    setProfileActive(false);
  };
  return (
    <Box
      sx={{
        width: "100%",
        padding: "0.5rem",
        backgroundColor: "#fffcfc",
      }}
    >
      <Box
        sx={{
          display: "flex",
          marginLeft: "auto",
          justifyContent: profileAcive ? "space-between" : "flex-end",
          width: "100%",
          gap: "1em",
          alignItems: "center",
          mb: "1rem",
        }}
      >
        {profileAcive && (
          <Box className="flex items-center gap-1">
            <span
              className="flex gap-1 items-center cursor-pointer"
              onClick={closeUp}
            >
              <ArrowBackRoundedIcon sx={{ color: "#F78105" }} />
              <p className="font-[600] text-[#F78105] text-[14px]">Go Back</p>
            </span>
            <div className="w-[1px] h-5 bg-[#F78105] mx-1"></div>
            <span className="flex text-[14px] gap-1 items-center text-slate-400">
              <PeopleAltOutlinedIcon className="text-slate-400" />
              Customers
            </span>
            <ChevronRightRoundedIcon className="text-[#F78105]" />

            <span className="flex gap-1 items-center text-[#F78105]">
              <PermIdentityOutlinedIcon />
              {!Array.isArray(customerDataById) &&
                `${customerDataById?.lastName} ${customerDataById?.firstName}`}
            </span>
          </Box>
        )}

        <Box>
          <SelectDate />
        </Box>
      </Box>
      {!profileAcive ? (
        <>
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
                // width: "356px",
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
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#4F4F4F",
                  }}
                >
                  General Inflow
                </Typography>
              </Box>

              <Box className="flex flex-col items-start gap-1 w-full">
                <Box className="flex flex-col gap-1 items-start">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#4F4F4F",
                    }}
                  >
                    All-Time:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    <FormattedPrice amount={3000000} />
                  </Typography>
                </Box>
                <Box className="flex flex-col gap-1 items-start">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#4F4F4F",
                    }}
                  >
                    By-Filter:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    <FormattedPrice amount={3000000} />
                  </Typography>
                </Box>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                // width: "356px",
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
                      fomtWeight: "500",
                      fontSize: "14px",
                      color: "#4F4F4F",
                    }}
                  >
                    General Outflow
                  </Typography>
                </Box>
              </Box>

              <Box className="flex flex-col items-start gap-1 w-full">
                <Box className="flex flex-col gap-1 items-start">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#4F4F4F",
                    }}
                  >
                    All-Time:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    <FormattedPrice amount={3000000} />
                  </Typography>
                </Box>
                <Box className="flex flex-col gap-2 items-start">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#4F4F4F",
                    }}
                  >
                    By-Filter:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    <FormattedPrice amount={3000000} />
                  </Typography>
                </Box>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                // width: "356px",
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
                  <img src={wallet} className="fd" alt="f-down" />
                </Box>
                <Typography
                  sx={{
                    fomtWeight: "500",
                    fontSize: "14px",
                    color: "#4F4F4F",
                  }}
                >
                  General Wallet Balance
                </Typography>
              </Box>

              <Box className="flex flex-col items-start gap-1 w-full">
                <Box className="flex flex-col gap-1 items-start">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#4F4F4F",
                    }}
                  >
                    All-Time:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    <FormattedPrice amount={3000000} />
                  </Typography>
                </Box>
                <Box className="flex flex-col gap-2 items-start">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#4F4F4F",
                    }}
                  >
                    By-Filter:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    <FormattedPrice amount={3000000} />
                  </Typography>
                </Box>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                // width: "356px",
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
                  {" "}
                  General Commission
                </Typography>
              </Box>
              <Box className="flex flex-col items-start gap-1 w-full">
                <Box className="flex flex-col gap-1 items-start">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#4F4F4F",
                    }}
                  >
                    All-Time:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    <FormattedPrice amount={3000000} />
                  </Typography>
                </Box>
                <Box className="flex flex-col gap-2 items-start">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#4F4F4F",
                    }}
                  >
                    By-Filter:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    <FormattedPrice amount={3000000} />
                  </Typography>
                </Box>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                // width: "356px",
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
                  <img src={profileNew} className="fd" alt="f-down" />
                </Box>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#4F4F4F",
                  }}
                >
                  Total Customers Onboarded{" "}
                </Typography>
              </Box>
              <Box className="flex flex-col items-start gap-1 w-full">
                <Box className="flex flex-col gap-1 items-start">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#4F4F4F",
                    }}
                  >
                    All-Time:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    <FormattedPrice amount={3000000} />
                  </Typography>
                </Box>
                <Box className="flex flex-col gap-2 items-start">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#4F4F4F",
                    }}
                  >
                    By-Filter:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    <FormattedPrice amount={3000000} />
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </>
      ) : (
        <>
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
                // width: "356px",
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
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "#4F4F4F",
                  }}
                >
                  Customer Inflow
                </Typography>
              </Box>

              <Box className="flex flex-col items-start gap-1 w-full">
                <Box className="flex flex-col gap-1 items-start">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#4F4F4F",
                    }}
                  >
                    All-Time:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    <FormattedPrice amount={3000000} />
                  </Typography>
                </Box>
                <Box className="flex flex-col gap-2 items-start">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#4F4F4F",
                    }}
                  >
                    By-Filter:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    <FormattedPrice amount={3000000} />
                  </Typography>
                </Box>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                // width: "356px",
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
                      fomtWeight: "500",
                      fontSize: "14px",
                      color: "#4F4F4F",
                    }}
                  >
                    Customer Outflow
                  </Typography>
                </Box>
              </Box>

              <Box className="flex flex-col items-start gap-1 w-full">
                <Box className="flex flex-col gap-1 items-start">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#4F4F4F",
                    }}
                  >
                    All-Time:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    <FormattedPrice amount={3000000} />
                  </Typography>
                </Box>
                <Box className="flex flex-col gap-2 items-start">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#4F4F4F",
                    }}
                  >
                    By-Filter:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    <FormattedPrice amount={3000000} />
                  </Typography>
                </Box>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                // width: "356px",
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
                  <img src={wallet} className="fd" alt="f-down" />
                </Box>
                <Typography
                  sx={{
                    fomtWeight: "500",
                    fontSize: "14px",
                    color: "#4F4F4F",
                  }}
                >
                  Customer Wallet Balance
                </Typography>
              </Box>

              <Box className="flex flex-col items-start gap-1 w-full">
                <Box className="flex flex-col gap-1 items-start">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#4F4F4F",
                    }}
                  >
                    All-Time:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    <FormattedPrice amount={3000000} />
                  </Typography>
                </Box>
                <Box className="flex flex-col gap-2 items-start">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#4F4F4F",
                    }}
                  >
                    By-Filter:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    <FormattedPrice amount={3000000} />
                  </Typography>
                </Box>
              </Box>
            </Card>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                // width: "356px",
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
                  {" "}
                  Commission
                </Typography>
              </Box>
              <Box className="flex flex-col items-start gap-1 w-full">
                <Box className="flex flex-col gap-1 items-start">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#4F4F4F",
                    }}
                  >
                    All-Time:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    <FormattedPrice amount={3000000} />
                  </Typography>
                </Box>
                <Box className="flex flex-col gap-2 items-start">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#4F4F4F",
                    }}
                  >
                    By-Filter:
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    <FormattedPrice amount={3000000} />
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </>
      )}

      {/*  */}

      <Box className="w-full ">
        {!showCustomerProfile ? (
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Box className="w-full bg-white rounded-md p-2 flex-col border-grey-400 border-[1px] items-start justify-center">
                <Box className="flex w-full justify-between items-center">
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "500",
                      fontSize: "20px",
                      display: "flex",
                      gap: "6px",
                      alignItems: "center",
                    }}
                  >
                    All Customers
                    <span
                      className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
                    >
                      {!isLoading && customers?.length > 0 ? (
                        customers?.length
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
                      {!isLoading && customers?.length > 0 ? (
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
                      {!isLoading && customers?.length > 0 ? (
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

                {/* customers  */}
                <Box className="max-h-[87vh] overflow-y-auto">
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 100, padding: "8px" }}>
                      <TableBody>
                        {!customers || customers?.length === 0 || isLoading ? (
                          <CircularProgress
                            size="4.2rem"
                            sx={{
                              color: "#f78105",
                              marginLeft: "auto",
                              padding: "1em",
                            }}
                          />
                        ) : customers &&
                          Array.isArray(customers) &&
                          customers?.length > 0 ? (
                          customers?.map((item, i) => (
                            <TableRow
                              key={item.id}
                              className="cursor-pointer"
                              onClick={() => handleOpenCustomerProfile(i)}
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
                                      fomtWeight: "400",
                                      fontSize: "16px",
                                      color: "#828282",
                                    }}
                                  >
                                    {`${item?.lastName}  ${item?.firstName}`}
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
                    count={customers?.totalCount || 0}
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
                      fontSize: "20px",
                      color: "#1E1E1E",
                      py: "10px",
                    }}
                  >
                    General Customer & Activity Status
                  </Typography>
                </Box>
                <div className="w-full  p-3 items-start">
                  <div className="flex items-start flex-col gap-2 w-full">
                    <div className="flex items-center gap-2 w-full">
                      <div className="w-[24px] h-[8px] bg-[#27AE60]"></div>

                      <div className="flex items-center justify-between w-full">
                        <p className="text-[#828282] font-normal text-[12px]">
                          General Active Customers [234]
                        </p>
                        <span className="text-[#F78105] cursor-pointer text-[12px] hover:text-[#333333]">
                          View More
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full">
                      <div className="w-[24px] h-[8px] bg-[#E52929]"></div>

                      <div className="flex items-center justify-between w-full">
                        <p className="text-[#828282] font-normal text-[12px]">
                          General Inactive Customers [234]
                        </p>
                        <span className="text-[#F78105] cursor-pointer text-[12px] hover:text-[#333333]">
                          View More
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full">
                      <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                      <div className="flex items-center justify-between w-full">
                        <p className="text-[#828282] font-normal text-[12px]">
                          General Suspended Customers [234]
                        </p>
                        <span className="text-[#F78105] cursor-pointer text-[12px] hover:text-[#333333]">
                          View More
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                      <div className="w-[24px] h-[8px] bg-[#1367D8]"></div>

                      <div className="flex items-center justify-between w-full">
                        <p className="text-[#828282] font-normal text-[12px]">
                          General Reactivated Customers [234]
                        </p>
                        <span className="text-[#F78105] cursor-pointer text-[12px] hover:text-[#333333]">
                          View More
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                      <div className="w-[24px] h-[8px] bg-black"></div>

                      <div className="flex items-center justify-between w-full">
                        <p className="text-[#828282] font-normal text-[12px]">
                          General Closed Customers [234]
                        </p>
                        <span className="text-[#F78105] cursor-pointer text-[12px] hover:text-[#333333]">
                          View More
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Item>
              <Item sx={{ mt: "10px" }}>
                <Box sx={{ alignItems: "start", pt: "10px", px: "10px " }}>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "20px",
                      color: "#1E1E1E",
                      py: "10px",
                    }}
                  >
                    General Customer Verification Status
                  </Typography>
                </Box>
                <div className="w-full flex gap-5 p-3 items-start">
                  <div className="flex items-start flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-[24px] h-[8px] bg-[#27AE60]"></div>

                      <p className="text-[#828282] font-normal text-[12px]">
                        BVN Verified [234]
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-[24px] h-[8px] bg-[#E52929]"></div>

                      <p className="text-[#828282] font-normal text-[12px]">
                        NIN Verified [234]
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                      <p className="text-[#828282] font-normal text-[12px]">
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
                      fontSize: "20px",
                      color: "#1e1e1e",
                      py: "10px",
                    }}
                  >
                    General Customer Transaction Insight
                  </Typography>
                </Box>
                <div className="w-full flex gap-5 p-3 items-start">
                  <div className="flex items-start flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-[24px] h-[8px] bg-[#27AE60]"></div>

                      <p className="text-[#828282] font-normal text-[12px]">
                        Inward Transfer [234]
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-[24px] h-[8px] bg-[#E52929]"></div>

                      <p className="text-[#828282] font-normal text-[12px]">
                        Outward Transfer [234]
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                      <p className="text-[#828282] font-normal text-[12px]">
                        Wallet to Wallet [234]
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                      <p className="text-[#828282] font-normal text-[12px]">
                        Mycliq [234]
                      </p>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
          </Grid>
        ) : (
          <CustomerProfile
            customerDataById={customerDataById || []}
            showCustomerProfile={showCustomerProfile}
            handleCloseShowCustomerProfile={handleCloseShowCustomerProfile}
          />
        )}
      </Box>
    </Box>
  );
};

export default Customer;
