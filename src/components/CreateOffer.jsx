import React from "react";
import { useEffect, useState } from "react";
import closeIcon from "../assets/images/closeIcon.svg";
import InputAdornment from "@mui/material/InputAdornment";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";

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
import OfferHistory from "./OfferHistory";
const CreateOffer = () => {
  const [showHistory, setShowHistory] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    width: "745px",
    bgcolor: "background.paper",
    p: 3,
    height: "100%",
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {};

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
          Manage Discounts & Offers
        </Typography>

        <Box
          onClick={() => setDepositDetails(false)}
          className="cursor-pointer"
        >
          <img src={closeIcon} alt="c-icon" />
        </Box>
      </Box>
      {/* Grid template */}

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box
            sx={{
              border: "1px solid grey",
              width: "100%",
              borderRadius: "8px",
              p: "1rem",
              minHeight: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <Button
                onClick={() => setShowHistory(false)}
                sx={{
                  backgroundColor: !showHistory ? "#333333" : "#f4f4f4",
                  padding: "10px",
                  borderRadius: "8px",
                  width: "100%",
                  color: !showHistory ? "#f4f4f4" : "#333333",
                  "&:hover": {
                    backgroundColor: !showHistory ? "#333333" : "#f4f4f4",
                  },
                  textTransform: "capitalize",
                  fontWeight: "500",
                }}
              >
                Create New
              </Button>
              <Button
                onClick={() => setShowHistory(true)}
                sx={{
                  backgroundColor: showHistory ? "#333333" : "#f4f4f4",
                  padding: "10px",
                  borderRadius: "8px",
                  width: "100%",
                  color: showHistory ? "#f4f4f4" : "#333333",
                  "&:hover": {
                    backgroundColor: showHistory ? "#333333" : "#f4f4f4",
                  },
                  textTransform: "capitalize",
                  fontWeight: "500",
                }}
              >
                History
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={8}>
          {!showHistory ? (
            <Box
              sx={{
                width: "100%",
                overflowY: "scroll",
                maxHeight: "70%",
                pb: "15rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "900",
                  color: "#A86500",
                  fontWeight: "500",
                  fontSize: "16px",
                }}
              >
                Create a New Offer
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <Typography
                        sx={{ color: "#000", fontSize: "14px", my: "5px" }}
                      >
                        Offer Name
                      </Typography>
                      <Controller
                        name="surname"
                        control={control}
                        defaultValue=""
                        rules={{
                          validate: (value) =>
                            /^[^\d]+$/.test(value) ||
                            " surname cannot contain digits",
                        }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            placeholder="Enter surname"
                            sx={{
                              width: "100%",
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderRadius: "10px",
                                },
                                "&:hover fieldset": {
                                  borderColor: "#FF7F00",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#FF7F00",
                                },
                              },
                            }}
                            //   InputProps={{
                            //     startAdornment: (
                            //       <InputAdornment position="start">
                            //         <PersonOutlineRoundedIcon />
                            //         &nbsp;|
                            //       </InputAdornment>
                            //     ),
                            //   }}
                            //   error={!!errors.surname}
                            //   helperText={errors.surname && errors.surname.message}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        sx={{ color: "#000", fontSize: "14px", my: "5px" }}
                      >
                        Amount Type
                      </Typography>
                      <Controller
                        name="phoneNumber"
                        control={control}
                        defaultValue=""
                        rules={{ required: true, minLength: 11, maxLength: 11 }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            sx={{
                              width: "100%",
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {},
                                "&:hover fieldset": {
                                  borderColor: "#FF7F00",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#FF7F00",
                                },
                              },
                            }}
                            placeholder="e.g 08123456789"
                            //   InputProps={{
                            //     startAdornment: (
                            //       <InputAdornment position="start">
                            //         <LocalPhoneOutlinedIcon />
                            //         &nbsp;|
                            //       </InputAdornment>
                            //     ),
                            //   }}
                            //   error={!!errors.phoneNumber} // Apply error state based on validation result
                            //   helperText={
                            //     errors.phoneNumber
                            //       ? "Phone number must be 11 digits"
                            //       : null
                            //   } // Display error message
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        sx={{ color: "#000", fontSize: "14px", my: "5px" }}
                      >
                        Amount
                      </Typography>
                      <Controller
                        name="altPhoneNumber"
                        control={control}
                        defaultValue=""
                        rules={{ required: true, minLength: 11, maxLength: 11 }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            sx={{
                              width: "100%",
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {},
                                "&:hover fieldset": {
                                  borderColor: "#FF7F00",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#FF7F00",
                                },
                              },
                            }}
                            placeholder="e.g 08123456789"
                            //   InputProps={{
                            //     startAdornment: (
                            //       <InputAdornment position="start">
                            //         <LocalPhoneOutlinedIcon />
                            //         &nbsp;|
                            //       </InputAdornment>
                            //     ),
                            //   }}
                            //   error={!!errors.altPhoneNumber} // Apply error state based on validation result
                            //   helperText={
                            //     errors.altPhoneNumber
                            //       ? "Phone number must be 11 digits"
                            //       : null
                            //   } // Display error message
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        sx={{ color: "#000", fontSize: "14px", my: "5px" }}
                      >
                        Offer Type
                      </Typography>
                      <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        disabled
                        rules={{
                          validate: (value) =>
                            /^[^\d]+$/.test(value) ||
                            "First name cannot contain digits",
                        }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            placeholder="Enter first name"
                            sx={{
                              width: "100%",
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderRadius: "10px",
                                },
                                "&:hover fieldset": {
                                  borderColor: "#FF7F00",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#FF7F00",
                                },
                              },
                            }}
                            //   InputProps={{
                            //     startAdornment: (
                            //       <InputAdornment position="start">
                            //         <PersonOutlineRoundedIcon />
                            //         &nbsp;|
                            //       </InputAdornment>
                            //     ),
                            //   }}
                            //   error={!!errors.firstName}
                            //   helperText={
                            //     errors.firstName && errors.firstName.message
                            //   }
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        sx={{ color: "#344054", fontSize: "14px", my: "5px" }}
                      >
                        Expiry Date
                      </Typography>
                      <Controller
                        name="phoneNumber"
                        control={control}
                        defaultValue=""
                        rules={{ required: true, minLength: 11, maxLength: 11 }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            sx={{
                              width: "100%",
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {},
                                "&:hover fieldset": {
                                  borderColor: "#dc0019",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#dc0019",
                                },
                              },
                            }}
                            placeholder="e.g 08123456789"
                            //   InputProps={{
                            //     startAdornment: (
                            //       <InputAdornment position="start">
                            //         <LocalPhoneOutlinedIcon />
                            //         &nbsp;|
                            //       </InputAdornment>
                            //     ),
                            //   }}
                            //   error={!!errors.phoneNumber} // Apply error state based on validation result
                            //   helperText={
                            //     errors.phoneNumber
                            //       ? "Phone number must be 11 digits"
                            //       : null
                            //   } // Display error message
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        sx={{ color: "#344054", fontSize: "14px", my: "5px" }}
                      >
                        User Frequency
                      </Typography>
                      <Controller
                        name="altPhoneNumber"
                        control={control}
                        defaultValue=""
                        rules={{ required: true, minLength: 11, maxLength: 11 }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            sx={{
                              width: "100%",
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {},
                                "&:hover fieldset": {
                                  borderColor: "#FF7F00",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#FF7F00",
                                },
                              },
                            }}
                            placeholder="e.g 08123456789"
                            //   InputProps={{
                            //     startAdornment: (
                            //       <InputAdornment position="start">
                            //         <LocalPhoneOutlinedIcon />
                            //         &nbsp;|
                            //       </InputAdornment>
                            //     ),
                            //   }}
                            //   error={!!errors.altPhoneNumber} // Apply error state based on validation result
                            //   helperText={
                            //     errors.altPhoneNumber
                            //       ? "Phone number must be 11 digits"
                            //       : null
                            //   } // Display error message
                          />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Box sx={{ textAlign: "left" }}>
                        <Typography
                          sx={{
                            fontWeight: "900",
                            color: "#A86500",
                            fontWeight: "500",
                            fontSize: "16px",
                            textTransform: "uppercase",
                            my: "20px",
                          }}
                        >
                          define how users see this offer
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        sx={{ color: "#000", fontSize: "14px", my: "5px" }}
                      >
                        Headline
                      </Typography>
                      <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                        }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            placeholder="example@domain.com"
                            sx={{
                              width: "100%",
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderRadius: "10px",
                                },
                                "&:hover fieldset": {
                                  borderColor: "#FF7F00",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#FF7F00",
                                },
                              },
                            }}
                            //   InputProps={{
                            //     startAdornment: (
                            //       <InputAdornment position="start">
                            //         <EmailOutlinedIcon />
                            //         &nbsp;|
                            //       </InputAdornment>
                            //     ),
                            //   }}
                            //   error={!!errors.email}
                            //   helperText={errors.email && "Invalid email address"}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        sx={{ color: "#000", fontSize: "14px", my: "5px" }}
                      >
                        Body
                      </Typography>
                      <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                        }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            placeholder="example@domain.com"
                            sx={{
                              width: "100%",
                              "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                  borderRadius: "10px",
                                  height: "150px",
                                },
                                "&:hover fieldset": {
                                  borderColor: "#FF7F00",
                                },
                                "&.Mui-focused fieldset": {
                                  borderColor: "#FF7F00",
                                },
                              },
                            }}
                            //   InputProps={{
                            //     startAdornment: (
                            //       <InputAdornment position="start">
                            //         <EmailOutlinedIcon />
                            //         &nbsp;|
                            //       </InputAdornment>
                            //     ),
                            //   }}
                            //   error={!!errors.email}
                            //   helperText={errors.email && "Invalid email address"}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        sx={{
                          background: "#333333",
                          padding: "10px",
                          borderRadius: "8px",
                          mt: "7rem",
                          width: "100%",
                          color: "#fff",
                          "&:hover": {
                            backgroundColor: "#333333",
                          },
                          textTransform: "capitalize",
                          fontWeight: "500",
                        }}
                      >
                        Create Offer
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Box>
          ) : (
            <OfferHistory />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CreateOffer;
