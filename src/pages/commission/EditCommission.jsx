import React from "react";
import closeIcon from "../../assets/images/closeIcon.svg";

import {
  TextField,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import { useState } from "react";

const EditCommission = ({ handleCloseUpdateCommission }) => {
  const [charges, setCharges] = useState("");
  const [chargesError, setChargesError] = useState("");

  const handleChargesChange = (e) => {
    setCharges(e.target.value);
  };
  return (
    <div className="w-full flex flex-col items-start gap-3">
      <div className="flex justify-between items-center w-full mb-2">
        <p className="font-[500] text-[20px] text-[#1E1E1E]">
          Update Information
        </p>

        <img
          src={closeIcon}
          onClick={handleCloseUpdateCommission}
          alt="close"
        />
      </div>

      <form action="" className="flex items-start flex-col gap-1 w-full">
        <p className="font-[600] text-[#1E1E1E] text-[16px] mb-2">Charges</p>
        <TextField
          value={charges}
          onChange={handleChargesChange}
          placeholder="e.g.NGN 20.00"
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "#CACACA", // Set the desired border color here
              },
              "&:hover fieldset": {
                borderColor: "#CACACA", // Set the border color on hover here
              },
              "&.Mui-focused fieldset": {
                borderColor: "#C57600", // Set the border color on focus here
              },
            },
          }}
          autoFocus
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                123 &nbsp;&nbsp;|{" "}
              </InputAdornment>
            ),
          }}
        />
        {chargesError && (
          <FormHelperText error>
            Last name can only contain letters
          </FormHelperText>
        )}

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
    </div>
  );
};

export default EditCommission;
