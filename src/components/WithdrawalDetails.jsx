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
import info from "../assets/images/admin/info.svg";
import copyIcon from "../assets/images/admin/copyIcon.svg";
const WithdrawalDetails = ({ setWithdrawalDetails }) => {
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
  return (
    <Box sx={style}>
      <Box sx={{ width: "100%", maxHeight: "90vh", overflowY: "scroll" }}>
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
            onClick={() => setDepositDetails(false)}
            className="cursor-pointer"
          >
            <img src={closeIcon} alt="c-icon" />
          </Box>
        </Box>

        <Box
          sx={{
            border: "1px solid #e0e0e0",
            padding: "20px",
            borderRadius: "8px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "14px",
              color: "#000",
            }}
          >
            GENERAL TRANSACTION DETAILS
          </Typography>

          {/* general transaction details data */}
          <Box
            sx={{
              width: "100%",
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
                {/* {details?.transferFrom?.lastName +
              " " +
              details?.transferFrom?.firstName ?? " ..."} */}
                emma
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
                {/* {details?.transferFrom?.email ?? " ..."} */}emma@gmail.com
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
                {/* {details?.transferFrom?.phoneNumber ?? " ..."} */}
                08166226622
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
                {/* {details?.transferFrom?.role ?? " ..."} */} cool
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
                {/* {details?.transactionType ?? "..."} */}Withdrawal
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
                {/* {details?.transactionRef ?? "..."} */}SN30000SS00S
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
                {/* {modDate(details?.createdAt)} */}20-11-20024
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
                {/* {details?.transferFrom?.phoneNumber ?? "..."} */}09126626222
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
                {/* N {details?.amount ?? "..."} */}3000
              </Typography>
            </Box>
          </Box>
          {/* state data end */}
        </Box>
        {/*  bank details*/}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: ".4em",
            padding: "20px",
            justifyContent: "start",
            borderRadius: "8px",
            my: "1rem",
            border: "1px solid #e0e0e0",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "14px",
              color: "#000",
            }}
          >
            Bank Account Details
          </Typography>

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
              Bank Name:
            </Typography>

            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              {/* {details?.transferFrom?.lastName +
              " " +
              details?.transferFrom?.firstName ?? " ..."} */}
              Providus Bank
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
              Account Name:
            </Typography>

            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              {/* {details?.transferFrom?.email ?? " ..."} */}Cascade Lounge
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
              Account Number:
            </Typography>

            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "600",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {/* {details?.transferFrom?.phoneNumber ?? " ..."} */}08166226622
              <img src={copyIcon} alt="c-icon" />
            </Typography>
          </Box>
        </Box>

        {/* T-status */}

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: ".4em",
            padding: "20px",
            justifyContent: "start",
            borderRadius: "8px",
            my: "1rem",
            border: "1px solid #e0e0e0",
          }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "14px",
              color: "#000",
            }}
          >
            TRANSACTION STATUS
          </Typography>

          <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <RadioGroup>
                <FormControlLabel
                  value={""}
                  disabled
                  control={
                    <Radio
                      sx={{
                        color: "#333333", // Unchecked color
                        "&.Mui-checked": { color: "#DC0019" }, // Checked color
                      }}
                    />
                  }
                />
              </RadioGroup>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#000",
                  ml: "-15px",
                }}
              >
                Pending
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <RadioGroup>
                <FormControlLabel
                  value={""}
                  disabled
                  control={
                    <Radio
                      sx={{
                        color: "#333333", // Unchecked color
                        "&.Mui-checked": { color: "#DC0019" }, // Checked color
                      }}
                    />
                  }
                />
              </RadioGroup>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#000",
                  ml: "-15px",
                }}
              >
                Successfull
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <RadioGroup>
                <FormControlLabel
                  value={""}
                  disabled
                  control={
                    <Radio
                      sx={{
                        color: "#333333", // Unchecked color
                        "&.Mui-checked": { color: "#DC0019" }, // Checked color
                      }}
                    />
                  }
                />
              </RadioGroup>
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "14px",
                  color: "#000",
                  ml: "-15px",
                }}
              >
                Failed
              </Typography>
            </Box>
          </Box>
        </Box>
        {/*  */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            background: "#FFFAEB",
            p: "1rem",
          }}
        >
          <img src={info} alt="info-img" />

          <Typography
            sx={{
              fontWeight: "400",
              color: "#CDA11E",
              fontSize: "14px",
            }}
          >
            Be sure to have credited this user before proceeding to update
            transaction status as “Successful”.
          </Typography>
        </Box>

        {/* button */}

        <Box
          sx={{
            width: "100%",
            gap: "10px",
            display: "flex",
            alignItems: "center",
            my: "1rem",
            justifyContent: "space-between",
          }}
        >
          <Button
            sx={{
              background: "#fff",
              padding: "10px",
              borderRadius: "8px",
              width: "100%",
              borderColor: "#333333",

              color: "#000",
              "&:hover": {
                borderColor: "#FF7F00",
              },
              textTransform: "capitalize",
              fontWeight: "500",
            }}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            sx={{
              background: "#FF7F00",
              padding: "10px",
              borderRadius: "8px",
              width: "100%",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#FF7F00",
              },
              textTransform: "capitalize",
            }}
          >
            Update Status
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default WithdrawalDetails;
