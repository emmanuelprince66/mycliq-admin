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
import Divider from "@mui/material/Divider";
import search from "../../src/assets/search.svg";
import InputAdornment from "@mui/material/InputAdornment";
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
import { useNavigate } from "react-router-dom";
import { AuthAxios } from "../helpers/axiosInstance";
import { useQuery } from "@tanstack/react-query";

export const TransactionDetails = ({ handleClose1, index }) => {
  const [trxId, setTrxId] = useState("");

  const apiUrl = `/admin/trx/${trxId}`;

  const fetchSingleTransactionData = async (url) => {
    try {
      const response = await AuthAxios.get(apiUrl);
      return response?.data?.data;
    } catch (error) {
      throw new Error("Error fetching data...");
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: ["fetchSingleTransactionData", apiUrl],
    queryFn: () => fetchSingleTransactionData(apiUrl),
    keepPreviousData: true,
    staleTime: 5000, // Cache data for 5 seconds
  });

  console.log(data);
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

  useEffect(() => {
    setTrxId(index);
  }, [index]);
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

  const renderDetail = (label, value, type) => {
    return (
      <Box
        key={label}
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
            minWidth: "130px",
          }}
        >
          {label}:
        </Typography>
        <Typography
          sx={{
            color: "#1E1E1E",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          {value ?? " ..."}
        </Typography>
      </Box>
    );
  };
  return (
    <Box sx={style}>
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
          Transaction Details
        </Typography>

        <Box onClick={handleClose1} className="cursor-pointer">
          <img src={closeIcon} alt="c-icon" />
        </Box>
      </Box>

      {/* stale data */}
      {/* {renderDetail("Sender's Name", details)} */}
      {/* state data end */}

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          onClick={handleClose1}
          sx={{
            background: "#dc0019",
            padding: "10px",
            borderRadius: "8px",
            gap: "6px",
            textTransform: "capitalize",
            width: "50%",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#dc0019",
            },
          }}
        >
          Close
        </Button>
      </Box>

      {/* es */}
      {/* 
   <Box
     sx={{
       width: "100%",
       background: "#fff",
       border: "1px solid #E0E0E0",
       p: "20px",
       display: "flex",
       gap:'.3em',
       flexDirection: "column",
       justifyContent: "start",
       borderRadius: "8px",
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
           minWidth: "130px",
         }}
       >
         Bill Type:
       </Typography>

       <Typography
         sx={{
           color: "#1E1E1E",
           fontWeight: "600",
           fontSize: "14px",
         }}
       >
        {details?.remittance?.bill?.billName ?? '...'}
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
           minWidth: "130px",
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
         {details?.transactionRef ?? '...'}
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
           minWidth: "130px",
         }}
       >
         Date & Time:
       </Typography>

       <Typography
         sx={{
           color: "#1E1E1E",
           fontWeight: "600",
           fontSize: "14px",
         }}
       >
         {modDate(details?.createdAt)?? '...'}
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
           minWidth: "130px",
         }}
       >
         Amount:
       </Typography>

       <Typography
         sx={{
           color: "#C57600",
           fontWeight: "600",
           fontSize: "14px",
         }}
       >
         ₦{details?.amount ?? 
          '...'}
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
           minWidth: "130px",
         }}
       >
         Transaction Status:
       </Typography>

       <Box
         sx={{
           textTransform: "capitalize",
           color: "#DC0019",
           background: "#EBF3FF",
           color: "#1367D8",
           minWidth: "87px",
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
         <CheckCircleOutlineRoundedIcon sx={{ fontSize: "12px" }} />{" "}
{                  details?.remittance?.paymentStatus
}                </Box>
     </Box>
   </Box> */}
    </Box>
  );
};
