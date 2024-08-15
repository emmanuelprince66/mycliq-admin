import React from "react";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
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
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const AddNotification = () => {
  return (
    <>
      <Box className="flex flex-col mt-2 items-start w-[100%] gap-3 border border-grey-500  overflow-y-auto max-h-[60vh] rounded-md p-3  pb-3">
        <CreateRoundedIcon
          sx={{
            color: "#fff",
            p: "3px",
            borderRadius: "50px",
            background: "#333333",
          }}
        />

        <Typography
          sx={{
            color: "#1E1E1E",
            fontWeight: "600",
            fontSize: "15px",
          }}
        >
          Write Message
        </Typography>
        <Typography
          sx={{
            color: "#1E1E1E",
            fontWeight: "400",
            fontSize: "13px",
            mb: "15px",
          }}
        >
          Type in the notification content.
        </Typography>

        <Box className="flex w-full items-center justify-between">
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
            0/30
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
        <Box className="flex w-full items-center justify-between">
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
            0/120
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
                height: "100px",
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
        <Button
          sx={{
            background: "#333333",
            padding: "10px",
            borderRadius: "8px",
            mt: "10px",
            width: "100%",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#333333",
            },
            textTransform: "capitalize",
            fontWeight: "500",
          }}
        >
          <SendRoundedIcon
            sx={{
              mr: "1rem",
            }}
          />{" "}
          Send Push To Notification
        </Button>
      </Box>
    </>
  );
};

export default AddNotification;
