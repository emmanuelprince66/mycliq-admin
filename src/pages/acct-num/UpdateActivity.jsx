
import React from "react";
import { useState, useEffect } from "react";
import closeIcon from "../../assets/images/closeIcon.svg";
import aTwo from "../../assets/images/admin/acct-name/a-2.svg";
import aThree from "../../assets/images/admin/acct-name/a-3.svg";
import { Controller, useForm } from "react-hook-form";
import {
  TextField,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
const UpdateActivity = ({ handleCloseUpdateActivity }) => {
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({ mode: "all" });
  const [kyc, setKyc] = useState("");
  const [acctNumber, setAcctNumber] = useState("");
  const [acctName, setAcctName] = useState("");
  const [bankName, setBankName] = useState("");
  const onFormSubmit = (data) => {};
  useEffect(() => {}, []);
  return (
    <div className="w-full flex flex-col items-start gap-3">
      <div className="flex justify-between items-center w-full mb-2">
        <p className="font-[500] text-[20px] text-[#1E1E1E]">Add Activity</p>
        <img src={closeIcon} onClick={handleCloseUpdateActivity} alt="close" />
      </div>

      {/* form */}

      <form
        action=""
        onSubmit={handleSubmit(onFormSubmit)}
        className="w-full flex items-start flex-col "
      >
        <p className="font-[600] text-[#1E1E1E] text-[16px] mb-2">
          Activity Name
        </p>
        <TextField
          placeholder="KYC"
          value={kyc}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={aTwo} alt="" /> &nbsp;&nbsp;|{" "}
              </InputAdornment>
            ),
          }}
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
          error={!!errors.kyc}
          helperText={errors.kyc && errors.kyc.message}
        />
        <p className="font-[600] text-[#1E1E1E] text-[16px] mb-2 mt-3">
          Account Number
        </p>
        <TextField
          placeholder="e.g. 6501590865"
          value={acctNumber}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                123 &nbsp;&nbsp;|{" "}
              </InputAdornment>
            ),
          }}
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
          error={!!errors.acctNumber}
          helperText={errors.acctNumber && errors.acctNumber.message}
        />
        <p className="font-[600] text-[#1E1E1E] text-[16px] mb-2 mt-3">
          Bank Name
        </p>
        <TextField
          placeholder="e.g. Access Bank"
          value={bankName}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                123 &nbsp;&nbsp;|{" "}
              </InputAdornment>
            ),
          }}
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
          error={!!errors.bankName}
          helperText={errors.bankName && errors.bankName.message}
        />
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

      {/* form  ends*/}
    </div>
  );
};

export default UpdateActivity;
