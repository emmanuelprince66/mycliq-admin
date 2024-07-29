import React from "react";
import closeIcon from "../assets/images/closeIcon.svg";
import {
  Box,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
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

const CustomerProfileDetails = ({ setShowProfileDetails }) => {
  return (
    <Box sx={style}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "2rem",
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            color: "#1E1E1E",
            fontWeight: "500",
            fontSize: "20px",
          }}
        >
          Transaction Details
        </Typography>

        <Box
          onClick={() => setShowProfileDetails(false)}
          className="cursor-pointer"
        >
          <img src={closeIcon} alt="c-icon" />
        </Box>
      </Box>

      {/* stale data */}
      <Box
        sx={{
          width: "100%",
          border: "1px solid #E0E0E0",
          p: "20px",
          display: "flex",
          flexDirection: "column",
          gap: ".4em",
          justifyContent: "start",
          borderRadius: "8px",
          my: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#828282",
              fontSize: "14px",
              minWidth: "130px",
            }}
          >
            User:
          </Typography>

          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            cool
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#828282",
              fontSize: "14px",
              minWidth: "130px",
            }}
          >
            Email Address:
          </Typography>

          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            cool
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#828282",
              fontSize: "14px",
              minWidth: "130px",
            }}
          >
            Phone Number:
          </Typography>

          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            cool
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#828282",
              fontSize: "14px",
              minWidth: "130px",
            }}
          >
            Category:
          </Typography>

          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            cool
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#828282",
              fontSize: "14px",
              minWidth: "130px",
            }}
          >
            Transaction Type:
          </Typography>

          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            cool
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#828282",
              fontSize: "14px",
              minWidth: "130px",
            }}
          >
            Transaction ID:
          </Typography>

          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            cool
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#828282",
              fontSize: "14px",
              minWidth: "130px",
            }}
          >
            Date & Time:
          </Typography>

          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            cool
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#828282",
              fontSize: "14px",
              minWidth: "130px",
            }}
          >
            Recipient:
          </Typography>

          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            cool
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#828282",
              fontSize: "14px",
              minWidth: "130px",
            }}
          >
            Amount:
          </Typography>

          <Typography
            sx={{
              color: "#CDA11E",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            cool
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              color: "#828282",
              fontSize: "14px",
              minWidth: "130px",
            }}
          >
            Transaction Status:
          </Typography>

          <Typography
            sx={{
              color: "#1e1e1e",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            cool
          </Typography>
        </Box>
      </Box>
      {/* state data end */}

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          sx={{
            background: "#333333",
            padding: "10px",
            borderRadius: "8px",
            gap: "6px",
            textTransform: "capitalize",
            width: "50%",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#33333",
            },
          }}
        >
          Close
        </Button>
      </Box>
    </Box>
  );
};

export default CustomerProfileDetails;
