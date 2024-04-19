import React, { useState, useEffect } from "react";
import { CalendarMonthOutlined } from "@mui/icons-material";
import { Calendar, DateRangePicker } from "react-date-range";
import { useDispatch } from "react-redux";
import { fillSelectedDates } from "../utils/store/merchantSlice";
import { fillUserDetails } from "../utils/store/merchantSlice";
import { useSelector } from "react-redux";

import { Box, Button, Typography } from "@mui/material";
import { AuthAxios } from "../helpers/axiosInstance";
import { parse } from "date-fns";

const SelectDate = () => {
  const { selectedDates } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(selectedDates);

  const current = new Date();
  const timeZone = "Africa/Lagos"; // Nigerian time zone

  const startOfMonth = new Date();
  const endOfMonth = new Date();

  // Assuming the date is in MM/DD/YYYY format
  const formatString = "M/d/yyyy";

  const convertedStartDate = parse(
    selectedDates.startDate,
    formatString,
    new Date()
  );
  const convertedEndDate = parse(
    selectedDates.endDate,
    formatString,
    new Date()
  );

  console.log(startOfMonth, endOfMonth);
  const [dateVisible, setDateVisible] = useState(false);
  const [selectedRange, setSelectedRange] = useState({
    startDate: selectedDates.startDate,
    endDate: selectedDates.endDate,
    key: "selection",
  });

  useEffect(() => {
    async function getUserDetails() {
      try {
        const response = await AuthAxios.get("/user");
        console.log(response);
        dispatch(fillUserDetails(response.data));
      } catch (error) {
        console.log(error);
      }
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

    console.log("Selected Date Range:", ranges);
  }
  const modStartDate = new Date(selectedDates.startDate).toLocaleDateString();
  const modEndDate = new Date(selectedDates.endDate).toLocaleDateString();

  console.log(modStartDate, modEndDate);
  console.log(selectedRange);

  function openDateRange() {
    setDateVisible(!dateVisible);
  }
  function showChange(data) {
    // setDateVisible(!dateVisible);
  }
  function handleDateChange() {
    console.log(
      new Date(selectedRange.startDate).toLocaleDateString(),
      new Date(selectedRange.endDate).toLocaleDateString()
    );
    dispatch(
      fillSelectedDates({
        startDate: new Date(selectedRange.startDate),
        endDate: new Date(selectedRange.endDate),
      })
    );
    setDateVisible(false);
  }
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          marginLeft: "auto",
          justifyContent: "flex-end",
          width: "fit-content",
          gap: "1em",
          alignItems: "center",
          mb: "1rem",
        }}
      >
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "16px",
            color: "#4F4F4F",
          }}
        >
          Showing results for
        </Typography>

        <div className="border flex ml-auto border-grey_1 w-fit rounded-[8px] ">
          <Button
            sx={{ color: "#4F4F4F" }}
            startIcon={<CalendarMonthOutlined />}
            onClick={openDateRange}
          >
            {" "}
            {modStartDate}- {modEndDate}
          </Button>
        </div>
        {dateVisible && (
          <div className="absolute flex flex-col bg-white z-[2]  shadow-lg p-2 rounded-[8px] top-[140px]">
            <DateRangePicker
              ranges={[selectedRange]}
              onShownDateChange={showChange}
              onChange={handleSelect}
            />

            <button
              onClick={handleDateChange}
              className="bg-primary_red_2 hover:bg-primary_red_3 p-2 w-1/5 ml-auto rounded-[8px] text-white"
            >
              {" "}
              Done{" "}
            </button>
          </div>
        )}
      </Box>
    </div>
  );
};

export default SelectDate;
