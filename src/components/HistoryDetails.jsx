import React from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Radio,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import RotateLeftOutlinedIcon from "@mui/icons-material/RotateLeftOutlined";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

const HistoryDetails = () => {
  return (
    <Box className="flex items-start flex-col gap-2">
      <Box className="flex gap-2 items-center mb-5">
        <Box className="flex items-center gap-2 cursor-pointer">
          <ArrowBackOutlinedIcon sx={{ fontSize: "14px" }} />
          <Typography
            sx={{
              fontSize: "12px",
              color: "#333333",
            }}
          >
            Go Back
          </Typography>
        </Box>
        <Box className="flex items-center gap-2 cursor-pointer">
          |
          <RotateLeftOutlinedIcon sx={{ fontSize: "14px" }} />
          <Typography
            sx={{
              fontSize: "12px",
              color: "#333333",
            }}
          >
            Merchants
          </Typography>
          <ArrowForwardIosRoundedIcon sx={{ fontSize: "14px" }} />
        </Box>
        <Box className="flex items-center gap-2 cursor-pointer">
          <WbSunnyOutlinedIcon sx={{ fontSize: "14px" }} />
          <Typography
            sx={{
              fontSize: "12px",
              color: "#333333",
            }}
          >
            Offer Name
          </Typography>
        </Box>
      </Box>

      <Box className="flex gap-4 items-center my-2">
        <Typography
          sx={{
            fontSize: "12px",
            color: "#333333",
            fontWeight: "900",
          }}
        >
          Offer Name
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#333333",
          }}
        >
          Offer name goes here
        </Typography>
      </Box>
      <Box className="flex gap-4 items-center my-2">
        <Typography
          sx={{
            fontSize: "12px",
            color: "#333333",
            fontWeight: "900",
          }}
        >
          Amount Type
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#333333",
          }}
        >
          Percentage
        </Typography>
      </Box>
      <Box className="flex gap-4 items-center my-2">
        <Typography
          sx={{
            fontSize: "12px",
            color: "#333333",
            fontWeight: "900",
          }}
        >
          Amount
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#333333",
          }}
        >
          Offer name goes here
        </Typography>
      </Box>
      <Box className="flex gap-4 items-center my-2">
        <Typography
          sx={{
            fontSize: "12px",
            color: "#333333",
            fontWeight: "900",
          }}
        >
          Offer Type
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#333333",
          }}
        >
          Offer name goes here
        </Typography>
      </Box>
      <Box className="flex gap-4 items-center my-2">
        <Typography
          sx={{
            fontSize: "12px",
            color: "#333333",
            fontWeight: "900",
          }}
        >
          Expiry Date
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#333333",
          }}
        >
          Offer name goes here
        </Typography>
      </Box>
      <Box className="flex gap-4 items-center my-2">
        <Typography
          sx={{
            fontSize: "12px",
            color: "#333333",
            fontWeight: "900",
          }}
        >
          Usage Frequency
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#333333",
          }}
        >
          Offer name goes here
        </Typography>
      </Box>
      <Box className="flex gap-4 items-center my-2">
        <Typography
          sx={{
            fontSize: "12px",
            color: "#333333",
            fontWeight: "900",
          }}
        >
          Headline
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#333333",
          }}
        >
          Offer name goes here
        </Typography>
      </Box>
      <Box className="flex gap-4 items-center my-2">
        <Typography
          sx={{
            fontSize: "12px",
            color: "#333333",
            fontWeight: "900",
          }}
        >
          Body
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#333333",
          }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Typography>
      </Box>
      <Box className="flex gap-4 items-center my-2">
        <Typography
          sx={{
            fontSize: "12px",
            color: "#333333",
            fontWeight: "900",
          }}
        >
          Offer Status
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#333333",
          }}
        >
          Offer name goes here
        </Typography>
      </Box>
      <Box className="flex gap-4 items-center my-2">
        <Typography
          sx={{
            fontSize: "12px",
            color: "#333333",
            fontWeight: "900",
          }}
        >
          Disable this Offer
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#333333",
          }}
        >
          Offer name goes here
        </Typography>
      </Box>
    </Box>
  );
};

export default HistoryDetails;
