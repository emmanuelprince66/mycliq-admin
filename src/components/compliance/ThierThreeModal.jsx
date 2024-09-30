import React from "react";
import { Box, Grid } from "@mui/material";
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

const ThierThreeModal = ({ modalData }) => {
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
                  modalData?.gender || "nil"
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

                {renderDetail(
                  EmailOutlinedIcon,
                  "Category",
                  modalData?.gender || "nil"
                )}
                {/*  */}
                {renderDetail(FmdGoodRoundedIcon, "Attempt", "nil")}
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

                {renderDetail(
                  EmailOutlinedIcon,
                  "Category",
                  modalData?.gender || "nil"
                )}
                {/*  */}
                {renderDetail(FmdGoodRoundedIcon, "Attempt", "nil")}
              </div>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="flex flex-col items-start gap-4">
              <img src="" alt="" />

              <p className="text-[#828282] font-[500] text-[14px]">
                BASIC INFORMATION FOR TEIR 3
              </p>

              <div className="w-full">
                {renderDetail(PersonOutlineRoundedIcon, "Image")}
                {/*  */}
                {rendersDetail(
                  CalendarMonthRoundedIcon,
                  "Date of Birth",
                  modalData?.ninMeta?.dateOfBirth || ""
                )}
                {/*  */}
                {/*  */}
                {renderDetail(PersonOutlineRoundedIcon, "Voters Card")}
                {/*  */}
                {/*  */}
                {renderDetail(
                  FmdGoodRoundedIcon,
                  "Utility Bill",
                  modalData?.utilityMeta?.files[0]?.utilityBill[0]?.type ||
                    "nil"
                )}
                {/*  */}
                {/*  */}
                {renderDetail(FmdGoodRoundedIcon, "Verification Status")}
                {/*  */}
                {/*  */}
                {renderDetail(FmdGoodRoundedIcon, "Attempt")}
                {/*  */}
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default ThierThreeModal;
