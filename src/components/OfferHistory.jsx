import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Radio,
  Modal,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import arrowRight from "../assets/images/arrow-right.svg";
import HistoryDetails from "./HistoryDetails";
const OfferHistory = () => {
  const [historyDetails, setHistoryDetails] = useState(false);
  const handleCloseHistoryDetails = () => setHistoryDetails(false);
  return (
    <Box>
      {!historyDetails ? (
        <>
          <Typography
            sx={{
              fontWeight: "900",
              color: "#000",
              fontWeight: "500",
              fontSize: "16px",
            }}
          >
            Offer History
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                my: "1rem",
              }}
            >
              <WbSunnyOutlinedIcon
                sx={{ p: "3px", borderRadius: "50px", background: "#f4f4fe" }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  alignItems: "start",
                  justifyContent: "start",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "900",
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  Offer Name
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "900",
                    color: "#828282",
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  Created By Oluwatobiloba Olosunde
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "900",
                    color: "#828282",
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  Today at 09:34 AM
                </Typography>
              </Box>
            </Box>
            <Button
              sx={{
                background: "#fff",
                borderRadius: "8px",
                fontWeight: "400",
                borderColor: "#333333",

                color: "#fff",
                "&:hover": {
                  borderColor: "#FF7F00",
                },
                textTransform: "capitalize",
              }}
              variant="outlined"
            >
              <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#333333",
                  }}
                >
                  View More
                </Typography>
                <img src={arrowRight} alt="back-arrow" />
              </Box>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                my: "1rem",
              }}
            >
              <WbSunnyOutlinedIcon
                sx={{ p: "3px", borderRadius: "50px", background: "#f4f4fe" }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  alignItems: "start",
                  justifyContent: "start",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "900",
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  Offer Name
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "900",
                    color: "#828282",
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  Created By Oluwatobiloba Olosunde
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "900",
                    color: "#828282",
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  Today at 09:34 AM
                </Typography>
              </Box>
            </Box>
            <Button
              sx={{
                background: "#fff",
                borderRadius: "8px",
                fontWeight: "400",
                borderColor: "#333333",

                color: "#fff",
                "&:hover": {
                  borderColor: "#FF7F00",
                },
                textTransform: "capitalize",
              }}
              variant="outlined"
            >
              <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#333333",
                  }}
                >
                  View More
                </Typography>
                <img src={arrowRight} alt="back-arrow" />
              </Box>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                my: "1rem",
              }}
            >
              <WbSunnyOutlinedIcon
                sx={{ p: "3px", borderRadius: "50px", background: "#f4f4fe" }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  alignItems: "start",
                  justifyContent: "start",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "900",
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  Offer Name
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "900",
                    color: "#828282",
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  Created By Oluwatobiloba Olosunde
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "900",
                    color: "#828282",
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  Today at 09:34 AM
                </Typography>
              </Box>
            </Box>
            <Button
              sx={{
                background: "#fff",
                borderRadius: "8px",
                fontWeight: "400",
                borderColor: "#333333",

                color: "#fff",
                "&:hover": {
                  borderColor: "#FF7F00",
                },
                textTransform: "capitalize",
              }}
              variant="outlined"
            >
              <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#333333",
                  }}
                >
                  View More
                </Typography>
                <img src={arrowRight} alt="back-arrow" />
              </Box>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                my: "1rem",
              }}
            >
              <WbSunnyOutlinedIcon
                sx={{ p: "3px", borderRadius: "50px", background: "#f4f4fe" }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  alignItems: "start",
                  justifyContent: "start",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "900",
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  Offer Name
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "900",
                    color: "#828282",
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  Created By Oluwatobiloba Olosunde
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "900",
                    color: "#828282",
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  Today at 09:34 AM
                </Typography>
              </Box>
            </Box>
            <Button
              sx={{
                background: "#fff",
                borderRadius: "8px",
                fontWeight: "400",
                borderColor: "#333333",

                color: "#fff",
                "&:hover": {
                  borderColor: "#FF7F00",
                },
                textTransform: "capitalize",
              }}
              variant="outlined"
            >
              <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#333333",
                  }}
                >
                  View More
                </Typography>
                <img src={arrowRight} alt="back-arrow" />
              </Box>
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                my: "1rem",
              }}
            >
              <WbSunnyOutlinedIcon
                sx={{ p: "3px", borderRadius: "50px", background: "#f4f4fe" }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  alignItems: "start",
                  justifyContent: "start",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "900",
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "14px",
                  }}
                >
                  Offer Name
                </Typography>

                <Typography
                  sx={{
                    fontWeight: "900",
                    color: "#828282",
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  Created By Oluwatobiloba Olosunde
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "900",
                    color: "#828282",
                    fontWeight: "500",
                    fontSize: "12px",
                  }}
                >
                  Today at 09:34 AM
                </Typography>
              </Box>
            </Box>
            <Button
              sx={{
                background: "#fff",
                borderRadius: "8px",
                fontWeight: "400",
                borderColor: "#333333",

                color: "#fff",
                "&:hover": {
                  borderColor: "#FF7F00",
                },
                textTransform: "capitalize",
              }}
              variant="outlined"
            >
              <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#333333",
                  }}
                >
                  View More
                </Typography>
                <img src={arrowRight} alt="back-arrow" />
              </Box>
            </Button>
          </Box>
        </>
      ) : (
        <HistoryDetails />
      )}
    </Box>
  );
};

export default OfferHistory;
