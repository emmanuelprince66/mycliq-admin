import React from "react";
import { useForm } from "react-hook-form";
import { Button, CircularProgress } from "@mui/material";
import {
  Box,
  Typography,
  Grid,
  InputAdornment,
  Radio,
  TextField,
  MenuItem,
  Modal,
  MenuList,
  Select,
  Popper,
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
import { BaseAxios } from "../helpers/axiosInstance";
import { useMutation, useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import Cookie from 'js-cookie'
import axios from "axios";
import { useState , useRef , useEffect} from "react";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";



import { Controller } from "react-hook-form";

import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";

const VentureBank = ({ onSubmit, handleBack , showSpinner }) => {
   const [searchTerm, setSearchTerm] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
  const [filteredItems , setFilteredItems] = useState(null)
  const [bankName , setBankName] = useState("")
  const [bankCode , setBankCode] = useState("")
  const token = Cookie.get("authToken");
  

  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({ mode: "all" });
  

// Fetch Bank Details
const handleSetBankDetails = (bname , bcode) => {
  setBankName(bname);
  setBankCode(bcode);
  setAnchorEl((prev) => !prev);
};

const {
  data: bankDetails,
  error,
  isLoading,
} = useQuery({
  queryKey: "bankDetails",
  queryFn: async () => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await BaseAxios.get("bank", config);
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
  console.log(bankDetails)
// 

  const onStepSubmit = (data) => {
    onSubmit(data); // Pass data back to parent component
    console.log(data)
  };
  
  useEffect(() => {
  
  if(searchTerm === "") {
   setFilteredItems(bankDetails)
  } else {
  const items = bankDetails?.filter((bank) =>
    bank.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredItems(items)
  }
    
  } , [searchTerm , bankDetails])
  
   const handleInputClick = (event) => {
     setAnchorEl(anchorEl ? null : event.currentTarget);
   };
  


  const onFormSubmit = (data) => {
    
    const {acname , acnumber } = data
    const formData = {
      accountNumber: acnumber,
      accountName: acname,
      bankCode: bankCode,
    };
    const payload = {
      bankAccount: formData
    } 
    
    onSubmit(payload);
    
    
  }

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
        DESIGNATED BANK ACCOUNT
      </Typography>
      <form onSubmit={handleSubmit(onFormSubmit)} className="w-full">
        <Typography
          sx={{ color: "#344054", fontSize: "14px", mt: "20px", mb: "5px" }}
        >
          Bank Name
        </Typography>
        {/* <Controller
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
        /> */}

        <Box
          sx={{ position: "relative", width: "100%" }}
          onClick={handleInputClick}
        >
          <TextField
            placeholder="Select a Bank"
            disabled
            value={bankName}
            fullWidth
            InputProps={{
              endAdornment: (
                <KeyboardArrowDownRoundedIcon
                  sx={{
                    cursor: "pointer",
                  }}
                />
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: "10px",
                },
              },
            }}
          />
        </Box>
        <Popper
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          placement="bottom-start"
          style={{
            width: anchorEl ? anchorEl.clientWidth : null,
            maxHeight: "30vh",
          }}
        >
          <Paper>
            <TextField
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{
                margin: "10px",
                width: "40%",
                "& .MuiOutlinedInput-input": {
                  height: "24px", // Adjust the height as needed
                },
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

            <MenuList style={{ maxHeight: "50vh", overflowY: "auto" }}>
              {isLoading ? (
                <MenuItem disabled>Loading...</MenuItem>
              ) : (
                <>
                  {filteredItems?.map((bank, index) => (
                    <MenuItem
                      key={index}
                      onClick={() =>
                        handleSetBankDetails(bank?.name, bank?.bankCode)
                      }
                    >
                      {bank.name}
                    </MenuItem>
                  ))}
                  {filteredItems?.length === 0 && (
                    <MenuItem disabled>No matching banks found</MenuItem>
                  )}
                </>
              )}
            </MenuList>
          </Paper>
        </Popper>
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
            "Submit"
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
      </form>
      <ToastContainer />
    </Box>
  );
};

export default VentureBank;
