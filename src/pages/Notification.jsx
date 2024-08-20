import React, { useState } from "react";

import {
  Box,
  Button,
  Typography,
  Grid,
  InputAdornment,
  Radio,
  TextField,
  Modal,
  FormControl,
  Backdrop,
  RadioGroup,
  Paper,
  FormControlLabel,
  CircularProgress,
} from "@mui/material";
import NotificationAddRoundedIcon from "@mui/icons-material/NotificationAddRounded";
import RotateLeftOutlinedIcon from "@mui/icons-material/RotateLeftOutlined";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import info from "../assets/images/admin/info.svg";
import closeIcon from "../assets/images/closeIcon.svg";
import NotiHistory from "../components/NotiHistory";
import AddNotification from "./notificaitions/AddNotification";
import { NineKPlusOutlined } from "@mui/icons-material";
import { AuthAxios } from "../helpers/axiosInstance";
import { useQuery } from "@tanstack/react-query";

const Notification = () => {
  const [newNoti, setNewNoti] = useState(true);
  const [pushNoti, setPushNoti] = useState(false);
  const handleClosePushNoti = () => setPushNoti(false);
  const [selectedOption, setSelectedOption] = useState('All'); 
  const [totalNotiHistory , setTotalNotiHistory] =  useState(null)
  const rowsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const fetchNotiHistory = async ({ queryKey }) => {
    const [_key, { page, limit }] = queryKey;
    try {
      const response = await AuthAxios.get(
        `/admin/system/broadcast-notification?page=${page}&limit=${limit}`
      );
      return response?.data?.data;
    } catch (error) {
      throw new Error("Failed to fetch customer data");
    }
  };

  const {
    data: notiHistory,
    error,
    isLoading:historyLoading,
  } = useQuery({
    queryKey: ["fetchNotiHistory", { page: currentPage, limit: rowsPerPage }],
    queryFn: fetchNotiHistory,
    keepPreviousData: true,
    staleTime: 5000, // Cache data for 5 seconds
  });

  const totalPages  = notiHistory?.totalPages || 1
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
  
  
    const handleEdit = (item) => {
      setNotiDetails(true)
      setNotiItem(item)
    }
  
  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box sx={{ background: "#fffcfc", width: "100%", height: "100%" }}>
      <Box
        sx={{
          width: "80%",
          mx: "auto",
          background: "#fff",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "10px",
          p: "1rem",
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            color: "#1E1E1E",
            fontWeight: "500",
            fontSize: "20px",
            mb: "20px",
          }}
        >
          Manage Push Notifications
        </Typography>

        {/*  tabs*/}

        <Box className="flex gap-3 items-center  border-b border-gray-300 w-[100%]">
          <Box
            className="flex flex-col items-start cursor-pointer"
            onClick={() => setNewNoti(true)}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                mb: "5px",
                color: newNoti && "#FF7F00",
              }}
            >
              <NotificationAddRoundedIcon /> New Notification
            </Box>
            {newNoti && (
              <Box
                sx={{
                  height: "5px",
                  minWidth: "100%",
                  background: newNoti && "#FF7F00",
                  borderTopRightRadius: "8px",
                  borderTopLeftRadius: "8px",
                }}
              />
            )}
          </Box>

          <Box
            className="flex flex-col items-start cursor-pointer"
            onClick={() => setNewNoti(false)}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                mb: "5px",
                color: !newNoti && "#FF7F00",
              }}
            >
              <RotateLeftOutlinedIcon /> Notification History
              <span
                className={`p-1 px-2 rounded-full ${
                  !newNoti && "bg-orange-200 text-white"
                } text-sm text-black`}
              >
                {historyLoading?   <CircularProgress
                        size="0.6rem"
                        sx={{ color: "#DC0019" }}
                      /> :  notiHistory?.totalRecords || 0}
              </span>
            </Box>
            {!newNoti && (
              <Box
                sx={{
                  height: "5px",
                  minWidth: "100%",
                  background: !newNoti && "#FF7F00",
                  borderTopRightRadius: "8px",
                  borderTopLeftRadius: "8px",
                }}
              />
            )}
          </Box>
        </Box>
        {newNoti ? (
          <Grid container spacing={0}>
            <Grid item xs={5}>
              <Box className="flex flex-col mt-2 items-start w-[100%] gap-3 border border-grey-500 rounded-md p-3 overflow-y-auto max-h-[60vh] pb-3">
                <CampaignRoundedIcon
                  sx={{
                    color: "#fff",
                    p: "3px",
                    borderRadius: "50px",
                    background: "#333333",
                  }}
                />
                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "600",
                    fontSize: "15px",
                  }}
                >
                  Define Targeted Users
                </Typography>
                <Typography
                  sx={{
                    color: "#1E1E1E",
                    fontWeight: "400",
                    fontSize: "13px",
                  }}
                >
                  What category of users is this notification relevant to?
                  Define
                </Typography>

                {/* radio */}
                <Box className="w-full flex flex-col gap-3">
      <Box className="flex items-center justify-between w-full border border-gray-500 rounded-md p-2">
        <Typography
          sx={{
            color: "#1E1E1E",
            fontWeight: "400",
            fontSize: "13px",
          }}
        >
          All Users (Customers & Merchants)
        </Typography>
        <RadioGroup
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mr: "-22px",
          }}
          value={selectedOption}
          onChange={handleChange}
        >
          <FormControlLabel
            value="All"
            control={
              <Radio
                sx={{
                  color: "#333333", // Unchecked color
                  "&.Mui-checked": { color: "#333333" }, // Checked color
                }}
              />
            }
          />
        </RadioGroup>
      </Box>

      <Box className="flex items-center justify-between w-full border border-gray-500 rounded-md p-2">
        <Typography
          sx={{
            color: "#1E1E1E",
            fontWeight: "400",
            fontSize: "13px",
          }}
        >
          All Customers
        </Typography>
        <RadioGroup
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mr: "-22px",
          }}
          value={selectedOption}
          onChange={handleChange}
        >
          <FormControlLabel
            value="Customers"
            control={
              <Radio
                sx={{
                  color: "#333333", // Unchecked color
                  "&.Mui-checked": { color: "#333333" }, // Checked color
                }}
              />
            }
          />
        </RadioGroup>
      </Box>

      <Box className="flex items-center justify-between w-full border border-gray-500 rounded-md p-2">
        <Typography
          sx={{
            color: "#1E1E1E",
            fontWeight: "400",
            fontSize: "13px",
          }}
        >
          All Merchants
        </Typography>
        <RadioGroup
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mr: "-22px",
          }}
          value={selectedOption}
          onChange={handleChange}
        >
          <FormControlLabel
            value="Merchants"
            control={
              <Radio
                sx={{
                  color: "#333333", // Unchecked color
                  "&.Mui-checked": { color: "#333333" }, // Checked color
                }}
              />
            }
          />
        </RadioGroup>
      </Box>

      <Box className="flex items-center justify-between w-full border border-gray-500 rounded-md p-2">
        <Typography
          sx={{
            color: "#1E1E1E",
            fontWeight: "400",
            fontSize: "13px",
          }}
        >
          Restaurants
        </Typography>
        <RadioGroup
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mr: "-22px",
          }}
          value={selectedOption}
          onChange={handleChange}
        >
          <FormControlLabel
            value="restaurants"
            control={
              <Radio
                sx={{
                  color: "#333333", // Unchecked color
                  "&.Mui-checked": { color: "#333333" }, // Checked color
                }}
              />
            }
          />
        </RadioGroup>
      </Box>
    </Box>
                {/* <Box className="flex items-center justify-between w-full border border-gray-500 rounded-md p-2">
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "400",
                      fontSize: "13px",
                    }}
                  >
                    
                  </Typography>

                  <RadioGroup
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      mr: "-22px",
                    }}
                  >
                    <FormControlLabel
                      disabled
                      control={
                        <Radio
                          sx={{
                            color: "#333333", // Unchecked color
                            "&.Mui-checked": { color: "#333333" }, // Checked color
                          }}
                        />
                      }
                    />
                  </RadioGroup>
                </Box>
                <Box className="flex items-center justify-between w-full border border-gray-500 rounded-md p-2">
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "400",
                      fontSize: "13px",
                    }}
                  >
                    All Users (Customers & Merchants)
                  </Typography>

                  <RadioGroup
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      mr: "-22px",
                    }}
                  >
                    <FormControlLabel
                      disabled
                      control={
                        <Radio
                          sx={{
                            color: "#333333", // Unchecked color
                            "&.Mui-checked": { color: "#333333" }, // Checked color
                          }}
                        />
                      }
                    />
                  </RadioGroup>
                </Box>
                <Box className="flex items-center justify-between w-full border border-gray-500 rounded-md p-2">
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "400",
                      fontSize: "13px",
                    }}
                  >
                    All Users (Customers & Merchants)
                  </Typography>

                  <RadioGroup
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      mr: "-22px",
                    }}
                  >
                    <FormControlLabel
                      disabled
                      control={
                        <Radio
                          sx={{
                            color: "#333333", // Unchecked color
                            "&.Mui-checked": { color: "#333333" }, // Checked color
                          }}
                        />
                      }
                    />
                  </RadioGroup>
                </Box>
                <Box className="flex items-center justify-between w-full border border-gray-500 rounded-md p-2">
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "400",
                      fontSize: "13px",
                    }}
                  >
                    All Users (Customers & Merchants)
                  </Typography>

                  <RadioGroup
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      mr: "-22px",
                    }}
                  >
                    <FormControlLabel
                      disabled
                      control={
                        <Radio
                          sx={{
                            color: "#333333", // Unchecked color
                            "&.Mui-checked": { color: "#333333" }, // Checked color
                          }}
                        />
                      }
                    />
                  </RadioGroup>
                </Box>
                <Box className="flex flex-col items-start w-full gap-2 border border-gray-500 rounded-md p-2">
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "500",
                      fontSize: "15px",
                    }}
                  >
                    New Customers
                  </Typography>
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "400",
                      fontSize: "12px",
                    }}
                  >
                    Notification will be sent to customers who signed up
                    between:
                  </Typography>

                  <TextField
                    required
                    disabled
                    fullWidth
                    sx={{
                      "& .MuiInputBase-root": { borderRadius: "8px" },
                      "& .MuiInputBase-input": { padding: "12px 0" },
                    }}
                    id="email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarMonthRoundedIcon />
                          <span className="ml-[4px] text-sm">
                            01/12/2022 to 01/01/23
                          </span>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box className="flex flex-col items-start w-full gap-2 border border-gray-500 rounded-md p-2">
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "500",
                      fontSize: "15px",
                    }}
                  >
                    Location
                  </Typography>
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "400",
                      fontSize: "12px",
                    }}
                  >
                    Notification will be sent to customers who are in the
                    selected location:
                  </Typography>

                  <TextField
                    required
                    disabled
                    fullWidth
                    sx={{
                      "& .MuiInputBase-root": { borderRadius: "8px" },
                      "& .MuiInputBase-input": { padding: "12px 0" },
                    }}
                    id="email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FmdGoodRoundedIcon />
                          <span className="ml-[4px] text-sm">
                            Select a location
                          </span>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box className="flex flex-col items-start w-full gap-2 border border-gray-500 rounded-md p-2">
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "500",
                      fontSize: "15px",
                    }}
                  >
                    Location
                  </Typography>
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "400",
                      fontSize: "12px",
                    }}
                  >
                    Notification will be sent to customers who are in the
                    selected location:
                  </Typography>

                  <TextField
                    required
                    disabled
                    fullWidth
                    sx={{
                      "& .MuiInputBase-root": { borderRadius: "8px" },
                      "& .MuiInputBase-input": { padding: "12px 0" },
                    }}
                    id="email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <FmdGoodRoundedIcon />
                          <span className="ml-[4px] text-sm">
                            Select a location
                          </span>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box> */}
              </Box>
            </Grid>
            <Grid item xs={7}>
              {/* shhgjsghs */}
              <AddNotification selectedOption={selectedOption} />
            </Grid>
          </Grid>
        ) : (
          <NotiHistory totalPages={totalPages} currentPage={currentPage}
          onPageChange={handlePageChange}
          rowsPerPage={rowsPerPage}
          notiHistory={notiHistory || []} historyLoading={historyLoading} />
        )}

        {/*modal  */}

        <Modal
          open={pushNoti}
          onClose={handleClosePushNoti}
          BackdropComponent={Backdrop}
          BackdropProps={{
            invisible: true,
            onClick: handleClosePushNoti,
          }}
          disableBackdropClick
          PaperProps={{
            sx: {
              border: "none", // Remove the border
              boxShadow: "none", // Remove the box shadow
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "12px",
              width: "745px",
              bgcolor: "background.paper",
              p: 3,
            }}
          >
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
                Sure to send?
              </Typography>

              <Box onClick={handleClosePushNoti} className="cursor-pointer">
                <img src={closeIcon} alt="c-icon" />
              </Box>
            </Box>
            <Box className="flex flex-col items-start gap-3">
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "13px",
                }}
              >
                Are you sure you want to send this notification to the selected
                category of users?
              </Typography>

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
                  Please proofread notification content and confirm that you are
                  targeting the right audience. Notifications cannot be recalled
                  once sent.
                </Typography>
              </Box>
              <Box className="flex justify-between gap-5 items-center w-full mt-4">
                <Button
                  onClick={handleClosePushNoti}
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
                    background: "#333333",
                    padding: "10px",
                    borderRadius: "8px",
                    width: "100%",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#333333",
                    },
                    textTransform: "capitalize",
                    fontWeight: "500",
                  }}
                >
                  <SendRoundedIcon
                    sx={{
                      mr: "1rem",
                    }}
                  />{" "}
                  Yes, Send Push To Notification
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default Notification;
