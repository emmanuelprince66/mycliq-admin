import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  InputAdornment,
  Radio,
  TextField,
  MenuItem,
  Modal,
  Select,
  CircularProgress,
  FormControl,
  Backdrop,
  RadioGroup,
  Paper,
  FormControlLabel,
} from "@mui/material";
import TransgenderRoundedIcon from "@mui/icons-material/TransgenderRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import CabinRoundedIcon from "@mui/icons-material/CabinRounded";
import TableRestaurantRoundedIcon from "@mui/icons-material/TableRestaurantRounded";
import info from "../assets/images/admin/info.svg";
import { useMutation, useQuery } from "@tanstack/react-query";
import { BaseAxios } from "../helpers/axiosInstance";
import Cookies from "js-cookie";


import { Controller } from "react-hook-form";

import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

const BankDetailsForm = () => {
  const [showSpinner, setShowSpinner] = useState(false);

const token = Cookies.get("authToken")
  const {
    handleSubmit,
    control,
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "all" });


    const notifyError = (msg) => {
      toast.error(msg, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 6000, // Time in milliseconds
      });
    };
    // use mutation hook
    const registerBankDetailsMutation = useMutation({
      mutationFn: async (payLoad) => {
        try {
          const response = await BaseAxios({
            url: "",
            method: "POST",
            data: payLoad,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          return response.data;
        } catch (error) {
          notifyError(error?.response?.data?.message);
          console.log(error);
          setShowSpinner(false);
          handleReset();
          throw new Error(error.response.data.message);
          // throw new Error(error.response.data.message);
        }
      },
      onSuccess: (data) => {
        console.log(data);
        setSuccess(true);
        setShowSpinner(false);
        handleReset();
      },
      onError: (error) => {
        console.log(error);
        setShowSpinner(false);
        handleReset();
      },
    });

  const handleFormSubmit = (data) => {
  console.log(data)
  };




  return (
    <Box
      sx={{
        width: "55%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "content",
        my: "3rem",
        overflowY: "scroll",
        maxHeight: "70vh",
        pb: "2rem",
      }}
    >
      <Typography sx={{ color: "#C57600", fontWeight: "500" }}>
        DESIGNATED BANK ACCOUNT
      </Typography>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full">
        <Typography
          sx={{ color: "#344054", fontSize: "14px", mt: "20px", mb: "5px" }}
        >
          Bank Name
        </Typography>
        <Controller
          name="bname"
          control={control}
          defaultValue=""
          rules={{
            validate: (value) =>
              /^[^\d]+$/.test(value) || " Bank Name cannot contain digits",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Enter bank name"
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#ff7f00",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ff7f00",
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CabinRoundedIcon />
                    &nbsp;|
                  </InputAdornment>
                ),
              }}
              error={!!errors.bname}
              helperText={errors.bname && errors.bname.message}
            />
          )}
        />
        <Typography
          sx={{ color: "#344054", fontSize: "14px", mt: "20px", mb: "5px" }}
        >
          Account Name
        </Typography>
        <Controller
          name="acname"
          control={control}
          defaultValue=""
          rules={{
            validate: (value) =>
              /^[^\d]+$/.test(value) || " Account Name cannot contain digits",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Enter bank name"
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#ff7f00",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ff7f00",
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CabinRoundedIcon />
                    &nbsp;|
                  </InputAdornment>
                ),
              }}
              error={!!errors.acname}
              helperText={errors.acname && errors.acname.message}
            />
          )}
        />
        <Typography
          sx={{ color: "#344054", fontSize: "14px", mt: "20px", mb: "5px" }}
        >
          Account Number
        </Typography>
        <Controller
          name="acnumber"
          control={control}
          defaultValue=""
          //   rules={{
          //     validate: (value) =>
          //       /^[^\d]+$/.test(value) || " First Name cannot contain digits",
          //   }}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Enter Account Number"
              sx={{
                width: "100%",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#ff7f00",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ff7f00",
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CabinRoundedIcon />
                    &nbsp;|
                  </InputAdornment>
                ),
              }}
              error={!!errors.acnumber}
              helperText={errors.acnumber && errors.acnumber.message}
            />
          )}
        />
        <Button
        disabled={showSpinner || registerBankDetailsMutation.isLoading}
          type="submit"
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
          {showSpinner || registerBankDetailsMutation.isLoading ? (
            <CircularProgress size="1.2rem" sx={{ color: "white" }} />
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Box>
  );
};

export default BankDetailsForm;
