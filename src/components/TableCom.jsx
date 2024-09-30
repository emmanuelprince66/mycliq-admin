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
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ReportOutlinedIcon from "@mui/icons-material/ReportOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import side from "../assets/images/admin/side.svg";
import percent from "../assets/images/admin/percent.svg";
import upcolor from "../assets/images/admin/upcolor.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import selectIcon from "../assets/selectIcon.svg";
import downIcon from "../assets/images/arrowDown.svg";
import download from "../assets/images/download.svg";
import twoArrow from "../assets/twoArrow.svg";
import checkBlur from "../assets/checkBlur.svg";
import SyncAltRoundedIcon from "@mui/icons-material/SyncAltRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import closeIcon from "../assets/images/closeIcon.svg";
import fdown from "../assets/fdown.svg";
import fup from "../assets/fup.svg";
import { useSelector } from "react-redux";
import fbook from "../assets/fbook.svg";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import {
  saveTransactionData,
  fillUserDetails,
} from "../utils/store/merchantSlice";
import search from "../assets/images/admin/search.svg";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { AuthAxios } from "../helpers/axiosInstance";
import { TransactionDetails } from "./transactionDetails";
import { ArrowBackIosNewRounded, Discount } from "@mui/icons-material";
import FormattedPrice from "./FormattedPrice";
import DepositDetails from "./DepositDetails";
import WithdrawalDetails from "./WithdrawalDetails";
import DiscountDetails from "./DiscountDetails";
import CreateOffer from "./CreateOffer";
import CustomPagination from "./CustomPagination";
import { AirtimeModal } from "../pages/trx/AirtimeModal";
import { formatToIsoDateStr } from "../utils/formatIsoDateString";
import { adjustDateRange } from "../utils/dateFix";
import modDate from "../utils/moddate";
const TableCom = () => {
  const [transactionData, setTransactionData] = useState([]);
  const [open1, setOpen1] = React.useState(false);
  const [data, setData] = useState({});
  const handleClose1 = () => setOpen1(false);

  const [totalDeposits, setTotalDeposits] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showPaid, setShowPaid] = useState(null);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [details, setDetails] = useState({});
  const [openAirtimeModal, setOpenAirtimeModal] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [depositDetails, setDepositDetails] = useState(false);
  const [withdrawalDetails, setWithdrawalDetails] = useState(false);
  const [discountDetails, setDiscountDetails] = useState(false);
  const [createOffer, setCreateOffer] = useState(false);
  const { selectedDates } = useSelector((state) => state);

  const startDate = formatToIsoDateStr(selectedDates?.startDate);
  const endDate = formatToIsoDateStr(selectedDates?.endDate);

  const { startDate: newStartDate, endDate: newEndDate } = adjustDateRange(
    startDate,
    endDate
  );
  const totalPages = 8;
  const rowsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const [flow, setFlow] = useState(null);
  const [wallet, setWallet] = useState(null);
  const [payment, setPayment] = useState(null);

  const [transactionFilter, setTransactionFilter] = useState("All");

  const handleCloseDepositDetails = () => setDepositDetails(false);
  const handleCloseAirtimeModal = () => setOpenAirtimeModal(false);
  const handleCloseWithdrawalDetails = () => setWithdrawalDetails(false);
  const handleCloseDiscountDetails = () => setDiscountDetails(false);
  const handleCloseCreateOffer = () => setCreateOffer(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const handleSortByStatus = (status) => {
    setShowPaid(status);
    setPage(0);
  };

  const dispatch = useDispatch();
  const { transactionDetails } = useSelector((state) => state);

  const handleTransactionFilter = (val) => {
    console.log(val);

    switch (val) {
      case "All":
        setTransactionFilter(val);
        setFlow("");
        setWallet("");
        setPayment("");
        break;
      case "credit":
        setFlow(val);
        setTransactionFilter(val);
        setWallet(null);
        setPayment(null);
        break;
      case "debit":
        setFlow(val);
        setTransactionFilter(val);
        setWallet(null);
        setPayment(null);

        break;
      case "cliq_transfer":
        setWallet(val);
        setFlow(null);
        setPayment(null);
        setTransactionFilter(val);

        break;
      case "payment":
        setPayment(val);
        setTransactionFilter(val);
        setWallet(null);
        setFlow(null);
        break;
      default:
        break;
    }
  };


  const fetchTransactions = async ({ queryKey }) => {
    const [_key, { page, limit, flow, wallet, payment }] = queryKey;

    const params = new URLSearchParams();
    params.append("page", page);
    params.append("limit", limit);
    if (flow) params.append("entry", flow);
    if (payment) params.append("type", payment);
    if (wallet) params.append("subType", wallet);

    try {
      const response = await AuthAxios.get(
        `/admin/trx/all?${params.toString()}`
      );
      return response?.data?.data;
    } catch (error) {
      console.error("Error fetching transactions:", error);

      throw new Error("Failed to fetch transaction data");
    }
  };

  const {
    data: transactions,
    error,
    isLoading,
  } = useQuery({
    queryKey: [
      "transactions",
      {
        page: currentPage,
        limit: rowsPerPage,
        flow: flow,
        wallet: wallet,
        payment: payment,
      },
    ],
    queryFn: fetchTransactions,
    keepPreviousData: true,
    staleTime: 5000, // Cache data for 5 seconds
  });

  console.log("trx", transactions);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // fetch transactions analytics
  const { data: trxAnalytics, isLoading: analyticsLoading } = useQuery({
    queryFn: async () => {
      try {
        const response = await AuthAxios.get(`/admin/analytics/trx`, {
          params: {
            startDate: newStartDate,
            endDate: newEndDate,
          },
        });
        console.log(response);
        return response?.data?.data;
      } catch (error) {
        if (error?.response?.data?.code === 401) {
          navigate("/");
        }
        throw new Error("Failed to fetch customer data");
      }
    },
    onSuccess: (data) => {},
    staleTime: 5000, // Cache data for 5 seconds
  });

  useEffect(() => {
    if (transactions?.records) {
      // const paidData = response?.data?.queryResult.filter(
      //   (item) => item?.remittance?.paymentStatus === "PAID"
      // );
      // setPaidDataState(paidData.length);

      // const verifiedData = response?.data?.queryResult.filter(
      //   (item) => item?.remittance?.paymentStatus === "VERIFIED"
      // );
      // setVerifiedDataState(verifiedData.length);

      let filteredItems = transactions?.records;

      // Filter by name (if searchTerm exists)
      if (searchTerm) {
        filteredItems = filteredItems.filter((item) => {
          return (
            item?.origin?.accountName
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            item?.origin?.accountNumber
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          );
        });
      }

      // // Filter by date range (if selectedDates exist)
      // if (selectedDates) {
      //   const startDate = new Date(selectedDates.startDate);
      //   const endDate = new Date(selectedDates.endDate);
      //   endDate.setDate(endDate.getDate() + 1); // Increment by 1 day to include the end date

      //   filteredItems = filteredItems.filter((item) => {
      //     const createdAt = new Date(item?.createdAt);

      //     return (
      //       createdAt >= startDate && createdAt < endDate // Inclusive of start and end dates
      //     );
      //   });
      // }
      setTransactionData(filteredItems);
      dispatch(saveTransactionData(transactions?.records));
    }
  }, [transactions?.records, dispatch, selectedDates, searchTerm]);

  useEffect(() => {
    const amtOfTotalDeposit =
      transactions?.records &&
      transactionDetails.reduce(
        (prev, curr) => prev + JSON.parse(curr?.amount),
        0
      );

    setTotalDeposits(amtOfTotalDeposit);
  }, [transactionDetails, totalDeposits]);

  async function viewDetails(i, type) {
    setIndex(i);

    switch (type) {
      case "airtime":
        setOpenAirtimeModal(true);
        break;
      case "bank_transfer":
        setWithdrawalDetails(true);
        default:
        setOpenAirtimeModal(true)
        break;
    }
    // setOpen1(true);
  }

  return (
    <Box
      sx={{
        width: "100%",
        padding: "1rem",
        backgroundColor: "#fffcfc",
      }}
    >
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
                fontWeight: "500",
                fontSize: "14px",
                color: "#4F4F4F",
              }}
            >
              Total <br />
              Inward
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "15px",
                color: "#1E1E1E",
              }}
            >
              {analyticsLoading ? (
                <CircularProgress size="1.2rem" sx={{ color: "#f78105" }} />
              ) : (
                <FormattedPrice
                  amount={trxAnalytics?.transactions?.totalInwardsSum || 0}
                />
              )}
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
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#4F4F4F",
                }}
              >
                Total <br />
                OutWard
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "15px",
                color: "##1E1E1E",
              }}
            >
              {analyticsLoading ? (
                <CircularProgress size="1.2rem" sx={{ color: "#f78105" }} />
              ) : (
                <FormattedPrice
                  amount={trxAnalytics?.transactions?.totalOutwardsSum || 0}
                />
              )}
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
                fontWeight: "500",
                fontSize: "14px",
                color: "#4F4F4F",
              }}
            >
              Total
              <br />
              Commission
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "15px",
                color: "##1E1E1E",
              }}
            >
              {analyticsLoading ? (
                <CircularProgress size="1.2rem" sx={{ color: "#f78105" }} />
              ) : (
                <FormattedPrice
                  amount={trxAnalytics?.commissions?.totalInwardsSum || 0}
                />
              )}
            </Typography>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
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
                fontWeight: "500",
                fontSize: "14px",
                color: "#4F4F4F",
              }}
            >
              Total <br /> Revenue Lost
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "15px",
                color: "##1E1E1E",
              }}
            >
              <FormattedPrice
                amount={Number(transactionDetails?.walletBalance || 0)}
              />
            </Typography>
          </Box>
        </Card>
      </Box>

      <Box
        sx={{
          width: "100%",
          margin: "auto",
          padding: "1rem",
          backgroundColor: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "30px",
            justifyContent: "start",
            my: "1rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "16px",
              color: "#000",
            }}
          >
            Transactions
          </Typography>
          {/* search  */}
          <Box>
            <TextField
              sx={{
                borderRadius: "10px",
                width: "440px",
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
                    borderColor: "#FF7F00 ", // Set the border color on hover here
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#FF7F00", // Set the border color on focus here
                  },
                },
              }}
              placeholder="Search user, Transaction ID"
              variant="outlined"
              // value={searchTerm}
              // onChange={handleSearchChange}
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
        </Box>

        <div className="  mt-7  mb-2 w-full flex items-center gap-[2.5rem]">
          <div
            className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
            onClick={() => handleTransactionFilter("All")}
          >
            <div className="flex gap-2 items-center ">
              <p className="text-[15px] text-[#F78105] font-[500]">
                All Transaction
              </p>
              {transactionFilter === "All" && (
                <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                  <p className="text-[11px] text-[#A86500] font-[400]">
                    {!isLoading && transactions?.records?.length > 0 ? (
                      transactions?.totalRecords
                    ) : (
                      <CircularProgress
                        size="1rem"
                        sx={{
                          color: "#f78105",
                          marginLeft: "auto",
                        }}
                      />
                    )}
                  </p>
                </span>
              )}
            </div>
            {transactionFilter === "All" && (
              <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
            )}
          </div>
          <div
            className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
            onClick={() => handleTransactionFilter("credit")}
          >
            <div className="flex gap-2 items-center">
              <p className="text-[14px] text-[#F78105] font-[500]">Inward</p>
              {transactionFilter === "credit" && (
                <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                  <p className="text-[11px] text-[#A86500] font-[400]">
                    {!isLoading && transactions?.records?.length > 0 ? (
                      transactions?.totalRecords
                    ) : (
                      <CircularProgress
                        size="1rem"
                        sx={{
                          color: "#f78105",
                          marginLeft: "auto",
                        }}
                      />
                    )}
                  </p>
                </span>
              )}
            </div>
            {transactionFilter === "credit" && (
              <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
            )}
          </div>
          <div
            className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
            onClick={() => handleTransactionFilter("debit")}
          >
            <div className="flex gap-2 items-center">
              <p className="text-[15px] text-[#F78105] font-[500]">Outward</p>
              {transactionFilter === "debit" && (
                <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                  <p className="text-[11px] text-[#A86500] font-[400]">
                    {!isLoading && transactions?.records?.length > 0 ? (
                      transactions?.totalRecords
                    ) : (
                      <CircularProgress
                        size="1rem"
                        sx={{
                          color: "#f78105",
                          marginLeft: "auto",
                        }}
                      />
                    )}
                  </p>
                </span>
              )}
            </div>
            {transactionFilter === "debit" && (
              <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
            )}
          </div>
          <div
            className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
            onClick={() => handleTransactionFilter("cliq_transfer")}
          >
            <div className="flex gap-2 items-center">
              <p className="text-[15px] text-[#F78105] font-[500]">
                Wallet to Wallet
              </p>
              {transactionFilter === "cliq_transfer" && (
                <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                  <p className="text-[11px] text-[#A86500] font-[400]">
                    {!isLoading && transactions?.records?.length > 0 ? (
                      transactions?.totalRecords
                    ) : (
                      <CircularProgress
                        size="1rem"
                        sx={{
                          color: "#f78105",
                          marginLeft: "auto",
                        }}
                      />
                    )}
                  </p>
                </span>
              )}
            </div>
            {transactionFilter === "cliq_transfer" && (
              <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
            )}
          </div>
          <div
            className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
            onClick={() => handleTransactionFilter("payment")}
          >
            <div className="flex gap-2 items-center">
              <p className="text-[15px] text-[#F78105] font-[500]">
                Bill Payment
              </p>
              {transactionFilter === "payment" && (
                <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                  <p className="text-[11px] text-[#A86500] font-[400]">
                    {!isLoading && transactions?.records?.length > 0 ? (
                      transactions?.totalRecords
                    ) : (
                      <CircularProgress
                        size="1rem"
                        sx={{
                          color: "#f78105",
                          marginLeft: "auto",
                        }}
                      />
                    )}
                  </p>
                </span>
              )}
            </div>
            {transactionFilter === "payment" && (
              <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
            )}
          </div>
        </div>
        <Divider sx={{ marginTop: "-20px", mb: "1rem" }} />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, padding: "8px" }}>
            <TableHead sx={{ background: "#F8F8F8" }}>
              <TableRow>
                <TableCell>S/N</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Amount(N)</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <CircularProgress
                    size="4.2rem"
                    sx={{
                      color: "#f78105",
                      marginLeft: "auto",
                      padding: "1em",
                    }}
                  />
                </TableRow>
              ) : transactionData?.length > 0 ? (
                transactionData?.map((item, i) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      {i + 1 + (currentPage - 1) * rowsPerPage}
                    </TableCell>
                    <TableCell>
                      {item?.type === "transfer" ||
                      item?.type === "reversal" ||
                      item?.type === "payment"
                        ? item?.origin?.accountName
                        : item?.recipientDetails?.accountName}
                    </TableCell>
                    <TableCell>{item?.subType}</TableCell>
                    <TableCell>
                      <FormattedPrice amount={item?.amount} />
                    </TableCell>
                    <TableCell>{modDate(item?.createdAt)}</TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          textTransform: "capitalize",
                          background:
                            item?.status === "failed"
                              ? "#FFF0F0"
                              : item.status === "success"
                              ? "#EBFFF3"
                              : item?.status === "pending" ||
                                item?.status === "incoming"
                              ? "#FFF0F0"
                              : "",
                          color:
                            item?.status === "failed"
                              ? "#E52929"
                              : item.status === "success"
                              ? "#1E854A"
                              : item?.status === "pending" ||
                                item?.status === "incoming"
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
                        {item?.status === "failed" && (
                          <ReportOutlinedIcon sx={{ fontSize: "12px" }} />
                        )}
                        {item?.status === "success" && (
                          <CheckCircleOutlineRoundedIcon
                            sx={{ fontSize: "12px" }}
                          />
                        )}
                        {item?.status === "incoming" && (
                          <HourglassBottomOutlinedIcon
                            sx={{ fontSize: "12px" }}
                          />
                        )}
                        {item?.status === "pending" && (
                          <HourglassBottomOutlinedIcon
                            sx={{ fontSize: "12px" }}
                          />
                        )}

                        {item?.status}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => viewDetails(item?.id, item?.subType)}
                        variant="outlined"
                        sx={{
                          textTransform: "capitalize",
                          color: "#DC0019",
                          fontWeight: "600",
                          fontSize: "10px",
                          border: "1px solid #E0E0E0",
                          "&:hover": {
                            backgroundColor: "#fff",
                            border: "1px solid #E0E0E0",
                          },
                        }}
                      >
                        View More
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <Typography className="flex self-center p-3 min-w-full">
                  No transactions yet.
                </Typography>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />

        {/* Moda;l for detailsl */}

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
          <TransactionDetails index={index} handleClose1={handleClose1} />
        </Modal>
        {/* Modal ends */}
        {/* Moda;l for detailsl */}

        <Modal
          open={openAirtimeModal}
          onClose={handleCloseAirtimeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          PaperProps={{
            sx: {
              border: "none", // Remove the border
              boxShadow: "none", // Remove the box shadow
            },
          }}
        >
          <AirtimeModal
            handleCloseAirtimeModal={handleCloseAirtimeModal}
            index={index}
          />
        </Modal>
        {/* Modal ends */}
      </Box>

      {/* Modall for  deposit detailsl */}

      <Modal
        open={depositDetails}
        onClose={handleCloseDepositDetails}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        PaperProps={{
          sx: {
            border: "none", // Remove the border
            boxShadow: "none", // Remove the box shadow
          },
        }}
      >
        <DepositDetails setDepositDetails={setDepositDetails} />
      </Modal>
      {/* Modal deposit ends */}

      {/* Modall for  withdrawal detailsl */}

      <Modal
        open={withdrawalDetails}
        onClose={handleCloseWithdrawalDetails}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        PaperProps={{
          sx: {
            border: "none", // Remove the border
            boxShadow: "none", // Remove the box shadow
          },
        }}
      >
        <WithdrawalDetails
          index={index}
          setWithdrawalDetails={setWithdrawalDetails}
        />
      </Modal>
      {/* Modal withdrawal ends */}
      {/* Modal for  discount details */}

      <Modal
        open={discountDetails}
        onClose={handleCloseDiscountDetails}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        PaperProps={{
          sx: {
            border: "none", // Remove the border
            boxShadow: "none", // Remove the box shadow
          },
        }}
      >
        <DiscountDetails setDiscountDetails={setDiscountDetails} />
      </Modal>
      {/* Modal discount ends */}

      {/* Create Offer */}
      <Modal
        open={createOffer}
        onClose={handleCloseCreateOffer}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        PaperProps={{
          sx: {
            border: "none", // Remove the border
            boxShadow: "none", // Remove the box shadow
          },
        }}
      >
        <CreateOffer setCreateOffer={setCreateOffer} />
      </Modal>
    </Box>
  );
};

export default TableCom;
