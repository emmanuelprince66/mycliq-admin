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

import search from "../../src/assets/search.svg";

import download from "../assets/images/download.svg";
import { useMutation, useQuery } from "@tanstack/react-query";

import CircularProgress from "@mui/material/CircularProgress";
import FormattedPrice from "../components/FormattedPrice";
import fdown from "../assets/fdown.svg";
import ArrowRight from "../assets/images/arrow-right.svg";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { AuthAxios } from "../helpers/axiosInstance";

import InputAdornment from "@mui/material/InputAdornment";
import side from "../assets/images/admin/side.svg";
import percent from "../assets/images/admin/percent.svg";
import upcolor from "../assets/images/admin/upcolor.svg";
import SelectDate from "../components/SelectDate";
import DoughnutChart from "../components/DoughnutChart";
import { useDispatch } from "react-redux";
import { fillCustomersData } from "../utils/store/merchantSlice";

import CustomerProfile from "../components/CustomerProfile";
const Customer = () => {

const dispatch  = useDispatch();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [showCustomerProfile, setShowCustomerProfile] = useState(false);
  const [customerData , setCustomerData] = useState([]) 
  const [customerDataById , setCustomerDataById] = useState([])


  
  

  
const { data: customers, error, isLoading } = useQuery({
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
  console.log(data)
  },
  staleTime: 5000, // Cache data for 5 seconds
}); 
    
    
      const handleShowCustomerProfile = () => setShowCustomerProfile(true);
      const handleCloseShowCustomerProfile = () =>
        setShowCustomerProfile(false);
      const handleOpenCustomerProfile = (id) => {
        console.log(id);
        setCustomerDataById(customers[id]);
        handleShowCustomerProfile();
      };

  return (
    <Box
      sx={{
        width: "100%",
        padding: "1rem",
        backgroundColor: "#fffcfc",
      }}
    >
      <SelectDate />
      <Box
        sx={{
          width: "100%",
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
                fomtWeight: "500",
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
                fomtWeight: "600",
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
                Total <br />
                Outflow
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{
                fomtWeight: "600",
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
                fomtWeight: "500",
                fontSize: "14px",
                color: "#4F4F4F",
              }}
            >
              Commission's Total
              <br />
              Wallet Balance
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fomtWeight: "600",
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
              <img src={side} className="fd" alt="f-down" />
            </Box>
            <Typography
              sx={{
                fomtWeight: "500",
                fontSize: "14px",
                color: "#4F4F4F",
              }}
            >
              Commission
              <br />
              From Customers{" "}
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fomtWeight: "600",
                fontSize: "24px",
                color: "##1E1E1E",
              }}
            >
              <FormattedPrice amount={Number(20000 || 0)} />
            </Typography>
          </Box>
        </Card>
      </Box>

      <Box
        className="w-full overflow-y-s
      croll max-h-[60vh]"
      >
        {!showCustomerProfile ? (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box className="w-full bg-white rounded-md p-2 flex-col border-grey-400 border-[1px] items-start justify-center">
                <Box className="flex w-full justify-between items-center">
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "500",
                      fontSize: "15px",
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
                      730
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
                {/* search ends */}

                {/* customers  */}
                <Box sx={{ maxHeight: "100vh", overflowY: "scroll" }}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 100, padding: "8px" }}>
                      <TableBody>
                        {!customers || customers?.length === 0 || isLoading ? (
                          <CircularProgress
                            size="4.2rem"
                            sx={{
                              color: "#DC0019",
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
                                      height: "40px",
                                      width: "40px",
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
