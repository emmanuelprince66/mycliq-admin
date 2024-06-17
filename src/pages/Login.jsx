import React, { useEffect } from "react";
import loginImg from "../assets/images/assoclogin.png";
import checkIcon from "../assets/images/logo.png";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import emailIcon from "../assets/images/user.svg";
import { useNavigate } from "react-router";
import lockIcon from "../assets/images/lock.svg";
import { Colors } from "../utils/colors";
import { createTheme, ThemeProvider } from "@mui/material";
import { AuthAxios, BaseAxios } from "../helpers/axiosInstance";
import CircularProgress from "@mui/material/CircularProgress";
import Cookies from "js-cookie";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { fillSelectedDates } from "../utils/store/merchantSlice";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.min.css";
import VerifyOTP from "../components/VerifyOTP";
import bro from "../assets/images/admin/bro.svg";
import cliqLight from "../assets/images/admin/cliqLight.png";

export const Login = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showVerifyUser, setShowVerifyUser] = useState(false);
  const [showLoginImage, setShowLoginImage] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setShowLoginImage(true);
  }, [showVerifyUser]);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#333333",
        red_text: "#333333",
      },
    },
  });
  const navigate = useNavigate();
  const notifyError = (msg) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 6000, // Time in milliseconds
    });
  };
  const loginMutation = useMutation({
    mutationFn: async (formData) => {
      console.log(formData);
      try {
        const response = await BaseAxios({
          url: "/auth/login",
          method: "POST",
          data: formData,
        });

        if (response.status !== 201) {
          throw new Error(response.data.message);
        }

        return response;
      } catch (error) {
        console.log(error);
        throw new Error(error.response.data.message);
      }
    },
    onSuccess: (data) => {
      console.log("Login successful:", data);
      navigate("/overview");

      // Store data in cookies

      console.log(data?.data?.data?.access_token);
      Cookies.set("authToken", data?.data?.data?.access_token);
      Cookies.set("refreshToken", data?.data?.data?.refreshToken);
      // Cookies.set("companyName", data.companyName);
      // Cookies.set("registeredName", data.registeredName);

      // Handle success, update state, or perform further actions
    },
    onError: (error) => {
      console.log(error);
      setButtonDisabled(false);
      notifyError(String(error));
    },
  });
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (formData) => {
    // Handle form submission here
    console.log("Form data:", formData);

    setButtonDisabled(true);
    console.log(formData);

    // Call the mutation to trigger the login process
    loginMutation.mutate(formData);
  };

  useEffect(() => {
    const now = new Date();
    const startOfMonth = new Date();
    const endOfMonth = new Date();

    dispatch(
      fillSelectedDates({
        startDate: startOfMonth,
        endDate: endOfMonth,
      })
    );
  }, []);
  return (
    <main className="flex md:grid md:grid-cols-2 flex-col-reverse min-h-screen">
      <section className="bg-brown_1 hidden  md:flex items-center pb-5 md:pb-0 justify-center">
        <div className="pt-5">
          {showLoginImage ? (
            <img className="h-[40vh]" src={loginImg} />
          ) : (
            <img className="h-[40vh]" src={bro} />
          )}
        </div>
      </section>
      <section className="flex min-h-screen  w-full gap-8 flex-col m-auto bg-dark_text">
        <div className="logo h-[5vh] w-[50%] mx-auto  ">
          <img src={cliqLight} alt="check_logo" />
        </div>

        <div className=" w-[80%] md:w-[75%] lg:w-[65%] my-8 mx-auto flex items-center">
          {showVerifyUser ? (
            <VerifyOTP
              setShowVerifyUser={setShowVerifyUser}
              setShowLoginImage={setShowLoginImage}
            />
          ) : (
            <Container sx={{ padding: 0 }}>
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mt: "5rem",
                }}
              >
                <Typography variant="h1" fontSize={"1.5em"} fontWeight={600}>
                  Welcome back!
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  textAlign="center"
                  mb={2}
                >
                  Enter your details to login.
                </Typography>
                <ThemeProvider theme={theme}>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "1em",
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: ".2em",
                        }}
                        item
                        xs={12}
                      >
                        <InputLabel className="text-black_0">
                          {" "}
                          <Typography className="text-black" fontWeight={600}>
                            {" "}
                            Email{" "}
                          </Typography>{" "}
                        </InputLabel>
                        <TextField
                          {...register("email", {
                            required: "Email is required",
                          })}
                          required
                          fullWidth
                          sx={{
                            "& .MuiInputBase-root": { borderRadius: "8px" },
                            "& .MuiInputBase-input": { padding: "12px 0" },
                          }}
                          id="email"
                          autoFocus
                          placeholder="example@domain.com"
                          error={Boolean(errors.email)}
                          helperText={errors.email?.message}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <img
                                  src={emailIcon}
                                  className="w-[24px]"
                                  alt="email"
                                />
                                <span className="bg-grey_1 ml-[.3em] w-[1px]">
                                  {" "}
                                  &nbsp;&nbsp;{" "}
                                </span>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      <Grid
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: ".2em",
                        }}
                        item
                        xs={12}
                      >
                        <InputLabel className="text-black">
                          <Typography className="text-black" fontWeight={600}>
                            {" "}
                            Password{" "}
                          </Typography>
                        </InputLabel>
                        <TextField
                          {...register("password", {
                            required: "Password is required",
                          })}
                          variant="outlined"
                          required
                          fullWidth
                          sx={{
                            "& .MuiInputBase-root": { borderRadius: "8px" },
                            "& .MuiInputBase-input": { padding: "12px 0" },
                          }}
                          className="rounded-[8px]"
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          error={Boolean(errors.password)}
                          helperText={errors.password?.message}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <img
                                  src={lockIcon}
                                  className="w-[24px]"
                                  alt="email"
                                />
                                <span className="bg-grey_1 ml-[.3em] w-[1px]">
                                  {" "}
                                  &nbsp;&nbsp;{" "}
                                </span>
                              </InputAdornment>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          aria-describedby="outlined-weight-helper-text"
                          inputProps={{
                            "aria-label": "weight",
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Grid item>
                        <FormControlLabel
                          control={
                            <Checkbox
                              color="primary"
                              {...register("rememberMe")}
                            />
                          }
                          label="Remember Me"
                        />
                      </Grid>
                      <Grid item>
                        <Typography
                          onClick={() => setShowVerifyUser(true)}
                          variant="body2"
                          className="text-error_2 cursor-pointer"
                          component="a"
                          textDecoration={"none"}
                        >
                          Forgot Password?
                        </Typography>
                      </Grid>
                    </Grid>

                    <Button
                      variant="contained"
                      disabled={buttonDisabled}
                      type="submit"
                      // disabled={!isDirty || Object.keys(errors).length > 0}
                      sx={{
                        color: "#fff",
                        "&:disabled": {
                          backgroundColor: (theme) =>
                            theme.palette.primary.main,
                          opacity: 0.7,
                        },
                        padding: ".6em",
                        boxShadow: "none",
                      }}
                    >
                      {buttonDisabled ? (
                        <CircularProgress
                          size="1.2rem"
                          sx={{ color: "white" }}
                        />
                      ) : (
                        "Login"
                      )}
                    </Button>
                  </form>
                </ThemeProvider>
              </Paper>
            </Container>
          )}
        </div>
      </section>
      <ToastContainer
        theme="dark"
        toastStyle={{ background: "#333", color: "#fff" }}
      />
    </main>
  );
};
