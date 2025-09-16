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
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import TransgenderRoundedIcon from "@mui/icons-material/TransgenderRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import info from "../assets/images/admin/info.svg";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

import { Controller } from "react-hook-form";

import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

const CompanyInfoForm = ({ onSubmit }) => {
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
        Company’s Information
      </Typography>
      <form onSubmit={handleSubmit(onStepSubmit)} className="w-full">
        <Typography
          sx={{ color: "#344054", fontSize: "14px", mt: "20px", mb: "5px" }}
        >
          Company Name
        </Typography>
        <Controller
          name="companyname"
          control={control}
          defaultValue=""
          rules={{
            validate: (value) =>
              /^[^\d]+$/.test(value) || "  Name cannot contain digits",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Enter Company Name"
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
                    <AddBusinessRoundedIcon />
                    &nbsp;|
                  </InputAdornment>
                ),
              }}
              error={!!errors.companyname}
              helperText={errors.companyname && errors.companyname.message}
            />
          )}
        />
        <Typography
          sx={{ color: "#344054", fontSize: "14px", mt: "20px", mb: "5px" }}
        >
          Registered Name
        </Typography>
        <Controller
          name="regname"
          control={control}
          defaultValue=""
          rules={{
            validate: (value) =>
              /^[^\d]+$/.test(value) || " First Name cannot contain digits",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Enter Registered name"
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
                    <AddBusinessRoundedIcon />
                    &nbsp;|
                  </InputAdornment>
                ),
              }}
              error={!!errors.regname}
              helperText={errors.regname && errors.regname.message}
            />
          )}
        />
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid item xs={6}>
            <Typography
              sx={{ color: "#344054", fontSize: "14px", mt: "20px", mb: "5px" }}
            >
              CAC Number
            </Typography>
            <Controller
              name="cac"
              control={control}
              defaultValue=""
              //   rules={{
              //     validate: (value) =>
              //       /^[^\d]+$/.test(value) || " First Name cannot contain digits",
              //   }}
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
                        <AccountBalanceWalletRoundedIcon />
                        &nbsp;|
                      </InputAdornment>
                    ),
                  }}
                  error={!!errors.cac}
                  helperText={errors.cac && errors.cac.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{ color: "#344054", fontSize: "14px", mt: "20px", mb: "5px" }}
            >
              Category
            </Typography>
            <FormControl sx={{ mb: "1rem", width: "100%" }}>
              <Controller
                name="category"
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
                        <AddBusinessRoundedIcon /> &nbsp; | Select category
                      </Box>
                    </MenuItem>
                    <MenuItem value="MALE">Male</MenuItem>
                    <MenuItem value="FEMALE">Female</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Typography
          sx={{ color: "#344054", fontSize: "14px", mt: "20px", mb: "5px" }}
        >
          Location
        </Typography>
        <Controller
          name="location"
          control={control}
          defaultValue=""
          rules={{
            validate: (value) =>
              /^[^\d]+$/.test(value) || "  Address cannot contain digits",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Enter Company Name"
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
                    <FmdGoodRoundedIcon />
                    &nbsp;|
                  </InputAdornment>
                ),
              }}
              error={!!errors.location}
              helperText={errors.location && errors.location.message}
            />
          )}
        />
        <Typography
          sx={{ color: "#344054", fontSize: "14px", mt: "20px", mb: "5px" }}
        >
          Address
        </Typography>
        <Controller
          name="address"
          control={control}
          defaultValue=""
          rules={{
            validate: (value) =>
              /^[^\d]+$/.test(value) || "  Address cannot contain digits",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              placeholder="Enter Company Name"
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
                    <FmdGoodRoundedIcon />
                    &nbsp;|
                  </InputAdornment>
                ),
              }}
              error={!!errors.address}
              helperText={errors.address && errors.address.message}
            />
          )}
        />

        <Typography
          sx={{ color: "#344054", fontSize: "14px", mt: "20px", mb: "5px" }}
        >
          Email Address
        </Typography>

        <Controller
          name="emailaddress"
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
              error={!!errors.emailaddress}
              helperText={errors.emailaddress && "Invalid email address"}
            />
          )}
        />
        <Typography
          sx={{ color: "#344054", fontSize: "14px", mt: "20px", mb: "5px" }}
        >
          Phone Number
        </Typography>
        <Controller
          name="phoneNumberA"
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
              error={!!errors.phoneNumberA} // Apply error state based on validation result
              helperText={
                errors.phoneNumberA ? "Phone number must be 11 digits" : null
              } // Display error message
            />
          )}
        />
        <Typography
          sx={{ color: "#344054", fontSize: "14px", mt: "20px", mb: "5px" }}
        >
          Alternative Phone Number
        </Typography>
        <Controller
          name="phoneNumberA2"
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
              error={!!errors.phoneNumberA2} // Apply error state based on validation result
              helperText={
                errors.phoneNumberA2 ? "Phone number must be 11 digits" : null
              } // Display error message
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
          Save and proceed
        </Button>
      </form>
    </Box>
  );
};

export default CompanyInfoForm;
