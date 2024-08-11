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
import { formatToIsoDateStr } from "../utils/formatIsoDateString";

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
import { useSelector } from "react-redux";  


import { fillCustomersData } from "../utils/store/merchantSlice";
import wallet from "../assets/images/generalMerchants/wallet.svg";
import percent from "../assets/images/generalMerchants/percent.svg";
import CustomerProfile from "../components/CustomerProfile";
import AllCustomers from "./customers/AllCustomers";
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

  const { selectedDates } = useSelector((state) => state);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [showCustomerProfile, setShowCustomerProfile] = useState(false);
  const [profileAcive, setProfileActive] = useState(false);
  const [customerData, setCustomerData] = useState([]);
  const [customerDataById, setCustomerDataById] = useState([]);
  const startDate = formatToIsoDateStr(selectedDates?.startDate)
  const endDate = formatToIsoDateStr(selectedDates?.endDate)
  const [ id  , setId] = useState("")

  const {
    data: customers,
    error,
    isLoading,
  } = useQuery({
     queryKey: ["customers", startDate, endDate],
    queryFn: async () => {
      try {
        const response = await AuthAxios.get(`/admin/analytics/user`, {
          params: {
            startDate: startDate,
            endDate:endDate,
          },
        });
        console.log(response);
        return response?.data?.data;
      } catch (error) {
        throw new Error("Failed to fetch customer data");
      }
    },
    onSuccess: (data) => {},
    staleTime: 5000, // Cache data for 5 seconds
  });

  const handleShowCustomerProfile = () => setShowCustomerProfile(true);
  const handleCloseShowCustomerProfile = () => setShowCustomerProfile(false);
  const handleOpenCustomerProfile = (id) => {
    console.log(id);
    setId(id);
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
                    minHeight: "2.7rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  General Inflow
                </Typography>
              </Box>

              <Box className="flex flex-col items-start gap-1 w-full">
                <Box className="flex flex-col gap-1 items-start">
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                            {isLoading ? 
                <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                :
                <FormattedPrice amount={customers?.transactions?.totalInwardsSum || 0} />

                }
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
                      fontWeight: "500",
                      fontSize: "14px",
                      color: "#4F4F4F",
                      minHeight: "2.7rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    General Outflow
                  </Typography>
                </Box>
              </Box>

              <Box className="flex flex-col items-start gap-1 w-full">
                <Box className="flex flex-col gap-2 items-start">
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                          {isLoading ? 
                <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                :
                <FormattedPrice amount={customers?.transactions?.totalOutwardsSum ||  0} />

                }
                    

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
                    fontWeight: "500",
                    fontSize: "14px",
                    color: "#4F4F4F",
                  }}
                >
                  General Wallet Balance
                </Typography>
              </Box>

              <Box className="flex flex-col items-start gap-1 w-full">
                <Box className="flex flex-col gap-2 items-start">
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    
                    {isLoading ? 
                <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                :
                <FormattedPrice amount={customers?.transactions?.totalWalletCount  || 0} />

                }
                    
            
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
                <Box className="flex flex-col gap-2 items-start">
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >

{isLoading ? 
                <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                :
                <FormattedPrice amount={customers?.commissions?.totalInwardsSum || 0} />

                }
                    
              
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
                <Box className="flex flex-col gap-2 items-start">
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >

{isLoading ? 
                <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                :
            customers?.users?.totalUserCount  || 0

                }    

                  </Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </>
      ) : (
        <>
      
        </>
      )}

      {/*  */}

      <Box className="w-full mt-7">
        {!showCustomerProfile ? (
          <Grid container spacing={3}>
            <Grid item xs={8}>
           <AllCustomers handleOpenCustomerProfile={handleOpenCustomerProfile} />
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
                          General Active Customers
                          {isLoading ? 
                <CircularProgress size="0.3rem" sx={{ color: "#DC0019" }} />
                :
                `[${customers?.users?.activeUserCount || 0}]`
                }
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
                          General Inactive Customers
                          {isLoading ? 
                <CircularProgress size="0.3rem" sx={{ color: "#DC0019" }} />
                :
                `[${customers?.users?.inactiveUserCount || 0}]`
                }
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
                          General Suspended Customers 
                          {isLoading ? 
                <CircularProgress size="0.3rem" sx={{ color: "#DC0019" }} />
                :
                `[${customers?.users?.suspendedUserCount || 0}]`
                }
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
                          General Closed Customers 

                          {isLoading ? 
                <CircularProgress size="0.3rem" sx={{ color: "#DC0019" }} />
                :
                `[${customers?.users?.disabledUserCount || 0}]`
                }
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
                        BVN Verified 
                        {isLoading ? 
                <CircularProgress size="0.3rem" sx={{ color: "#DC0019" }} />
                :
                `[${customers?.users?.bvnVerifiedCount || 0}]`
                }
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-[24px] h-[8px] bg-[#E52929]"></div>

                      <p className="text-[#828282] font-normal text-[12px]">
                        NIN Verified 
                        {isLoading ? 
                <CircularProgress size="0.3rem" sx={{ color: "#DC0019" }} />
                :
                `[${customers?.users?.ninVerifiedCount || 0}]`
                }
                   
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                      <p className="text-[#828282] font-normal text-[12px]">
                        Not Verified 

                        {isLoading ? 
                <CircularProgress size="0.3rem" sx={{ color: "#DC0019" }} />
                :
                `[${customers?.users?.unverifiedCount || 0}]`
                }
                   
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
                        Inward Transfer 
                        {isLoading ? 
                <CircularProgress size="0.3rem" sx={{ color: "#DC0019" }} />
                :
                `[${customers?.transactions?.totalInwardsCount || 0}]`
                }
                   
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-[24px] h-[8px] bg-[#E52929]"></div>

                      <p className="text-[#828282] font-normal text-[12px]">
                        Outward Transfer 
                        {isLoading ? 
                <CircularProgress size="0.3rem" sx={{ color: "#DC0019" }} />
                :
                `[${customers?.transactions?.totalOutwardsCount || 0}]`
                }
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                      <p className="text-[#828282] font-normal text-[12px]">
                        Wallet to Wallet 
                        {isLoading ? 
                <CircularProgress size="0.3rem" sx={{ color: "#DC0019" }} />
                :
                `[${customers?.transactions?.totalWalletCount || 0}]`
                }
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                      <p className="text-[#828282] font-normal text-[12px]">
                        Mycliq 
                        {isLoading ? 
                <CircularProgress size="0.3rem" sx={{ color: "#DC0019" }} />
                :
                `[${customers?.transactions?.totalCliqPayCount || 0}]`
                }
                      </p>
                    </div>
                  </div>
                </div>
              </Item>
            </Grid>
          </Grid>
        ) : (
          <CustomerProfile
             id={id}
            showCustomerProfile={showCustomerProfile}
            handleCloseShowCustomerProfile={handleCloseShowCustomerProfile}
          />
        )}
      </Box>
    </Box>
  );
};

export default Customer;
