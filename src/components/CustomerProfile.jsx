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
  CircularProgress,
  Paper,
  Grid,
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
import { useQuery } from "@tanstack/react-query";
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
import compliance from "../assets/images/generalMerchants/compliance.svg";
import FormattedPrice from "./FormattedPrice";
import fdown from "../assets/fdown.svg";
import upcolor from "../assets/images/admin/upcolor.svg";
import wallet from "../assets/images/generalMerchants/wallet.svg";
import percent from "../assets/images/generalMerchants/percent.svg";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import CustomPagination from "./CustomPagination";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthAxios } from "../helpers/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import modDate from "../utils/moddate";
import { AirtimeModal } from "../pages/trx/AirtimeModal";

const CustomerProfile = ({
  id,
  showCustomerProfile,
  handleCloseShowCustomerProfile,
}) => {
  const [apiId, setApiId] = useState("");
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [index, setIndex] = useState(0);
  const [openAirtimeModal, setOpenAirtimeModal] = useState(false);
  const handleCloseAirtimeModal = () => setOpenAirtimeModal(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const handleCloseWithdrawalDetails = () => setWithdrawalDetails(false);
  const [withdrawalDetails, setWithdrawalDetails] = useState(false);
  const [openSecuModal, setOpenSecuModal] = useState(false);
  const handleCloseProfileDetails = () => setShowProfileDetails(false);
  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [isSwitchChecked, setIsSwitchChecked] = useState(null);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    width: "745px",
    bgcolor: "background.paper",
    p: 3,
  };
  console.log("switch", isSwitchChecked);

  const handleCloseSecuModal = () => setOpenSecuModal(false);

  const { data: profileData, isLoading: profileLoading } = useQuery({
    queryKey: ["profileData"],
    queryFn: async () => {
      try {
        const response = await AuthAxios.get(`/admin/user/${apiId}`);
        console.log(response);
        return response?.data?.data;
      } catch (error) {
        if (error?.response?.data?.code === 401) {
          navigate("/");
        }
        throw new Error("Failed to fetch customer data");
      }
    },
    onSuccess: (data) => {},
    staleTime: 5000, // Cache data for 5 seconds
  });

  console.log("pixes", profileData);

  const notify = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  // update status

  const handleOpenSecuModal = () => setOpenSecuModal(true);

  const changeSecurityQuestion = async ({ userId }) => {
    try {
      const response = await AuthAxios.put(
        `/admin/user/${userId}/security-question`,
        {
          userId,
        }
      );

      if (response.status !== 201) {
        throw new Error(
          response.data.message || "Failed to Change Security Question"
        );
      }

      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Network Error");
    }
  };

  const changeSecurityQuestionMutation = useMutation({
    mutationFn: changeSecurityQuestion,
    onSuccess: (data) => {
      // queryClient.invalidateQueries(['userStatus', userId]);
      setBtnLoading(false);
      setTimeout(() => {
        notify(data?.message);
      }, 500);
    },
    onError: (error) => {
      console.error("Error updating user status:", error);
      setBtnLoading(false);

      // Handle the error (e.g., show a notification or set an error state)
    },
  });
  const updateUserStatus = async ({ userId, status }) => {
    console.log("status", status);
    try {
      const response = await AuthAxios.put(`/admin/user/${userId}/status`, {
        userId,
        status,
      });

      if (response.status !== 201) {
        throw new Error(response.data.message || "Failed to update status");
      }

      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Network Error");
    }
  };

  const queryClient = useQueryClient();

  const statusMutation = useMutation({
    mutationFn: updateUserStatus,
    onSuccess: (data) => {
      // queryClient.invalidateQueries(['userStatus', userId]);
      console.log("test", data);
      setTimeout(() => {
        notify(data?.message);
      }, 500);
    },
    onError: (error) => {
      console.error("Error updating user status:", error);
      // Handle the error (e.g., show a notification or set an error state)
    },
  });

  const handleSwitchChange = (event) => {
    setIsSwitchChecked(event.target.checked);
    const status = event.target.checked;

    // console.log(status)
    // console.log(payload)

    console.log(status);
    const payload = {
      userId: apiId,
      status: !status ? "reactivated" : "disabled",
    };
    statusMutation.mutate(payload);
  };

  // end update status

  const {
    data: customerDataById,
    error: isError,
    isLoading: dataLoading,
  } = useQuery({
    queryKey: ["customerDataById"],
    queryFn: async () => {
      try {
        const response = await AuthAxios.get(
          `/admin/user/${apiId}/de-profile?analytics=include`
        );
        console.log(response);
        return response?.data?.data;
      } catch (error) {
        throw new Error("Failed to fetch customer data");
      }
    },
    onSuccess: (data) => {},
    staleTime: 5000, // Cache data for 5 seconds
  });

  const handleChangeSecurityQ = () => {
    setBtnLoading(true);

    const payload = {
      userId: apiId,
    };

    changeSecurityQuestionMutation.mutate(payload);
  };

  const fetchCustomerTrx = async ({ queryKey }) => {
    const [_key, { page, limit, entityId }] = queryKey;
    try {
      const response = await AuthAxios.get(
        `/admin/trx/all?page=${page}&limit=${limit}&entityId=${entityId}`
      );
      return response?.data?.data;
    } catch (error) {
      throw new Error("Failed to fetch customer data");
    }
  };

  console.log("sweet", customerDataById);

  const {
    data: customerTrx,
    error,
    isLoading,
  } = useQuery({
    queryKey: [
      "fetchCustomerTrx",
      { page: currentPage, limit: rowsPerPage, entityId: apiId },
    ],
    queryFn: fetchCustomerTrx,
    keepPreviousData: true,
    staleTime: 5000, // Cache data for 5 seconds
  });
  useEffect(() => {
    setApiId(id);
  }, [id]);

  console.log("customerTrx", customerTrx);

  const totalPages = customerTrx?.totalPages ?? 0;

  if (!showCustomerProfile) {
    return null;
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  async function viewDetails(i, type) {
    setIndex(i);

    switch (type) {
      case "airtime":
        setOpenAirtimeModal(true);
        break;
      case "bank_transfer":
        setWithdrawalDetails(true);
      default:
        setOpenAirtimeModal(true);
        break;
    }
    // setOpen1(true);
  }

  useEffect(() => {
    setIsSwitchChecked(customerDataById?.userProfile?.isDisabled);
  }, customerDataById);

  console.log(isSwitchChecked);
  return (
    <Box className="w-full ">
      <Grid container spacing={2}>
        <Grid xs={12}>
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
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    {dataLoading ? (
                      <CircularProgress
                        size="0.6rem"
                        sx={{ color: "#DC0019" }}
                      />
                    ) : (
                      <FormattedPrice
                        amount={
                          customerDataById?.trxAnalytics?.totalInwardsSum || 0
                        }
                      />
                    )}
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
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    {dataLoading ? (
                      <CircularProgress
                        size="0.6rem"
                        sx={{ color: "#DC0019" }}
                      />
                    ) : (
                      <FormattedPrice
                        amount={
                          customerDataById?.trxAnalytics?.filterInwardsSum || 0
                        }
                      />
                    )}
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
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    {dataLoading ? (
                      <CircularProgress
                        size="0.6rem"
                        sx={{ color: "#DC0019" }}
                      />
                    ) : (
                      <FormattedPrice
                        amount={
                          customerDataById?.trxAnalytics?.totalOutwardsSum || 0
                        }
                      />
                    )}
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
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    {dataLoading ? (
                      <CircularProgress
                        size="0.6rem"
                        sx={{ color: "#DC0019" }}
                      />
                    ) : (
                      <FormattedPrice
                        amount={
                          customerDataById?.trxAnalytics?.filterOutwardsSum || 0
                        }
                      />
                    )}
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
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    {dataLoading ? (
                      <CircularProgress
                        size="0.6rem"
                        sx={{ color: "#DC0019" }}
                      />
                    ) : (
                      <FormattedPrice
                        amount={
                          customerDataById?.bankProfile?.currentBalance || 0
                        }
                      />
                    )}
                  </Typography>
                </Box>
                {/* <Box className="flex flex-col gap-2 items-start">
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
                </Box> */}
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
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    {dataLoading ? (
                      <CircularProgress
                        size="0.6rem"
                        sx={{ color: "#DC0019" }}
                      />
                    ) : (
                      <FormattedPrice
                        amount={
                          customerDataById?.commTrxAnalytics?.totalInwardsSum ||
                          0
                        }
                      />
                    )}
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
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#000",
                    }}
                  >
                    {dataLoading ? (
                      <CircularProgress
                        size="0.6rem"
                        sx={{ color: "#DC0019" }}
                      />
                    ) : (
                      <FormattedPrice
                        amount={
                          customerDataById?.commTrxAnalytics
                            ?.filterInwardsSum || 0
                        }
                      />
                    )}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box className="w-full bg-white rounded-md p-4 flex-col border-grey-400 border-[1px]  overflow-y-scroll items-start justify-center">
            <div className="flex w-full items-center justify-between ">
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
              <div className="flex gap-2 items-center cursor-pointer">
                <div className="flex flex-col items-start gap-3">
                  <div className="flex gap-3 items-center">
                    <img src={compliance} alt="c-p" />
                    <p className="text-[14px] font-[500] text-[#F78105]">
                      Compliance
                    </p>
                  </div>
                </div>
              </div>{" "}
            </div>

            <Box className="w-full flex items-start flex-col   gap-[2rem] my-3 border-b border-grey-400  pb-1">
              <Box className="ml-3">
                <img
                  src={bigavatar}
                  className="object-contain w-[120px]  h-[120px]"
                  alt="b-a"
                />
              </Box>
              <Box className="flex flex-col items-start w-full justify-center">
                <Typography
                  sx={{
                    color: "grey",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  BASIC INFORMATION FOR REGISTRATION
                </Typography>
                <Box className="flex items-center mt-1 mb-1">
                  <Box className="flex items-center gap-1 w-[200px] ">
                    <PersonOutlineRoundedIcon
                      sx={{ color: "grey", fontSize: "15px" }}
                    />
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: "300",
                        fontSize: "12px",
                      }}
                    >
                      Name :
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "500",
                      fontSize: "13px",
                    }}
                  >
                    {dataLoading ? (
                      <CircularProgress
                        size="0.6rem"
                        sx={{ color: "#DC0019" }}
                      />
                    ) : (
                      customerDataById?.userProfile?.lastName || ""
                    )}{" "}
                    {customerDataById?.userProfile?.firstName || ""}
                  </Typography>
                </Box>
                <Box className="flex items-center mt-1 mb-1 justify-between ">
                  <Box className="flex items-center gap-1 w-[200px] ">
                    <TransgenderRoundedIcon
                      sx={{ color: "grey", fontSize: "15px" }}
                    />
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: "300",
                        fontSize: "12px",
                      }}
                    >
                      Gender :
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "500",
                      fontSize: "13px",
                    }}
                  >
                    {dataLoading ? (
                      <CircularProgress
                        size="0.6rem"
                        sx={{ color: "#DC0019" }}
                      />
                    ) : (
                      customerDataById?.userProfile?.gender || "null"
                    )}
                  </Typography>
                </Box>
                <Box className="flex  items-center mt-1 mb-1 justify-between ">
                  <Box className="flex items-center gap-1 w-[200px] ">
                    <EmailOutlinedIcon
                      sx={{ color: "grey", fontSize: "15px" }}
                    />
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: "300",
                        fontSize: "12px",
                      }}
                    >
                      Email :
                    </Typography>
                  </Box>

                  <div className="flex gap-2 items-center">
                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "500",
                        fontSize: "13px",
                      }}
                    >
                      {dataLoading ? (
                        <CircularProgress
                          size="0.6rem"
                          sx={{ color: "#DC0019" }}
                        />
                      ) : (
                        customerDataById?.userProfile?.email || ""
                      )}
                    </Typography>

                    {dataLoading ? (
                      <CircularProgress
                        size="0.6rem"
                        sx={{ color: "#DC0019" }}
                      />
                    ) : customerDataById?.userProfile?.emailVerified ? (
                      ""
                    ) : (
                      <div className="bg-[#FFF0F0]  px-2 flex items-center gap-1 rounded-md">
                        <ReportProblemOutlinedIcon
                          sx={{ fontSize: "15px" }}
                          className="text-[#E52929] font-[500]"
                        />
                        <p className="text-[#E52929] text-[10px] font-[500]">
                          Unverified
                        </p>
                      </div>
                    )}
                  </div>
                </Box>
                <Box className="flex  items-center mt-1 mb-1 justify-between ">
                  <Box className="flex items-center gap-1 w-[200px]">
                    <LocalPhoneOutlinedIcon
                      sx={{ color: "grey", fontSize: "15px" }}
                    />
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: "300",
                        fontSize: "12px",
                      }}
                    >
                      Phone Num :
                    </Typography>
                  </Box>

                  <div className="flex gap-2 items-center">
                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "500",
                        fontSize: "13px",
                      }}
                    >
                      {dataLoading ? (
                        <CircularProgress
                          size="0.6rem"
                          sx={{ color: "#DC0019" }}
                        />
                      ) : (
                        customerDataById?.userProfile?.phoneNumber || "null"
                      )}
                    </Typography>

                    {customerDataById?.userProfile?.ninVerified ? (
                      <div className="bg-[#EBFFF3]  px-2 flex items-center gap-1 rounded-md">
                        <VerifiedOutlinedIcon
                          sx={{ fontSize: "15px" }}
                          className="text-[#1E854A] text-[10px] font-[500]"
                        />
                        <p className="text-[#1E854A] text-[10px] font-[500]">
                          Verified
                        </p>
                      </div>
                    ) : (
                      <div className="bg-[#FFF0F0]  px-2 flex items-center gap-1 rounded-md">
                        <ReportProblemOutlinedIcon
                          sx={{ fontSize: "15px" }}
                          className="text-[#E52929] font-[500]"
                        />
                        <p className="text-[#E52929] text-[10px] font-[500]">
                          Unverified
                        </p>
                      </div>
                    )}
                  </div>
                </Box>
                <Box className="flex  items-center mt-1 mb-1 justify-between ">
                  <Box className="flex items-center gap-1 w-[200px]">
                    <FmdGoodRoundedIcon
                      sx={{ color: "grey", fontSize: "15px" }}
                    />
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: "300",
                        fontSize: "12px",
                      }}
                    >
                      Address :
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "500",
                      fontSize: "13px",
                    }}
                  >
                    {" "}
                    {dataLoading ? (
                      <CircularProgress
                        size="0.6rem"
                        sx={{ color: "#DC0019" }}
                      />
                    ) : (
                      customerDataById?.userProfile?.address || "null"
                    )}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="flex flex-col items-start w-full justify-center">
              <Typography
                sx={{
                  color: "grey",
                  fontWeight: "500",
                  fontSize: "13px",
                }}
              >
                BASIC INFORMATION FOR BVN
              </Typography>
              <Box className="flex items-center mt-1 mb-1">
                <Box className="flex items-center gap-1 w-[200px] ">
                  <PersonOutlineRoundedIcon
                    sx={{ color: "grey", fontSize: "15px" }}
                  />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "12px",
                    }}
                  >
                    Name :
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  {dataLoading ? (
                    <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                  ) : (
                    customerDataById?.bvnProfile?.firstName || ""
                  )}{" "}
                  {customerDataById?.bvnProfile?.lastName || ""}
                </Typography>
              </Box>
              <Box className="flex items-center mt-1 mb-1 justify-between ">
                <Box className="flex items-center gap-1 w-[200px] ">
                  <TransgenderRoundedIcon
                    sx={{ color: "grey", fontSize: "15px" }}
                  />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "12px",
                    }}
                  >
                    Gender :
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  {dataLoading ? (
                    <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                  ) : (
                    customerDataById?.bvnProfile?.gender || ""
                  )}
                </Typography>
              </Box>
              <Box className="flex  items-center mt-1 mb-1 justify-between ">
                <Box className="flex items-center gap-1 w-[200px] ">
                  <EmailOutlinedIcon sx={{ color: "grey", fontSize: "15px" }} />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "12px",
                    }}
                  >
                    Email :
                  </Typography>
                </Box>

                <div className="flex gap-2 items-center">
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "500",
                      fontSize: "13px",
                    }}
                  >
                    {dataLoading ? (
                      <CircularProgress
                        size="0.6rem"
                        sx={{ color: "#DC0019" }}
                      />
                    ) : (
                      customerDataById?.bvnProfile?.email || ""
                    )}
                  </Typography>

                  {/* <div className="bg-[#FFF0F0]  px-2 flex items-center gap-1 rounded-md">
                    <ReportProblemOutlinedIcon
                      sx={{ fontSize: "15px" }}
                      className="text-[#E52929] font-[500]"
                    />
                    <p className="text-[#E52929] text-[10px] font-[500]">
                      Unverified
                    </p>
                  </div> */}
                </div>
              </Box>
              <Box className="flex  items-center mt-1 mb-1 justify-between ">
                <Box className="flex items-center gap-1 w-[200px]">
                  <LocalPhoneOutlinedIcon
                    sx={{ color: "grey", fontSize: "15px" }}
                  />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "12px",
                    }}
                  >
                    Phone Num :
                  </Typography>
                </Box>

                <div className="flex gap-2 items-center">
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "500",
                      fontSize: "13px",
                    }}
                  >
                    {dataLoading ? (
                      <CircularProgress
                        size="0.6rem"
                        sx={{ color: "#DC0019" }}
                      />
                    ) : (
                      customerDataById?.bvnProfile?.phoneNumber || ""
                    )}
                  </Typography>

                  {/* <div className="bg-[#EBFFF3]  px-2 flex items-center gap-1 rounded-md">
                    <VerifiedOutlinedIcon
                      sx={{ fontSize: "15px" }}
                      className="text-[#1E854A] text-[10px] font-[500]"
                    />
                    <p className="text-[#1E854A] text-[10px] font-[500]">
                      Verified
                    </p>
                  </div> */}
                </div>
              </Box>
              <Box className="flex  items-center mt-1 mb-1 justify-between ">
                <Box className="flex items-center gap-1 w-[200px]">
                  <FmdGoodRoundedIcon
                    sx={{ color: "grey", fontSize: "15px" }}
                  />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "12px",
                    }}
                  >
                    Address :
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  {dataLoading ? (
                    <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                  ) : (
                    customerDataById?.bvnProfile?.address || ""
                  )}
                </Typography>
              </Box>
            </Box>
            <Box className="flex flex-col  items-start w-full justify-center py-2">
              <Typography
                sx={{
                  color: "grey",
                  fontWeight: "500",
                  fontSize: "13px",
                }}
              >
                BANK DETAILS
              </Typography>
              <Box className="flex items-center mt-1 mb-1 ">
                <Box className="flex items-center gap-1 w-[200px] ">
                  <CabinRoundedIcon sx={{ color: "grey", fontSize: "15px" }} />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "12px",
                    }}
                  >
                    Bank Name:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  {dataLoading ? (
                    <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                  ) : (
                    customerDataById?.bankProfile?.accountName || ""
                  )}
                </Typography>
              </Box>
              <Box className="flex items-center mt-1 mb-1 justify-between ">
                <Box className="flex items-center gap-1 w-[200px] ">
                  <PersonOutlineRoundedIcon
                    sx={{ color: "grey", fontSize: "15px" }}
                  />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "12px",
                    }}
                  >
                    Account Number:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  {dataLoading ? (
                    <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                  ) : (
                    customerDataById?.bankProfile?.accountNumber || ""
                  )}
                </Typography>
              </Box>
              <Box className="flex items-center mt-1 mb-1 ">
                <Box className="flex items-center gap-1 w-[200px] ">
                  <CabinRoundedIcon sx={{ color: "grey", fontSize: "15px" }} />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "12px",
                    }}
                  >
                    Bank Name:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  {dataLoading ? (
                    <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                  ) : (
                    customerDataById?.bankProfile?.bankName || ""
                  )}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Grid item xs={12}>
            <Box className="w-full mb-3 bg-white  p-2 flex-col border-grey-400  border-b-[1px] items-start justify-center">
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
                  <PersonOutlineRoundedIcon
                    sx={{ color: "grey", fontSize: "15px" }}
                  />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "12px",
                    }}
                  >
                    Account status:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "10px",
                    background: "#EBFFF3",
                    py: "2px",
                    px: "8px",
                    color: "#1E854A",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span className="w-[10px] h-[10px] rounded-full text-[13px0]  bg-green-600" />
                  Active
                </Typography>
              </Box>
              <Box className="flex  items-center mt-2 mb-1 ">
                <Box className="flex items-center gap-1 w-[150px] ">
                  <PersonOutlineRoundedIcon
                    sx={{ color: "grey", fontSize: "15px" }}
                  />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "12px",
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
                  <span className="font-bold ml-2 text-[13px]">
                    {dataLoading ? (
                      <CircularProgress
                        size="0.6rem"
                        sx={{ color: "#DC0019" }}
                      />
                    ) : (
                      customerDataById?.userProfile?.tier || ""
                    )}
                  </span>
                </Typography>
              </Box>
              <Box className="flex  items-center mt-2 mb-1 ">
                <Box className="flex items-center gap-1 w-[150px]">
                  <CalendarMonthRoundedIcon
                    sx={{ color: "grey", fontSize: "15px" }}
                  />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "12px",
                    }}
                  >
                    Date Registered:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  {dataLoading ? (
                    <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                  ) : (
                    modDate(customerDataById?.userProfile?.createdAt) || ""
                  )}
                </Typography>
              </Box>
              <Box className="flex  items-center mt-2 mb-1  ">
                <Box className="flex items-center gap-1 w-[150px]">
                  <AccessTimeRoundedIcon
                    sx={{ color: "grey", fontSize: "15px" }}
                  />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "12px",
                    }}
                  >
                    Last Seen:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  {dataLoading ? (
                    <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                  ) : (
                    modDate(customerDataById?.userProfile?.lastLogin) || ""
                  )}
                </Typography>
              </Box>

              <Box className="flex  items-center  mb-1 ">
                <Box className="flex items-center gap-1 w-[150px]">
                  <HttpsOutlinedIcon sx={{ color: "red", fontSize: "15px" }} />
                  <Typography
                    sx={{
                      color: "red",
                      fontWeight: "300",
                      fontSize: "12px",
                    }}
                  >
                    Disable Account:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  <Switch
                    checked={isSwitchChecked}
                    onChange={handleSwitchChange}
                    sx={{
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: "#fff",
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                        {
                          backgroundColor: "#DC0019",
                        },
                    }}
                    color="default"
                  />
                </Typography>
              </Box>

              <Box
                className="flex  items-center  mb-1 "
                onClick={handleOpenSecuModal}
              >
                <p className="text-[14px] font-[500] cursor-pointer hover:text-[#DC0019] mt-5">
                  Change Security Question
                </p>
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
                  fontSize: "14px",
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

                    <p className="text-[#828282] font-normal text-[12px]">
                      Inward Transfer{" "}
                      {dataLoading ? (
                        <CircularProgress
                          size="0.3rem"
                          sx={{ color: "#DC0019" }}
                        />
                      ) : (
                        `[${
                          customerDataById?.trxAnalytics?.totalInwardsCount || 0
                        }]`
                      )}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-[24px] h-[8px] bg-[#E52929]"></div>

                    <p className="text-[#828282] font-normal text-[12px]">
                      Outward Transfer
                      {dataLoading ? (
                        <CircularProgress
                          size="0.3rem"
                          sx={{ color: "#DC0019" }}
                        />
                      ) : (
                        `[${
                          customerDataById?.trxAnalytics?.totalOutwardsCount ||
                          0
                        }]`
                      )}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                    <p className="text-[#828282] font-normal text-[12px]">
                      Wallet to Wallet
                      {dataLoading ? (
                        <CircularProgress
                          size="0.3rem"
                          sx={{ color: "#DC0019" }}
                        />
                      ) : (
                        `[${
                          customerDataById?.trxAnalytics?.totalWalletCount || 0
                        }]`
                      )}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                    <p className="text-[#828282] font-normal text-[12px]">
                      Mycliq
                      {dataLoading ? (
                        <CircularProgress
                          size="0.3rem"
                          sx={{ color: "#DC0019" }}
                        />
                      ) : (
                        `[${
                          customerDataById?.trxAnalytics?.totalCliqPayCount || 0
                        }]`
                      )}
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
                a
                <Table sx={{ minWidth: 100, padding: "8px" }}>
                  <TableHead sx={{ background: "#F8F8F8" }}>
                    <TableRow>
                      <TableCell>S/N</TableCell>
                      <TableCell>Origin</TableCell>
                      <TableCell>Recipient</TableCell>
                      <TableCell>Sub Type</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Amount(N)</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {isLoading ? (
                      <TableRow>
                        <TableCell colSpan={8} align="left">
                          <CircularProgress
                            size="4.2rem"
                            sx={{
                              color: "#DC0019",
                              marginLeft: "auto",
                              padding: "1em",
                            }}
                          />
                        </TableCell>
                      </TableRow>
                    ) : customerTrx &&
                      Array.isArray(customerTrx.records) &&
                      customerTrx.records.length > 0 ? (
                      customerTrx.records.map((item, i) => (
                        <TableRow key={item.id}>
                          <TableCell>
                            {i + 1 + (currentPage - 1) * rowsPerPage}
                          </TableCell>
                          <TableCell>{item?.origin?.accountName}</TableCell>
                          <TableCell>
                            {item?.recipientDetails?.accountName}
                          </TableCell>
                          <TableCell>{item?.subType}</TableCell>
                          <TableCell>
                            <Typography
                              sx={{
                                fontWeight: "400",
                                fontSize: "16px",
                                color: "#828282",
                              }}
                            >
                              {item.type}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Typography
                              sx={{
                                fontWeight: "400",
                                fontSize: "16px",
                                color: "#828282",
                              }}
                            >
                              {modDate(item?.createdAt)}
                            </Typography>
                          </TableCell>

                          <TableCell>
                            <Typography
                              sx={{
                                fontWeight: "400",
                                fontSize: "16px",
                                color: "#828282",
                              }}
                            >
                              {item.amount}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Box
                              sx={{
                                textTransform: "capitalize",
                                background:
                                  item.status === "failed"
                                    ? "#FFF0F0"
                                    : item.status === "success"
                                    ? "#EBFFF3"
                                    : item.status === "pending" ||
                                      item.status === "incoming"
                                    ? "#FFF0F0"
                                    : "",
                                color:
                                  item.status === "failed"
                                    ? "#E52929"
                                    : item.status === "success"
                                    ? "#1E854A"
                                    : item.status === "pending" ||
                                      item.status === "incoming"
                                    ? "#CDA11E"
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
                              {item.status === "failed" && (
                                <ReportOutlinedIcon sx={{ fontSize: "12px" }} />
                              )}
                              {item.status === "success" && (
                                <CheckCircleOutlineRoundedIcon
                                  sx={{ fontSize: "12px" }}
                                />
                              )}
                              {(item.status === "incoming" ||
                                item.status === "pending") && (
                                <HourglassBottomOutlinedIcon
                                  sx={{ fontSize: "12px" }}
                                />
                              )}
                              {item.status}
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Button
                              onClick={() =>
                                viewDetails(item?.id, item?.subType)
                              }
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
                              }}
                            >
                              View More
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={8} align="left">
                          No data found
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
              <CustomPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </Box>
            {/* customers end */}
          </Box>
        </Grid>
      </Grid>

      <Modal
        open={openSecuModal}
        onClose={handleCloseSecuModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        PaperProps={{
          sx: {
            border: "none", // Remove the border
            boxShadow: "none", // Remove the box shadow
          },
        }}
      >
        <Box
          style={style}
          className="w-full flex flex-col bg-white p-5 items-center justify-center"
        >
          <p className="text-[#1E1E1E] font-500 text-[15px]">Are you sure? </p>

          <Box
            sx={{
              width: "100%",
              gap: "10px",
              display: "flex",
              alignItems: "center",
              my: "1rem",
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={handleCloseSecuModal}
              sx={{
                background: "#fff",
                padding: "10px",
                borderRadius: "8px",
                width: "100%",
                borderColor: "#333333",

                color: "#000",
                "&:hover": {
                  borderColor: "#FF7F00",
                },
                textTransform: "capitalize",
                fontWeight: "500",
              }}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              onClick={handleChangeSecurityQ}
              disabled={btnLoading}
              sx={{
                background: "#FF7F00",
                padding: "10px",
                borderRadius: "8px",
                width: "100%",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#FF7F00",
                },
                textTransform: "capitalize",
              }}
            >
              {btnLoading ? (
                <CircularProgress size="1.2rem" sx={{ color: "white" }} />
              ) : (
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                >
                  Change
                </Typography>
              )}
            </Button>
          </Box>
        </Box>
      </Modal>
      {/* Modal deposit ends */}

      {/* Moda;l for detailsl */}

      <Modal
        open={openAirtimeModal}
        onClose={handleCloseAirtimeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        PaperProps={{
          sx: {
            border: "none", // Remove the border
            boxShadow: "none", // Remove the box shadow
          },
        }}
      >
        <AirtimeModal
          handleCloseAirtimeModal={handleCloseAirtimeModal}
          index={index}
        />
      </Modal>
      {/* Modal ends */}
      <ToastContainer />
    </Box>
  );
};

export default CustomerProfile;
