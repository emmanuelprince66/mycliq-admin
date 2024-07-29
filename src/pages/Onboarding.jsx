import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Modal, Grid } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import Merchant from "../components/Merchant";
import Association from "../components/Association";
import { styled } from "@mui/material/styles";
import BankDetailsForm from "../components/BankDetailsForm";
import Ventures from "../components/Ventures";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  border: "1px solid #E0E0E0",
  color: theme.palette.text.secondary,
  borderRadius: "8px",
  height: "100%",
}));

const Onboarding = () => {
  const [showVentures, setShowVentures] = useState("Merchant");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2.5}>
          <Item>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                onClick={() => setShowVentures("Merchant")}
                sx={{
                  display: "flex",
                  background: showVentures === "Merchant" && "#F4F4F4",
                  width: "100%",
                  "&:hover": {
                    cursor: "pointer",
                  },
                  mt: "1rem",
                  height: "40px",
                  borderRadius: "8px",
                }}
              >
                {showVentures === "Merchant" && (
                  <Box
                    sx={{
                      height: "40px",
                      minWidth: "4px",
                      background: showVentures === "Merchant" && "#FF7F00",
                      borderTopRightRadius: "8px",
                      borderBottomRightRadius: "8px",
                    }}
                  ></Box>
                )}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    ml: "1rem",
                    width: "100%",
                    alignItems: "center",
                    gap: "12px",
                    color: showVentures === "Merchant" ? "#333333" : "#828282",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    Register a Merchant
                  </Typography>
                </Box>
              </Box>
              <Box
                onClick={() => setShowVentures("Ventures")}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: showVentures === "Ventures" && "#F4F4F4",
                  width: "100%",
                  "&:hover": {
                    cursor: "pointer",
                  },
                  mt: "1rem",
                  height: "40px",
                  borderRadius: "8px",
                }}
              >
                {showVentures === "Ventures" && (
                  <Box
                    sx={{
                      height: "40px",
                      minWidth: "4px",
                      background: showVentures === "Ventures" && "#FF7F00",
                      borderTopRightRadius: "8px",
                      borderBottomRightRadius: "8px",
                    }}
                  ></Box>
                )}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    ml: "1rem",
                    width: "100%",
                    alignItems: "center",
                    gap: "12px",
                    color: showVentures === "Ventures" ? "#333333" : "#828282",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    Register a Venture
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={9.5}>
          <Item className="">
            {showVentures === "Merchant" ? (
              <Merchant />
            ) : (
              showVentures === "Ventures" && <Ventures />
            )}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Onboarding;
