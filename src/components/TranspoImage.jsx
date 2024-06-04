import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  Box,
  Typography,
  TextField,
  InputAdornment,
  FormControl,
  Menu,
  MenuItem,
  Select,
  CircularProgress,
} from "@mui/material";
import InsertPhotoRoundedIcon from "@mui/icons-material/InsertPhotoRounded";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import { Input } from "@mui/icons-material";

const TranspoImage = ({ onSubmit, handleBack, showSpinner }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const {
    handleSubmit,
    control,
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "all" });

  const handleImageChange = (e) => {
    console.log("handleImageChange called"); // Add this line
    const file = e.target.files[0];

    console.log(file, "hello");
    if (file && file.type.substr(0, 5) === "image") {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  //   const handleFormSubmit = (formPayLoad) => {
  //     console.log(formPayLoad);
  //   };

const onStepSubmit = async (data, formPayLoad) => {
  // Create a new FormData object
  console.log(data);
  console.log(formPayLoad);
  const formData = new FormData();

  // Append form data to the FormData object
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  // Append the image file to the FormData object
  if (imagePreview) {
    const file = await fetch(imagePreview).then((r) => r.blob());
    const reader = new FileReader();
    reader.readAsDataURL(file);
    const venturesLogo = await new Promise((resolve) => {
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });

    const formDatta = {
      ...data,
      venturesLogo, // This will be a string
      tags: ["transportation"],
    };

    // Call the onSubmit function with the FormData object
    onSubmit(formDatta);
  }
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
        TRANSPORTATION INFORMATION
      </Typography>

      <form
        onSubmit={handleSubmit(onStepSubmit)}
        className="w-full"
        encType="multipart/form-data"
      >
        <Box className="w-[200px] h-[200px] flex mx-auto flex-col items-start my-3">
          <Typography
            sx={{
              color: "#000",
              fontWeight: "400",
              fontSize: "13px",
              mb: "2px",
            }}
          >
            Logo Preview
          </Typography>

          <Box className="w-full h-full flex justify-center items-center bg-gray-100 rounded-md  border-[2px] p-2 ">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="object-contain w-70 h-70"
              />
            ) : (
              <InsertPhotoRoundedIcon sx={{ opacity: "0.4" }} />
            )}
          </Box>
        </Box>

        <Box className="w-full flex mx-auto flex-col items-start my-3">
          {" "}
          <Box className="w-80 mx-auto">
            <Typography
              sx={{
                color: "#000",
                fontWeight: "600",
                fontSize: "13px",
                my: "5px",
              }}
            >
              Transportation Logo
            </Typography>
            <TextField
              onChange={handleImageChange}
              type="file"
              accept="image/*"
              style={{ marginBottom: "20px", width: "100%", my: "10px" }}
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
            />
          </Box>
          <Typography
            sx={{
              color: "#000",
              fontWeight: "600",
              fontSize: "13px",
              my: "5px",
            }}
          >
            School/Institution
          </Typography>
          <FormControl sx={{ mb: "1rem", width: "100%" }}>
            <Controller
              name="institutionName"
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
                      <AddBusinessRoundedIcon /> &nbsp; | Select
                      School/Institution
                    </Box>
                  </MenuItem>
                  <MenuItem value="MALE">Futa</MenuItem>
                  <MenuItem value="FEMALE">Female</MenuItem>
                </Select>
              )}
            />
          </FormControl>
          <Typography
            sx={{
              color: "#000",
              fontWeight: "600",
              fontSize: "13px",
              my: "5px",
            }}
          >
            Name Of Transportation
          </Typography>
          <Controller
            name="venturesName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Enter Transportation Name"
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
                error={!!errors.venturesName}
                helperText={errors.venturesName && errors.venturesName.message}
              />
            )}
          />
          <Typography
            sx={{
              color: "#000",
              fontWeight: "600",
              fontSize: "13px",
              my: "5px",
              mt: "10px",
            }}
          >
            Acronym
          </Typography>
          <Controller
            name="venturesAcronym"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Enter Transportation Acronym e.g NASSA"
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
                error={!!errors.venturesAcronym}
                helperText={
                  errors.venturesAcronym && errors.venturesAcronym.message
                }
              />
            )}
          />
          <Typography
            sx={{
              color: "#000",
              fontWeight: "600",
              fontSize: "13px",
              my: "5px",
              mt: "15px",
            }}
          >
            Transportation Email Address
          </Typography>
          <Controller
            name="venturesEmail"
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
                error={!!errors.venturesEmail}
                helperText={errors.venturesEmail && "Invalid email address"}
              />
            )}
          />
          <Typography
            sx={{
              color: "#000",
              fontWeight: "600",
              fontSize: "13px",
              my: "5px",
              mt: "15px",
            }}
          >
            Transportation Phone Number
          </Typography>
          <Controller
            name="venturesPhone"
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
                error={!!errors.venturesPhone} // Apply error state based on validation result
                helperText={
                  errors.venturesPhone ? "Phone number must be 11 digits" : null
                } // Display error message
              />
            )}
          />
          <Typography
            sx={{
              color: "#000",
              fontWeight: "600",
              fontSize: "13px",
              my: "5px",
              mt: "15px",
            }}
          >
            Alternative Phone Number
          </Typography>
          <Controller
            name="venturesAltPhone"
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
                error={!!errors.venturesAltPhone} // Apply error state based on validation result
                helperText={
                  errors.venturesAltPhone
                    ? "Phone number must be 11 digits"
                    : null
                } // Display error message
              />
            )}
          />
          {/* Add more Controller components for other fields similarly */}
          <Button
            disabled={!isValid || showSpinner}
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
            {showSpinner ? (
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
        </Box>
      </form>
    </Box>
  );
};

export default TranspoImage;
