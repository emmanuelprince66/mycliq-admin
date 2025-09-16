import React, { useRef, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const LineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) {
      return;
    }

    const ctx = chart.ctx;
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(247, 129, 5, 0.5)"); // RGBA for #F78105 with 0.5 opacity
    gradient.addColorStop(1, "rgba(247, 129, 5, 0.1)"); // RGBA for #F78105 with 0.1 opacity

    chart.data.datasets[0].backgroundColor = gradient; // Apply the gradient to the background
    chart.data.datasets[0].borderColor = "#F78105"; // Set the line color to #F78105
    chart.data.datasets[0].pointBackgroundColor = "#F78105"; // Set the points color to #F78105
    chart.update();
  }, []);

  const generateData = () => {
    const data = [];
    let value = 100; // Starting value
    for (let i = 0; i < 30; i++) {
      value += (Math.random() - 0.5) * 2; // Small random increments/decrements
      data.push(value);
    }
    return data;
  };

  const data = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1), // 30 days
    datasets: [
      {
        label: "Forex Signal",
        data: generateData(),
        fill: true,
        backgroundColor: "rgba(247, 129, 5, 0.5)", // Initial background color
        borderColor: "#f78105",
        borderWidth: 2,
        tension: 0.3, // Higher tension for smoother curves
        pointRadius: 0,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: false, // Adjusted to better represent typical forex data
        grid: {
          display: true, // Keep y-axis grid lines for reference
          color: "rgba(247, 129, 5, 0.1)", // Light grid lines
        },
      },
      x: {
        grid: {
          display: false, // Remove x-axis grid lines
        },
        ticks: {
          maxRotation: 0, // Prevents the labels from being slanted
          minRotation: 0, // Ensures labels are fully horizontal
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    elements: {
      point: {
        radius: 0, // Hides the points on the line for a cleaner look
      },
    },
  };

  return <Line ref={chartRef} data={data} options={options} />;
};

export default LineChart;
