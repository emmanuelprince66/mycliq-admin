import React, { useEffect, useState } from "react";
import SelectDate from "../components/SelectDate";
import HourglassTopRoundedIcon from "@mui/icons-material/HourglassTopRounded";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import cOne from "../assets/images/admin/compliance/c-1.svg";
import cTwo from "../assets/images/admin/compliance/c-2.svg";
import cThree from "../assets/images/admin/compliance/c-3.svg";
import { Card, Box, TextField, Grid, Divider } from "@mui/material";
import search from "../../src/assets/search.svg";
import InputAdornment from "@mui/material/InputAdornment";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import DefaultTable from "../components/compliance/DefaultTable";
import TableTwo from "../components/compliance/TableTwo";

const Compliance = () => {
  const [majorFilter, setMmajorFilter] = useState("all");
  const [minorFilter, setMinorFilter] = useState("all");
  const [holdingsFilter, setHoldingsFilter] = useState("customers");
  const [minorHoldings, setMinorHoldings] = useState("suspended");
  const [tierThreeFilter, setTierThreeFilter] = useState("pending");

  useEffect(() => {}, [majorFilter]);
  //
  const handleMajorFilterChange = (val) => {
    setMmajorFilter(val);
  };

  const handleMinorFilterChange = (val) => {
    setMinorFilter(val);
  };

  const handleHoldingsFilterChange = (val) => {
    setHoldingsFilter(val);
  };
  const handleMinorHoldingsFilterChange = (val) => {
    setMinorHoldings(val);
  };
  const handleTierThreeFilterChange = (val) => {
    setTierThreeFilter(val);
  };
  return (
    <div className="w-full flex flex-col items-end gap-4">
      <SelectDate />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card
            sx={{
              padding: "16px",
              width: "100%",
            }}
          >
            <div className="flex w-full flex-col items-start gap-3">
              <div className="flex gap-2 items-center">
                <img src={cOne} alt="c-1" />
                <p className="text-[#4F4F4F] text-[16px] font-[500]">
                  Total Number of Verified Users
                </p>
              </div>

              <div className="flex w-full items-center justify-between mt-3">
                <div className="flex flex-col  items-start gap-2">
                  <p className="font-[500] text-[12px] text-[#828282]">Type</p>
                  <p className="font-[600] text-[16px] text-[#F78105]">
                    Totak KYC:
                  </p>
                </div>
                <div className="flex flex-col  items-start gap-2">
                  <p className="font-[500] text-[12px] text-[#828282]">
                    All-time
                  </p>
                  <p className="font-[600] text-[16px] text-[#F78105]">5,755</p>
                </div>
                <div className="flex flex-col  items-start gap-2">
                  <p className="font-[500] text-[12px] text-[#828282]">
                    Filter
                  </p>
                  <p className="font-[600] text-[16px] text-[#F78105]">5445</p>
                </div>
                <div className="flex flex-col  items-start gap-2">
                  <p className="font-[500] text-[12px] text-[#828282]">
                    Expanses Incurred
                  </p>
                  <p className="font-[600] text-[16px]  text-[#F78105]">
                    N5,000,000
                  </p>
                </div>
              </div>

              <div className="flex w-full justify-end mt-3 ">
                <Accordion
                  defaultExpanded={false}
                  sx={{
                    boxShadow: "none", // Remove box shadow
                    width: "100%",
                    padding: "0px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "#F78105",
                          background: "#FFEFD6",
                          borderRadius: "10px",
                          width: "100%",
                        }}
                      />
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                      borderBottom: "none", // Remove bottom border of the summary
                      display: "flex",
                      alignItems: "center",
                      padding: 0,
                      width: "100%",
                    }}
                  >
                    <span className="flex text-[#F78105] text-[14px] items-center ">
                      View More
                    </span>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      width: "100%",
                      padding: 0,
                      // Remove top border of the details
                    }}
                  >
                    {/* approved */}
                    <div className="flex w-full items-center justify-between mt-3">
                      <div className="flex flex-col w-full  items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          Type
                        </p>
                        <p className="font-[600] text-[16px] text-[#1E1E1E]">
                          BVN:
                        </p>
                      </div>
                      <div className="flex flex-col w-full items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          All-time
                        </p>
                        <p className="font-[600] text-[16px] text-[#1E1E1E]">
                          5,755
                        </p>
                      </div>
                      <div className="flex flex-col w-full  items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          Filter
                        </p>
                        <p className="font-[600] text-[16px] text-[#1E1E1E]">
                          5445
                        </p>
                      </div>
                      <div className="flex flex-col w-full  items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          Expanses Incurred
                        </p>
                        <p className="font-[600] text-[16px]  text-[#1E1E1E]">
                          N5,000,000
                        </p>
                      </div>
                    </div>
                    {/* NIN */}
                    <div className="flex w-full items-center justify-between mt-3">
                      <div className="flex flex-col w-full  items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          Type
                        </p>
                        <p className="font-[600] text-[16px] text-[#1E1E1E]">
                          NIN:
                        </p>
                      </div>
                      <div className="flex flex-col w-full  items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          All-time
                        </p>
                        <p className="font-[600] text-[16px] text-[#1E1E1E]">
                          5,755
                        </p>
                      </div>
                      <div className="flex flex-col w-full  items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          Filter
                        </p>
                        <p className="font-[600] text-[16px] text-[#1E1E1E]">
                          5445
                        </p>
                      </div>
                      <div className="flex flex-col w-full items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          Expanses Incurred
                        </p>
                        <p className="font-[600] text-[16px]  text-[#1E1E1E]">
                          N5,000,000
                        </p>
                      </div>
                    </div>
                    {/* TIER 3 */}

                    <div className="flex w-full items-center justify-between mt-3">
                      <div className="flex flex-col w-full  items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          Type
                        </p>
                        <p className="font-[600] text-[16px] text-[#1E1E1E]">
                          TIER 3:
                        </p>
                      </div>
                      <div className="flex flex-col w-full  items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          All-time
                        </p>
                        <p className="font-[600] text-[16px] text-[#1E1E1E]">
                          5,755
                        </p>
                      </div>
                      <div className="flex flex-col w-full  items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          Filter
                        </p>
                        <p className="font-[600] text-[16px] text-[#1E1E1E]">
                          5445
                        </p>
                      </div>
                      <div className="flex flex-col w-full  items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          Expanses Incurred
                        </p>
                        <p className="font-[600] text-[16px]  text-[#1E1E1E]">
                          N5,000,000
                        </p>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            sx={{
              padding: "16px",
              width: "100%",
            }}
          >
            <div className="flex w-full flex-col items-start gap-3">
              <div className="flex gap-2 items-center">
                <img src={cTwo} alt="c-2" />
                <p className="text-[#4F4F4F] text-[16px] font-[500]">
                  Total Number of Unverified Merchants
                </p>
              </div>

              <div className="flex w-full items-center justify-between mt-3">
                <div className="flex flex-col  items-start gap-2">
                  <p className="font-[500] text-[12px] text-[#828282]">Type</p>
                  <p className="font-[600] text-[16px] text-[#F78105]">
                    Totak KYC:
                  </p>
                </div>
                <div className="flex flex-col  items-start gap-2">
                  <p className="font-[500] text-[12px] text-[#828282]">
                    All-time
                  </p>
                  <p className="font-[600] text-[16px] text-[#F78105]">5,755</p>
                </div>
                <div className="flex flex-col  items-start gap-2">
                  <p className="font-[500] text-[12px] text-[#828282]">
                    Filter
                  </p>
                  <p className="font-[600] text-[16px] text-[#F78105]">5445</p>
                </div>
                <div className="flex flex-col  items-start gap-2">
                  <p className="font-[500] text-[12px] text-[#828282]">
                    Expanses Incurred
                  </p>
                  <p className="font-[600] text-[16px]  text-[#F78105]">
                    N5,000,000
                  </p>
                </div>
              </div>

              <div className="flex w-full justify-end mt-3 ">
                <Accordion
                  defaultExpanded={false}
                  sx={{
                    boxShadow: "none", // Remove box shadow
                    width: "100%",
                    padding: "0px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{
                          color: "#F78105",
                          background: "#FFEFD6",
                          borderRadius: "10px",
                          width: "100%",
                        }}
                      />
                    }
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{
                      borderBottom: "none", // Remove bottom border of the summary
                      display: "flex",
                      alignItems: "center",
                      padding: 0,
                      width: "100%",
                    }}
                  >
                    <span className="flex text-[#F78105] text-[14px] items-center ">
                      View More
                    </span>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      width: "100%",
                      padding: 0,
                      // Remove top border of the details
                    }}
                  >
                    {/* BVN */}
                    <div className="flex w-full items-center justify-between mt-3">
                      <div className="flex flex-col w-full  items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          Type
                        </p>
                        <p className="font-[600] text-[16px] text-[#1E1E1E]">
                          BVN:
                        </p>
                      </div>
                      <div className="flex flex-col w-full items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          All-time
                        </p>
                        <p className="font-[600] text-[16px] text-[#1E1E1E]">
                          5,755
                        </p>
                      </div>
                      <div className="flex flex-col w-full  items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          Filter
                        </p>
                        <p className="font-[600] text-[16px] text-[#1E1E1E]">
                          5445
                        </p>
                      </div>
                      <div className="flex flex-col w-full  items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          Expanses Incurred
                        </p>
                        <p className="font-[600] text-[16px]  text-[#1E1E1E]">
                          N5,000,000
                        </p>
                      </div>
                    </div>
                    {/* NIN */}
                    <div className="flex w-full items-center justify-between mt-3">
                      <div className="flex flex-col w-full  items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          Type
                        </p>
                        <p className="font-[600] text-[16px] text-[#1E1E1E]">
                          NIN:
                        </p>
                      </div>
                      <div className="flex flex-col w-full  items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          All-time
                        </p>
                        <p className="font-[600] text-[16px] text-[#1E1E1E]">
                          5,755
                        </p>
                      </div>
                      <div className="flex flex-col w-full  items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          Filter
                        </p>
                        <p className="font-[600] text-[16px] text-[#1E1E1E]">
                          5445
                        </p>
                      </div>
                      <div className="flex flex-col w-full items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          Expanses Incurred
                        </p>
                        <p className="font-[600] text-[16px]  text-[#1E1E1E]">
                          N5,000,000
                        </p>
                      </div>
                    </div>
                    {/* TIER 3 */}

                    <div className="flex w-full items-center justify-between mt-3">
                      <div className="flex flex-col w-full  items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          Type
                        </p>
                        <p className="font-[600] text-[16px] text-[#1E1E1E]">
                          TIER 3:
                        </p>
                      </div>
                      <div className="flex flex-col w-full  items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          All-time
                        </p>
                        <p className="font-[600] text-[16px] text-[#1E1E1E]">
                          5,755
                        </p>
                      </div>
                      <div className="flex flex-col w-full  items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          Filter
                        </p>
                        <p className="font-[600] text-[16px] text-[#1E1E1E]">
                          5445
                        </p>
                      </div>
                      <div className="flex flex-col w-full  items-start gap-2">
                        <p className="font-[500] text-[12px] text-[#828282]">
                          Expanses Incurred
                        </p>
                        <p className="font-[600] text-[16px]  text-[#1E1E1E]">
                          N5,000,000
                        </p>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>

      <div className="rounded-md p-2 flex flex-col w-full items-start gap-3 mt-4 border-slate-300 bg-white border-[1px]">
        <div className="flex gap-7 items-center w-full placeholder:">
          <p className="text-[#1E1E1E] font-[500] text-[20px]">Compliance</p>
          {/* search  */}
          <Box className="my-[1rem] w-[40%]">
            <TextField
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
              placeholder="Search User , Transaction ID"
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
          {/* search  */}
        </div>
        <div className="flex w-full gap-7 mt-3">
          {/* major filter one */}
          <div
            className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
            onClick={() => handleMajorFilterChange("all")}
          >
            <div className="flex gap-2 items-center">
              <p
                className={`text-[16px] ${
                  majorFilter === "all" ? "text-[#F78105]" : "text-[#828282]"
                } font-[600]`}
              >
                All Users
              </p>
              <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                <p className="text-[12px] text-[#A86500] font-[500]">122</p>
              </span>
            </div>
            {majorFilter === "all" && (
              <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
            )}
          </div>
          <div
            className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
            onClick={() => handleMajorFilterChange("customers")}
          >
            <div className="flex gap-2 items-center">
              <p
                className={`text-[16px] ${
                  majorFilter === "customers"
                    ? "text-[#F78105]"
                    : "text-[#828282]"
                } font-[600]`}
              >
                Customers
              </p>
              <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                <p className="text-[12px] text-[#A86500] font-[500]">122</p>
              </span>
            </div>
            {majorFilter === "customers" && (
              <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
            )}
          </div>
          <div
            className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
            onClick={() => handleMajorFilterChange("merchants")}
          >
            <div className="flex gap-2 items-center">
              <p
                className={`text-[16px] ${
                  majorFilter === "merchants"
                    ? "text-[#F78105]"
                    : "text-[#828282]"
                } font-[600]`}
              >
                Merchants
              </p>
              <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                <p className="text-[12px] text-[#A86500] font-[500]">122</p>
              </span>
            </div>
            {majorFilter === "merchants" && (
              <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
            )}
          </div>
          <div
            className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
            onClick={() => handleMajorFilterChange("holdings")}
          >
            <div className="flex gap-2 items-center">
              <p
                className={`text-[16px] ${
                  majorFilter === "holdings"
                    ? "text-[#F78105]"
                    : "text-[#828282]"
                } font-[600]`}
              >
                Holdings
              </p>
              <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                <p className="text-[12px] text-[#A86500] font-[500]">122</p>
              </span>
            </div>
            {majorFilter === "holdings" && (
              <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
            )}
          </div>
          {/* major filter one ends */}
        </div>

        {/* minor filter */}
        {majorFilter !== "holdings" && (
          <div className="flex w-full gap-7 mt-3">
            <div
              className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
              onClick={() => handleMinorFilterChange("all")}
            >
              <div className="flex gap-2 items-center">
                <p
                  className={`text-[16px] ${
                    minorFilter === "all" ? "text-[#F78105]" : "text-[#828282]"
                  } font-[600]`}
                >
                  All
                </p>
                <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                  <p className="text-[12px] text-[#A86500] font-[500]">122</p>
                </span>
              </div>
              {minorFilter === "all" && (
                <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
              )}
            </div>
            <div
              className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
              onClick={() => handleMinorFilterChange("bvn")}
            >
              <div className="flex gap-2 items-center">
                <p
                  className={`text-[16px] ${
                    minorFilter === "bvn" ? "text-[#F78105]" : "text-[#828282]"
                  } font-[600]`}
                >
                  BVN
                </p>
                <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                  <p className="text-[12px] text-[#A86500] font-[500]">122</p>
                </span>
              </div>
              {minorFilter === "bvn" && (
                <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
              )}
            </div>
            <div
              className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
              onClick={() => handleMinorFilterChange("nin")}
            >
              <div className="flex gap-2 items-center">
                <p
                  className={`text-[16px] ${
                    minorFilter === "nin" ? "text-[#F78105]" : "text-[#828282]"
                  } font-[600]`}
                >
                  NIN
                </p>
                <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                  <p className="text-[12px] text-[#A86500] font-[500]">122</p>
                </span>
              </div>
              {minorFilter === "nin" && (
                <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
              )}
            </div>
            <div
              className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
              onClick={() => handleMinorFilterChange("tierThree")}
            >
              <div className="flex gap-2 items-center">
                <p
                  className={`text-[16px] ${
                    minorFilter === "tierThree"
                      ? "text-[#F78105]"
                      : "text-[#828282]"
                  } font-[600]`}
                >
                  TIER 3
                </p>
                <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                  <p className="text-[12px] text-[#A86500] font-[500]">122</p>
                </span>
              </div>
              {minorFilter === "tierThree" && (
                <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
              )}
            </div>
          </div>
        )}
        {/* minor filter ends */}

        {/* holdings filter start */}
        {majorFilter === "holdings" && (
          <div className="flex w-full gap-7 mt-3">
            <div
              className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
              onClick={() => handleHoldingsFilterChange("customers")}
            >
              <div className="flex gap-2 items-center">
                <p
                  className={`text-[16px] ${
                    holdingsFilter === "customers"
                      ? "text-[#F78105]"
                      : "text-[#828282]"
                  } font-[600]`}
                >
                  Customers
                </p>
                <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                  <p className="text-[12px] text-[#A86500] font-[500]">122</p>
                </span>
              </div>
              {holdingsFilter === "customers" && (
                <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
              )}
            </div>
            <div
              className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
              onClick={() => handleHoldingsFilterChange("merchants")}
            >
              <div className="flex gap-2 items-center">
                <p
                  className={`text-[16px] ${
                    holdingsFilter === "merchants"
                      ? "text-[#F78105]"
                      : "text-[#828282]"
                  } font-[600]`}
                >
                  Merchants
                </p>
                <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                  <p className="text-[12px] text-[#A86500] font-[500]">122</p>
                </span>
              </div>
              {holdingsFilter === "merchants" && (
                <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
              )}
            </div>
          </div>
        )}
        {/* holdings filter ends */}

        {/* minor hodlings filter start */}

        {majorFilter === "holdings" && (
          <div className="flex w-full gap-7 mt-3">
            <div
              className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
              onClick={() => handleMinorHoldingsFilterChange("suspended")}
            >
              <div className="flex gap-2 items-center">
                <p
                  className={`text-[16px] ${
                    minorHoldings === "suspended"
                      ? "text-[#F78105]"
                      : "text-[#828282]"
                  } font-[600]`}
                >
                  Account Suspended
                </p>
                {/* <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                  <p className="text-[12px] text-[#A86500] font-[500]">122</p>
                </span> */}
              </div>
              {minorHoldings === "suspended" && (
                <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
              )}
            </div>
            <div
              className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
              onClick={() => handleMinorHoldingsFilterChange("reactivate")}
            >
              <div className="flex gap-2 items-center">
                <p
                  className={`text-[16px] ${
                    minorHoldings === "reactivate"
                      ? "text-[#F78105]"
                      : "text-[#828282]"
                  } font-[600]`}
                >
                  Reactivated/Successfull
                </p>
                {/* <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                  <p className="text-[12px] text-[#A86500] font-[500]">122</p>
                </span> */}
              </div>
              {minorHoldings === "reactivate" && (
                <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
              )}
            </div>
            <div
              className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
              onClick={() => handleMinorHoldingsFilterChange("deactivate")}
            >
              <div className="flex gap-2 items-center">
                <p
                  className={`text-[16px] ${
                    minorHoldings === "deactivate"
                      ? "text-[#F78105]"
                      : "text-[#828282]"
                  } font-[600]`}
                >
                  Deactivated/Failed
                </p>
                {/* <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                  <p className="text-[12px] text-[#A86500] font-[500]">122</p>
                </span> */}
              </div>
              {minorHoldings === "deactivate" && (
                <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
              )}
            </div>
          </div>
        )}

        {/* minor hodlings filter sends */}

        {/* TIER 3 filter starts */}
        {majorFilter !== "holdings" && minorFilter === "tierThree" && (
          <div className="flex w-full gap-7 mt-3">
            <div
              className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
              onClick={() => handleTierThreeFilterChange("pending")}
            >
              <div className="flex gap-2 items-center">
                <p
                  className={`text-[16px] ${
                    tierThreeFilter === "pending"
                      ? "text-[#F78105]"
                      : "text-[#828282]"
                  } font-[600]`}
                >
                  Pending
                </p>
                <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                  <p className="text-[12px] text-[#A86500] font-[500]">122</p>
                </span>
              </div>
              {tierThreeFilter === "pending" && (
                <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
              )}
            </div>
            <div
              className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
              onClick={() => handleTierThreeFilterChange("approved")}
            >
              <div className="flex gap-2 items-center">
                <p
                  className={`text-[16px] ${
                    tierThreeFilter === "approved"
                      ? "text-[#F78105]"
                      : "text-[#828282]"
                  } font-[600]`}
                >
                  Approved
                </p>
                <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                  <p className="text-[12px] text-[#A86500] font-[500]">122</p>
                </span>
              </div>
              {tierThreeFilter === "approved" && (
                <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
              )}
            </div>
            <div
              className="flex items-center flex-col gap-2 cursor-pointer  min-h-[3rem]"
              onClick={() => handleTierThreeFilterChange("rejected")}
            >
              <div className="flex gap-2 items-center">
                <p
                  className={`text-[16px] ${
                    tierThreeFilter === "rejected"
                      ? "text-[#F78105]"
                      : "text-[#828282]"
                  } font-[600]`}
                >
                  Rejected
                </p>
                <span className="py-1 px-2 bg-[#FFEFD6] rounded-md">
                  <p className="text-[12px] text-[#A86500] font-[500]">122</p>
                </span>
              </div>
              {tierThreeFilter === "rejected" && (
                <div className="w-full h-1 rounded-tl-lg rounded-tr-lg bg-[#F78105]" />
              )}
            </div>
          </div>
        )}
        <Divider
          sx={{
            marginTop: "-30px",
            mb: "1rem",
            width: "100%",
          }}
        />
        {/* TIER 3 filter ends */}

        {/* default table */}
        {majorFilter !== "holdings" && minorFilter !== "tierThree" && (
          <DefaultTable />
        )}
        {/* default table ends */}
        {/* table two table */}
        {(majorFilter === "holdings" || minorFilter === "tierThree") && (
          <TableTwo />
        )}
        {/*  table two ends */}
      </div>
    </div>
  );
};

export default Compliance;
