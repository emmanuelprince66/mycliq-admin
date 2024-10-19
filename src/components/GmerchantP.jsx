import React, { useEffect } from "react";
import { useState } from "react";
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
  FormControl,
  Grid,
  Container,
  TextField,
  TablePagination,
  ToggleButtonGroup,
  Select,
  ToggleButton,
  Switch,
  Card,
  Typography,
  Modal,
  Divider,
  CircularProgress,
} from "@mui/material";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import bage1 from "../assets/bage1.svg";
import compliance from "../assets/images/generalMerchants/compliance.svg";
import bigavatar from "../assets/images/bigavatar.svg";
import TransgenderRoundedIcon from "@mui/icons-material/TransgenderRounded";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import QRCode from "react-qr-code";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";

import { useForm, Controller } from "react-hook-form";
import CabinRoundedIcon from "@mui/icons-material/CabinRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import fdown from "../assets/fdown.svg";
import upcolor from "../assets/images/admin/upcolor.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import wallet from "../assets/images/generalMerchants/wallet.svg";
import percent from "../assets/images/generalMerchants/percent.svg";
import AccordionDetails from "@mui/material/AccordionDetails";
import MenuItem from "@mui/material/MenuItem";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

import FormattedPrice from "./FormattedPrice";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import { styled } from "@mui/material/styles";
import AccordionSummary from "@mui/material/AccordionSummary";
import { formatToIsoDateStr } from "../utils/formatIsoDateString";
import modDate from "../utils/moddate";
import { useMutation } from "@tanstack/react-query";
import CustomPagination from "./CustomPagination";

import zOne from "../assets/images/admin/profit/z-1.svg";
import zTwo from "../assets/images/admin/profit/z-2.svg";
import zThree from "../assets/images/admin/profit/z-3.svg";
import zFour from "../assets/images/admin/profit/z-4.svg";
import zFive from "../assets/images/admin/profit/z-5.svg";
import zSix from "../assets/images/admin/profit/z-6.svg";
import zSeven from "../assets/images/admin/profit/z-7.svg";
import zEight from "../assets/images/admin/profit/z-8.svg";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  border: "2px solid #E0E0E0",
  color: theme.palette.text.secondary,
  borderRadius: "8px",
  maxHeight: "100%",
}));

const GmerchantP = ({
  merchantDataById,
  dataLoading,
  merchantTrx,
  handlePageChange,
  totalPages,
  currentPage,
  rowsPerPage,
  isLoading,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [outletValue, setOutletValue] = useState("");
  const [isSwitchChecked, setIsSwitchChecked] = useState(null);
  const [showQr, setShowQr] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const {
    handleSubmit,
    control,
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "all" });

  const handleDownload = async () => {
    const element = document.getElementById("qrCodeSection"); // The element you want to convert to PDF
    const canvas = await html2canvas(element);
    const imageData = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgWidth = 190;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imageData, "PNG", 10, 10, imgWidth, imgHeight);
    pdf.save("MerchantQRCode.pdf");
  };

  useEffect(() => {
    if (merchantDataById) setShowQr(true);
  }, [merchantDataById]);
  console.log("cause", merchantDataById?.merchant);
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

  return (
    <div className="w-full">
      <Grid container spacing={2} sx={{ my: "10px" }}>
        <Grid item xs={12}>
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
                  Merchant Inflow
                </Typography>
              </Box>

              <Box className="flex flex-col items-start gap-1 w-full">
                <Box className="flex flex-col gap-1 items-start">
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
                        amount={merchantDataById?.trx?.totalInwardsSum || 0}
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
                    Merchant Outflow
                  </Typography>
                </Box>
              </Box>

              <Box className="flex flex-col items-start gap-1 w-full">
                <Box className="flex flex-col gap-1 items-start">
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
                        amount={merchantDataById?.trx?.totalOutwardsSum || 0}
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
                  Merchant Wallet Balance
                </Typography>
              </Box>

              <Box className="flex flex-col items-start gap-1 w-full">
                <Box className="flex flex-col gap-1 items-start">
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
                        amount={merchantDataById?.commTrx?.currentBalance || 0}
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
                  Merchant Commission
                </Typography>
              </Box>
              <Box className="flex flex-col items-start gap-1 w-full">
                <Box className="flex flex-col gap-1 items-start">
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
                          merchantDataById?.analytics?.totalInwardsSum || 0
                        }
                      />
                    )}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Accordion
              defaultExpanded
              sx={{
                boxShadow: "none", // Remove box shadow
              }}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "#828282",
                      background: "#1E1E1E0D",
                      p: "1px",
                      borderRadius: "10px",
                    }}
                  />
                }
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  borderBottom: "none", // Remove bottom border of the summary
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  px: "5px",
                }}
              >
                <p className="text-[20px] font-[500 text-[#1e1e1e] ml-6">
                  Profile
                </p>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  width: "100%",
                  // Remove top border of the details
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Box className="w-full bg-white p-4 flex-col border-grey-400 border-r-[1px]  overflow-y-scroll items-start justify-center">
                      <div className="flex w-full items-center justify-between ">
                        <Typography
                          sx={{
                            color: "#1E1E1E",
                            fontWeight: "500",
                            fontSize: "15px",
                            p: "1rem",
                          }}
                        >
                          Merchant Profile
                        </Typography>
                        <div className="flex gap-2 items-center cursor-pointer">
                          <img src={compliance} alt="c-p" />
                          <p className="text-[14px] font-[500] text-[#F78105]">
                            Compliance
                          </p>
                        </div>
                      </div>

                      <Box className="w-full flex items-start flex-col   gap-[2rem] my-3 border-b border-grey-400  pb-1">
                        <Box className="ml-3">
                          <img
                            src={merchantDataById?.merchant?.logo || bigavatar}
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
                                merchantDataById?.merchant?.name
                              )}{" "}
                            </Typography>
                          </Box>
                          {/* <Box className="flex items-center mt-1 mb-1 justify-between ">
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
                                merchantDataById?.userProfile?.gender
                              )}
                            </Typography>
                          </Box> */}
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
                                  merchantDataById?.merchant?.email
                                )}
                              </Typography>

                              {dataLoading ? (
                                <CircularProgress
                                  size="0.6rem"
                                  sx={{ color: "#DC0019" }}
                                />
                              ) : merchantDataById?.merchant?.emailVerified ? (
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
                                  merchantDataById?.merchant?.phone || "null"
                                )}
                              </Typography>

                              {merchantDataById?.merchant?.ninVerified ? (
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
                                merchantDataById?.merchant?.address || "null"
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
                              <CircularProgress
                                size="0.6rem"
                                sx={{ color: "#DC0019" }}
                              />
                            ) : (
                              merchantDataById?.bvnProfile?.firstName
                            )}{" "}
                            {merchantDataById?.bvnProfile?.lastName}
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
                              merchantDataById?.bvnProfile?.gender
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
                                merchantDataById?.bvnProfile?.email
                              )}
                            </Typography>
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
                                merchantDataById?.bvnProfile?.phoneNumber
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
                            {" "}
                            {dataLoading ? (
                              <CircularProgress
                                size="0.6rem"
                                sx={{ color: "#DC0019" }}
                              />
                            ) : (
                              merchantDataById?.bvnProfile?.address
                            )}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
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

                        {merchantDataById?.merchant?.isDisabled ? (
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
                            <span className="w-[10px] h-[10px] rounded-full text-[13px0]  bg-red-600" />
                            InActive
                          </Typography>
                        ) : (
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
                        )}
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
                              merchantDataById?.userProfile?.tier
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
                            <CircularProgress
                              size="0.6rem"
                              sx={{ color: "#DC0019" }}
                            />
                          ) : (
                            modDate(merchantDataById?.merchant?.createdAt)
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
                            <CircularProgress
                              size="0.6rem"
                              sx={{ color: "#DC0019" }}
                            />
                          ) : (
                            modDate(merchantDataById?.merchant?.updatedAt)
                          )}
                        </Typography>
                      </Box>

                      <Box className="flex  items-center  mb-1 ">
                        <Box className="flex items-center gap-1 w-[150px]">
                          <HttpsOutlinedIcon
                            sx={{ color: "red", fontSize: "15px" }}
                          />
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
                    </Box>
                    <Box className="flex flex-col border-grey-400  border-b-[1px] items-start w-full justify-center py-2">
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
                          <CabinRoundedIcon
                            sx={{ color: "grey", fontSize: "15px" }}
                          />
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
                            <CircularProgress
                              size="0.6rem"
                              sx={{ color: "#DC0019" }}
                            />
                          ) : (
                            merchantDataById?.merchant?.collectionBankAccount
                              ?.bank || ""
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
                            <CircularProgress
                              size="0.6rem"
                              sx={{ color: "#DC0019" }}
                            />
                          ) : (
                            merchantDataById?.merchant?.collectionBankAccount
                              ?.accountNumber || ""
                          )}
                        </Typography>
                      </Box>
                      {/* <Box className="flex items-center mt-1 mb-1 ">
                        <Box className="flex items-center gap-1 w-[200px] ">
                          <CabinRoundedIcon
                            sx={{ color: "grey", fontSize: "15px" }}
                          />
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
                            <CircularProgress
                              size="0.6rem"
                              sx={{ color: "#DC0019" }}
                            />
                          ) : (
                            merchantDataById?.merchant?.collectionBankAccount
                              ?. || ""
                          )}
                        </Typography>
                      </Box> */}
                    </Box>
                    {/* a boc is here */}
                    <div className="w-full flex items-center justify-between my-4">
                      <p className="text-black font-[500] text-[20px]">
                        Merchant QR Code
                      </p>
                      <Button
                        onClick={handleDownload}
                        sx={{
                          background: "#333333",
                          borderRadius: "8px",
                          width: "20%",
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: "#333333",
                          },
                          textTransform: "capitalize",
                          fontWeight: "500",
                        }}
                      >
                        download
                      </Button>
                    </div>
                    <div className="w-full ">
                      <Box
                        id="qrCodeSection"
                        sx={{
                          maxWidth: "800px",
                          minWidth: "300px",
                        }}
                        className="flex flex-col border-grey-400 border-b-[1px] w-[400px]  bg-[#333333] rounded-md  items-start mx-auto relative justify-center py-2"
                      >
                        <Box className="flex items-center mt-1 mb-1 w-full">
                          {showQr && (
                            <>
                              <Box className="w-full">
                                <div className="mx-auto w-[60%] h-full flex  rounded-md flex-col items-center justify-center ">
                                  <Typography
                                    sx={{
                                      color: "grey",
                                      fontWeight: "700",
                                      fontSize: "20px",
                                      textAlign: "center",
                                      zIndex: "2",
                                      color: "#ffb366",
                                      marginTop: "10px",
                                      mb: "3rem",
                                    }}
                                  >
                                    I ACCEPT PAYMENTS WITH MYCLIQ
                                  </Typography>
                                  {/* <div className="absolute w-full top-[-0.3rem] left-[20.5rem]">
                                    <img
                                      src={zOne}
                                      alt=""
                                      className="h-[130px] w-[130px]  z-2"
                                    />
                                  </div> */}
                                  <div className="absolute w-full top-[3.7rem] left-[5rem]">
                                    <img
                                      src={zTwo}
                                      alt=""
                                      className="h-[20px] w-[20px]  z-2"
                                    />
                                  </div>
                                  <div className="absolute w-full top-[5.9rem] left-[19rem]">
                                    <img
                                      src={zThree}
                                      alt=""
                                      className="h-[30px] w-[30px]  z-2"
                                    />
                                  </div>
                                  <div className="absolute w-full top-[14.5rem] left-[1rem]">
                                    <img
                                      src={zFour}
                                      alt=""
                                      className="h-[30px] w-[30px]  z-2"
                                    />
                                  </div>
                                  {/* <div className="absolute w-full top-[9.5rem] left-[1rem]">
                                  <img
                                    src={zFive}
                                    alt=""
                                    className="h-[30px] w-[30px]  z-2"
                                  />
                                </div> */}
                                  {/* <div className="absolute w-full top-[5.2rem] left-[5.7rem]">
                                    <img
                                      src={zEight}
                                      alt=""
                                      className="h-[280px] w-[280px]  z-2"
                                    />
                                  </div> */}

                                  <div className="z-20 border-[10px] rounded-[20px] border-slate-200 p-2  ">
                                    <QRCode
                                      value={merchantDataById?.merchant?.id}
                                      size={206}
                                      level="H"
                                    />
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-1 mt-10">
                                  <Button
                                    sx={{
                                      width: "50%",
                                      padding: "10px",
                                      borderRadius: "8px",
                                      border: "1px solid #BDBDBD",
                                      color: "#F78105",
                                      borderColor: "#BDBDBD",
                                      "&:hover": {
                                        borderColor: "#BDBDBD",
                                      },
                                    }}
                                    variant="outlined"
                                  >
                                    Scan To Pay
                                  </Button>
                                  <p className="text-white font-[500] text-[18px] my-2">
                                    {/* CLIQ ID: {merchantDataById?.merchant?.id} */}
                                  </p>
                                  <p className="text-white font-[300] text-[12px]">
                                    Payment with the MyCliq App is a Breeze!
                                  </p>
                                </div>
                              </Box>
                            </>
                          )}
                        </Box>
                      </Box>
                    </div>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Item>
        </Grid>

        <Grid item xs={12}>
          <Box className="w-full rounded-md p-2 flex flex-col border-grey-400  border-[1px] items-start justify-center">
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
                    ) : merchantTrx &&
                      Array.isArray(merchantTrx.records) &&
                      merchantTrx.records.length > 0 ? (
                      merchantTrx.records.map((item, i) => (
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
                              View Profile
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
    </div>
  );
};

export default GmerchantP;
