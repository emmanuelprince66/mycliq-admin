import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Modal, Grid } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import Merchant from "../components/Merchant";
import Association from "../components/Association";
import { styled } from "@mui/material/styles";
import Transportation from "../components/Transportation";
import BankDetailsForm from "../components/BankDetailsForm";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  border: "1px solid #E0E0E0",
  color: theme.palette.text.secondary,
  borderRadius: "8px",
  height: "160vh",
}));

const Onboarding = () => {
  const [ showVentures , setShowVentures] = useState("Bankdetails")
  
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
                onClick={() => setShowVentures("Bankdetails")}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: showVentures === "Bankdetails" && "#F4F4F4",
                  width: "100%",
                  "&:hover": {
                    cursor: "pointer",
                  },
                  mt: "1rem",
                  height: "40px",
                  borderRadius: "8px",
                }}
              >
                {showVentures === "Bankdetails" && (
                  <Box
                    sx={{
                      height: "40px",
                      minWidth: "4px",
                      background: showVentures === "Bankdetails" && "#FF7F00",
                      borderTopRightRadius: "8px",
                      borderBottomRightRadius: "8px",
                    }}
                  ></Box>
                )}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    alignItems: "center",
                    gap: "12px",
                    color:
                      showVentures === "Bankdetails" ? "#333333" : "#828282",
                  }}
                >
                  <Typography
                    sx={{
                      fomtWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    Upload Bank Details
                  </Typography>
                </Box>
              </Box>
              <Box
                onClick={() => setShowVentures("Merchant")}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
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
                    justifyContent: "center",
                    width: "100%",
                    alignItems: "center",
                    gap: "12px",
                    color: showVentures === "Merchant" ? "#333333" : "#828282",
                  }}
                >
                  <Typography
                    sx={{
                      fomtWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    Register a Merchant
                  </Typography>
                </Box>
              </Box>
              <Box
                onClick={() => setShowVentures("Transportation")}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: showVentures === "Transportation" && "#F4F4F4",
                  width: "100%",
                  "&:hover": {
                    cursor: "pointer",
                  },
                  mt: "1rem",
                  height: "40px",
                  borderRadius: "8px",
                }}
              >
                {showVentures === "Transportation" && (
                  <Box
                    sx={{
                      height: "40px",
                      minWidth: "4px",
                      background:
                        showVentures === "Transportation" && "#FF7F00",
                      borderTopRightRadius: "8px",
                      borderBottomRightRadius: "8px",
                    }}
                  ></Box>
                )}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    alignItems: "center",
                    gap: "12px",
                    color:
                      showVentures === "Transportation" ? "#333333" : "#828282",
                  }}
                >
                  <Typography
                    sx={{
                      fomtWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    Register a Transportation
                  </Typography>
                </Box>
              </Box>

              <Box
                onClick={() => setShowVentures("Association")}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: showVentures === "Association" && "#F4f4f4",
                  width: "100%",
                  "&:hover": {
                    cursor: "pointer",
                  },
                  mt: "1rem",
                  height: "40px",
                  borderRadius: "8px",
                }}
              >
                {showVentures === "Association" && (
                  <Box
                    sx={{
                      height: "40px",
                      minWidth: "4px",
                      background: showVentures === "Association" && "#ff7f00",
                      borderTopRightRadius: "8px",
                      borderBottomRightRadius: "8px",
                    }}
                  ></Box>
                )}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    alignItems: "center",
                    gap: "16px",

                    color:
                      showVentures === "Association" ? "#333333" : "#828282",
                  }}
                >
                  <Typography
                    sx={{
                      fomtWeight: "500",
                      fontSize: "14px",
                    }}
                  >
                    Register an Association
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={9.5}>
          <Item>
            {showVentures === "Merchant" ? (
              <Merchant />
            ) : showVentures === "Association" ? (
              <Association />
            ) : showVentures === "Transportation" ? (
              <Transportation />
            ) : (
              showVentures === "Bankdetails" && <BankDetailsForm/>
            )}
          </Item>
        </Grid>
      </Grid>
      
    </Box>
  );
};

export default Onboarding;
