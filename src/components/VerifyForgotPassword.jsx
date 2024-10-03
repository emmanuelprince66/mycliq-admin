import React from "react";
import { useRef } from "react";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import { queryClient } from "../helpers/queryClient";
import { useNavigate } from "react-router-dom";
import backRedArrow from "../assets/images/backRedArrow.svg";

import {
  Box,
  Typography,
  Button,
  Dialog,
  Slide,
  CircularProgress,
  Card,
  Modal,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import ChangePassWord from "../pages/ChangePassword";

const VerifyForgotPassword = ({ phoneNo, setShowOTP, setShowVerifyUser }) => {
  const [pins, setPins] = useState(["", "", "", "", "", ""]);
  const pinRef = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
  const [showVerifyOTP, setShowVerifyOTP] = useState(true);

  const handleChange = (index, value) => {
    // Ensure that the value is only one digit
    if (value.length > 1) return;

    if (!/^\d*$/.test(value)) return;

    const newPins = [...pins];
    newPins[index] = value;
    setPins(newPins);

    // Automatically focus on the next TextField if not already at the last one
    if (index < pinRef.length - 1) {
      pinRef[index + 1].current.focus();
    }
  };
  const handlePinKeyDown = (index, e) => {
    if (index > 0 && e.key === "Backspace" && e.target.value === "") {
      // If Backspace is pressed and the field is empty (not the first field), move focus to the previous input field
      pinRef[index - 1].current.focus();
    } else if (index === 0 && e.key === "Backspace" && e.target.value === "") {
      // If Backspace is pressed in the first field and it's empty, focus remains in the first field
      e.preventDefault(); // Prevent the Backspace key from navigating away
    } else if (e.key === "Backspace" && e.target.selectionStart === 0) {
      // If Backspace is pressed at the beginning of the field
      // and it's not the first field, move focus to the previous input field and set cursor position to the end
      if (index > 0) {
        pinRef[index - 1].current.focus();

        // Use requestAnimationFrame for smoother transitions
        requestAnimationFrame(() => {
          pinRef[index - 1].current.setSelectionRange(1, 1);
        });
      }
    }
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

  const [disableButton, setDisableButton] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleClose2 = () => {
    setOpen2(false);
  };
  const navigate = useNavigate();

  const [key, setKey] = useState(Math.random());
  const initialSeconds = 60;
  const [time, setTime] = useState({
    minutes: Math.floor(initialSeconds / 60),
    seconds: initialSeconds % 60,
  });
  const [isActive, setIsActive] = useState(true);

  const [isTimerFinished, setIsTimerFinished] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && (time.minutes > 0 || time.seconds > 0)) {
      interval = setInterval(() => {
        if (time.seconds === 0) {
          if (time.minutes === 0) {
            setIsTimerFinished(true);
            clearInterval(interval); // Stop the interval
          } else {
            setTime((prevTime) => ({
              minutes: prevTime.minutes - 1,
              seconds: 59,
            }));
          }
        } else {
          setTime((prevTime) => ({
            ...prevTime,
            seconds: prevTime.seconds - 1,
          }));
        }
      }, 1000);
    } else {
      setIsTimerFinished(true);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const mutationOTP = useMutation({
    mutationFn: async (phone) => {
      try {
        const response = await axios.post(
          "https://mycliq-backend-prod-a.onrender.com/api/auth/admin/password-reset",
          {
            phone: phone, // Replace with your phone data
          }
        );

        return response.data;
      } catch (error) {
        setDisableButton(false);
        notifyErr(error.response.data.message);
        throw new Error(error.response);
      }
    },
    onSuccess: (response) => {
      notify(response.message);
      setVerifyOTP(true);
      setDisableButton(false);
      // Handle success, update state, or perform further actions
    },
    onError: (error) => {
      setButtonDisabled(false);
      //   notifyError(String(error));
    },
  });

  const resetTimer = async () => {
    if (!isTimerFinished) return;
    setTime({
      minutes: Math.floor(initialSeconds / 60),
      seconds: initialSeconds % 60,
    });
    mutationOTP.mutate(phoneNo); // Pass the phone number here
    // Handle error if needed
    setIsActive(true);
    setIsTimerFinished(false); // Reset timer finished state
  };

  const formattedTime = `${time.minutes}:${
    time.seconds < 10 ? `0${time.seconds}` : time.seconds
  }`;
  const buttonText = isTimerFinished ? "Timer Finished" : "Start Timer";

  const mutationVerifyOTP = useMutation({
    mutationFn: async (code) => {
      try {
        const response = await axios.post(
          "https://mycliq-backend-prod-a.onrender.com/api/account/verify-pin",
          {
            code: code,
            phone: phoneNo, // Replace with your phone data
            otpType: "password-reset",
          },
          {
            // headers: {
            //   Authorization: `Bearer ${token}`,
            // },
          }
        );

        return response.data;
      } catch (error) {
        setDisableButton(false);
        notifyErr(error.response.data.message);
        throw new Error(error.response);
      }
    },
    onSuccess: (response) => {
      setShowVerifyOTP(false);
      setDisableButton(false);
      notify(response.message);

      // Handle success, update state, or perform further actions
    },
    onError: (error) => {
      setDisableButton(false);
      setPins(["", "", "", "", "", ""]);
      //   notifyError(String(error));
    },
  });

  const verifyGetOTP = () => {
    // Check if all the PINs have been entered

    setDisableButton(true);

    // Loop through each instance and perform the check
    const allPinsEntered = pins.every((pin) => pin !== "");

    if (allPinsEntered) {
      // api call
      const verifyPinsOTP = pins.join("");
      mutationVerifyOTP.mutate(verifyPinsOTP);
    } else {
      notifyErr("Please enter all six PIN digits.");
      setDisableButton(false);
    }
  };

  return (
    <Box>
      {showVerifyOTP ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            mt: "5rem",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "900",
              fontSize: "20px",
              my: "1rem",
            }}
          >
            Verify OTP
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "200",
              fontSize: "16px",
            }}
          >
            An OTP has been sent to {phoneNo ? phoneNo : "0816846"}. Enter the
            code below to verify your identity.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "15px",
              padding: "1rem 0",
              borderRadius: "10px",
              my: "1rem",
            }}
          >
            {pins.map((pin, index) => (
              <TextField
                onFocus={() => handleShowOrderText()}
                sx={{
                  "& input": {
                    fontSize: "1.5rem",
                    padding: "5px",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#CACACA",
                    },
                    "&:hover fieldset": {
                      borderColor: "#CACACA", // Set the border color on hover here
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#C57600", // Set the border color on focus here
                    },
                  },
                }}
                key={index}
                variant="outlined"
                type="password"
                value={pin}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handlePinKeyDown(index, e)}
                inputProps={{
                  inputMode: "numeric",
                  pattern: "[0-9]*", // Ensure only numeric input is allowed
                  maxLength: 1, // Limit input to one character
                  style: { textAlign: "center" }, // Center-align the input
                }}
                inputRef={pinRef[index]}
              />
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              onClick={verifyGetOTP}
              disabled={mutationVerifyOTP.isLoading || disableButton}
              sx={{
                background: "#333333",
                width: "100%",
                padding: "10px, 16px, 10px, 16px",
                textTransform: "capitalize",
                fontWeight: "400",
                width: {
                  xs: "300px",
                  sm: "333px",
                  md: "333px",
                  lg: "333px",
                },
                height: "48px",
                fontSize: "16px",
                borderRadius: "8px",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#333333",
                },
              }}
            >
              {mutationVerifyOTP.isLoading || disableButton ? (
                <CircularProgress size="1.2rem" sx={{ color: "white" }} />
              ) : (
                "Verify OTP "
              )}
            </Button>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
                my: "1.5rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "400",
                  mx: "3px",
                }}
              >
                Didn't get the code?
              </Typography>
              <Typography
                onClick={resetTimer} //
                sx={{
                  fontWeight: "400",
                  mx: "3px",
                  cursor: "pointer", // Adding cursor pointer to indicate it's clickable
                }}
              >
                {isTimerFinished ? (
                  <Typography sx={{ color: "#dc0019" }}>Resend Code</Typography>
                ) : (
                  "Can Resend in"
                )}
              </Typography>

              <Typography
                // Attach resetTimer function to restart the timer
                sx={{
                  fontWeight: "400",
                }}
              >
                &nbsp;{formattedTime}
              </Typography>
            </Box>
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
        </Box>
      ) : (
        <ChangePassWord
          phoneNo={phoneNo}
          setShowVerifyUser={setShowVerifyUser}
        />
      )}
    </Box>
  );
};

export default VerifyForgotPassword;
