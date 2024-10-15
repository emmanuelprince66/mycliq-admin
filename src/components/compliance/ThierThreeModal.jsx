import React from "react";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  TextField,
  CircularProgress,
} from "@mui/material";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import TransgenderRoundedIcon from "@mui/icons-material/TransgenderRounded";
import CabinRoundedIcon from "@mui/icons-material/CabinRounded";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Height } from "@mui/icons-material";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import { useMutation } from "@tanstack/react-query";
import AuthAxios from "../../helpers/axiosInstance";
import { toast, ToastContainer } from "react-toastify";

import SendRoundedIcon from "@mui/icons-material/SendRounded";

import modDate from "../../utils/moddate";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const ThierThreeModal = ({ modalData }) => {
  const [headline, setHeadline] = useState("");
  const [headlineCount, setHeadlineCount] = useState(0);
  const [message, setMessage] = useState("");
  const [compName, setCompName] = useState("");
  const [messageCount, setMessageCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  const notifyError = (msg) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 6000, // Time in milliseconds
    });
  };
  const notifySuccess = (msg) => {
    toast.success(msg, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 6000, // Time in milliseconds
    });
  };

  console.log("mod", modalData);

  const apiId =
    modalData?.utilityMeta &&
    Object.keys(modalData?.utilityMeta).length > 0 &&
    modalData?.utilityMeta?.files[0]?.id;

  const [status, setStatus] = useState("pending");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  console.log("api", apiId);

  const aprvMutation = useMutation({
    mutationFn: async (payload) => {
      try {
        const response = await AuthAxios({
          url: `/admin/complaince/users/tier3/${apiId}`,
          method: "PUT",
          data: payload,
        });

        return response.data;
      } catch (error) {
        console.log(error);
        setDisableButton(false);
        notifyError(error.response.data.message);
        throw new Error(error.response);
      }
    },
    onSuccess: (response) => {
      notifySuccess(response.message);
      setDisableButton(false);
    },
    onError: (error) => {
      setDisableButton(false);
    },
  });

  const handleSubmitAprv = () => {
    const payload = {
      entityId: modalData?.id,
      status: status,
      note: message,
    };
    console.log("sa", status);

    if (status === "pending") {
      notifyError("Pending cannot be sent as a status");
    } else {
      aprvMutation.mutate(payload);
      setDisableButton(true);
    }
    console.log("data", payload);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    maxHeight: "90vh",
    overflowY: "auto",
    width: "70%",
    bgcolor: "background.paper",
    p: 3,
  };
  console.log("mdoal", modalData);

  const renderDetail = (Icon, title, data, pv) => {
    return (
      <div className="flex mb-3">
        <div className="w-[50%] flex flex-col items-start gap-2">
          <div className="flex gap-1 items-center">
            <Icon sx={{ color: "grey", fontSize: "15px" }} />
            <p className="text-[#828282] text-[14px] font-[500]">{title}:</p>
          </div>
        </div>
        <div className="w-[70%]">{data}</div>
      </div>
    );
  };

  useEffect(() => {
    setHeadlineCount(headline.length);
  }, [headline]);

  useEffect(() => {
    setMessageCount(message.length);
  }, [message]);

  const handleCompChange = (event) => {
    const value = event.target.value;
    setCompName(value);
  };

  const handleMessageChange = (event) => {
    const value = event.target.value;
    if (value.length <= 120) {
      setMessage(value);
    }
  };

  return (
    <Box sx={style}>
      <div className="w-full">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <div className="flex flex-col items-start gap-4">
              <img src="" alt="" />

              <p className="text-[#828282] font-[500] text-[14px]">
                Onboarded Details
              </p>

              <div className="w-full">
                {renderDetail(
                  PersonOutlineRoundedIcon,
                  "Name",
                  `${modalData?.lastName} ${modalData?.firstName}`
                )}
                {/*  */}
                {renderDetail(
                  CalendarMonthRoundedIcon,
                  "Date of Birth",
                  modalData?.bvnMeta?.dateOfBirth || ""
                )}
                {/*  */}
                {/*  */}
                {renderDetail(
                  FmdGoodRoundedIcon,
                  "Address",
                  modalData?.address || "nil"
                )}
                {/*  */}
                {/*  */}
                {renderDetail(
                  TransgenderRoundedIcon,
                  "Gender",
                  modalData?.gender || "nil"
                )}
                {/*  */}
                {/*  */}
                {renderDetail(
                  FmdGoodRoundedIcon,
                  "Means of indentity",
                  modalData?.gender || "nil"
                )}
                {/*  */}
                {/*  */}
                {renderDetail(
                  CabinRoundedIcon,
                  "Account Name",
                  modalData?.gender || "nil"
                )}
                {/*  */}
                {/*  */}
                {renderDetail(
                  CabinRoundedIcon,
                  "Account Name",
                  modalData?.gender || "nil"
                )}
                {/*  */}
                {/*  */}
                {renderDetail(
                  CabinRoundedIcon,
                  "Account Number",
                  modalData?.gender || "nil"
                )}
                {/*  */}
                {/*  */}
                {renderDetail(
                  CabinRoundedIcon,
                  "Account Bank",
                  modalData?.gender || "nil"
                )}
                {/*  */}
                {/*  */}
                <div className="flex mb-3">
                  <div className="w-[50%] flex flex-col items-start gap-2">
                    <div className="flex gap-1 items-center">
                      <LocalPhoneOutlinedIcon
                        sx={{ color: "grey", fontSize: "15px" }}
                      />
                      <p className="text-[#828282] text-[14px] font-[500]">
                        Phone Number:
                      </p>
                    </div>
                  </div>
                  <div className="w-[70%] flex gap-1 items-center">
                    {modalData?.phoneNumber}

                    {modalData?.phoneNumberVerified ? (
                      <div className="bg-[#EBFFF3]  px-2 flex items-center gap-1 rounded-md">
                        <VerifiedOutlinedIcon
                          sx={{ fontSize: "15px" }}
                          className="text-[#1E854A] text-[10px] font-[500]"
                        />
                        <p className="text-[#1E854A] text-[10px] font-[500]">
                          Verified
                        </p>
                      </div>
                    ) : (
                      <div className="bg-[#FFF0F0]  px-2 flex items-center gap-1 rounded-md">
                        <ReportProblemOutlinedIcon
                          sx={{ fontSize: "15px" }}
                          className="text-[#E52929] font-[500]"
                        />
                        <p className="text-[#E52929] text-[10px] font-[500]">
                          Unverified
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                {/*  */}
                {/*  */}
                <div className="flex mb-3">
                  <div className="w-[50%] flex flex-col items-start gap-2">
                    <div className="flex gap-1 items-center">
                      <EmailOutlinedIcon
                        sx={{ color: "grey", fontSize: "15px" }}
                      />
                      <p className="text-[#828282] text-[14px] font-[500]">
                        Email:
                      </p>
                    </div>
                  </div>
                  <div className="w-[70%] flex gap-1 items-center">
                    {modalData?.email}

                    {modalData?.emailVerified ? (
                      <div className="bg-[#EBFFF3]  px-2 flex items-center gap-1 rounded-md">
                        <VerifiedOutlinedIcon
                          sx={{ fontSize: "15px" }}
                          className="text-[#1E854A] text-[10px] font-[500]"
                        />
                        <p className="text-[#1E854A] text-[10px] font-[500]">
                          Verified
                        </p>
                      </div>
                    ) : (
                      <div className="bg-[#FFF0F0]  px-2 flex items-center gap-1 rounded-md">
                        <ReportProblemOutlinedIcon
                          sx={{ fontSize: "15px" }}
                          className="text-[#E52929] font-[500]"
                        />
                        <p className="text-[#E52929] text-[10px] font-[500]">
                          Unverified
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                {/*  */}

                {renderDetail(
                  EmailOutlinedIcon,
                  "Category",
                  modalData?.gender || "Customer"
                )}
                {/*  */}
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="flex flex-col items-start gap-4">
              <img src="" alt="" />

              <p className="text-[#828282] font-[500] text-[14px]">
                Bvn Details
              </p>

              <div className="w-full">
                {renderDetail(
                  PersonOutlineRoundedIcon,
                  "Name",
                  `${modalData?.bvnMeta?.lastName || ""} ${
                    modalData?.bvnMeta?.firstName || ""
                  }`
                )}
                {/*  */}
                {renderDetail(
                  CalendarMonthRoundedIcon,
                  "Date of Birth",
                  modalData?.bvnMeta?.dateOfBirth || ""
                )}
                {/*  */}
                {/*  */}
                {renderDetail(
                  FmdGoodRoundedIcon,
                  "Address",
                  modalData?.bvnMeta?.address || "nil"
                )}
                {/*  */}
                {/*  */}
                {renderDetail(
                  TransgenderRoundedIcon,
                  "Gender",
                  modalData?.bvnMeta?.gender || "nil"
                )}
                {/*  */}
                {/*  */}
                {renderDetail(
                  FmdGoodRoundedIcon,
                  "Means of indentity",
                  modalData?.bvnMeta?.id || "nil"
                )}
                {/*  */}
                {/*  */}
                {renderDetail(
                  CabinRoundedIcon,
                  "Account Name",
                  modalData?.bvnMeta?.accountName || "nil"
                )}
                {/*  */}
                {/*  */}

                {/*  */}
                {/*  */}
                {renderDetail(
                  CabinRoundedIcon,
                  "Account Number",
                  modalData?.bvnMeta?.accountNumber || "nil"
                )}
                {/*  */}
                {/*  */}
                {renderDetail(
                  CabinRoundedIcon,
                  "Account Bank",
                  modalData?.bvnMeta?.bankName || "nil"
                )}
                {/*  */}
                {/*  */}
                <div className="flex mb-3">
                  <div className="w-[50%] flex flex-col items-start gap-2">
                    <div className="flex gap-1 items-center">
                      <LocalPhoneOutlinedIcon
                        sx={{ color: "grey", fontSize: "15px" }}
                      />
                      <p className="text-[#828282] text-[14px] font-[500]">
                        Phone Number:
                      </p>
                    </div>
                  </div>
                  <div className="w-[70%] flex gap-1 items-center">
                    {modalData?.bvnMeta?.phoneNumber}

                    {modalData?.bvnVerified ? (
                      <div className="bg-[#EBFFF3]  px-2 flex items-center gap-1 rounded-md">
                        <VerifiedOutlinedIcon
                          sx={{ fontSize: "15px" }}
                          className="text-[#1E854A] text-[10px] font-[500]"
                        />
                        <p className="text-[#1E854A] text-[10px] font-[500]">
                          Verified
                        </p>
                      </div>
                    ) : (
                      <div className="bg-[#FFF0F0]  px-2 flex items-center gap-1 rounded-md">
                        <ReportProblemOutlinedIcon
                          sx={{ fontSize: "15px" }}
                          className="text-[#E52929] font-[500]"
                        />
                        <p className="text-[#E52929] text-[10px] font-[500]">
                          Unverified
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                {/*  */}
                {/*  */}
                <div className="flex mb-3">
                  <div className="w-[50%] flex flex-col items-start gap-2">
                    <div className="flex gap-1 items-center">
                      <EmailOutlinedIcon
                        sx={{ color: "grey", fontSize: "15px" }}
                      />
                      <p className="text-[#828282] text-[14px] font-[500]">
                        Email:
                      </p>
                    </div>
                  </div>
                  <div className="w-[70%] flex gap-1 items-center">
                    {modalData?.bvnMeta?.email}
                    {/* {modalData?.emailVerified ? (
                      <div className="bg-[#EBFFF3]  px-2 flex items-center gap-1 rounded-md">
                        <VerifiedOutlinedIcon
                          sx={{ fontSize: "15px" }}
                          className="text-[#1E854A] text-[10px] font-[500]"
                        />
                        <p className="text-[#1E854A] text-[10px] font-[500]">
                          Verified
                        </p>
                      </div>
                    ) : (
                      <div className="bg-[#FFF0F0]  px-2 flex items-center gap-1 rounded-md">
                        <ReportProblemOutlinedIcon
                          sx={{ fontSize: "15px" }}
                          className="text-[#E52929] font-[500]"
                        />
                        <p className="text-[#E52929] text-[10px] font-[500]">
                          Unverified
                        </p>
                      </div>
                    )} */}
                  </div>
                </div>
                {/*  */}

                {/*  */}
                {/* {renderDetail(FmdGoodRoundedIcon, "Attempt", "nil")} */}
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="flex flex-col items-start gap-4">
              <img src="" alt="" />

              <p className="text-[#828282] font-[500] text-[14px]">
                BASIC INFORMATION FOR NIN
              </p>

              <div className="w-full">
                {renderDetail(
                  PersonOutlineRoundedIcon,
                  "Name",
                  `${modalData?.ninMeta?.lastName || ""} ${
                    modalData?.ninMeta?.firstName || ""
                  }`
                )}
                {/*  */}
                {renderDetail(
                  CalendarMonthRoundedIcon,
                  "Date of Birth",
                  modalData?.ninMeta?.dateOfBirth || ""
                )}
                {/*  */}
                {/*  */}
                {renderDetail(
                  FmdGoodRoundedIcon,
                  "Address",
                  modalData?.ninMeta?.address || "nil"
                )}
                {/*  */}
                {/*  */}
                {renderDetail(
                  TransgenderRoundedIcon,
                  "Gender",
                  modalData?.ninMeta?.gender || "nil"
                )}
                {/*  */}
                {/*  */}
                {renderDetail(
                  FmdGoodRoundedIcon,
                  "State of origin",
                  modalData?.ninMeta?.stateOfOrigin || "nil"
                )}
                {/*  */}
                {/*  */}
                {renderDetail(
                  CabinRoundedIcon,
                  "Account Name",
                  modalData?.ninMeta?.accountName || "nil"
                )}
                {/*  */}

                {/*  */}
                {/*  */}
                {renderDetail(
                  CabinRoundedIcon,
                  "Account Number",
                  modalData?.ninMeta?.accountNumber || "nil"
                )}
                {/*  */}
                {/*  */}
                {renderDetail(
                  CabinRoundedIcon,
                  "Account Bank",
                  modalData?.ninMeta?.bankName || "nil"
                )}
                {/*  */}
                {/*  */}
                <div className="flex mb-3">
                  <div className="w-[50%] flex flex-col items-start gap-2">
                    <div className="flex gap-1 items-center">
                      <LocalPhoneOutlinedIcon
                        sx={{ color: "grey", fontSize: "15px" }}
                      />
                      <p className="text-[#828282] text-[14px] font-[500]">
                        Phone Number:
                      </p>
                    </div>
                  </div>
                  <div className="w-[70%] flex gap-1 items-center">
                    {modalData?.ninMeta?.phoneNumber}

                    {/* {modalData?.bvnVerified  ? (
                      <div className="bg-[#EBFFF3]  px-2 flex items-center gap-1 rounded-md">
                        <VerifiedOutlinedIcon
                          sx={{ fontSize: "15px" }}
                          className="text-[#1E854A] text-[10px] font-[500]"
                        />
                        <p className="text-[#1E854A] text-[10px] font-[500]">
                          Verified
                        </p>
                      </div>
                    ) : (
                      <div className="bg-[#FFF0F0]  px-2 flex items-center gap-1 rounded-md">
                        <ReportProblemOutlinedIcon
                          sx={{ fontSize: "15px" }}
                          className="text-[#E52929] font-[500]"
                        />
                        <p className="text-[#E52929] text-[10px] font-[500]">
                          Unverified
                        </p>
                      </div>
                    )} */}
                  </div>
                </div>
                {/*  */}
                {/*  */}
                <div className="flex mb-3">
                  <div className="w-[50%] flex flex-col items-start gap-2">
                    <div className="flex gap-1 items-center">
                      <EmailOutlinedIcon
                        sx={{ color: "grey", fontSize: "15px" }}
                      />
                      <p className="text-[#828282] text-[14px] font-[500]">
                        Email:
                      </p>
                    </div>
                  </div>
                  <div className="w-[70%] flex gap-1 items-center">
                    {modalData?.ninMeta?.email}
                    {/* {modalData?.emailVerified ? (
                      <div className="bg-[#EBFFF3]  px-2 flex items-center gap-1 rounded-md">
                        <VerifiedOutlinedIcon
                          sx={{ fontSize: "15px" }}
                          className="text-[#1E854A] text-[10px] font-[500]"
                        />
                        <p className="text-[#1E854A] text-[10px] font-[500]">
                          Verified
                        </p>
                      </div>
                    ) : (
                      <div className="bg-[#FFF0F0]  px-2 flex items-center gap-1 rounded-md">
                        <ReportProblemOutlinedIcon
                          sx={{ fontSize: "15px" }}
                          className="text-[#E52929] font-[500]"
                        />
                        <p className="text-[#E52929] text-[10px] font-[500]">
                          Unverified
                        </p>
                      </div>
                    )} */}
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
          </Grid>
          {/* <Grid item xs={6}>
            <div className="flex flex-col items-start gap-4">
              <img src="" alt="" />

              <p className="text-[#828282] font-[500] text-[14px]">
                BASIC INFORMATION FOR TEIR 3
              </p>
            </div>
          </Grid> */}

          {modalData?.utilityMeta &&
            Object.keys(modalData?.utilityMeta).length > 0 &&
            Array.isArray(modalData?.utilityMeta?.files) &&
            modalData.utilityMeta.files.length > 0 && (
              <Grid item xs={12}>
                <div className="flex justify-center items-center flex-col border-dotted border-[2px] border-slate-200 p-3">
                  <div className="flex justify-between items-center w-full mb-5">
                    <span className="flex gap-2">
                      <p className="text-[#828282] text-[18px] font-normal">
                        Document Type :{" "}
                      </p>
                      <p className="text-[#828282] font-[600] text-[18px]">
                        Customer Image
                      </p>
                    </span>
                    <span className="flex gap-2">
                      <p className="text-[#828282] text-[18px] font-normal">
                        Date and Time Sent :{" "}
                      </p>
                      <p className="text-[#828282] font-[600] text-[18px]">
                        {modDate(modalData.utilityMeta.files[0]?.submittedOn)}
                      </p>
                    </span>
                  </div>

                  <div className="h-[300px] w-full justify-center items-center flex">
                    <img
                      src={modalData.utilityMeta.files[0]?.selfie}
                      alt="Customer Selfie"
                      className="h-full w-auto object-contain"
                    />
                  </div>
                </div>

                {modalData?.utilityMeta?.files[0]?.identityVerification
                  ?.length > 0 && (
                  <div className="flex justify-center items-center flex-col border-dotted border-[2px] border-slate-200 p-3 mt-9">
                    <div className="flex justify-between items-center w-full mb-5">
                      <span className="flex gap-2">
                        <p className="text-[#828282] text-[18px] font-normal">
                          Document Type :{" "}
                        </p>
                        <p className="text-[#828282] font-[600] text-[18px]">
                          {
                            modalData?.utilityMeta?.files[0]
                              ?.identityVerification[0]?.type
                          }
                        </p>
                      </span>
                      <span className="flex gap-2">
                        <p className="text-[#828282] text-[18px] font-normal">
                          Date and Time Sent :{" "}
                        </p>
                        <p className="text-[#828282] font-[600] text-[18px]">
                          {modDate(modalData.utilityMeta.files[0]?.submittedOn)}
                        </p>
                      </span>
                    </div>

                    <div className="h-[300px] w-full justify-center items-center flex">
                      <img
                        src={
                          modalData?.utilityMeta?.files[0]
                            ?.identityVerification[0]?.front
                        }
                        alt="Customer Selfie"
                        className="h-full w-auto object-contain"
                      />
                      <img
                        src={
                          modalData?.utilityMeta?.files[0]
                            ?.identityVerification[0]?.back
                        }
                        alt="Customer Selfie"
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  </div>
                )}
                {modalData?.utilityMeta?.files[0]?.utilityBill?.length > 0 && (
                  <div className="flex justify-center items-center flex-col border-dotted border-[2px] border-slate-200 p-3 mt-9">
                    <div className="flex justify-between items-center w-full mb-5">
                      <span className="flex gap-2">
                        <p className="text-[#828282] text-[18px] font-normal">
                          Document Type :{" "}
                        </p>
                        <p className="text-[#828282] font-[600] text-[18px]">
                          {
                            modalData?.utilityMeta?.files[0]?.utilityBill[0]
                              ?.type
                          }
                        </p>
                      </span>
                      <span className="flex gap-2">
                        <p className="text-[#828282] text-[18px] font-normal">
                          Date and Time Sent :{" "}
                        </p>
                        <p className="text-[#828282] font-[600] text-[18px]">
                          {modDate(modalData.utilityMeta.files[0]?.submittedOn)}
                        </p>
                      </span>
                    </div>

                    <div className="h-[300px] w-full justify-center items-center flex">
                      <img
                        src={
                          modalData?.utilityMeta?.files[0]?.utilityBill[0]
                            ?.front
                        }
                        alt="Customer Selfie"
                        className="h-full w-auto object-contain"
                      />
                      <img
                        src={
                          modalData?.utilityMeta?.files[0]?.utilityBill[0]?.back
                        }
                        alt="Customer Selfie"
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  </div>
                )}
              </Grid>
            )}

          <Grid xs={12}>
            <div className="flex w-full flex-col gap-3 items-start mt-6">
              <form action="" className="w-full">
                <Box className="flex flex-col mt-2 items-start w-full gap-3  pb-3">
                  <Box className="flex w-full items-center justify-between">
                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "600",
                        fontSize: "15px",
                      }}
                    >
                      Reference
                    </Typography>
                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "400",
                        fontSize: "13px",
                      }}
                    >
                      {messageCount}/120
                    </Typography>
                  </Box>
                  <TextField
                    required
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Enter Message"
                    fullWidth
                    sx={{
                      "& .MuiInputBase-root": {
                        borderRadius: "8px",
                      },
                      "& .MuiInputBase-input": { padding: "12px  " },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#333333",
                          height: "100px",
                          // Set the desired border color here
                        },
                        "&:hover fieldset": {
                          borderColor: "#333333", // Set the border color on hover here
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#FF7F00", // Set the border color on focus here
                        },
                      },
                    }}
                    id="email"
                  />
                  {/* 
                  <Box className="flex w-full items-center justify-between mt-[4rem]">
                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "600",
                        fontSize: "15px",
                      }}
                    >
                      Compliance Officer Name
                    </Typography>
                  </Box>
                  <TextField
                    required
                    value={compName}
                    onChange={handleCompChange}
                    placeholder="Enter Full Name"
                    fullWidth
                    sx={{
                      "& .MuiInputBase-root": { borderRadius: "8px" },
                      "& .MuiInputBase-input": { padding: "12px  " },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#333333", // Set the desired border color here
                        },
                        "&:hover fieldset": {
                          borderColor: "#333333", // Set the border color on hover here
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#FF7F00", // Set the border color on focus here
                        },
                      },
                    }}
                    id="email"
                  /> */}

                  <div className="w-full flex-col  gap-4 border rounded-md border-grey-500  p-4 items-start mt-[10%]">
                    <p className="text-[#1e1e1e] font-[500] mb-6">
                      TRANSACTION STATUS
                    </p>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row // This arranges the radio buttons horizontally
                        aria-label="status"
                        name="status"
                        value={status}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="pending"
                          control={
                            <Radio
                              sx={{
                                color: "#F78105",
                                "&.Mui-checked": { color: "#F78105" },
                              }}
                            />
                          }
                          label="Pending"
                        />
                        <FormControlLabel
                          value="reject"
                          control={
                            <Radio
                              sx={{
                                color: "#F78105",
                                "&.Mui-checked": { color: "#F78105" },
                              }}
                            />
                          }
                          label="Rejected"
                        />
                        <FormControlLabel
                          value="approve"
                          control={
                            <Radio
                              sx={{
                                color: "#F78105",
                                "&.Mui-checked": { color: "#F78105" },
                              }}
                            />
                          }
                          label="Approved"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>

                  <Button
                    onClick={handleSubmitAprv}
                    disabled={disableButton || aprvMutation.isLoading}
                    sx={{
                      background: "#F78105",
                      padding: "10px",
                      mt: "3rem",
                      borderRadius: "8px",
                      width: "100%",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#F78105",
                      },
                      textTransform: "capitalize",
                      fontWeight: "500",
                    }}
                  >
                    {aprvMutation.isLoading || disableButton ? (
                      <CircularProgress size="1.2rem" sx={{ color: "white" }} />
                    ) : (
                      <>
                        <SendRoundedIcon
                          sx={{
                            mr: "1rem",
                          }}
                        />{" "}
                        Proceed
                      </>
                    )}
                  </Button>
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default ThierThreeModal;
