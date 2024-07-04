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
import info from "../assets/images/admin/info.svg";

import { Controller } from "react-hook-form";

import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

const BranchManagerForm = ({ onSubmit }) => {
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
        pb: "2rem",
      }}
    >
      <Typography sx={{ color: "#C57600", fontWeight: "500" }}>
        Branch Manager’s Information
      </Typography>
      <form onSubmit={handleSubmit(onStepSubmit)} className="w-full">
        <Typography
          sx={{ color: "#344054", fontSize: "14px", mt: "20px", mb: "5px" }}
        >
          First Name
        </Typography>
        <Controller
          name="firstname"
          control={control}
          defaultValue=""
          rules={{
            validate: (value) =>
              /^[^\d]+$/.test(value) || " Last Name cannot contain digits",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Enter branch manager's first name"
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
                    <PersonOutlineRoundedIcon />
                    &nbsp;|
                  </InputAdornment>
                ),
              }}
              error={!!errors.firstname}
              helperText={errors.firstname && errors.firstname.message}
            />
          )}
        />
        <Typography
          sx={{ color: "#344054", fontSize: "14px", mt: "20px", mb: "5px" }}
        >
          Last Name
        </Typography>
        <Controller
          name="lastname"
          control={control}
          defaultValue=""
          rules={{
            validate: (value) =>
              /^[^\d]+$/.test(value) || " First Name cannot contain digits",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Enter branch manager's first name"
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
                    <PersonOutlineRoundedIcon />
                    &nbsp;|
                  </InputAdornment>
                ),
              }}
              error={!!errors.lastname}
              helperText={errors.lastname && errors.lastname.message}
            />
          )}
        />
        <Typography
          sx={{ color: "#344054", fontSize: "14px", mt: "20px", mb: "5px" }}
        >
          Gender
        </Typography>
        <FormControl sx={{ mb: "1rem", width: "100%" }}>
          <Controller
            name="gender"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                {...field}
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {},
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ff7f00",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ff7f00",
                  },
                }}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  <Box>
                    <TransgenderRoundedIcon /> &nbsp; | Select gender
                  </Box>
                </MenuItem>
                <MenuItem value="MALE">Male</MenuItem>
                <MenuItem value="FEMALE">Female</MenuItem>
              </Select>
            )}
          />
        </FormControl>

        <Typography
          sx={{ color: "#344054", fontSize: "14px", mt: "20px", mb: "5px" }}
        >
          Company Email
        </Typography>

        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
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
                    <EmailOutlinedIcon />
                    &nbsp;|
                  </InputAdornment>
                ),
              }}
              error={!!errors.email}
              helperText={errors.email && "Invalid email address"}
            />
          )}
        />
        <Typography
          sx={{ color: "#344054", fontSize: "14px", mt: "20px", mb: "5px" }}
        >
          Company Phone Number
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
                    borderColor: "#ff7f00",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ff7f00",
                  },
                },
              }}
              placeholder="e.g 08123456789"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalPhoneOutlinedIcon />
                    &nbsp;|
                  </InputAdornment>
                ),
              }}
              error={!!errors.phoneNumber} // Apply error state based on validation result
              helperText={
                errors.phoneNumber ? "Phone number must be 11 digits" : null
              } // Display error message
            />
          )}
        />
        <Typography
          sx={{ color: "#344054", fontSize: "14px", mt: "20px", mb: "5px" }}
        >
          Company Phone Number
        </Typography>
        <Controller
          name="phoneNumberTwo"
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
                    borderColor: "#ff7f00",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#ff7f00",
                  },
                },
              }}
              placeholder="e.g 08123456789"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocalPhoneOutlinedIcon />
                    &nbsp;|
                  </InputAdornment>
                ),
              }}
              error={!!errors.phoneNumber} // Apply error state based on validation result
              helperText={
                errors.phoneNumber ? "Phone number must be 11 digits" : null
              } // Display error message
            />
          )}
        />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            background: "#FFFAEB",
            p: "1rem",
            my: "10px",
          }}
        >
          <img src={info} alt="info-img" />

          <Typography
            sx={{
              fomtWeight: "400",
              color: "#CDA11E",
              fontSize: "14px",
            }}
          >
            Be sure to have credited this user before proceeding to update
            transaction status as “Successful”.
          </Typography>
        </Box>

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
          Save and proceed
        </Button>
      </form>
    </Box>
  );
};

export default BranchManagerForm;
