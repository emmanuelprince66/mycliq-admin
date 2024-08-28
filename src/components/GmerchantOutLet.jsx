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
  Card,
  Typography,
  Modal,
  Divider,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import CabinRoundedIcon from "@mui/icons-material/CabinRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import TransgenderRoundedIcon from "@mui/icons-material/TransgenderRounded";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import fdown from "../assets/fdown.svg";
import upcolor from "../assets/images/admin/upcolor.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import wallet from "../assets/images/generalMerchants/wallet.svg";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";

import percent from "../assets/images/generalMerchants/percent.svg";
import AccordionDetails from "@mui/material/AccordionDetails";
import MenuItem from "@mui/material/MenuItem";
import FormattedPrice from "./FormattedPrice";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import { styled } from "@mui/material/styles";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import house from "../assets/images/outletHouseIcon.svg";
import arrRight from "../assets/images/arrow-right.svg";

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

const GmerchantOutLet = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [showProfileDetails, setShowProfileDetails] = useState(true);
  return (
    <>
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
                    Outlet Inflow
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
                      Outlet Outflow
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
                    Outlet Wallet Balance
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
                    Outlet Commission
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
                  <div className="flex flex-col items-start w-full p-3">
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <Box className="flex flex-col border-r-[1px] border-slate-300  items-start w-full justify-center">
                          <Typography
                            sx={{
                              color: "grey",
                              fontWeight: "500",
                              fontSize: "13px",
                              mb: "10px",
                            }}
                          >
                            GENERAL INFORMATION
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
                                Outlet Number :
                              </Typography>
                            </Box>

                            <Typography
                              sx={{
                                color: "#1E1E1E",
                                fontWeight: "500",
                                fontSize: "13px",
                              }}
                            >
                              3443
                            </Typography>
                          </Box>
                          <Box className="flex items-center mt-1 mb-1 justify-between ">
                            <Box className="flex items-center gap-1 w-[200px] ">
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
                                Brand Name :
                              </Typography>
                            </Box>

                            <Typography
                              sx={{
                                color: "#1E1E1E",
                                fontWeight: "500",
                                fontSize: "13px",
                              }}
                            >
                              Encore supermaket
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
                                Registered Name :
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
                                Cooler
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
                                CAC NO :
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
                                8155246
                              </Typography>
                            </div>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box className="flex  flex-col items-start w-full justify-center">
                          <Typography
                            sx={{
                              color: "grey",
                              fontWeight: "500",
                              fontSize: "13px",
                              mb: "10px",
                            }}
                          >
                            BRANCH MANAGER INFORMATION
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
                                Manager's Name :
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
                            </div>
                          </Box>
                        </Box>
                      </Grid>
                      <Divider sx={{ width: "100%", pt: "10px" }} />
                      <Grid item xs={6}>
                        <Box className="flex flex-col items-start border-slate-300 border-r-[1px] w-full pt-4 justify-center">
                          <Typography
                            sx={{
                              color: "grey",
                              fontWeight: "500",
                              fontSize: "13px",

                              mb: "10px",
                            }}
                          >
                            OUTLET INFORMATION
                          </Typography>
                          <Box className="flex items-center mt-1 mb-1">
                            <Box className="flex items-center gap-1 w-[200px] ">
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
                                Date Registered :
                              </Typography>
                            </Box>

                            <Typography
                              sx={{
                                color: "#1E1E1E",
                                fontWeight: "500",
                                fontSize: "13px",
                              }}
                            >
                              01-01-2022
                            </Typography>
                          </Box>
                          <Box className="flex items-center mt-1 mb-1 justify-between ">
                            <Box className="flex items-center gap-1 w-[200px] ">
                              <HttpsOutlinedIcon
                                sx={{ color: "grey", fontSize: "15px" }}
                              />
                              <Typography
                                sx={{
                                  color: "grey",
                                  fontWeight: "300",
                                  fontSize: "12px",
                                }}
                              >
                                Oulet Location :
                              </Typography>
                            </Box>

                            <Typography
                              sx={{
                                color: "#1E1E1E",
                                fontWeight: "500",
                                fontSize: "13px",
                              }}
                            >
                              Ibadan
                            </Typography>
                          </Box>
                          <Box className="flex  items-center mt-1 mb-1 justify-between ">
                            <Box className="flex items-center gap-1 w-[200px] ">
                              <HttpsOutlinedIcon
                                sx={{ color: "grey", fontSize: "15px" }}
                              />
                              <Typography
                                sx={{
                                  color: "grey",
                                  fontWeight: "300",
                                  fontSize: "12px",
                                }}
                              >
                                Outlet Address :
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
                                mollete
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
                                0815524624624
                              </Typography>
                            </div>
                          </Box>
                          <Box className="flex  items-center mt-1 mb-1 justify-between ">
                            <Box className="flex items-center gap-1 w-[200px]">
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

                            <Typography
                              sx={{
                                color: "#1E1E1E",
                                fontWeight: "500",
                                fontSize: "13px",
                              }}
                            >
                              {" "}
                              ae@gmail.com
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box className="flex flex-col  items-start w-full justify-center pt-3">
                          <Typography
                            sx={{
                              color: "grey",
                              fontWeight: "500",
                              fontSize: "13px",
                              mb: "10px",
                            }}
                          >
                            OUTLET BANK ACCOUNT DETAILS
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
                      </Grid>
                    </Grid>
                  </div>
                </AccordionDetails>
              </Accordion>
            </Item>
          </Grid>

          <Grid item xs={12}>
            <Box className="w-full rounded-md p-2 flex flex-col border-grey-400  border-[1px] items-start justify-center">
              {/* customers  */}
              <Box
                sx={{ maxHeight: "55vh", overflowY: "scroll", width: "100%" }}
              >
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
    </>
  );
};

export default GmerchantOutLet;
