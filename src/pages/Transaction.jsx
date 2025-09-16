import React, { useState, useEffect } from "react";
import TableCom from "../components/TableCom";
import { AuthAxios } from "../helpers/axiosInstance";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { Box, Button, Typography } from "@mui/material";
import { CalendarMonthOutlined } from "@mui/icons-material";
import { Calendar, DateRangePicker } from "react-date-range";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { fillSelectedDates } from "../utils/store/merchantSlice";
import { fillUserDetails } from "../utils/store/merchantSlice";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useSelector } from "react-redux";

const Transaction = () => {
  const [dateVisible, setDateVisible] = useState(false);
  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const dispatch = useDispatch();
  const { selectedDates } = useSelector((state) => state);

  useEffect(() => {
    async function getUserDetails() {
      try {
        const response = await AuthAxios.get("/user");

        // dispatch(fillUserDetails(response.data));
      } catch (error) {}
    }
    getUserDetails();
  }, [dispatch]);

  function handleSelect(ranges) {
    const dateRange = {
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: "selection",
    };
    setSelectedRange(dateRange);
  }
  const modStartDate = new Date(selectedDates.startDate).toLocaleDateString();
  const modEndDate = new Date(selectedDates.endDate).toLocaleDateString();

  function openDateRange() {
    setDateVisible(!dateVisible);
  }
  function showChange(data) {
    setDateVisible(!dateVisible);
  }
  function handleDateChange() {
    dispatch(
      fillSelectedDates({
        startDate: new Date(selectedRange.startDate).toLocaleDateString(),
        endDate: new Date(selectedRange.endDate).toLocaleDateString(),
      })
    );
    setDateVisible(false);
  }

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <TableCom />
    </Box>
  );
};

export default Transaction;
