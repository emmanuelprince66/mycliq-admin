import React from "react";
import TableCom from "../components/TableCom";
import { Box, Card, Typography, Grid } from "@mui/material";
import SelectDate from "../components/SelectDate";
import purple from "../assets/images/admin/purple.svg";
import blue from "../assets/images/admin/blue.svg";
import { styled } from "@mui/material/styles";
import fdown from "../assets/fdown.svg";
import upcolor from "../assets/images/admin/upcolor.svg";
import percent from "../assets/images/admin/percent.svg";
import side from "../assets/images/admin/side.svg";

import FormattedPrice from "../components/FormattedPrice";
import brown from "../assets/images/admin/brown.svg";
import divideNew from "../assets/images/admin/divide-new.svg";
import profileNew from "../assets/images/admin/profile-new.svg";
import green from "../assets/images/admin/green.svg";
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  border: "1px solid #E0E0E0",
  color: theme.palette.text.secondary,
  borderRadius: "8px",
  maxHeight: "100%",
}));
export const Overview = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          marginLeft: "auto",
          justifyContent: "flex-end",
          width: "fit-content",
          gap: "1em",
          alignItems: "center",
          mb: "1rem",
        }}
      >
        <Box>
          <SelectDate />
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          gap: "0.5rem",
          mb: "1rem",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            // width: "356px",
            width: "100%",
            gap: "0.8rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                width: "28px",
                height: "28px",
              }}
            >
              <img src={fdown} className="fd" alt="f-down" />
            </Box>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "14px",
                color: "#4F4F4F",
              }}
            >
              Total Inward
            </Typography>
          </Box>

          <Box className="flex flex-col items-start gap-1 w-full">
            <Box className="flex flex-col gap-1 items-start">
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#4F4F4F",
                }}
              >
                All-Time:
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#000",
                }}
              >
                <FormattedPrice amount={3000000} />
              </Typography>
            </Box>
            <Box className="flex flex-col gap-2 items-start">
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#4F4F4F",
                }}
              >
                By-Filter:
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#000",
                }}
              >
                <FormattedPrice amount={3000000} />
              </Typography>
            </Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            // width: "356px",
            width: "100%",
            gap: "0.8rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <Box
                sx={{
                  width: "28px",
                  height: "28px",
                }}
              >
                <img src={upcolor} className="fd" alt="f-down" />
              </Box>
              <Typography
                sx={{
                  fomtWeight: "500",
                  fontSize: "14px",
                  color: "#4F4F4F",
                }}
              >
                Total Outward
              </Typography>
            </Box>
          </Box>

          <Box className="flex flex-col items-start gap-1 w-full">
            <Box className="flex flex-col gap-1 items-start">
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#4F4F4F",
                }}
              >
                All-Time:
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#000",
                }}
              >
                <FormattedPrice amount={3000000} />
              </Typography>
            </Box>
            <Box className="flex flex-col gap-2 items-start">
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#4F4F4F",
                }}
              >
                By-Filter:
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#000",
                }}
              >
                <FormattedPrice amount={3000000} />
              </Typography>
            </Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            // width: "356px",
            width: "100%",
            gap: "0.8rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                width: "28px",
                height: "28px",
              }}
            >
              <img src={profileNew} className="fd" alt="f-down" />
            </Box>
            <Typography
              sx={{
                fomtWeight: "500",
                fontSize: "14px",
                color: "#4F4F4F",
              }}
            >
              Total Merchants
            </Typography>
          </Box>

          <Box className="flex flex-col items-start gap-1 w-full">
            <Box className="flex flex-col gap-1 items-start">
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#4F4F4F",
                }}
              >
                All-Time:
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#000",
                }}
              >
                <FormattedPrice amount={3000000} />
              </Typography>
            </Box>
            <Box className="flex flex-col gap-2 items-start">
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#4F4F4F",
                }}
              >
                By-Filter:
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#000",
                }}
              >
                <FormattedPrice amount={3000000} />
              </Typography>
            </Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            // width: "356px",
            width: "100%",
            gap: "0.8rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                width: "28px",
                height: "28px",
              }}
            >
              <img src={profileNew} className="fd" alt="f-down" />
            </Box>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "14px",
                color: "#4F4F4F",
              }}
            >
              Total Customers{" "}
            </Typography>
          </Box>
          <Box className="flex flex-col items-start gap-1 w-full">
            <Box className="flex flex-col gap-1 items-start">
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#4F4F4F",
                }}
              >
                All-Time:
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#000",
                }}
              >
                <FormattedPrice amount={3000000} />
              </Typography>
            </Box>
            <Box className="flex flex-col gap-2 items-start">
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#4F4F4F",
                }}
              >
                By-Filter:
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#000",
                }}
              >
                <FormattedPrice amount={3000000} />
              </Typography>
            </Box>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            // width: "356px",
            width: "100%",
            gap: "0.8rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                width: "28px",
                height: "28px",
              }}
            >
              <img src={divideNew} className="fd" alt="f-down" />
            </Box>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: "14px",
                color: "#4F4F4F",
              }}
            >
              Total Commission{" "}
            </Typography>
          </Box>
          <Box className="flex flex-col items-start gap-1 w-full">
            <Box className="flex flex-col gap-1 items-start">
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#4F4F4F",
                }}
              >
                All-Time:
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#000",
                }}
              >
                <FormattedPrice amount={3000000} />
              </Typography>
            </Box>
            <Box className="flex flex-col gap-2 items-start">
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "#4F4F4F",
                }}
              >
                By-Filter:
              </Typography>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "#000",
                }}
              >
                <FormattedPrice amount={3000000} />
              </Typography>
            </Box>
          </Box>
        </Card>
      </Box>
      {/*  */}

      <Box sx={{ flexGrow: "1", my: "10px" }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item sx={{ px: "1rem", pb: "20px", height: "100%" }}>
              <Box sx={{ alignItems: "start" }}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#4F4F4F",
                    py: "10px",
                  }}
                >
                  Total Customers Status
                </Typography>
              </Box>
              <div className="w-full flex gap-5 items-start">
                <div className="flex items-start flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-[24px] h-[8px] bg-[#27AE60]"></div>

                    <p className="text-[#828282] font-normal text-[14px]">
                      Active Customers [234]
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-[24px] h-[8px] bg-[#E52929]"></div>

                    <p className="text-[#828282] font-normal text-[14px]">
                      Inactive Customers [234]
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                    <p className="text-[#828282] font-normal text-[14px]">
                      Suspended Customers [234]
                    </p>
                  </div>
                </div>
                <div className="flex items-start flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-[24px] h-[8px] bg-[#1367D8]"></div>

                    <p className="text-[#828282] font-normal text-[14px]">
                      Active Customers [234]
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-[24px] h-[8px] bg-black"></div>

                    <p className="text-[#828282] font-normal text-[14px]">
                      Inactive Customers [234]
                    </p>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Box sx={{ alignItems: "start", pt: "10px", px: "10px" }}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#4F4F4F",
                    py: "10px",
                  }}
                >
                  Total Merchants Status
                </Typography>
              </Box>
              <div className="w-full flex gap-5 p-3 items-start">
                <div className="flex items-start flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-[24px] h-[8px] bg-[#27AE60]"></div>

                    <p className="text-[#828282] font-normal text-[14px]">
                      Active Merchants [234]
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-[24px] h-[8px] bg-[#E52929]"></div>

                    <p className="text-[#828282] font-normal text-[14px]">
                      Inactive Merchants [234]
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                    <p className="text-[#828282] font-normal text-[14px]">
                      Suspended Merchants [234]
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[24px] h-[8px] bg-[#1367D8]"></div>

                    <p className="text-[#828282] font-normal text-[14px]">
                      Reactivated Merchants [234]
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[24px] h-[8px] bg-black"></div>

                    <p className="text-[#828282] font-normal text-[14px]">
                      Closed Merchants [234]
                    </p>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>

      {/* chart */}

      <Box sx={{ flexGrow: "1" }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>
              <Box sx={{ alignItems: "start" }}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#4F4F4F",
                    p: "20px",
                  }}
                >
                  Revenue Overview
                </Typography>
              </Box>
              <LineChart />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Box sx={{ alignItems: "start", pt: "10px", px: "10px" }}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#4F4F4F",
                    py: "10px",
                  }}
                >
                  Total Transaction Insight
                </Typography>
              </Box>
              <div className="w-full flex gap-5 p-3 items-start">
                <div className="flex items-start flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-[24px] h-[8px] bg-[#27AE60]"></div>

                    <p className="text-[#828282] font-normal text-[14px]">
                      Active Merchants [234]
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-[24px] h-[8px] bg-[#E52929]"></div>

                    <p className="text-[#828282] font-normal text-[14px]">
                      Inactive Merchants [234]
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                    <p className="text-[#828282] font-normal text-[14px]">
                      Suspended Merchants [234]
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[24px] h-[8px] bg-[#1367D8]"></div>

                    <p className="text-[#828282] font-normal text-[14px]">
                      Reactivated Merchants [234]
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-[24px] h-[8px] bg-black"></div>

                    <p className="text-[#828282] font-normal text-[14px]">
                      Closed Merchants [234]
                    </p>
                  </div>
                </div>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12}>
            {/* <Item>big</Item> */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
