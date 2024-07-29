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

const UpdateAcctNumber = ({ handleCloseUpdateAcctNo }) => {
  const {
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm({ mode: "all" });

  const onFormSubmit = (data) => {};

  return (
    <div className="w-full flex flex-col items-start gap-3">
      <div className="flex justify-between items-center w-full mb-2">
        <p className="font-[500] text-[20px] text-[#1E1E1E]">
          Update Information
        </p>

        <img src={closeIcon} onClick={handleCloseUpdateAcctNo} alt="close" />
      </div>

      {/* form */}
      <form action="" onSubmit={handleSubmit(onFormSubmit)}></form>
      {/* form ends */}
    </div>
  );
};

export default UpdateAcctNumber;
