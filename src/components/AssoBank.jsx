import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
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

import { Controller } from "react-hook-form";

import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

const AssoBank = ({ onSubmit , handleBack }) => {
  const {
    handleSubmit,
    control,
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "all" });

  const onStepSubmit = (data) => {
    onSubmit(data); // Pass data back to parent component
  };

  return (
    <Box
      sx={{
        width: "100%",
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
      <form onSubmit={handleSubmit(onStepSubmit)} className="w-full">
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
          disabled={!isValid}
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
          Submit
        </Button>
        <Button
        onClick={handleBack}
          sx={{
            width: "50%",
            my: "10px",
            mx: "auto",
            padding: "10px",
            borderRadius: "8px",
            color: "#333333",
            borderColor: "#ff7f00",
            textTransform: "none",
            "&:hover": {
              borderColor: "#ff7f00",
            },
          }}
          variant="outlined"
        >
          Back
        </Button>
      </form>
    </Box>
  );
};

export default AssoBank;
