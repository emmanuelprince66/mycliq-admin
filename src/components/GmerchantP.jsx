import React from "react";
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
import CustomPagination from "./CustomPagination";
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
                          Customer Profile
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
                      <TableCell>Transaction ID</TableCell>
                      <TableCell>User</TableCell>
                      <TableCell>Date</TableCell>
                      <TableCell>Type</TableCell>
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
                          <TableCell>
                            <Typography
                              sx={{
                                fontWeight: "400",
                                fontSize: "16px",
                                color: "#828282",
                              }}
                            >
                              {item?.id?.substring(0, 10) + "...."}
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
                              {item?.type === "transfer"
                                ? item?.origin?.accountName
                                : item?.recipientDetails?.accountName}
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
