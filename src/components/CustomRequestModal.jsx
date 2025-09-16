import React from "react";
import { useState } from "react";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { Button } from "@mui/material";
import exLogo from "../assets/exLogo.svg";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const CustomRequestModal = ({ titleOne, titleTwo, btnText, close }) => {
  return (
    <div className="w-full flex flex-col gap-3 items-end">
      <div className="flex items-center justify-between w-full mb-3">
        <p className="text-[#1e1e1e] text-[20px] font-[500]">
          Sure to Proceed?
        </p>
        <ClearRoundedIcon
          onClick={close}
          sx={{
            color: "#828282",
            cursor: "pointer",
            fontSize: "30px",
            background: "#f4f4f4",
            p: "4px",
            borderRadius: "8px",
          }}
        />
      </div>

      <div className="w-full flex flex-col items-start justify-center gap-2 text-center">
        <p className="text-[16px] text-[#4F4F4F]">{titleOne}</p>

        <div className="flex items-start gap-2 p-3 w-full bg-[#FFFAEB] rounded-md mt-4">
          <img src={exLogo} alt="ex-logo" />
          <p className="text-[14px] text-[#CDA11E] text-start">{titleTwo}</p>
        </div>
      </div>

      <div className="flex justify-between w-full gap-5 mt-4 items-center my-2">
        <Button
          onClick={close}
          variant="outlined"
          sx={{
            textTransform: "capitalize",
            display: "flex",
            gap: "4px",
            width: "100%",
            alignItems: "center",
            color: "#F78105",
            padding: ".6em",
            border: "1px solid #BDBDBD",
            "&:hover": {
              border: "1px solid #BDBDBD",
            },
            // lineHeight: "26.4px",
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          type="submit"
          sx={{
            color: "#fff",
            width: "100%",
            background: "#F78105",
            padding: ".6em",
            boxShadow: "none",
            "&:hover": {
              background: "#F78105",
            },
          }}
        >
          <SendRoundedIcon sx={{ color: "#fff" }} />
          {btnText}
        </Button>
      </div>
    </div>
  );
};

export default CustomRequestModal;
