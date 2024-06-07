import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Box, Modal, Backdrop } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Button } from "@mui/material";
import line from "../assets/line.svg";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import backRedArrow from "../assets/images/backRedArrow.svg";
import { BaseAxios } from "../helpers/axiosInstance";
import closeIcon from "../assets/images/closeIcon.svg";
import VerifyForgotPassword from "../components/VerifyForgotPassword";

const VerifyOTP = ({ setShowVerifyUser, setShowLoginImage }) => {
  const [textFour, setTextFour] = useState(false);
  const [phoneNo, setPhoneNo] = useState("");
  const [phoneNoError, setPhoneNoError] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [verifyOTP, setVerifyOTP] = useState(false);
  const [showOTP, setShowOTP] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClose = () => {};

  useEffect(() => {
    setShowLoginImage(false);
  }, []);

  const mutationOTP = useMutation({
    mutationFn: async (payload) => {
      try {
        const response = await BaseAxios({
          url: "auth/password-reset",
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
      setShowOTP(false);
      setDisableButton(false);
      // Handle success, update state, or perform further actions
    },
    onError: (error) => {
      console.log(error);
      setButtonDisabled(false);
      //   notifyError(String(error));
    },
  });

  const handleGetOTP = () => {
    setDisableButton(true);
    if (phoneNo && phoneNo.length === 11) {
    
    const payload  = {
    phone : phoneNo
    }
      mutationOTP.mutate(payload);
      
    } else if (phoneNo.length < 11) {
      notifyErr("Phone number is too short");
      setDisableButton(false);
    } else if (phoneNo.length > 11) {
      notifyErr("Phone number is too long");
      setDisableButton(false);
    }
  };

  const handlePhoneNoBlur = () => {
    if (!phoneNo) {
      setPhoneNoError("Please enter your phone number");
      setTextFour(true);
    }
  };

  const handlePhoneNoChange = (event) => {
    const value = event.target.value;
    setPhoneNo(value);
    if (!value) {
      setPhoneNoError("Please enter your phone number");
      setTextFour(true);
    } else if (!/^\d+$/.test(value)) {
      setTextFour(true);
      setPhoneNoError("Invalid phone number");
    } else {
      setTextFour(false);
      setPhoneNoError("");
    }
  };

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
  return (
    <>
      {showOTP ? (
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              margin: "auto",
              marginTop: " 5rem ",
              marginBottom: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "3",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              Reset your password
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                textAlign: "center",
                color: "#828282",
              }}
            >
              Enter your registered phone number to reset your password
            </Typography>
          </Box>

          <Box
            sx={{
              width: "90%",
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            {" "}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "600",
                  alignItems: "start",
                }}
              >
                Phone Number
              </Typography>
              <TextField
                sx={{
                  width: { xs: "100%", sm: "100%", md: "100%" },
                  mx: "auto",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: `${textFour ? "#333333" : "#CACACA"}`, // Set the desired border color here
                    },
                    "&:hover fieldset": {
                      borderColor: `${textFour ? "#333333" : "#CACACA"}`, // Set the border color on hover here
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: `${textFour ? "#333333 " : "#C57600"}`, // Set the border color on focus here
                    },
                  },
                }}
                onChange={handlePhoneNoChange}
                onBlur={handlePhoneNoBlur}
                value={phoneNo}
                type="number"
                required
                helperText={
                  phoneNoError && (
                    <Box sx={{ color: "#DC0019", ml: "-14px" }}>
                      {phoneNoError}
                    </Box>
                  )
                }
                placeholder="Phone Number"
                variant="outlined"
                id="phone-number"
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <LocalPhoneRoundedIcon />
                      &nbsp;&nbsp; +234&nbsp;&nbsp;
                      <img src={line} alt="line" />
                      &nbsp;&nbsp;
                    </InputAdornment>
                  ),
                }}
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                  maxLength: "10",
                }}
              />
            </Box>
            <Button
              disabled={disableButton || mutationOTP.isLoading}
              onClick={handleGetOTP}
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
              {mutationOTP.isLoading || disableButton ? (
                <CircularProgress size="1.2rem" sx={{ color: "white" }} />
              ) : (
                "Continue to Reset"
              )}
            </Button>
            <Button
              onClick={() => setShowVerifyUser((prev) => !prev)}
              sx={{
                background: "#fff",
                padding: "10px",
                borderRadius: "8px",
                fontWeight: "700",
                width: "100%",
                borderColor: "#333333",

                color: "#fff",
                "&:hover": {
                  borderColor: "#FF7F00",
                },
                textTransform: "capitalize",
                fontWeight: "500",
              }}
              variant="outlined"
            >
              <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <img src={backRedArrow} alt="back-arrow" />
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#333333",
                  }}
                >
                  Back to login
                </Typography>
              </Box>
            </Button>
          </Box>


          <ToastContainer />
        </Box>
      ) : (
        <VerifyForgotPassword
          phoneNo={phoneNo}
          setShowOTP={setShowOTP}
          setShowVerifyUser={setShowVerifyUser}
        />
      )}
    </>
  );
};

export default VerifyOTP;
