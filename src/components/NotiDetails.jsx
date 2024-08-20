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
  CircularProgress,
  RadioGroup,
  Paper,
  FormControlLabel,
} from "@mui/material";
import { useState , useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import { AuthAxios } from "../helpers/axiosInstance";
const NotiDetails = ({ handleCloseNotiDetails , notiItem }) => {
  console.log(notiItem)

  const [headline, setHeadline] = useState(notiItem?.title || "");
  const [headlineCount, setHeadlineCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const [message, setMessage] = useState(notiItem?.body || "");
  const [messageCount, setMessageCount] = useState(0);
  const [openNotiModal , setOpenNotiModal] = useState(false)
  const closeNotiModal = () => setOpenNotiModal(false)
  const notifyErr = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const notify = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
// mutation
const mutationNoti = useMutation({
  mutationFn: async (payload) => {
    try {
      const response = await AuthAxios({
        url: "/admin/system/broadcast-notification",
        method: "POST",
        data: payload,
      });

      return response.data;
    } catch (error) {
      console.log(error);
      setDisableButton(false);
      notifyErr(error.response.data.message);
      throw new Error(error.response);
    }
  },
  onSuccess: (response) => {
    notify(response.message);
    setDisableButton(false);
    handleCloseNotiDetails()
  },
  onError: (error) => {
    setButtonDisabled(false);
  },
});

  useEffect(() => {
    setHeadlineCount(headline.length);
  }, [headline]);

  useEffect(() => {
    setMessageCount(message.length);
  }, [message]);

  const handleHeadlineChange = (event) => {
    const value = event.target.value;
    if (value.length <= 30) {
      setHeadline(value);
    }
  };

  const handleMessageChange = (event) => {
    const value = event.target.value;
    if (value.length <= 120) {
      setMessage(value);
    }
  };

  const handleSubmitNoti  = () => {

    const payload = {
       title:headline,
       body:message,
       channel:notiItem?.topic
    }


    mutationNoti.mutate(payload)
    setDisableButton(true)


  }
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
            {notiItem?.topic || ""}
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
                     {notiItem?.admin?.lastName} 
                                 {" "}
                                 {notiItem?.admin?.firstName}
                                 ({notiItem?.admin?.role})
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
           "no date sent"
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
         {headlineCount}/30
        </Typography>
      </Box>
      <TextField
        required
        placeholder="Enter Headline"
        fullWidth
        value={headline}
        onChange={handleHeadlineChange}
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
           {messageCount}/120
        </Typography>
      </Box>
      <TextField
        required
        placeholder="Enter Message"
        value={message}
        onChange={handleMessageChange}
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
          onClick={handleSubmitNoti}
          disabled={disableButton || mutationNoti.isLoading}
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
                  {mutationNoti.isLoading || disableButton ? (
            <CircularProgress size="1.2rem" sx={{ color: "white" }} />
          ) : (
            <>
             <SwapHorizRoundedIcon
            sx={{
              mr: "1rem",
            }}
          />{" "}
          Send Again
            </>
          )}
      
        </Button>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default NotiDetails;
