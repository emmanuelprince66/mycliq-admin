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
  FormControl,
  Grid,
  Container,
  TextField,
  MenuItem,
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
import { styled } from "@mui/material/styles";
import CabinRoundedIcon from "@mui/icons-material/CabinRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import TransgenderRoundedIcon from "@mui/icons-material/TransgenderRounded";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import fdown from "../assets/fdown.svg";
import upcolor from "../assets/images/admin/upcolor.svg";
import wallet from "../assets/images/generalMerchants/wallet.svg";
import percent from "../assets/images/generalMerchants/percent.svg";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import FormattedPrice from "./FormattedPrice";
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
const GmerchantProfile = () => {
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
    <div className="w-full">
      <div className="w-full flex items-center justify-between">
        <p className="font-[600]  text-[20px] text-[#1e1e1e]">Cascade Lounge</p>

        <div className="flex gap-4 items-center w-[60%] justify-end">
          <div className="flex gap-1 items-center ">
            <p className="text-[#F78105] text-[16px] font-[600]">
              Total Number Of Outlet :
            </p>
            <p className="text-[#F78105] text-[16px] font-[600]">24</p>
          </div>
          <FormControl sx={{ width: "60%" }}>
            <Controller
              name="institutionName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  {...field}
                  sx={{
                    "& .MuiOutlinedInput-notchedOutline": {},
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff7f00",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ff7f00",
                    },
                  }}
                  displayEmpty
                >
                  <MenuItem value="" disabled>
                    <Box>Akala Express , ibadan</Box>
                  </MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </div>
      </div>

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
                <div className="flex flex-col items-start w-full p-3">
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <Box className="flex flex-col items-start w-full justify-center ">
                        <Typography
                          sx={{
                            color: "grey",
                            fontWeight: "500",
                            fontSize: "15px",
                          }}
                        >
                          GENERAL INFORMATION
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
                              Total Reg.Outlets :
                            </Typography>
                          </Box>

                          <Typography
                            sx={{
                              color: "#1E1E1E",
                              fontWeight: "500",
                              fontSize: "15px",
                            }}
                          >
                            10
                          </Typography>
                        </Box>
                        <Box className="flex items-center mt-2 mb-1 justify-between ">
                          <Box className="flex items-center gap-1 w-[200px] ">
                            <CabinRoundedIcon sx={{ color: "grey" }} />
                            <Typography
                              sx={{
                                color: "grey",
                                fontWeight: "300",
                                fontSize: "13px",
                              }}
                            >
                              Brand Name:
                            </Typography>
                          </Box>

                          <Typography
                            sx={{
                              color: "#1E1E1E",
                              fontWeight: "500",
                              fontSize: "15px",
                            }}
                          >
                            Encore Supermarket
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
                              Registered Name:
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
                              Encore Supermarket
                            </Typography>
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
                              CAC NO:
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
                              12223344
                            </Typography>
                          </div>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box className="flex flex-col items-start w-full justify-center ">
                        <Typography
                          sx={{
                            color: "grey",
                            fontWeight: "500",
                            fontSize: "15px",
                          }}
                        >
                          BRANCH MANAGER'S INFORMATION
                        </Typography>
                        <Box className="flex items-center mt-2 mb-1 ">
                          <Box className="flex items-center gap-1 w-[200px] ">
                            <PersonOutlineRoundedIcon sx={{ color: "grey" }} />
                            <Typography
                              sx={{
                                color: "grey",
                                fontWeight: "300",
                                fontSize: "13px",
                              }}
                            >
                              Manager's Name :
                            </Typography>
                          </Box>

                          <Typography
                            sx={{
                              color: "#1E1E1E",
                              fontWeight: "500",
                              fontSize: "15px",
                            }}
                          >
                            Eleanor Poe
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
                            male
                          </Typography>
                        </Box>
                        <Box className="flex items-center mt-2 mb-1 ">
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
                              eleanor@gmail.com
                            </Typography>
                          </div>
                        </Box>
                        <Box className="flex items-center mt-2 mb-1 justify-between ">
                          <Box className="flex items-center gap-1 w-[200px] ">
                            <LocalPhoneOutlinedIcon sx={{ color: "grey" }} />
                            <Typography
                              sx={{
                                color: "grey",
                                fontWeight: "300",
                                fontSize: "13px",
                              }}
                            >
                              Phone No:
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
                              08166553443
                            </Typography>
                          </div>
                        </Box>
                        <Box className="flex items-center mt-2 mb-1 justify-between ">
                          <Box className="flex items-center gap-1 w-[200px] ">
                            <LocalPhoneOutlinedIcon sx={{ color: "grey" }} />
                            <Typography
                              sx={{
                                color: "grey",
                                fontWeight: "300",
                                fontSize: "13px",
                              }}
                            >
                              Alt Phone No:
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
                              08166553443
                            </Typography>
                          </div>
                        </Box>
                      </Box>
                    </Grid>
                    <Divider sx={{ width: "100%", pt: "10px" }} />
                    <Grid item xs={6}>
                      <Box className="flex flex-col items-start w-full pt-4 justify-center ">
                        <Typography
                          sx={{
                            color: "grey",
                            fontWeight: "500",
                            fontSize: "15px",
                          }}
                        >
                          OUTLET INFORMATION
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
                              Date Registered :
                            </Typography>
                          </Box>

                          <Typography
                            sx={{
                              color: "#1E1E1E",
                              fontWeight: "500",
                              fontSize: "15px",
                            }}
                          >
                            01-02-10022
                          </Typography>
                        </Box>
                        <Box className="flex items-center mt-2 mb-1 justify-between ">
                          <Box className="flex items-center gap-1 w-[200px] ">
                            <CabinRoundedIcon sx={{ color: "grey" }} />
                            <Typography
                              sx={{
                                color: "grey",
                                fontWeight: "300",
                                fontSize: "13px",
                              }}
                            >
                              Outlet Location:
                            </Typography>
                          </Box>

                          <Typography
                            sx={{
                              color: "#1E1E1E",
                              fontWeight: "500",
                              fontSize: "15px",
                            }}
                          >
                            Ibadan
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
                              Outlet Address:
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
                              Shop 4, mycliq Complex, State
                            </Typography>
                          </div>
                        </Box>
                        <Box className="flex items-center mt-2 mb-1 justify-between ">
                          <Box className="flex items-center gap-1 w-[200px] ">
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
                              08166776633
                            </Typography>
                          </div>
                        </Box>
                        <Box className="flex items-center mt-2 mb-1 justify-between ">
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
                              text@gmail.com
                            </Typography>
                          </div>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box className="flex flex-col items-start w-full pt-4 justify-center ">
                        <Typography
                          sx={{
                            color: "grey",
                            fontWeight: "500",
                            fontSize: "15px",
                          }}
                        >
                          OUTLET BANK ACCOUNT DETAILS
                        </Typography>
                        <Box className="flex items-center mt-2 mb-1 ">
                          <Box className="flex items-center gap-1 w-[200px] ">
                            <PersonOutlineRoundedIcon sx={{ color: "grey" }} />
                            <Typography
                              sx={{
                                color: "grey",
                                fontWeight: "300",
                                fontSize: "13px",
                              }}
                            >
                              Bank Name :
                            </Typography>
                          </Box>

                          <Typography
                            sx={{
                              color: "#1E1E1E",
                              fontWeight: "500",
                              fontSize: "15px",
                            }}
                          >
                            Access Bank
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
                              Account Name:
                            </Typography>
                          </Box>

                          <Typography
                            sx={{
                              color: "#1E1E1E",
                              fontWeight: "500",
                              fontSize: "15px",
                            }}
                          >
                            Eleanor Poe
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
                              Account Number:
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
                              453545354
                            </Typography>
                          </div>
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

export default GmerchantProfile;
