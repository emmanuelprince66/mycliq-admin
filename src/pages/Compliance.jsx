import React from "react";
import SelectDate from "../components/SelectDate";
import HourglassTopRoundedIcon from "@mui/icons-material/HourglassTopRounded";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import cOne from "../assets/images/admin/compliance/c-1.svg";
import cTwo from "../assets/images/admin/compliance/c-2.svg";
import cThree from "../assets/images/admin/compliance/c-3.svg";
import { Card, Box, TextField } from "@mui/material";
import search from "../../src/assets/search.svg";
import InputAdornment from "@mui/material/InputAdornment";

const Compliance = () => {
  return (
    <div className="w-full flex flex-col items-end gap-4">
      <SelectDate />

      <div className="w-full flex gap-4">
        <Card
          sx={{
            padding: "16px",
            width: "100%",
          }}
        >
          <div className="flex w-full flex-col items-start gap-3">
            <div className="flex gap-2 items-center">
              <img src={cOne} alt="c-1" />
              <p className="text-[#4F4F4F] text-[16px] font-[500]">
                Total Number of Verified Users
              </p>
            </div>

            <div className="flex w-full items-center justify-between mt-3">
              <div className="flex flex-col  items-start gap-2">
                <p className="font-[500] text-[12px] text-[#828282]">Type</p>
                <p className="font-[600] text-[16px] text-[#F78105]">
                  Totak KYC:
                </p>
              </div>
              <div className="flex flex-col  items-start gap-2">
                <p className="font-[500] text-[12px] text-[#828282]">
                  All-time
                </p>
                <p className="font-[600] text-[16px] text-[#F78105]">5,755</p>
              </div>
              <div className="flex flex-col  items-start gap-2">
                <p className="font-[500] text-[12px] text-[#828282]">Filter</p>
                <p className="font-[600] text-[16px] text-[#F78105]">5445</p>
              </div>
              <div className="flex flex-col  items-start gap-2">
                <p className="font-[500] text-[12px] text-[#828282]">
                  Expanses Incurred
                </p>
                <p className="font-[600] text-[16px]  text-[#F78105]">
                  N5,000,000
                </p>
              </div>
            </div>

            <div className="flex w-full justify-end mt-3 ">
              <span className="flex text-[#F78105] text-[14px] items-center  gap-2">
                View More
                <ChevronRightRoundedIcon />
              </span>
            </div>
          </div>
        </Card>
        <Card
          sx={{
            padding: "16px",
            width: "100%",
          }}
        >
          <div className="flex w-full flex-col items-start gap-3">
            <div className="flex gap-2 items-center">
              <img src={cTwo} alt="c-2" />
              <p className="text-[#4F4F4F] text-[16px] font-[500]">
                Total Number of Unverified Merchants
              </p>
            </div>

            <div className="flex w-full items-center justify-between mt-3">
              <div className="flex flex-col  items-start gap-2">
                <p className="font-[500] text-[12px] text-[#828282]">Type</p>
                <p className="font-[600] text-[16px] text-[#F78105]">
                  Totak KYC:
                </p>
              </div>
              <div className="flex flex-col  items-start gap-2">
                <p className="font-[500] text-[12px] text-[#828282]">
                  All-time
                </p>
                <p className="font-[600] text-[16px] text-[#F78105]">5,755</p>
              </div>
              <div className="flex flex-col  items-start gap-2">
                <p className="font-[500] text-[12px] text-[#828282]">Filter</p>
                <p className="font-[600] text-[16px] text-[#F78105]">5445</p>
              </div>
              <div className="flex flex-col  items-start gap-2">
                <p className="font-[500] text-[12px] text-[#828282]">
                  Expanses Incurred
                </p>
                <p className="font-[600] text-[16px]  text-[#F78105]">
                  N5,000,000
                </p>
              </div>
            </div>

            <div className="flex w-full justify-end mt-3 ">
              <span className="flex text-[#F78105] text-[14px] items-center  gap-2">
                View More
                <ChevronRightRoundedIcon />
              </span>
            </div>
          </div>
        </Card>
      </div>

      <div className="rounded-md p-2 flex flex-col w-full items-start gap-3 mt-4 border-slate-300 bg-white border-[1px]">
        <div className="flex gap-7 items-center w-full placeholder:">
          <p className="text-[#1E1E1E] font-[500] text-[20px]">Compliance</p>
          {/* search  */}
          <Box className="my-[1rem] w-[40%]">
            <TextField
              sx={{
                borderRadius: "10px",
                width: "100%",
                // padding: { xs: "4px", sm: "12px 16px", md: " 12px 16px" },
                color: "#D1D1D1",
                "& .MuiOutlinedInput-root": {
                  padding: "8px", // Adjust padding to reduce height
                  height: "36px", // Set the desired height here
                  lineHeight: "36px", // Match the height to avoid overflow
                  "& fieldset": {
                    borderColor: "#D1D1D1", // Set the desired border color here
                    borderRadius: "10px",
                  },
                  "&:hover fieldset": {
                    borderColor: "#FF7F00", // Set the border color on hover here
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#FF7F00", // Set the border color on focus here
                  },
                },
              }}
              placeholder="Search User , Transaction ID"
              variant="outlined"
              required
              id="firstName-input"
              InputProps={{
                style: { color: "#818181" },
                startAdornment: (
                  <InputAdornment>
                    <img src={search} alt="s-logo" />
                    &nbsp;&nbsp;&nbsp;
                  </InputAdornment>
                ),
              }}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </Box>
          {/* search  */}

          {/* filter one */}

          {/* filter one ends */}
        </div>
      </div>
    </div>
  );
};

export default Compliance;
