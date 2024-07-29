import React from "react";
import closeIcon from "../assets/images/closeIcon.svg";
import SwapHorizRoundedIcon from "@mui/icons-material/SwapHorizRounded";
import {
  Box,
  Button,
  Typography,
  Grid,
  InputAdornment,
  Radio,
  TextField,
  Modal,
  FormControl,
  Backdrop,
  RadioGroup,
  Paper,
  FormControlLabel,
} from "@mui/material";

const NotiDetails = ({ handleCloseNotiDetails }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    width: "645px",
    height: "80%",
    bgcolor: "background.paper",
    p: 3,
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
          Push Notification Details
        </Typography>

        <Box onClick={handleCloseNotiDetails} className="cursor-pointer">
          <img src={closeIcon} alt="c-icon" />
        </Box>
      </Box>

      <Box className="flex gap-2 items-center mb-4">
        <Typography
          sx={{
            color: "#1E1E1E",
            fontWeight: "400",
            fontSize: "10px",
          }}
        >
          sent to{" "}
          <span
            className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
          >
            All customers
          </span>
        </Typography>
        <Typography
          sx={{
            color: "#1E1E1E",
            fontWeight: "400",
            fontSize: "10px",
          }}
        >
          By{" "}
          <span
            className={` 
                
                 text-[10px]`}
          >
            Oluwatobiloba Olosunde (Super Admin)
          </span>
        </Typography>
        <Typography
          sx={{
            color: "#1E1E1E",
            fontWeight: "400",
            fontSize: "10px",
          }}
        >
          |
          <span
            className={` 
                ml-3
                 text-[10px]`}
          >
            Today at 09:34 AM
          </span>
        </Typography>
      </Box>

      <Box className="flex w-full items-center justify-between mb-2">
        <Typography
          sx={{
            color: "#1E1E1E",
            fontWeight: "600",
            fontSize: "15px",
          }}
        >
          Headline
        </Typography>
        <Typography
          sx={{
            color: "#1E1E1E",
            fontWeight: "400",
            fontSize: "13px",
          }}
        >
          29/30
        </Typography>
      </Box>
      <TextField
        required
        placeholder="Enter Headline"
        fullWidth
        sx={{
          "& .MuiInputBase-root": { borderRadius: "8px" },
          "& .MuiInputBase-input": { padding: "12px  " },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#333333", // Set the desired border color here
            },
            "&:hover fieldset": {
              borderColor: "#333333", // Set the border color on hover here
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF7F00", // Set the border color on focus here
            },
          },
        }}
        id="email"
      />
      <Box className="flex w-full items-center justify-between mb-2 mt-4">
        <Typography
          sx={{
            color: "#1E1E1E",
            fontWeight: "600",
            fontSize: "15px",
          }}
        >
          Message Body
        </Typography>
        <Typography
          sx={{
            color: "#1E1E1E",
            fontWeight: "400",
            fontSize: "13px",
          }}
        >
          114/120
        </Typography>
      </Box>
      <TextField
        required
        placeholder="Enter Message"
        fullWidth
        sx={{
          "& .MuiInputBase-root": {
            borderRadius: "8px",
          },
          "& .MuiInputBase-input": { padding: "12px  " },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#333333",
              height: "120px",
              // Set the desired border color here
            },
            "&:hover fieldset": {
              borderColor: "#333333", // Set the border color on hover here
            },
            "&.Mui-focused fieldset": {
              borderColor: "#FF7F00", // Set the border color on focus here
            },
          },
        }}
        id="email"
      />
      <Box className="flex justify-between gap-5 items-center w-full mt-[6rem]">
        <Button
          onClick={handleCloseNotiDetails}
          sx={{
            background: "#fff",
            padding: "10px",
            borderRadius: "8px",
            width: "100%",
            borderColor: "#333333",

            color: "#000",
            "&:hover": {
              borderColor: "#FF7F00",
            },
            textTransform: "capitalize",
            fontWeight: "500",
          }}
          variant="outlined"
        >
          Cancel
        </Button>
        <Button
          sx={{
            background: "#333333",
            padding: "10px",
            borderRadius: "8px",
            width: "100%",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#333333",
            },
            textTransform: "capitalize",
            fontWeight: "500",
          }}
        >
          <SwapHorizRoundedIcon
            sx={{
              mr: "1rem",
            }}
          />{" "}
          Send Again
        </Button>
      </Box>
    </Box>
  );
};

export default NotiDetails;
