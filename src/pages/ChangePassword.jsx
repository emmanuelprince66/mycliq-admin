import React from "react";
import TextField from "@mui/material/TextField";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import { Dialog } from "@mui/material";
import { Slide } from "@mui/material";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";
import Visibility from "@mui/icons-material/Visibility";
import { useSelector } from "react-redux";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { AuthAxios } from "../helpers/axiosInstance";
import passwordLogo from "../assets/passwordLogo.svg";
import backRedArrow from "../assets/images/backRedArrow.svg";

const ChangePassWord = ({ phoneNo, setShowVerifyUser }) => {
  const [textSix, setTextSix] = useState(false);
  const [textSeven, setTextSeven] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [confirmError, setConfirmError] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const [showChangePass, setShowChangePass] = useState(false);

  const move = () => {
    setShowVerifyUser((prev) => !prev);
  };

  console.log(passwordInput, confirmPasswordInput);
  const weakPassword = new RegExp("(?=.{3,})");
  const weakPasswordIcon = new RegExp("(?=.{7,})");
  const mediumPassword = new RegExp("(?=.*[A-Z])");
  const strongPassword = new RegExp("(?=.*[^A-Za-z0-9])");
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const navigate = useNavigate();

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;

    setConfirmPasswordInput(value);

    if (passwordInput === value) {
      setConfirmError("");
      setTextSeven(false);
    } else {
      setConfirmError("Password do not match");
      setTextSeven(true);
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPasswordInput(value);

    if (!value) {
      setPasswordError("Please enter your password");
      setTextSix(true);
    } else {
      if (weakPasswordIcon.test(passwordInput)) {
        //   meduim password

        if (mediumPassword.test(value)) {
          if (strongPassword.test(value || passwordInput)) {
            setTextSix(false);
            setPasswordError("");
          } else {
            setPasswordError("Must contain atleast one special character");
            setTextSix(true);
          }
        } else {
          setPasswordError("Must contain atleast one capital letter");
          setTextSix(true);
        }
        ///  meduim password ends
      } else {
        setPasswordError("Minimum of 8 characters");
        setTextSix(true);
      }
    }
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleConfirmPasswordBlur = () => {};

  const handlePasswordBlur = () => {
    if (!passwordInput) {
      setPasswordError("Please enter your password");
      setTextSix(true);
    } else {
      setPasswordError("");
      setTextSix(false);
    }
  };

  const mutationReset = useMutation({
    mutationFn: async () => {
      try {
        const response = await AuthAxios({
          url: "/auth/password-reset-confirm",
          method: "POST",

          data: {
            phone: phoneNo,
            newPassword: passwordInput,
            confirmPassword: confirmPasswordInput,
          },
        });

        return response.data;
      } catch (error) {
        console.log("hey");
        console.log(error);
        setDisableButton(false);
        setPasswordInput("");
        setConfirmPasswordInput("");
        notifyErr(error.response.data.message);
        throw new Error(error.response);
      }
    },
    onSuccess: (response) => {
      notify(response.message);
      console.log(response);
      setPasswordInput("");
      setConfirmPasswordInput("");
      setDisableButton(false);
      setShowVerifyUser((prev) => !prev);
    },
    onError: (error) => {
      console.log(error);
      notifyErr(response.message);
      setDisableButton(false);

      setPasswordInput("");
      setConfirmPasswordInput("");
    },
  });

  const handleResetPassword = () => {
    setDisableButton(true);

    if (passwordInput === confirmPasswordInput) {
      mutationReset.mutate(passwordInput);
    } else {
      notifyErr("Password do not match");
      setDisableButton(false);
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
    <Box
      sx={{
        width: "100%",
        mx: "auto",
        marginTop: "1rem",
      }}
    >
      {/* welcome to eden movie to download */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            margin: "auto",
            marginTop: " 5rem ",
            marginBottom: "2rem",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Set your new password
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          {" "}
          <TextField
            sx={{
              width: "30rem",
              mx: "auto",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: `${textSix ? "#DC0019" : "#CACACA"}`, // Set the desired border color here
                },
                "&:hover fieldset": {
                  borderColor: `${textSix ? "#DC0019" : "#CACACA"}`, // Set the border color on hover here
                },
                "&.Mui-focused fieldset": {
                  borderColor: `${textSix ? "#DC0019 " : "#C57600"}`, // Set the border color on focus here
                },
              },
            }}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            // value={passwordInput}
            required
            helperText={
              passwordError && (
                <Box sx={{ color: "#DC0019" }}>{passwordError}</Box>
              )
            }
            placeholder="Enter your Password"
            id="password-input"
            type={showPassword ? "text" : "password"}
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <img src={passwordLogo} alt="password-logo" /> &nbsp;&nbsp;
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment>
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
          <TextField
            sx={{
              width: "30rem",
              mx: "auto",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: `${textSeven ? "#DC0019" : "#CACACA"}`, // Set the desired border color here
                },
                "&:hover fieldset": {
                  borderColor: `${textSeven ? "#DC0019" : "#CACACA"}`, // Set the border color on hover here
                },
                "&.Mui-focused fieldset": {
                  borderColor: `${textSeven ? "#DC0019 " : "#C57600"}`, // Set the border color on focus here
                },
              },
            }}
            onChange={handleConfirmPasswordChange}
            // value={confirmPasswordInput}
            onBlur={handleConfirmPasswordBlur}
            required
            helperText={
              confirmError && (
                <Box sx={{ color: "#DC0019" }}>{confirmError}</Box>
              )
            }
            placeholder="Verify Password"
            id="password-input"
            type={showPassword ? "text" : "password"}
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <img src={passwordLogo} alt="password-logo" /> &nbsp;&nbsp;
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment>
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
          <Button
            onClick={handleResetPassword}
            disabled={disableButton || mutationReset.isLoading}
            sx={{
              background: "#333333",
              padding: "10px",
              borderRadius: "8px",
              width: "100%",
              mt: "1rem",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#333333",
              },
              textTransform: "capitalize",
              fontWeight: "500",
            }}
          >
            {mutationReset.isLoading || disableButton ? (
              <CircularProgress size="1.2rem" sx={{ color: "white" }} />
            ) : (
              "Reset Password"
            )}
          </Button>
          <Button
            onClick={move}
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
      <ToastContainer />
    </Box>
  );
};

export default ChangePassWord;
