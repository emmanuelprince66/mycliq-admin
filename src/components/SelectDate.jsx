import React, { useState, useEffect } from "react";
import { CalendarMonthOutlined } from "@mui/icons-material";
import { Calendar, DateRangePicker } from "react-date-range";
import { useDispatch, useSelector } from "react-redux";
import { fillSelectedDates, fillUserDetails } from "../utils/store/merchantSlice";
import { Box, Button, Typography } from "@mui/material";
import { AuthAxios } from "../helpers/axiosInstance";
import { parse } from "date-fns";

const SelectDate = () => {
  const dispatch = useDispatch();
  const { selectedDates } = useSelector((state) => state);

  const [dateVisible, setDateVisible] = useState(false);
  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  useEffect(() => {
    async function getUserDetails() {
      try {
        const response = await AuthAxios.get("/user");
        dispatch(fillUserDetails(response.data));
      } catch (error) {
        console.error(error);
      }
    }
    getUserDetails();
  }, [dispatch]);

  const handleSelect = (ranges) => {
    setSelectedRange(ranges.selection);
  };

  const handleDateChange = () => {
    dispatch(
      fillSelectedDates({
        startDate: new Date(selectedRange.startDate),
        endDate: new Date(selectedRange.endDate),
      })
    );
    setDateVisible(false);
  };

  const openDateRange = () => {
    setDateVisible(!dateVisible);
  };

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
            {selectedRange.startDate.toLocaleDateString()} -{" "}
            {selectedRange.endDate.toLocaleDateString()}
          </Button>
        </div>
        {dateVisible && (
          <div className="absolute flex flex-col bg-white z-[2]  shadow-lg p-2 rounded-[8px] top-[140px]">
            <DateRangePicker
              ranges={[selectedRange]}
              onChange={handleSelect}
            />

            <button
              onClick={handleDateChange}
              className="bg-primary_red_2 hover:bg-primary_red_3 p-2 w-1/5 ml-auto rounded-[8px] text-white"
            >
              Done
            </button>
          </div>
        )}
      </Box>
    </div>
  );
};

export default SelectDate;