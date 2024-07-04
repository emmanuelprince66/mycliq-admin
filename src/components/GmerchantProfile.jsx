import React from "react";
import { useState, useEffect } from "react";

import {
  Table,
  Box,
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  Grid,
  Container,
  TextField,
  TablePagination,
  ToggleButtonGroup,
  Select,
  ToggleButton,
  Card,
  Typography,
  Modal,
  Divider,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { styled } from "@mui/material/styles";
import CabinRoundedIcon from "@mui/icons-material/CabinRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import TransgenderRoundedIcon from "@mui/icons-material/TransgenderRounded";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import fdown from "../assets/fdown.svg";
import upcolor from "../assets/images/admin/upcolor.svg";
import wallet from "../assets/images/generalMerchants/wallet.svg";
import percent from "../assets/images/generalMerchants/percent.svg";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import FormattedPrice from "./FormattedPrice";
import GmerchantOutLet from "./GmerchantOutLet";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import house from "../assets/images/outletHouseIcon.svg";
import arrRight from "../assets/images/arrow-right.svg";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import GmerchantP from "./GmerchantP";
import SelectDate from "./SelectDate";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  border: "2px solid #E0E0E0",
  color: theme.palette.text.secondary,
  borderRadius: "8px",
  maxHeight: "100%",
}));
const dummyCustomers = [
  {
    id: 1,
    name: "Eleanor Poe",
    img: "",
  },
  {
    id: 2,
    name: "Pleanor Poe",
    img: "",
  },
  {
    id: 3,
    name: "Sleanor Poe",
    img: "",
  },
  {
    id: 4,
    name: "Bleanor Poe",
    img: "",
  },
  {
    id: 5,
    name: "Gleanor Poe",
    img: "",
  },
  {
    id: 6,
    name: "Gleanor Poe",
    img: "",
  },
  {
    id: 7,
    name: "Gleanor Poe",
    img: "",
  },
  {
    id: 8,
    name: "Gleanor Poe",
    img: "",
  },
  {
    id: 9,
    name: "Gleanor Poe",
    img: "",
  },
  {
    id: 10,
    name: "Gleanor Poe",
    img: "",
  },
  {
    id: 11,
    name: "Gleanor Poe",
    img: "",
  },
  {
    id: 12,
    name: "Gleanor Poe",
    img: "",
  },
];
const GmerchantProfile = ({ setShowMerchantProfile }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showOutLet, setShowOutLet] = useState(false);
  const [outletValue, setOutletValue] = useState("");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const {
    handleSubmit,
    control,
    register,
    formState: { isValid, errors },
  } = useForm({ mode: "all" });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [showProfileDetails, setShowProfileDetails] = useState(true);

  const handleBackHome = () => {
    if (outletValue === "") {
      setShowMerchantProfile((prev) => !prev);
    } else {
      setShowOutLet((prev) => !prev);
      setOutletValue("");
    }
  };

  const handleOutletChange = (event) => {
    const value = event.target.value;
    setOutletValue(value);
    setShowOutLet((prev) => !prev);
  };

  return (
    <div>
      <div className="w-full flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <span
            className="flex gap-1 items-center cursor-pointer"
            onClick={handleBackHome}
          >
            <ArrowBackRoundedIcon sx={{ color: "#F78105" }} />
            <p className="font-[600] text-[#F78105] text-[14px]">Go Back</p>
          </span>

          <span className="flex gap-1">
            <img src={house} alt="h" />
            <p className="text-[14px] font-[400 text-[#828282]">Merchants</p>
          </span>

          <img src={arrRight} alt="a-r" />

          <p className="text-[#F78105]">Vendors</p>
        </div>
        <SelectDate />
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="font-[600]  text-[20px] text-[#1e1e1e]">Cascade Lounge</p>

        <div className="flex gap-4 items-center w-[60%] justify-end">
          <div className="flex gap-1 items-center ">
            <p className="text-[#F78105] text-[16px] font-[600]">
              Total Number Of Outlet :
            </p>
            <p className="text-[#F78105] text-[16px] font-[600]">24</p>
          </div>
          <FormControl sx={{ width: "60%" }}>
            <Controller
              name="institutionName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  {...field}
                  value={outletValue}
                  onChange={(event) => {
                    field.onChange(event);
                    handleOutletChange(event);
                  }}
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
                    <Box>Outlet</Box>
                  </MenuItem>
                  <MenuItem value="Outlet 1">Outlet 1</MenuItem>
                  <MenuItem value="Outlet 2">Outlet 2</MenuItem>
                  <MenuItem value="Outlet 3">Outlet 3</MenuItem>
                  <MenuItem value="Outlet 4">Outlet 4</MenuItem>
                </Select>
              )}
            />
          </FormControl>
        </div>
      </div>
      {showOutLet ? <GmerchantOutLet /> : <GmerchantP />}
    </div>
  );
};

export default GmerchantProfile;
