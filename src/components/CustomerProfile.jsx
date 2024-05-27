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
import DoughnutChart from "./DoughnutChart";
import CustomerProfileDetails from "./CustomerProfileDetails";
import celeb from "../assets/celeb.svg";
import bage1 from "../assets/bage1.svg";

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
const CustomerProfile = ({
  customerDataById,
  showCustomerProfile,
  handleCloseShowCustomerProfile,
}) => {

  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const handleCloseProfileDetails = () => setShowProfileDetails(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  return (
    <Box className="w-full overflow-y-scroll max-h-[70vh]">
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Box className="w-full bg-white rounded-md p-2 flex flex-col border-grey-400  border-[1px] items-start justify-center">

            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "500",
                fontSize: "15px",
                p: "1rem",
              }}
            >
              Bonus Point
            </Typography>

            <Box className="flex items-center w-full justify-evenly ">
              <Box className="flex flex-col items-start pl-4 gap-3 border-r border-grey-400 w-full mr-8">
                <Box className="flex gap-2 items-center">
                  <img src={celeb} alt="c-img" />

                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "300",
                      fontSize: "12px",
                    }}
                  >
                    100% Welcome Bonus
                    <br /> Received
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  N600,0000
                </Typography>
              </Box>
              <Box className="flex flex-col items-start gap-3 border-r border-grey-400 w-full mr-8">
                <Box className="flex gap-2 items-center">
                  <img src={celeb} alt="c-img" />

                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "300",
                      fontSize: "12px",
                    }}
                  >
                    Total Mycliq Point
                    <br /> Received
                  </Typography>
                </Box>
                <Box className="flex gap-4 items-center">
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "300",
                      fontSize: "10px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    All time:
                    <span className="text-lg text-black font-bold">1,770</span>
                  </Typography>
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "300",
                      fontSize: "10px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    By Filter:
                    <span className="text-lg text-black font-bold">30</span>
                  </Typography>
                </Box>
              </Box>
              <Box className="flex flex-col items-start gap-3 w-full">
                <Box className="flex gap-2 items-center">
                  <img src={celeb} alt="c-img" />

                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "300",
                      fontSize: "12px",
                    }}
                  >
                    Mycliq Point
                    <br /> Used
                  </Typography>
                </Box>
                <Box className="flex gap-4 items-center">
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "300",
                      fontSize: "10px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    All time:
                    <span className="text-lg text-black font-bold">1,770</span>
                  </Typography>
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "300",
                      fontSize: "10px",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    By Filter:
                    <span className="text-lg text-black font-bold">30</span>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box className="w-full bg-white rounded-md p-4 flex-col border-grey-400 border-[1px] max-h-[96vh]  overflow-y-scroll items-start justify-center">
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

            <Box className="w-full flex items-start flex-col   gap-[4rem] my-3 border-b border-grey-400  pb-1">
              <Box className="ml-3">
                <img src={bigavatar} className="object-contain" alt="b-a" />
              </Box>
              <Box className="flex flex-col items-start w-full justify-center">
                <Typography
                  sx={{
                    color: "grey",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  BASIC
                </Typography>
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
                    {`${customerDataById?.lastName}  ${customerDataById?.firstName}`}
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
                    {customerDataById?.email}
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
                    {customerDataById?.phoneNumber}
                  </Typography>
                </Box>
                <Box className="flex  items-center mt-2 mb-1 justify-between ">
                  <Box className="flex items-center gap-1 w-[150px]">
                    <FmdGoodRoundedIcon sx={{ color: "grey" }} />
                    <Typography
                      sx={{
                        color: "grey",
                        fontWeight: "300",
                        fontSize: "13px",
                      }}
                    >
                      Address:
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "500",
                      fontSize: "15px",
                    }}
                  >
                    {" "}
                    {customerDataById?.address || "address is here"}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="flex flex-col items-start w-full justify-center py-2">
              <Typography
                sx={{
                  color: "grey",
                  fontWeight: "500",
                  fontSize: "15px",
                }}
              >
                BANK DETAILS
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
                  Providus Bank
                </Typography>
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
                  2211223445
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
                  Safe Haven
                </Typography>
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
                  2211223445
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Grid item xs={12}>
            <Box className="w-full mb-3 bg-white rounded-md p-2 flex-col border-grey-400  border-[1px] items-start justify-center">
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "500",
                  fontSize: "14px",
                  gap: "5px",
                  py: "1rem",
                }}
              >
                Account & Activity
              </Typography>

              <Box className="flex items-center mt-2 mb-1 ">
                <Box className="flex items-center gap-1  w-[150px] ">
                  <PersonOutlineRoundedIcon sx={{ color: "grey" }} />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "13px",
                    }}
                  >
                    Account status:
                  </Typography>
                </Box>

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
                  }}
                >
                  <span className="w-[10px] h-[10px] rounded-full  bg-green-600" />
                  Active
                </Typography>
              </Box>
              <Box className="flex  items-center mt-2 mb-1 ">
                <Box className="flex items-center gap-1 w-[150px] ">
                  <PersonOutlineRoundedIcon sx={{ color: "grey" }} />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "13px",
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
                  <span className="font-bold ml-2">Tier 1</span>
                </Typography>
              </Box>
              <Box className="flex  items-center mt-2 mb-1 ">
                <Box className="flex items-center gap-1 w-[150px]">
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
                  01/05/2023 at 08:54 PM
                </Typography>
              </Box>
              <Box className="flex  items-center mt-2 mb-1  ">
                <Box className="flex items-center gap-1 w-[150px]">
                  <AccessTimeRoundedIcon sx={{ color: "grey" }} />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "13px",
                    }}
                  >
                    Last Seen:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  01/05/2023 at 08:54 PM
                </Typography>
              </Box>
              <Box className="flex  items-center mt-2 mb-1 ">
                <Box className="flex items-center gap-1 w-[150px]">
                  <FmdGoodRoundedIcon sx={{ color: "grey" }} />
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "300",
                      fontSize: "13px",
                    }}
                  >
                    Order Count:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  32
                </Typography>
              </Box>
              <Box className="flex  items-center mt-2 mb-1 ">
                <Box className="flex items-center gap-1 w-[150px]">
                  <HttpsOutlinedIcon sx={{ color: "red" }} />
                  <Typography
                    sx={{
                      color: "red",
                      fontWeight: "300",
                      fontSize: "13px",
                    }}
                  >
                    Disable Account:
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "500",
                    fontSize: "15px",
                  }}
                >
                  32
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className="w-full bg-white rounded-md p-2 flex-col border-grey-400  border-[1px] items-start justify-center">
              <DoughnutChart
                title="Transaction Insight"
                values={[100, 40, 90, 50]}
                label={["Orders", "Bank Transfer", "Wallet To wallet", "Bills"]}
                color={["#FF4069", "#36A2EB", "#FF9F40", "#27AE60"]}
              />
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

      {/* Modall for  deposit detailsl */}

      <Modal
        open={showProfileDetails}
        onClose={handleCloseProfileDetails}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        PaperProps={{
          sx: {
            border: "none", // Remove the border
            boxShadow: "none", // Remove the box shadow
          },
        }}
      >
        <CustomerProfileDetails setShowProfileDetails={setShowProfileDetails} />
      </Modal>
      {/* Modal deposit ends */}
    </Box>
  );
};

export default CustomerProfile;
