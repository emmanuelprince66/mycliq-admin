import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Grid } from "@mui/material";
import { CircularProgress } from "@mui/material";
import TransgenderRoundedIcon from "@mui/icons-material/TransgenderRounded";
import PersonPinCircleRoundedIcon from "@mui/icons-material/PersonPinCircleRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import {
  Box,
  Typography,
  InputAdornment,
  Radio,
  Button,
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

const AddSuperAdmin = () => {
  const {
    handleSubmit,
    control,
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "all" });

  return (
    <div className="flex flex-col items-start gap-3 w-full">
      <p className="text-[16px] font-[500] text-[#1E1E1E]">
        Register New Administrator
      </p>
      <p className="text-[16px] text-[#828282]">
        Fill in the form below to register a new administrator.
      </p>

      <form action="" className="w-1/2 flex justify-start">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="flex flex-col items-start gap-2">
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontSize: "14px",
                  mt: "20px",
                  fontWeight: "600",
                  mb: "5px",
                }}
              >
                First Name
              </Typography>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                rules={{
                  validate: (value) =>
                    /^[^\d]+$/.test(value) ||
                    " Last Name cannot contain digits",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder="Enter First Name"
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
                          <PersonOutlineRoundedIcon sx={{ color: "#828282" }} />
                          &nbsp;|
                        </InputAdornment>
                      ),
                    }}
                    error={!!errors.firstname}
                    helperText={errors.firstname && errors.firstname.message}
                  />
                )}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="flex flex-col items-start gap-2">
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontSize: "14px",
                  fontWeight: "600",
                  mt: "20px",
                  mb: "5px",
                }}
              >
                Last Name
              </Typography>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                rules={{
                  validate: (value) =>
                    /^[^\d]+$/.test(value) ||
                    " Last Name cannot contain digits",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    placeholder="Enter Last Name"
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
            </div>
          </Grid>
          <Grid item xs={4}>
            <Typography
              sx={{
                color: "#1e1e1e",
                fontWeight: "600",
                fontSize: "14px",
                mt: "20px",
                mb: "5px",
              }}
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
                        <TransgenderRoundedIcon sx={{ color: "#828282" }} />{" "}
                        &nbsp; | Select gender
                      </Box>
                    </MenuItem>
                    <MenuItem value="MALE">Male</MenuItem>
                    <MenuItem value="FEMALE">Female</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={8}>
            <Typography
              sx={{
                color: "#1e1e1e",
                fontWeight: "600",
                fontSize: "14px",
                mt: "20px",
                mb: "5px",
              }}
            >
              Role
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
                        <PersonPinCircleRoundedIcon sx={{ color: "#828282" }} />{" "}
                        &nbsp; | Select Administrator Role
                      </Box>
                    </MenuItem>
                    <MenuItem value="admin">Admin </MenuItem>
                    <MenuItem value="super-admin">Super Admin</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                color: "#1e1e1e",
                fontWeight: "600",
                fontSize: "14px",
                mt: "20px",
                mb: "5px",
              }}
            >
              Phone Number
            </Typography>
            <Controller
              name="phone"
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
                        <LocalPhoneOutlinedIcon sx={{ color: "#828282" }} />
                        &nbsp;|
                      </InputAdornment>
                    ),
                  }}
                  error={!!errors.phone} // Apply error state based on validation result
                  helperText={
                    errors.phone ? "Phone number must be 11 digits" : null
                  } // Display error message
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography
              sx={{
                color: "#1e1e1e",
                fontWeight: "600",
                fontSize: "14px",
                mt: "20px",
                mb: "5px",
              }}
            >
              Email
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
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              sx={{
                background: "#f78105",
                padding: "10px",

                mt: "10px",
                width: "100%",
                "&:hover": {
                  backgroundColor: "#f78105",
                },
                textTransform: "capitalize",
                fontWeight: "500",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "16px",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              >
                Save and Proceed
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddSuperAdmin;
