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
import side from "../assets/images/admin/side.svg";
import percent from "../assets/images/admin/percent.svg";
import upcolor from "../assets/images/admin/upcolor.svg";
import fdown from "../assets/fdown.svg";
import FormattedPrice from "../components/FormattedPrice";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import TransgenderRoundedIcon from "@mui/icons-material/TransgenderRounded";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import CabinRoundedIcon from "@mui/icons-material/CabinRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

const BillersProfile = ({ setShowBillersProfile }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
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
  return (
    <Box className="w-full max-h-[80vh] overflow-y-scroll pb-3">
      {/* card */}
      <Typography
        sx={{
          color: "#1E1E1E",
          fontWeight: "500",
          fontSize: "15px",
          my: "1rem",
        }}
      >
        Agricultural Economic Students’ Association (AECOSA)
      </Typography>
      <Box
        sx={{
          width: "1080px",
          display: "flex",
          gap: "2rem",
          mb: "1rem",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            width: "356px",
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
              Total <br />
              Inflow
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "24px",
                color: "#1E1E1E",
              }}
            >
              <FormattedPrice amount={2000} />
            </Typography>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            width: "356px",
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
                Total <br />
                Outflow
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "24px",
                color: "##1E1E1E",
              }}
            >
              <FormattedPrice amount={1000} />
            </Typography>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            width: "356px",
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
              Biller's Total
              <br />
              Wallet Balance
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "24px",
                color: "##1E1E1E",
              }}
            >
              <FormattedPrice amount={Number(200000 || 0)} />
            </Typography>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            width: "356px",
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
                fontSize: "14px",
                color: "#4F4F4F",
              }}
            >
              Commission
              <br />
              From Billers{" "}
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "24px",
                color: "##1E1E1E",
              }}
            >
              <FormattedPrice amount={Number(20000 || 0)} />
            </Typography>
          </Box>
        </Card>
      </Box>
      {/* card ends */}

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Box className="border border-grey-500 rounded-md flex bg-white item-start flex-col mt-2 items-start w-[100%] p-3">
                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "15px",
                    margin: "0.5rem 0rem 1rem 0rem",
                  }}
                >
                  Profile
                </Typography>
                <Typography
                  sx={{
                    color: "grey",
                    fontWeight: "400",
                    fontSize: "13px",
                    margin: "0.5rem 0rem 0.5rem 0rem",
                  }}
                >
                  General Information
                </Typography>

                <Box className="flex flex-col items-start w-full justify-between">
                  <Box className="flex items-center mt-2 mb-1">
                    <Box className="flex items-center gap-1 min-w-[170px] ">
                      <CabinRoundedIcon sx={{ color: "grey" }} />
                      <Typography
                        sx={{
                          color: "grey",
                          fontWeight: "300",
                          fontSize: "13px",
                        }}
                      >
                        Total Reg. Outlets:
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "500",
                        fontSize: "15px",
                      }}
                    >
                      ---
                    </Typography>
                  </Box>
                  <Box className="flex items-center mt-2 mb-1 justify-between ">
                    <Box className="flex items-center gap-1 min-w-[170px]  ">
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
                      Agricultural Economic Students’ Association (AECOSA)
                    </Typography>
                  </Box>
                  <Box className="flex  items-center mt-2 mb-1 justify-between ">
                    <Box className="flex items-center gap-1 min-w-[170px] ">
                      <EmailOutlinedIcon sx={{ color: "grey" }} />
                      <Typography
                        sx={{
                          color: "grey",
                          fontWeight: "300",
                          fontSize: "13px",
                        }}
                      >
                        Register Name:
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "500",
                        fontSize: "15px",
                      }}
                    >
                      Agricultural Economic Students’ Association (AECOSA)
                    </Typography>
                  </Box>
                  <Box className="flex  items-center mt-2 mb-1 justify-between ">
                    <Box className="flex items-center gap-1 min-w-[170px]">
                      <PersonOutlineRoundedIcon sx={{ color: "grey" }} />
                      <Typography
                        sx={{
                          color: "grey",
                          fontWeight: "300",
                          fontSize: "13px",
                        }}
                      >
                        CAC:
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "500",
                        fontSize: "15px",
                      }}
                    >
                      081773
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className="border border-grey-500 rounded-md flex min-h-[48vh] bg-white item-start flex-col mt-2 items-start w-[100%] p-3">
                <Typography
                  sx={{
                    color: "grey",
                    fontWeight: "400",
                    fontSize: "13px",
                    margin: "0.5rem 0rem 0.5rem 0rem",
                  }}
                >
                  Branch Manager's Information
                </Typography>

                <Box className="flex flex-col items-start w-full justify-center">
                  <Box className="flex items-center mt-2 mb-1">
                    <Box className="flex items-center gap-1 w-[150px] ">
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
                      Eleanor Poe
                    </Typography>
                  </Box>
                  <Box className="flex items-center mt-2 mb-1 justify-between ">
                    <Box className="flex items-center gap-1 w-[150px] ">
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
                    <Box className="flex items-center gap-1 w-[150px] ">
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

                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "500",
                        fontSize: "15px",
                      }}
                    >
                      example@gmail.com
                    </Typography>
                  </Box>
                  <Box className="flex  items-center mt-2 mb-1 justify-between ">
                    <Box className="flex items-center gap-1 w-[150px]">
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

                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "500",
                        fontSize: "15px",
                      }}
                    >
                      08177338833
                    </Typography>
                  </Box>
                  <Box className="flex  items-center mt-2 mb-1 justify-between ">
                    <Box className="flex items-center gap-1 w-[150px]">
                      <LocalPhoneOutlinedIcon sx={{ color: "grey" }} />
                      <Typography
                        sx={{
                          color: "grey",
                          fontWeight: "300",
                          fontSize: "13px",
                        }}
                      >
                        Alt Phone Num:
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "500",
                        fontSize: "15px",
                      }}
                    >
                      09866252233
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className="border bg-white border-grey-500 rounded-md flex flex-col mt-2 items-start w-[100%] p-3">
                <Typography
                  sx={{
                    color: "grey",
                    fontWeight: "400",
                    fontSize: "13px",
                    margin: "0.5rem 0rem 0.5rem 0rem",
                  }}
                >
                  Outlet Information
                </Typography>

                <Box className="flex flex-col items-start w-full justify-center">
                  <Box className="flex items-center mt-2 mb-1">
                    <Box className="flex items-center gap-1 min-w-[170px] ">
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
                      01-04-2022
                    </Typography>
                  </Box>
                  <Box className="flex items-center mt-2 mb-1 justify-between ">
                    <Box className="flex items-center gap-1 min-w-[170px] ">
                      <FmdGoodRoundedIcon sx={{ color: "grey" }} />
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
                  <Box className="flex  items-center mt-2 mb-1 justify-between ">
                    <Box className="flex items-center gap-1 min-w-[170px]">
                      <FmdGoodRoundedIcon sx={{ color: "grey" }} />
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

                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "500",
                        fontSize: "15px",
                      }}
                    >
                      Shop 4, Check Complex, Akala Express, Ibadan, Oyo State
                    </Typography>
                  </Box>
                  <Box className="flex  items-center mt-2 mb-1 justify-between ">
                    <Box className="flex items-center gap-1 min-w-[170px]">
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

                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "500",
                        fontSize: "15px",
                      }}
                    >
                      08177338833
                    </Typography>
                  </Box>
                  <Box className="flex  items-center mt-2 mb-1 justify-between ">
                    <Box className="flex items-center gap-1 min-w-[170px]">
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

                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "500",
                        fontSize: "15px",
                      }}
                    >
                      example@domain.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box className="border bg-white border-grey-500 min-h-[42.5vh] rounded-md flex flex-col mt-2 items-start w-[100%] p-3">
                <Typography
                  sx={{
                    color: "grey",
                    fontWeight: "400",
                    fontSize: "13px",
                    margin: "0.5rem 0rem 0.5rem 0rem",
                  }}
                >
                  OUTLET BANK'S INFORMATION
                </Typography>

                <Box className="flex flex-col items-start w-full justify-center">
                  <Box className="flex items-center mt-2 mb-1">
                    <Box className="flex items-center gap-1 min-w-[170px] ">
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
                      Guarantee Trust Bank
                    </Typography>
                  </Box>
                  <Box className="flex items-center mt-2 mb-1 justify-between ">
                    <Box className="flex items-center gap-1 min-w-[170px] ">
                      <CabinRoundedIcon sx={{ color: "grey" }} />
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
                      Cascade Lounge
                    </Typography>
                  </Box>
                  <Box className="flex  items-center mt-2 mb-1 justify-between ">
                    <Box className="flex items-center gap-1 min-w-[170px]">
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

                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "500",
                        fontSize: "15px",
                      }}
                    >
                      45456464554
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box className="border border-grey-500 bg-white rounded-md flex flex-col mt-2 items-start w-[100%] p-3">
            {/* customers  */}
            <Box sx={{ maxHeight: "65vh", overflowY: "scroll", width: "100%" }}>
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
    </Box>
  );
};

export default BillersProfile;
