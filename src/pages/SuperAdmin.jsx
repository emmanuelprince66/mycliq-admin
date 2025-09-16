import { CircularProgress, Divider, Skeleton } from "@mui/material";
import React from "react";
import avatar from "../assets/avatar.svg";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import TransgenderRoundedIcon from "@mui/icons-material/TransgenderRounded";

import { useState } from "react";
import PersonPinCircleRoundedIcon from "@mui/icons-material/PersonPinCircleRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import ArrowRight from "../assets/images/arrow-right.svg";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import PersonPinCircleOutlinedIcon from "@mui/icons-material/PersonPinCircleOutlined";
import {
  Table,
  Box,
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Switch,
  Grid,
  Container,
  TextField,
  TablePagination,
  ToggleButtonGroup,
  ToggleButton,
  Card,
  Typography,
  Modal,
} from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import NoAccountsOutlinedIcon from "@mui/icons-material/NoAccountsOutlined";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AddSuperAdmin from "../components/AddSuperAdmin";
import { useQuery } from "@tanstack/react-query";

import CustomModal from "../components/CustomModal";
import CustomRequestModal from "../components/CustomRequestModal";
import bigAvatar from "../assets/images/bigavatar.svg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthAxios } from "../helpers/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import CustomPagination from "../components/CustomPagination";
import modDate from "../utils/moddate";
const SuperAdmin = () => {
  const adminData = [
    {
      id: 1,
      lastName: "Copper",
      firstName: "Jane",
      role: "Super Admin",
      img: "",
    },
    {
      id: 2,
      lastName: "Copper",
      firstName: "Jane",
      role: "Logistics",
      img: "",
    },
    {
      id: 3,
      lastName: "Copper",
      firstName: "Jane",
      role: "Brand & Growth",
      img: "",
    },
    {
      id: 4,
      lastName: "Copper",
      firstName: "Jane",
      role: "Super Admin",
      img: "",
    },
    {
      id: 5,
      lastName: "Copper",
      firstName: "Jane",
      role: "Super Admin",
      img: "",
    },
    {
      id: 6,
      lastName: "Copper",
      firstName: "Jane",
      role: "Customers Service",
      img: "",
    },
  ];
  const [administrators, setAdministrators] = useState(true);
  const rowsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [apiId, setApiId] = useState("");
  const [reqestModal, setRequestModal] = useState(false);
  const closeRequestModal = () => setRequestModal(false);

  const [adminModal, setAdminModal] = useState(false);
  const closeAdminModal = () => setAdminModal(false);

  const fetchAdminMembers = async ({ queryKey }) => {
    const [_key, { page, limit }] = queryKey;
    try {
      const response = await AuthAxios.get(
        `/admin?page=${page}&limit=${limit}`
      );
      return response?.data?.data;
    } catch (error) {
      throw new Error("Failed to fetch customer data");
    }
  };

  const {
    data: adminMembers,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["fetchAdminMembers", { page: currentPage, limit: rowsPerPage }],
    queryFn: fetchAdminMembers,
    keepPreviousData: true,
    staleTime: 5000, // Cache data for 5 seconds
  });
  const fetchAdminMembersById = async ({ queryKey }) => {
    const [_key, { apiId }] = queryKey;
    try {
      const response = await AuthAxios.get(`/admin/${apiId}`);
      return response?.data?.data;
    } catch (error) {
      throw new Error("Failed to fetch customer data");
    }
  };

  const {
    data: adminMembersById,
    error: membersIdError,
    isLoading: membersIdIsloading,
  } = useQuery({
    queryKey: ["fetchAdminMembersById", { apiId: apiId }],
    queryFn: fetchAdminMembersById,
    keepPreviousData: true,
    staleTime: 5000, // Cache data for 5 seconds
  });

  const totalPages = adminMembers?.totalPages ?? 0;

  const handleOpenCustomerProfile = (id) => {
    setApiId(id);
    setAdminModal(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="flex w-full border-[1px] border-[#E0E0E0] bg-white p-3  rounded-[8px] flex-col items-start gap-3">
      <p className="text-[15px] font-[500] text-[#1e1e1e] ">
        Manage Administrators
      </p>

      {/* data */}

      {/* filter  */}

      <div className="  mt-7  mb-2 w-full flex items-center gap-5">
        <div
          className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
          onClick={() => setAdministrators(true)}
        >
          <div className="flex gap-2 items-center ">
            <p
              className={`text-[16px]
                flex items-center gap-1
                ${
                  !administrators ? "text-[#828282]" : "text-[#F78105]"
                } font-[500]`}
            >
              <PersonPinCircleRoundedIcon sx={{ fontSize: "15px" }} />
              Admininstrators
            </p>
            <span className=" px-2 bg-[#FFEFD6] rounded-md">
              <p className="text-[12px] text-[#A86500] font-[500]">
                {!isLoading ? (
                  adminMembers?.totalRecords
                ) : (
                  <CircularProgress
                    size="1rem"
                    sx={{
                      color: "#f78105",
                      marginLeft: "auto",
                    }}
                  />
                )}
              </p>
            </span>
          </div>
          {administrators && (
            <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
          )}
        </div>
        <div
          className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
          onClick={() => setAdministrators(false)}
        >
          <div className="flex gap-2 items-center">
            <p
              className={`text-[16px] flex items-center gap-2 ${
                administrators ? "text-[#828282]" : "text-[#F78105]"
              } font-[500]`}
            >
              <AddCircleRoundedIcon sx={{ fontSize: "15px" }} />
              Add New Administrator{" "}
            </p>
            {/* <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                <p className="text-[12px] text-[#A86500] font-[500]">122</p>
              </span> */}
          </div>
          {!administrators && (
            <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
          )}
        </div>
      </div>
      <Divider sx={{ marginTop: "-36px", mb: "1rem", width: "100%" }} />

      {/* filter  */}

      {administrators && (
        <>
          {/* customers  */}
          <Box className="max-h-[87vh] max-w-[70%] overflow-y-auto w-full">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: "100%", padding: "8px" }}>
                <TableBody>
                  {isLoading ? (
                    <CircularProgress
                      size="4.2rem"
                      sx={{
                        color: "#f78105",
                        marginLeft: "auto",
                        padding: "1em",
                      }}
                    />
                  ) : adminMembers?.records &&
                    Array.isArray(adminMembers?.records) &&
                    adminMembers?.records?.length > 0 ? (
                    adminMembers?.records?.map((item, i) => (
                      <TableRow
                        key={item.id}
                        className="cursor-pointer"
                        onClick={() => handleOpenCustomerProfile(item.id)}
                      >
                        <TableCell sx={{ width: "50px" }}>{i + 1}</TableCell>
                        <TableCell>
                          <Box className="flex items-center gap-2 ">
                            <Box
                              sx={{
                                border: "1px solid #E0E0E0",
                                borderRadius: "8px",
                                p: "5px",
                              }}
                            >
                              {item?.img === "" ? (
                                <img
                                  src={avatar}
                                  className="cat-img"
                                  alt="p-img"
                                />
                              ) : (
                                <img
                                  src={item?.img}
                                  className="cat-img"
                                  alt="p-img"
                                />
                              )}
                            </Box>
                            <Typography
                              sx={{
                                fontWeight: "400",
                                fontSize: "16px",
                                color: "#828282",
                              }}
                            >
                              {`${item?.lastName}  ${item?.firstName}`}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box
                            sx={{
                              cursor: "pointer",
                              width: "100%",
                              display: "flex",
                              justifyContent: "end",
                            }}
                          >
                            <img src={ArrowRight} alt="a-right" />
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan="7">No data found</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </Box>
          {/* customers end */}
        </>
      )}

      {!administrators && <AddSuperAdmin />}

      {/* request modal */}
      <CustomModal open={reqestModal}>
        <CustomRequestModal
          titleOne=" You are about to register a new administrator. Are you sure you want
          to proceed?"
          titleTwo="A default password will be sent to the email provided. You may need
            to double-check to be sure that the email provided is correct and
            it’s functional."
          btnText="Yes, Proceed"
          close={closeRequestModal}
        />
      </CustomModal>
      {/* request modal end */}

      {/* adminstrators profile */}
      <CustomModal open={adminModal} close={closeAdminModal}>
        {membersIdIsloading ? (
          <CircularProgress
            size="3rem"
            sx={{
              color: "#f78105",
              margin: "auto",
            }}
          />
        ) : (
          <div className="w-full flex flex-col items-start gap-2">
            <div className="flex items-center justify-between w-full mb-3">
              <p className="text-[#1e1e1e] text-[15px] font-[500]">
                Administrator's Profile
              </p>
              <ClearRoundedIcon
                onClick={closeAdminModal}
                sx={{
                  color: "#828282",
                  cursor: "pointer",
                  fontSize: "30px",
                  background: "#f4f4f4",
                  p: "4px",
                  borderRadius: "8px",
                }}
              />
            </div>

            <div className="flex items-center w-full gap-[6rem]">
              <img
                src={bigAvatar}
                className="object-contain w-[130px]  h-[130px]"
                alt="b-a"
              />
              <div className="flex items-start flex-col gap-3">
                <Box className="flex flex-col items-start w-full justify-center">
                  <Typography
                    sx={{
                      color: "grey",
                      fontWeight: "500",
                      fontSize: "13px",
                      mb: "10px",
                    }}
                  >
                    Basic Information
                  </Typography>
                  <Box className="flex items-center mt-1 mb-1">
                    <Box className="flex items-center gap-1 w-[200px] ">
                      <PersonOutlineRoundedIcon
                        sx={{ color: "grey", fontSize: "15px" }}
                      />
                      <Typography
                        sx={{
                          color: "grey",
                          fontWeight: "300",
                          fontSize: "12px",
                        }}
                      >
                        Name :
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "500",
                        fontSize: "13px",
                      }}
                    >
                      {`${adminMembersById?.lastName} ${adminMembersById?.firstName}`}
                    </Typography>
                  </Box>
                  <Box className="flex items-center mt-1 mb-1 justify-between ">
                    <Box className="flex items-center gap-1 w-[200px] ">
                      <TransgenderRoundedIcon
                        sx={{ color: "grey", fontSize: "15px" }}
                      />
                      <Typography
                        sx={{
                          color: "grey",
                          fontWeight: "300",
                          fontSize: "12px",
                        }}
                      >
                        Gender :
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "500",
                        fontSize: "13px",
                      }}
                    >
                      {adminMembersById?.gender}
                    </Typography>
                  </Box>
                  <Box className="flex  items-center mt-1 mb-1 justify-between ">
                    <Box className="flex items-center gap-1 w-[200px] ">
                      <EmailOutlinedIcon
                        sx={{ color: "grey", fontSize: "15px" }}
                      />
                      <Typography
                        sx={{
                          color: "grey",
                          fontWeight: "300",
                          fontSize: "12px",
                        }}
                      >
                        Email :
                      </Typography>
                    </Box>

                    <div className="flex gap-2 items-center">
                      <Typography
                        sx={{
                          color: "#1E1E1E",
                          fontWeight: "500",
                          fontSize: "13px",
                        }}
                      >
                        {adminMembersById?.email}
                      </Typography>
                    </div>
                  </Box>
                  <Box className="flex  items-center mt-1 mb-1 justify-between ">
                    <Box className="flex items-center gap-1 w-[200px]">
                      <LocalPhoneOutlinedIcon
                        sx={{ color: "grey", fontSize: "15px" }}
                      />
                      <Typography
                        sx={{
                          color: "grey",
                          fontWeight: "300",
                          fontSize: "12px",
                        }}
                      >
                        Phone Num :
                      </Typography>
                    </Box>

                    <div className="flex gap-2 items-center">
                      <Typography
                        sx={{
                          color: "#1E1E1E",
                          fontWeight: "500",
                          fontSize: "13px",
                        }}
                      >
                        {adminMembersById?.phoneNumber}
                      </Typography>
                    </div>
                  </Box>
                  <Box className="flex  items-center mt-1 mb-1 justify-between ">
                    <Box className="flex items-center gap-1 w-[200px]">
                      <PersonPinCircleOutlinedIcon
                        sx={{ color: "grey", fontSize: "15px" }}
                      />
                      <Typography
                        sx={{
                          color: "grey",
                          fontWeight: "300",
                          fontSize: "12px",
                        }}
                      >
                        Role :
                      </Typography>
                    </Box>

                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "500",
                        fontSize: "13px",
                      }}
                    >
                      {" "}
                      {adminMembersById?.role}
                    </Typography>
                  </Box>
                </Box>
              </div>
            </div>

            <Typography
              sx={{
                color: "grey",
                fontWeight: "500",
                fontSize: "13px",
              }}
            >
              Others
            </Typography>

            <Box className="flex  items-center mt-2 mb-1 ">
              <Box className="flex items-center gap-1 w-[150px]">
                <CalendarMonthRoundedIcon
                  sx={{ color: "grey", fontSize: "15px" }}
                />
                <Typography
                  sx={{
                    color: "grey",
                    fontWeight: "300",
                    fontSize: "12px",
                  }}
                >
                  Date Registered:
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "500",
                  fontSize: "13px",
                }}
              >
                {modDate(adminMembersById?.createdAt)}
              </Typography>
            </Box>
            <Box className="flex  items-center mt-2 mb-1  ">
              <Box className="flex items-center gap-1 w-[150px]">
                <AccessTimeOutlinedIcon
                  sx={{ color: "grey", fontSize: "15px" }}
                />
                <Typography
                  sx={{
                    color: "grey",
                    fontWeight: "300",
                    fontSize: "12px",
                  }}
                >
                  Last Seen:
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "500",
                  fontSize: "13px",
                }}
              >
                {modDate(adminMembersById?.lastLogin)}
              </Typography>
            </Box>

            <Divider sx={{ width: "500px" }} />

            <Box className="flex  items-center  mb-1 ">
              <Box className="flex items-center gap-1 w-[150px]">
                <NoAccountsOutlinedIcon
                  sx={{ color: "#DC0019", fontSize: "15px" }}
                />
                <Typography
                  sx={{
                    color: "red",
                    fontWeight: "300",
                    fontSize: "12px",
                  }}
                >
                  Disable Account:
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "500",
                  fontSize: "13px",
                }}
              >
                <Switch
                  sx={{
                    "& .MuiSwitch-switchBase.Mui-checked": {
                      color: "#fff",
                      // "&:hover": {
                      //   backgroundColor: alpha(
                      //     pink[500],
                      //     theme.palette.action.hoverOpacity
                      //   ),
                      // },
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#DC0019",
                    },
                  }}
                  defaultChecked
                  color="default"
                />
              </Typography>
            </Box>
            <Box className="flex  items-center  mb-1  ">
              <Box className="flex items-center gap-1 w-[150px]">
                <DeleteForeverOutlinedIcon
                  sx={{ color: "#DC0019", fontSize: "15px" }}
                />
                <Typography
                  sx={{
                    color: "#DC0019",
                    fontWeight: "300",
                    fontSize: "12px",
                  }}
                >
                  Delete Account
                </Typography>
              </Box>
            </Box>

            <div className="w-full flex justify-end">
              <Button
                onClick={closeAdminModal}
                variant="contained"
                type="submit"
                sx={{
                  color: "#fff",
                  width: "30%",
                  background: "#F78105",
                  padding: ".6em",
                  boxShadow: "none",
                  "&:hover": {
                    background: "#F78105",
                  },
                }}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </CustomModal>
      {/* adminstrators profile */}
    </div>
  );
};
export default SuperAdmin;
