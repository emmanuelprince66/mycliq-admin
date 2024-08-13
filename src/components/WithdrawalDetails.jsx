import React from "react";
import closeIcon from "../assets/images/closeIcon.svg";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  Skeleton,
} from "@mui/material";
import info from "../assets/images/admin/info.svg";
import copyIcon from "../assets/images/admin/copyIcon.svg";
import { useQuery } from "@tanstack/react-query";
import { AuthAxios } from "../helpers/axiosInstance";
import modDate from "../utils/moddate";
import FormattedPrice from "../components/FormattedPrice";
import { is } from "date-fns/locale";
const WithdrawalDetails = ({ setWithdrawalDetails, index }) => {
  const [trxId, setTrxId] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const apiUrl = `/admin/trx/${trxId}`;
  const fetchSingleTransactionData = async (url) => {
    try {
      const response = await AuthAxios.get(apiUrl);
      return response?.data?.data;
    } catch (error) {
      throw new Error("Error fetching data...");
    }
  };

  const { isLoading, data } = useQuery({
    queryKey: ["fetchSingleTransactionData", apiUrl],
    queryFn: () => fetchSingleTransactionData(apiUrl),
    keepPreviousData: true,
    staleTime: 5000, // Cache data for 5 seconds
  });

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
  useEffect(() => {
    setTrxId(index);
  }, [index]);

  useEffect(() => {
    if (data) {
      setSelectedValue(data.status);
    }
  }, [data]);

  const renderDetail = (label, value, type) => {
    return (
      <Box
        key={label}
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
            minWidth: "230px",
            mb: "5px",
          }}
        >
          {label}:
        </Typography>
        <Typography
          sx={{
            color: type === "ongoing" ? "#1E854A" : "#1E1E1E",
            fontWeight: "600",
            fontSize: "14px",
          }}
        >
          {value ?? " ..."}
        </Typography>
      </Box>
    );
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
              mb: "20px",
            }}
          >
            GENERAL TRANSACTION DETAILS
          </Typography>

          {/* general transaction details data */}
          {isLoading ? (
            <Skeleton variant="rounded" width="100%" height={320} />
          ) : (
            <div>
              {renderDetail(
                "User",
                data?.user?.lastName + " " + data?.user?.firstName
              )}
              {renderDetail("Email", data?.user?.email)}
              {renderDetail("Phone Number", data?.user?.phoneNumber)}
              {renderDetail("Category", data?.user?.category || "null")}
              {renderDetail("Transaction Type", data?.type || "null")}
              {renderDetail("Transaction ID", data?.id || "null")}
              {renderDetail(
                "Transaction ID",
                modDate(data?.createdAt) || "null"
              )}
              {renderDetail(
                "Amount",
                <FormattedPrice amount={data?.amount} /> || "null"
              )}
            </div>
          )}
          {/* state data end */}
        </Box>
        {/*  bank details*/}
        {isLoading ? (
          <Skeleton variant="rounded" width="100%" height={200} />
        ) : (
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
                {data?.origin?.bankName || "null"}
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
                {data?.origin?.accountName || "null"}
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
                {data?.origin?.accountNumber || "null"}

                <img src={copyIcon} alt="c-icon" />
              </Typography>
            </Box>
          </Box>
        )}

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
            <RadioGroup
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              sx={{ display: "flex", flexDirection: "row", gap: "20px" }}
            >
              <FormControlLabel
                value="pending"
                control={
                  <Radio
                    sx={{
                      color: "#333333", // Unchecked color
                      "&.Mui-checked": { color: "#DC0019" }, // Checked color
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      color: "#000",
                    }}
                  >
                    Pending
                  </Typography>
                }
              />
              <FormControlLabel
                value="success"
                control={
                  <Radio
                    sx={{
                      color: "#333333", // Unchecked color
                      "&.Mui-checked": { color: "#DC0019" }, // Checked color
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      color: "#000",
                    }}
                  >
                    Successful
                  </Typography>
                }
              />
              <FormControlLabel
                value="failed"
                control={
                  <Radio
                    sx={{
                      color: "#333333", // Unchecked color
                      "&.Mui-checked": { color: "#DC0019" }, // Checked color
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "14px",
                      color: "#000",
                    }}
                  >
                    Failed
                  </Typography>
                }
              />
            </RadioGroup>
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
