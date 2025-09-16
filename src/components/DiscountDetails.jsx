import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  TablePagination,
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  Paper,
  TableRow,
} from "@mui/material";
import closeIcon from "../assets/images/closeIcon.svg";

const pickUp = [
  {
    id: 1,
    name: "spaghetti",
    qty: 2,
    price: 400,
  },
  {
    id: 2,
    name: "jollof rice",
    qty: 3,
    price: 500,
  },
  {
    id: 3,
    name: "Beef",
    qty: 4,
    price: 500,
  },
  {
    id: 4,
    name: "salad",
    qty: 3,
    price: 5000,
  },
];

const DiscountDetails = () => {
  const [page, setPage] = useState(0);
  const initialRowsPerPage = 10;
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);
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
  return (
    <Box sx={style}>
      <Box
        sx={{
          width: "100%",
          maxHeight: "90vh",
          overflowY: "scroll",
          display: "flex",
          gap: "16px",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: "2rem",
          }}
        >
          <Typography
            sx={{
              fontWeight: "900",
              color: "#1E1E1E",
              fontWeight: "500",
              fontSize: "20px",
            }}
          >
            Offer/Discount Details
          </Typography>

          <Box
            onClick={() => setDepositDetails(false)}
            className="cursor-pointer"
          >
            <img src={closeIcon} alt="c-icon" />
          </Box>
        </Box>

        {/* qr code */}
        <Box
          sx={{
            width: "100%",
            background: "#E0E0E0",
            borderRadius: "8px",
            minHeight: "16.6rem",
            p: "0.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "start",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "900",
              color: "#1E1E1E",
              borderRadius: "8px",
              fontSize: "14px",
              my: "10px",
            }}
          >
            CUSTOMERS DETAILS
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "150px",
                color: "#828282",
                fontWeight: "500",
                fontSize: "17px",
              }}
            >
              Name :
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "17px",
                color: "#1E1E1E",
              }}
            >
              {/* {details?.user?.fullName} */}emmanuel
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "150px",
                color: "#828282",
                fontWeight: "500",
                fontSize: "17px",
              }}
            >
              Email Address:
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "17px",
                color: "#1E1E1E",
              }}
            >
              {/* {details?.user?.email} */}emma@gmail.com
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "150px",
                color: "#828282",
                fontWeight: "500",
                fontSize: "17px",
              }}
            >
              Phone Number:
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "17px",
                color: "#1E1E1E",
              }}
            >
              {/* {details?.user?.phoneNumber} */}0815533444
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "150px",
                color: "#828282",
                fontWeight: "500",
                fontSize: "17px",
              }}
            >
              Address:
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "17px",
                color: "#1E1E1E",
              }}
            >
              {/* {details?.user?.phoneNumber} */}Sonikaz Hostel, Funaab,
              Abeokuta
            </Typography>
          </Box>
        </Box>
        {/* order details */}
        <Box
          sx={{
            border: "1px solid #e0e0e0",
            padding: "20px",
            borderRadius: "8px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontWeight: "900",
              color: "#1E1E1E",
              borderRadius: "8px",
              fontSize: "14px",
              my: "10px",
            }}
          >
            ORDER DETAILS
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "180px",
                color: "#828282",
                fontWeight: "500",
                fontSize: "17px",
              }}
            >
              Order ID :
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "17px",
                color: "#1E1E1E",
              }}
            >
              {/* {details?.user?.fullName} */}ID: ejsHjoErnck
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "180px",
                color: "#828282",
                fontWeight: "500",
                fontSize: "17px",
              }}
            >
              Date :
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "17px",
                color: "#1E1E1E",
              }}
            >
              {/* {details?.user?.fullName} */}01-04-2023
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "180px",
                color: "#828282",
                fontWeight: "500",
                fontSize: "17px",
              }}
            >
              Merchant :
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "17px",
                color: "#1E1E1E",
              }}
            >
              {/* {details?.user?.fullName} */}Cascade Lounge
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "180px",
                color: "#828282",
                fontWeight: "500",
                fontSize: "17px",
              }}
            >
              Attendant :
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "17px",
                color: "#1E1E1E",
              }}
            >
              {/* {details?.user?.fullName} */}Anjous Temitayo
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "180px",
                color: "#828282",
                fontWeight: "500",
                fontSize: "17px",
              }}
            >
              Time Placed :
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "17px",
                color: "#1E1E1E",
              }}
            >
              {/* {details?.user?.fullName} */}09:34 AM
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "180px",
                color: "#828282",
                fontWeight: "500",
                fontSize: "17px",
              }}
            >
              Time Completed :
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "17px",
                color: "#1E1E1E",
              }}
            >
              {/* {details?.user?.fullName} */}09:34 AM
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "180px",
                color: "#828282",
                fontWeight: "500",
                fontSize: "17px",
              }}
            >
              Preferences :
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "17px",
                color: "#1E1E1E",
              }}
            >
              {/* {details?.user?.fullName} */}Delivery
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "180px",
                color: "#828282",
                fontWeight: "500",
                fontSize: "17px",
              }}
            >
              Table Number :
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "17px",
                color: "#1E1E1E",
              }}
            >
              {/* {details?.user?.fullName} */}04
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "180px",
                color: "#828282",
                fontWeight: "500",
                fontSize: "17px",
              }}
            >
              Offer/Discount :
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "17px",
                color: "#C57600",
              }}
            >
              {/* {details?.user?.fullName} */}20% OFF Delivery for New Customer
              (-₦50)
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "180px",
                color: "#828282",
                fontWeight: "500",
                fontSize: "17px",
              }}
            >
              Grand Total :
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "17px",
                color: "#C57600",
              }}
            >
              {/* {details?.user?.fullName} */}₦5,900
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                width: "180px",
                color: "#828282",
                fontWeight: "500",
                fontSize: "17px",
              }}
            >
              Transaction Status :
            </Typography>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "17px",
                color: "#1E1E1E",
              }}
            >
              {/* {details?.user?.fullName} */}Out for Delivery
            </Typography>
          </Box>
        </Box>
        {/* order table */}

        <Box
          sx={{
            border: "1px solid #e0e0e0",
            padding: "20px",
            borderRadius: "8px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#1E1E1E",
              borderRadius: "8px",
              fontSize: "14px",
              mb: "10px",
            }}
          >
            ORDER(S)
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "900",
                    color: "#1E1E1E",
                    fontSize: "14px",
                    mb: "10px",
                  }}
                >
                  Order 1 (Delivery)
                </Typography>
                <Box
                  sx={{
                    overflowY: "scroll",
                    maxHeight: "50vh",
                    width: "100%",
                  }}
                >
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead
                        sx={{
                          background: "#F8F8F8",
                        }}
                      >
                        <TableRow>
                          <TableCell sx={{ fontSize: "10px" }}>S/N</TableCell>
                          <TableCell sx={{ fontSize: "10px" }}>
                            ITEM NAME
                          </TableCell>
                          <TableCell sx={{ fontSize: "10px" }}>QTY</TableCell>
                          <TableCell sx={{ fontSize: "10px" }}>
                            UNIT PRICE
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {pickUp
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((item, i) => (
                            <TableRow key={item.id}>
                              <TableCell sx={{ fontSize: "10px" }}>
                                {page * rowsPerPage + i + 1}
                              </TableCell>
                              <TableCell
                                sx={{ fontWeight: "500", fontSize: "10px" }}
                              >
                                {item?.name}
                              </TableCell>
                              <TableCell
                                sx={{ fontWeight: "500", fontSize: "10px" }}
                              >
                                {item?.qty}
                              </TableCell>

                              <TableCell
                                sx={{ fontWeight: "500", fontSize: "10px" }}
                              >
                                {item?.price}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        my: "20px",
                        p: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "400",
                          color: "#1E1E1E",
                          fontSize: "14px",
                          mb: "10px",
                        }}
                      >
                        Total
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "900",
                          color: "#1E1E1E",
                          fontSize: "14px",
                          mb: "10px",
                        }}
                      >
                        N9,500
                      </Typography>
                    </Box>
                  </TableContainer>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "900",
                    color: "#1E1E1E",
                    fontSize: "14px",
                    mb: "10px",
                  }}
                >
                  Order 2 (Pick-Up)
                </Typography>
                <Box
                  sx={{
                    overflowY: "scroll",
                    maxHeight: "50vh",
                    width: "100%",
                  }}
                >
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead
                        sx={{
                          background: "#F8F8F8",
                        }}
                      >
                        <TableRow>
                          <TableCell sx={{ fontSize: "10px" }}>S/N</TableCell>
                          <TableCell sx={{ fontSize: "10px" }}>
                            ITEM NAME
                          </TableCell>
                          <TableCell sx={{ fontSize: "10px" }}>QTY</TableCell>
                          <TableCell sx={{ fontSize: "10px" }}>
                            UNIT PRICE
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {pickUp
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((item, i) => (
                            <TableRow key={item.id}>
                              <TableCell sx={{ fontSize: "10px" }}>
                                {page * rowsPerPage + i + 1}
                              </TableCell>
                              <TableCell
                                sx={{ fontWeight: "500", fontSize: "10px" }}
                              >
                                {item?.name}
                              </TableCell>
                              <TableCell
                                sx={{ fontWeight: "500", fontSize: "10px" }}
                              >
                                {item?.qty}
                              </TableCell>

                              <TableCell
                                sx={{ fontWeight: "500", fontSize: "10px" }}
                              >
                                {item?.price}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        my: "20px",
                        p: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "400",
                          color: "#1E1E1E",
                          fontSize: "14px",
                          mb: "10px",
                        }}
                      >
                        Total
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "900",
                          color: "#1E1E1E",
                          fontSize: "14px",
                          mb: "10px",
                        }}
                      >
                        N9,500
                      </Typography>
                    </Box>
                  </TableContainer>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* button */}

        <Box
          sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            sx={{
              background: "#333333",
              padding: "10px",
              borderRadius: "8px",
              mt: "10px",
              width: "40%",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#333333",
              },
              textTransform: "capitalize",
              fontWeight: "500",
            }}
          >
            Okay
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DiscountDetails;
