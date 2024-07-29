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
  Container,
  TextField,
  TablePagination,
  ToggleButtonGroup,
  ToggleButton,
  Card,
  Typography,
  Modal,
} from "@mui/material";
import closeIcon from "../assets/images/closeIcon.svg";
import { useSelector } from "react-redux";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import HourglassTopRoundedIcon from "@mui/icons-material/HourglassTopRounded";
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

const WithdrawHistory = () => {
  const [open1, setOpen1] = React.useState(false);
  const handleClose1 = () => setOpen1(false);
  const [page, setPage] = useState(0);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [items, setItems] = useState([
    {
      id: 1,
      amt: "500,000",
      date: "11-05-2023 at 11:15am",
      status: "sucessfull",
    },
    {
      id: 2,
      amt: "500,000",
      date: "11-05-2023 at 11:15am",
      status: "sucessfull",
    },
    {
      id: 3,
      amt: "500,000",
      date: "11-05-2023 at 11:15am",
      status: "pending",
    },
    {
      id: 4,
      amt: "500,000",
      date: "11-05-2023 at 11:15am",
      status: "sucessfull",
    },
    {
      id: 5,
      amt: "500,000",
      date: "11-05-2023 at 11:15am",
      status: "failed",
    },
    {
      id: 6,
      amt: "500,000",
      date: "11-05-2023 at 11:15am",
      status: "sucessfull",
    },
    {
      id: 7,
      amt: "500,000",
      date: "11-05-2023 at 11:15am",
      status: "pending",
    },
    {
      id: 8,
      amt: "500,000",
      date: "11-05-2023 at 11:15am",
      status: "pending",
    },
    {
      id: 9,
      amt: "500,000",
      date: "11-05-2023 at 11:15am",
      status: "failed",
    },
    {
      id: 10,
      amt: "500,000",
      date: "11-05-2023 at 11:15am",
      status: "pending",
    },
  ]);
  const { transactionDetails } = useSelector((state) => state);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const withdrawalData = transactionDetails.queryResult.filter(
    (item) => item.transactionType === "WITHDRAWAL"
  );
  console.log(withdrawalData);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  function modDate(value) {
    const date = new Date(value);
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hrs = date.getHours();
    const mins = date.getMinutes();
    const period = hrs >= 12 ? "pm" : "am";
    const formattedHours = hrs % 12 || 12;

    return `${day} - ${month} - ${year} at ${formattedHours}:${mins} ${period}`;
  }
  function viewDetails(i) {
    setIndex(i);
    setOpen1(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        padding: "1rem",
        backgroundColor: "#fffcfc",
      }}
    >
      <Typography
        sx={{
          fontWeight: "500",
          fontSize: "20px",
          color: "#1E1E1E",
          margin: "0 0 2rem 0",
        }}
      >
        Withdrawal History
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, padding: "8px" }}>
          <TableHead
            sx={{
              background: "#F8F8F8",
            }}
          >
            <TableRow>
              <TableCell>S/N</TableCell>
              <TableCell>Amount (₦)</TableCell>
              <TableCell>Date & Time</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {withdrawalData.length > 0 ? (
              withdrawalData.map((item, i) => (
                <TableRow key={item.id}>
                  <TableCell>{i + 1}</TableCell>
                  <TableCell>{item?.amount}</TableCell>
                  <TableCell>{modDate(item?.createdAt)}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        textTransform: "capitalize",
                        color: "#DC0019",
                        background:
                          item.transactionStatus === "SUCCESS"
                            ? "#EBFFF3"
                            : item.transactionStatus === "PENDING"
                            ? "#FFF0F0"
                            : "#FFF0F0",
                        color:
                          item.transactionStatus === "SUCCESS"
                            ? "#1E854A"
                            : item.transactionStatus === "PENDING"
                            ? "#CDA11E"
                            : "#E52929",
                        width:
                          item.transactionStatus === "SUCCESS"
                            ? "105px"
                            : item.transactionStatus === "PENDING"
                            ? "90px"
                            : "90px",
                        fontWeight: "500",
                        fontSize: "12px",
                        border: "none",
                        padding: "4px 8px 4px 8px",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        border: "1px solid #E0E0E0",
                      }}
                    >
                      {item.transactionStatus === "SUCCESS" ? (
                        <CheckCircleOutlineRoundedIcon
                          sx={{
                            fontSize: "12px",
                          }}
                        />
                      ) : item.transactionStatus === "PENDING" ? (
                        <HourglassTopRoundedIcon
                          sx={{
                            fontSize: "12px",
                          }}
                        />
                      ) : (
                        <InfoOutlinedIcon
                          sx={{
                            fontSize: "12px",
                          }}
                        />
                      )}

                      {item.transactionStatus}
                    </Box>
                  </TableCell>

                  <TableCell>
                    <Button
                      onClick={() => viewDetails(i)}
                      variant="outlined"
                      sx={{
                        textTransform: "capitalize",
                        color: "#DC0019",
                        fontWeight: "600",
                        fontSize: "14px",
                        border: "1px solid #E0E0E0",
                        "&:hover": {
                          backgroundColor: "#fff",
                          border: "1px solid #E0E0E0",
                        },
                        // lineHeight: "26.4px",
                      }}
                    >
                      View More
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <Typography className="flex self-center p-3  min-w-full">
                No transactions yet.
              </Typography>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* Modal for detaisl */}

      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        PaperProps={{
          sx: {
            border: "none", // Remove the border
            boxShadow: "none", // Remove the box shadow
          },
        }}
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
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
              Withdrawal Details
            </Typography>

            <Box onClick={handleClose1}>
              <img src={closeIcon} alt="c-icon" />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              border: "1px solid #E0E0E0",
              p: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              borderRadius: "8px",
              my: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                mt: "1rem",
                mb: "0.2rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  color: "#828282",
                  fontSize: "14px",
                }}
              >
                Transaction ID:
              </Typography>

              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                ID:{withdrawalData[index]?.id.slice(1, 12)}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  color: "#828282",
                  fontSize: "14px",
                }}
              >
                Date and Time:
              </Typography>

              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                {modDate(withdrawalData[index]?.createdAt)}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                mb: "0.2rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  color: "#828282",
                  fontSize: "14px",
                }}
              >
                Amount:
              </Typography>

              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                {withdrawalData[index]?.amount}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                mb: "0.2rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  color: "#828282",
                  fontSize: "14px",
                }}
              >
                Transaction Status:
              </Typography>

              <Box
                sx={{
                  textTransform: "capitalize",
                  color: "#DC0019",
                  background:
                    withdrawalData[index]?.transactionStatus === "SUCCESS"
                      ? "#EBFFF3"
                      : withdrawalData[index]?.transactionStatus === "PENDING"
                      ? "#FFF0F0"
                      : "#FFF0F0",
                  color:
                    withdrawalData[index]?.transactionStatus === "SUCCESS"
                      ? "#1E854A"
                      : withdrawalData[index]?.transactionStatus === "PENDING"
                      ? "#CDA11E"
                      : "#E52929",
                  width:
                    withdrawalData[index]?.transactionStatus === "SUCCESS"
                      ? "105px"
                      : withdrawalData[index]?.transactionStatus === "PENDING"
                      ? "90px"
                      : "90px",
                  fontWeight: "500",
                  fontSize: "12px",
                  border: "none",
                  padding: "4px 8px 4px 8px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  border: "1px solid #E0E0E0",
                }}
              >
                {withdrawalData[index]?.transactionStatus === "SUCCESS" ? (
                  <CheckCircleOutlineRoundedIcon
                    sx={{
                      fontSize: "12px",
                    }}
                  />
                ) : withdrawalData[index]?.transactionStatus === "PENDING" ? (
                  <HourglassTopRoundedIcon
                    sx={{
                      fontSize: "12px",
                    }}
                  />
                ) : (
                  <InfoOutlinedIcon
                    sx={{
                      fontSize: "12px",
                    }}
                  />
                )}

                {withdrawalData[index]?.transactionStatus}
              </Box>
            </Box>
          </Box>

          {/* es */}

          <Box
            sx={{
              width: "100%",
              background: "#fff",
              border: "1px solid #E0E0E0",
              p: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              borderRadius: "8px",
            }}
          >
            <Typography
              sx={{
                fontWeight: "500",
                color: "#1E1E1E",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              DESIGNATED BANK ACCOUNT
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                mt: "1rem",
                mb: "0.2rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  color: "#828282",
                  fontSize: "14px",
                }}
              >
                Bank Name:
              </Typography>

              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                {withdrawalData[index]?.bankDetails.bank}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  color: "#828282",
                  fontSize: "14px",
                }}
              >
                Account Number:
              </Typography>

              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                {withdrawalData[index]?.bankDetails.accountNumber}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                mb: "0.2rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  color: "#828282",
                  fontSize: "14px",
                }}
              >
                Account Name:
              </Typography>

              <Typography
                sx={{
                  color: "#C57600",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                {withdrawalData[index]?.bankDetails.name}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
      {/* Modal ends */}
    </Box>
  );
};

export default WithdrawHistory;
