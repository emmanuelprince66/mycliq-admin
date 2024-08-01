
import React from "react";
import { useForm, Controller } from "react-hook-form";
import closeIcon from "../../assets/images/closeIcon.svg";
import aTwo from "../../assets/images/admin/acct-name/a-2.svg";
import aThree from "../../assets/images/admin/acct-name/a-3.svg";

import {
  TextField,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import { useState } from "react";

const AddActivity = ({ handleCloseAddActivity }) => {
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({ mode: "all" });

  const onFormSubmit = (data) => {};

  return (
    <div className="w-full flex flex-col items-start gap-3">
      <div className="flex justify-between items-center w-full mb-2">
        <p className="font-[500] text-[20px] text-[#1E1E1E]">Add Activity</p>
        <img src={closeIcon} onClick={handleCloseAddActivity} alt="close" />
      </div>

      {/* form */}
      <form action="" className="w-full" onSubmit={handleSubmit(onFormSubmit)}>
        <FormControl
          sx={{
            mb: "1rem",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <p className="font-[600] text-[#1E1E1E] text-[16px] mb-2">
            Activity Name
          </p>

          <Controller
            name="kyc"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="KYC"
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
                      <img src={aTwo} alt="" /> &nbsp;&nbsp;|{" "}
                    </InputAdornment>
                  ),
                }}
                error={!!errors.kyc}
                helperText={errors?.kyc && errors?.kyc?.message}
              />
            )}
          />
          <p className="font-[600] text-[#1E1E1E] text-[16px] mb-2 mt-4">
            Account Number
          </p>

          <Controller
            name="acctNumber"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="e.g. 6501590865"
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
                      123 &nbsp;&nbsp;|{" "}
                    </InputAdornment>
                  ),
                }}
                error={!!errors.acctNumber}
                helperText={errors?.acctNumber && errors?.acctNumber?.message}
              />
            )}
          />
          <p className="font-[600] text-[#1E1E1E] text-[16px] mb-2 mt-4">
            Bank Name
          </p>

          <Controller
            name="bankName"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                placeholder="e.g. Access Bank"
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
                      <img src={aThree} alt="" /> &nbsp;&nbsp;|{" "}
                    </InputAdornment>
                  ),
                }}
                error={!!errors.bankName}
                helperText={errors?.bankName && errors?.bankName?.message}
              />
            )}
          />
        </FormControl>

        <Button
          variant="contained"
          sx={{
            width: "100%",
            mt: "1.5rem",
            color: "#fff",
            background: "#FF7F00",
            display: "flex",
            alignItem: "center",
            gap: "5px",
            padding: ".6em",
            boxShadow: "none",
            "&:hover": {
              background: "#FF7F00",
            },
          }}
        >
          Done
        </Button>
      </form>
      {/* form ends */}
    </div>
  );
};

export default AddActivity;
