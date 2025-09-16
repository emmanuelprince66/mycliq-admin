import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Box, Button, Typography } from "@mui/material";

const DoughnutChart = ({ title, label, values, color }) => {
  const data = {
    labels: label,
    datasets: [
      {
        data: values,
        backgroundColor: color, // Colors: Red, Light Blue, Yellow, Green
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
    },
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignItems: "start",
        width: "100%",
        p: "5px",
      }}
    >
      <Typography
        sx={{
          color: "#1E1E1E",
          fontWeight: "400",
          fontSize: "15px",
          mb: "1rem",
        }}
      >
        {title}
      </Typography>
      <Box className="w-[170px] h-[170px] mx-auto">
        <Doughnut data={data} options={options} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          mt: 2,
          flexWrap: "wrap",
        }}
      >
        {data.labels.map((label, index) => (
          <Box
            key={label}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              mb: 0.5,
              ml: 1,
              mr: 1,
            }}
          >
            <Box
              sx={{
                width: 14,
                height: 14,
                bgcolor: data.datasets[0].backgroundColor[index],
                mr: 1,
              }}
            />
            <Typography variant="body2">{label}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DoughnutChart;
