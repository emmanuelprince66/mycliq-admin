import React from "react";
import { Box, Grid } from "@mui/material";

const ThierThreeModal = ({ modalData }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    width: "745px",
    bgcolor: "background.paper",
    p: 3,
  };
  console.log("mdoal", modalData);
  return (
    <Box sx={style}>
      <div className="w-full">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <div className="flex flex-col items-start gap-4">
              <img src="" alt="" />
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default ThierThreeModal;
