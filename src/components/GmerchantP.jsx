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
} from "@mui/material";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import bage1 from "../assets/bage1.svg";
import compliance from "../assets/images/generalMerchants/compliance.svg";
import bigavatar from "../assets/images/bigavatar.svg";
import TransgenderRoundedIcon from "@mui/icons-material/TransgenderRounded";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
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
const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  border: "2px solid #E0E0E0",
  color: theme.palette.text.secondary,
  borderRadius: "8px",
  maxHeight: "100%",
}));
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

const GmerchantP = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
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
                  Merchant Commission
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
                    <FormattedPrice amount={3000000} />
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
                              emmanuel
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
                              Male
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
                                e@gmail.com
                              </Typography>

                              <div className="bg-[#FFF0F0]  px-2 flex items-center gap-1 rounded-md">
                                <ReportProblemOutlinedIcon
                                  sx={{ fontSize: "15px" }}
                                  className="text-[#E52929] font-[500]"
                                />
                                <p className="text-[#E52929] text-[10px] font-[500]">
                                  Unverified
                                </p>
                              </div>
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
                                0815524624624
                              </Typography>

                              <div className="bg-[#EBFFF3]  px-2 flex items-center gap-1 rounded-md">
                                <VerifiedOutlinedIcon
                                  sx={{ fontSize: "15px" }}
                                  className="text-[#1E854A] text-[10px] font-[500]"
                                />
                                <p className="text-[#1E854A] text-[10px] font-[500]">
                                  Verified
                                </p>
                              </div>
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
                              address is here
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
                            emmanuel
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
                            Male
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
                              e@gmail.com
                            </Typography>

                            <div className="bg-[#FFF0F0]  px-2 flex items-center gap-1 rounded-md">
                              <ReportProblemOutlinedIcon
                                sx={{ fontSize: "15px" }}
                                className="text-[#E52929] font-[500]"
                              />
                              <p className="text-[#E52929] text-[10px] font-[500]">
                                Unverified
                              </p>
                            </div>
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
                              0815524624624
                            </Typography>

                            <div className="bg-[#EBFFF3]  px-2 flex items-center gap-1 rounded-md">
                              <VerifiedOutlinedIcon
                                sx={{ fontSize: "15px" }}
                                className="text-[#1E854A] text-[10px] font-[500]"
                              />
                              <p className="text-[#1E854A] text-[10px] font-[500]">
                                Verified
                              </p>
                            </div>
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
                            address is here
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
                            Tier 1
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
                          01/05/2023 at 08:54 PM
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
                          01/05/2023 at 08:54 PM
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
                          Providus Bank
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
                          2211223445
                        </Typography>
                      </Box>
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
                          Safe Haven
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="flex flex-col  mt-6 items-start w-full justify-center">
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
                          emmanuel
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
                          Male
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
                            e@gmail.com
                          </Typography>

                          <div className="bg-[#FFF0F0]  px-2 flex items-center gap-1 rounded-md">
                            <ReportProblemOutlinedIcon
                              sx={{ fontSize: "15px" }}
                              className="text-[#E52929] font-[500]"
                            />
                            <p className="text-[#E52929] text-[10px] font-[500]">
                              Unverified
                            </p>
                          </div>
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
                            0815524624624
                          </Typography>

                          <div className="bg-[#EBFFF3]  px-2 flex items-center gap-1 rounded-md">
                            <VerifiedOutlinedIcon
                              sx={{ fontSize: "15px" }}
                              className="text-[#1E854A] text-[10px] font-[500]"
                            />
                            <p className="text-[#1E854A] text-[10px] font-[500]">
                              Verified
                            </p>
                          </div>
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
                          address is here
                        </Typography>
                      </Box>
                    </Box>
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
                                fontWeight: "400",
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
                                fontWeight: "400",
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
                                fontWeight: "400",
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
                              Credit
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
    </div>
  );
};

export default GmerchantP;
