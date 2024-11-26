import React from "react";
import { useState, useEffect } from "react";
import ArrowRight from "../../assets/images/arrow-right.svg";

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
  Grid,
  Container,
  TextField,
  TablePagination,
  ToggleButtonGroup,
  ToggleButton,
  Card,
  Typography,
  Modal,
  CircularProgress,
} from "@mui/material";
import avatar from "../../assets/avatar.svg";

import search from "../../assets/search.svg";
import download from "../../assets/images/download.svg";
import InputAdornment from "@mui/material/InputAdornment";
import { AuthAxios } from "../../helpers/axiosInstance";

import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import { useMutation, useQuery } from "@tanstack/react-query";
import CustomPagination from "../../components/CustomPagination";
const AllMerchants = ({ handleOpenCustomerProfile }) => {
  const totalPages = 8;
  const rowsPerPage = 100;
  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUser, setFilteredUser] = useState(null);

  const fetchMerchantsData = async ({ queryKey }) => {
    const [_key, { page, limit, name }] = queryKey;
    try {
      const response = await AuthAxios.get(
        `/admin/merchant/all?page=${page}&limit=${limit}&name=${name}`
      );
      return response?.data?.data;
    } catch (error) {
      throw new Error("Failed to fetch customer data");
    }
  };

  const handleDownloadMerchant = () => {
    // Map the data to extract the required fields
    const data = records.map((record) => ({
      Name: record.name || "", // Replace with the correct field key
      Email: record.email || "",
      Phone: record.phone || "",
      Address: record.address || "",
      Tier: record.tier || "",
      "Date Registered": record.createdAt || "",
      "Last Updated": record.updatedAt || "",
    }));

    // Convert data to a worksheet and create a workbook
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Records");

    // Generate Excel file and trigger download
    XLSX.writeFile(workbook, "records.xlsx");
  };
  const {
    data: merchantData,
    error,
    isLoading,
  } = useQuery({
    queryKey: [
      "fetchMerchantsData",
      { page: currentPage, limit: rowsPerPage, name: searchTerm },
    ],
    queryFn: fetchMerchantsData,
    keepPreviousData: true,
    staleTime: 5000, // Cache data for 5 seconds
  });

  console.log("merchanr", merchantData);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchMerchant = (val) => {
    setSearchTerm(val);
  };

  useEffect(() => {
    if (searchTerm) {
      setSearchTerm(searchTerm);
    }
  }, [searchTerm]);

  console.log(filteredUser);

  return (
    <>
      <Box className="w-full bg-white rounded-md p-2 flex-col border-grey-400 border-[1px] items-start justify-center">
        <Box className="flex w-full justify-between items-center">
          <Typography
            sx={{
              color: "#1E1E1E",
              fontWeight: "500",
              fontSize: "20px",
              display: "flex",
              gap: "6px",
              alignItems: "center",
            }}
          >
            All Merchant
            <span
              className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
            >
              {!isLoading ? (
                merchantData?.totalRecords
              ) : (
                <CircularProgress
                  size="1rem"
                  sx={{
                    color: "#f78105",
                    marginLeft: "auto",
                  }}
                />
              )}
            </span>
          </Typography>

          <Button
            sx={{
              textTransform: "capitalize",
              fontWeight: "400",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              color: "#DC0019",
            }}
          >
            <img src={download} className="d-icon" alt="d-icon" />
            download
          </Button>
        </Box>

        {/* <div className="flex gap-[5rem]  mt-4 items-center">
                <Typography
                  sx={{
                    color: "#4F4F4F",
                    fontWeight: "500",
                    fontSize: "15px",
                    display: "flex",
                    gap: "6px",
                    alignItems: "center",
                  }}
                >
                  Suspended Accounts
                  <span
                    className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
                  >
                    {!isLoading && dummyCustomers?.length > 0 ? (
                      // customers?.length
                      0
                    ) : (
                      <CircularProgress
                        size="1rem"
                        sx={{
                          color: "#f78105",
                          marginLeft: "auto",
                        }}
                      />
                    )}
                  </span>
                </Typography>
                <Typography
                  sx={{
                    color: "#4F4F4F",
                    fontWeight: "500",
                    fontSize: "15px",
                    display: "flex",
                    gap: "6px",
                    alignItems: "center",
                  }}
                >
                  Reactivated Accounts
                  <span
                    className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
                  >
                    {!isLoading && dummyCustomers?.length > 0 ? (
                      // customers?.length
                      0
                    ) : (
                      <CircularProgress
                        size="1rem"
                        sx={{
                          color: "#f78105",
                          marginLeft: "auto",
                        }}
                      />
                    )}
                  </span>
                </Typography>
              </div> */}

        {/* search  */}
        <Box className="my-[1rem]">
          <TextField
            value={searchTerm}
            onChange={(e) => handleSearchMerchant(e.target.value)}
            sx={{
              borderRadius: "10px",
              width: "100%",
              // padding: { xs: "4px", sm: "12px 16px", md: " 12px 16px" },
              color: "#D1D1D1",
              "& .MuiOutlinedInput-root": {
                padding: "8px", // Adjust padding to reduce height
                height: "36px", // Set the desired height here
                lineHeight: "36px", // Match the height to avoid overflow
                "& fieldset": {
                  borderColor: "#D1D1D1", // Set the desired border color here
                  borderRadius: "10px",
                },
                "&:hover fieldset": {
                  borderColor: "#FF7F00", // Set the border color on hover here
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#FF7F00", // Set the border color on focus here
                },
              },
            }}
            placeholder="Search Merchant..."
            variant="outlined"
            required
            id="firstName-input"
            InputProps={{
              style: { color: "#818181" },
              startAdornment: (
                <InputAdornment>
                  <img src={search} alt="s-logo" />
                  &nbsp;&nbsp;&nbsp;
                </InputAdornment>
              ),
            }}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
        </Box>

        {/* merchants  */}
        <Box className="max-h-[87vh] overflow-y-auto">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100, padding: "8px" }}>
              <TableHead sx={{ background: "#F8F8F8" }}>
                <TableRow>
                  <TableCell>S/N</TableCell>
                  <TableCell>Merchant Name</TableCell>
                  <TableCell>Tier</TableCell>
                  <TableCell>Account Balance</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
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
                ) : merchantData &&
                  Array.isArray(merchantData?.records) &&
                  merchantData?.records.length > 0 ? (
                  merchantData?.records?.map((item, i) => (
                    <TableRow
                      key={item.id}
                      className="cursor-pointer"
                      onClick={() => handleOpenCustomerProfile(item?.id)}
                    >
                      <TableCell sx={{ width: "50px" }}>
                        {i + 1 + (currentPage - 1) * rowsPerPage}
                      </TableCell>
                      <TableCell>
                        <Box className="flex items-center gap-2  max-w-[20rem] ">
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
                            {`${item?.name} `}
                          </Typography>
                        </Box>
                      </TableCell>
                      <TableCell>nill</TableCell>
                      <TableCell>nill</TableCell>

                      <TableCell>
                        <Box
                          sx={{
                            cursor: "pointer",
                            width: "100%",
                            display: "flex",
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
      </Box>
    </>
  );
};

export default AllMerchants;
