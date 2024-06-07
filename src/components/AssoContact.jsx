import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";

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
import { useMutation, useQuery } from "@tanstack/react-query";
import {CircularProgress} from "@mui/material";
import closeIcon from "../assets/images/closeIcon.svg";
import successIcon from "../assets/successIcon.svg";



import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import { BaseAxios } from "../helpers/axiosInstance";

const AssoContact = ({ onSubmit }) => {

const [buttonDisabled , setButtonDisabled] = useState(false)
const [success , setSuccess] = useState(false)
  const handleCloseSuccess = () => setSuccess(false);


  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    width: "745px",
    bgcolor: "background.paper",
    p: 3,
  };
  const notifyError = (msg) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 6000, // Time in milliseconds
    });
  };
  // use mutation hook
  const registerAssociationMutation = useMutation({
    mutationFn: async (payLoad) => {
      try {
        const response = await BaseAxios({
          url: "/account/register",
          method: "POST",
          data: payLoad,
        });

        return response.data;
      } catch (error) {
        setButtonDisabled(false);
        notifyError(error?.response?.data?.message);
        console.log(error);
        throw new Error(error.response.data.message);
        // throw new Error(error.response.data.message);
      }
    },
    onSuccess: (data) => {
      console.log(data);
      setSuccess(true);
      setButtonDisabled(false);
      onStepSubmit();
    },
    onError: (error) => {
      console.log(error);
      setButtonDisabled(false);
    },
  });
  const {
    handleSubmit,
    control,
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "all" });

  const onStepSubmit = (data) => {
    onSubmit(data); // Pass data back to parent component
  };

  // const formSubmit = (data) => {
  //     const {
  //       firstName,
  //       lastName,
  //       phoneNumberTwo,
  //       email,
  //       phoneNumber,
  //       gender,
  //     } = data;

  //     const payLoad = {
  //       firstName,
  //       lastName,
  //       phoneNumberTwo,
  //       email,
  //       role: "merchant",
  //       phoneNumber,
  //       gender: gender,
  //       isAttendant: true,
  //     };
  //     registerAssociationMutation.mutate(payLoad);
  //     setButtonDisabled(true);
      
  //     console.log(payLoad)
      
  // };

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
        Contact Person Information
      </Typography>
      <form onSubmit={handleSubmit(onStepSubmit)} className="w-full">
        <Typography
          sx={{ color: "#344054", fontSize: "14px", mt: "20px", mb: "5px" }}
        >
          First Name
        </Typography>
        <Controller
          name="firstName"
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
          name="lastName"
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
          Alt phone Number
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
          disabled={
            !isValid || registerAssociationMutation.isLoading || buttonDisabled
          }
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
          {registerAssociationMutation.isLoading || buttonDisabled ? (
            <CircularProgress size="1.2rem" sx={{ color: "white" }} />
          ) : (
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                color: "#fff",
              }}
            >
              Save and Proceed
            </Typography>
          )}
        </Button>
      </form>

      {/* Modal for create bill sucess*/}

      <Modal
        open={success}
        onClose={handleCloseSuccess}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        PaperProps={{
          sx: {
            border: "none", // Remove the border
            boxShadow: "none", // Remove the box shadow
          },
        }}
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fomtWeight: "900",
                color: "#1E1E1E",
                fontWeight: "500",
                fontSize: "20px",
              }}
            >
              Successful
            </Typography>

            <Box onClick={handleCloseSuccess}>
              <img src={closeIcon} alt="c-icon" />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              mt: "2rem",
              mb: "1.9rem",
            }}
          >
            <Box>
              <img src={successIcon} alt="success-icon" />
            </Box>

            <Typography
              sx={{
                fomtWeight: "400",
                fontSize: "16px",
                color: "#4F4F4F",
                lineHeight: "24px",
              }}
            >
              New Item Added Successfully!
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              mb: "-0.7rem",
            }}
          >
            <Button
              onClick={handleCloseSuccess}
              sx={{
                background: "#333333",
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#333333",
                },
              }}
            >
              Okay
            </Button>
          </Box>
        </Box>
      </Modal>
      {/* Modal ends */}
      <ToastContainer
        theme="dark"
        toastStyle={{ background: "#333", color: "#fff" }}
      />
    </Box>
  );
};

export default AssoContact;
