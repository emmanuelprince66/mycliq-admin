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
import { BaseAxios } from "../helpers/axiosInstance";
import { useMutation, useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import Cookie from "js-cookie";

import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import { Input } from "@mui/icons-material";

const VentureImage = ({ onSubmit, handleBack }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const token = Cookie.get("authToken");
  const [uploadingingFile, setUploadingFile] = useState(false);
  const [imgUrl, setImageUrl] = useState("");

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
  // upload file

  const uploadFileMutation = useMutation({
    mutationFn: async (formData) => {
      console.log(formData);
      try {
        const response = await BaseAxios({
          url: "/misc/fs/upload",
          method: "POST",
          data: formData,
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        if (response.status !== 201) {
          setUploadingFile(false);

          notifyError(response?.data?.message);
          throw new Error(response.data.message);
        }

        return response;
      } catch (error) {
        console.log(error);
        setUploadingFile(false);

        throw new Error(error.response.data.message);
      }
    },
    onSuccess: (data) => {
      setImageUrl(data?.data?.data?.publicUrl);
      setUploadingFile(false);
      // Handle success, update state, or perform further actions
    },
    onError: (error) => {
      console.log(error);
    },
  });

  // fetch all schools
  const {
    data: schoolDetails,
    error,
    isLoading: schoolLoading,
  } = useQuery({
    queryKey: "schoolDetails",
    queryFn: async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await BaseAxios.get(
          "merchant/bill/institutions",
          config
        );
        return response?.data?.data?.records;
      } catch (error) {
        throw new Error("Failed to fetch customer data");
      }
    },
    onSuccess: (data) => {
      console.log(data);
    },
    staleTime: 1000 * 60 * 10, // Cache data for 10 minutes
  });
  //

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      setImagePreview(URL.createObjectURL(file));

      const formData = new FormData();
      formData.append("file", file); // Append the file directly as a Blob

      console.log(formData);

      uploadFileMutation.mutate(formData);
      setUploadingFile(true);
    } else {
      setImagePreview(null);
    }
  };

  //   const handleFormSubmit = (formPayLoad) => {
  //     console.log(formPayLoad);
  //   };

  const onStepSubmit = async (data) => {
    // Create a new FormData object

    if (imgUrl === "") {
      console.log(imgUrl);
      notifyError("Please upload an image");
    } else {
      const formData = new FormData();

      const formDatta = {
        ...data,
        venturesLogo: imgUrl,
        tags: `${data?.ventureTag}`,
      };

      // Object.keys(formDatta).forEach(key => {
      //   formData.append(key, formDatta[key]);
      // });
      
      // // Log the contents of `formData`
      // for (const pair of formData.entries()) {
      //   console.log(pair[0], pair[1]);
      // }

      const newFormDatta = { ...formDatta };
      delete newFormDatta.ventureTag;


      // console.log(newFormDatta)

      onSubmit(newFormDatta);
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
        pb: "2rem",
      }}
    >
      <Typography sx={{ color: "#C57600", fontWeight: "500" }}>
        Venture INFORMATION
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
            {uploadingingFile ? (
              <CircularProgress size="1.2rem" sx={{ color: "#DC0019" }} />
            ) : (
              "  Logo Preview"
            )}
          </Typography>

          <Box className="w-full h-full flex justify-center items-center bg-gray-100 rounded-md  border-[2px] p-2 ">
            {imagePreview && !uploadingingFile && imgUrl !== "" ? (
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
              Venture Logo
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

                  {schoolLoading ? (
                    <CircularProgress sx={{ my: "5px" }} />
                  ) : (
                    schoolDetails?.map((item) => (
                      <MenuItem key={item?.id} value={item?.id}>
                        {item?.name}
                      </MenuItem>
                    ))
                  )}
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
            Venture
          </Typography>
          <FormControl sx={{ mb: "1rem", width: "100%" }}>
            <Controller
              name="ventureTag"
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
                      <AddBusinessRoundedIcon /> &nbsp; | Select Venture
                    </Box>
                  </MenuItem>
                  <MenuItem value="transportation">Transportation</MenuItem>
                  <MenuItem value="association">Association</MenuItem>
                  <MenuItem value="ticketing">Ticketing</MenuItem>
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
            Name Of Venture
          </Typography>
          <Controller
            name="venturesName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="Enter Venture Name"
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
                placeholder="Enter Venture Acronym e.g NASSA"
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
            Venture Email Address
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
            Venture Phone Number
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
            <Typography
              sx={{
                fontWeight: "400",
                fontSize: "16px",
                color: !isValid ? "grey" : "#fff",
              }}
            >
              Save and Proceed
            </Typography>
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

export default VentureImage;
