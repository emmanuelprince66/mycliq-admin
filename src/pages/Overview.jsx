import React from "react";
import TableCom from "../components/TableCom";
import { Box, Card, Typography, Grid, Button , Skeleton} from "@mui/material";
import SelectDate from "../components/SelectDate";
import purple from "../assets/images/admin/purple.svg";
import blue from "../assets/images/admin/blue.svg";
import { styled } from "@mui/material/styles";
import fdown from "../assets/fdown.svg";
import upcolor from "../assets/images/admin/upcolor.svg";
import percent from "../assets/images/admin/percent.svg";
import side from "../assets/images/admin/side.svg";
import { useMutation, useQuery } from "@tanstack/react-query";
import FormattedPrice from "../components/FormattedPrice";
import brown from "../assets/images/admin/brown.svg";
import divideNew from "../assets/images/admin/divide-new.svg";
import profileNew from "../assets/images/admin/profile-new.svg";
import green from "../assets/images/admin/green.svg";
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";
import CircularProgress from "@mui/material/CircularProgress";
import { AuthAxios } from "../helpers/axiosInstance";
import { useSelector } from "react-redux";
import { formatToIsoDateStr } from "../utils/formatIsoDateString";


const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  border: "1px solid #E0E0E0",
  color: theme.palette.text.secondary,
  borderRadius: "8px",
  maxHeight: "100%",
  width: "100%",
}));
export const Overview = () => {
  const { selectedDates } = useSelector((state) => state);

  const startDate = formatToIsoDateStr(selectedDates?.startDate)
  const endDate = formatToIsoDateStr(selectedDates?.endDate)

  const {
    data: overviewData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["overviewData", startDate, endDate],
    queryFn: async () => {
      try {
        const response = await AuthAxios.get(`/admin/analytics/overview`, {
          params: {
            startDate: startDate,
            endDate:endDate,
          },
        });
        console.log(response);
        return response?.data?.data;
      } catch (error) {
        throw new Error("Failed to fetch customer data");
      }
    },
    onSuccess: (data) => {},
    staleTime: 5000, // Cache data for 5 seconds
  });


  console.log(overviewData)
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
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                   {isLoading ? 
                <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                :
                <FormattedPrice amount={overviewData?.transactions?.totalInwardsSum || 0} />
                }
              </Typography>
            </Box>
            <Box className="flex flex-col gap-1 items-start">
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
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                   {isLoading ? 
                <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                :
                <FormattedPrice amount={overviewData?.transactions?.filterInwardsSum || 0} />
                }
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
                  fontWeight: "500",
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
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                       {isLoading ? 
                <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                :
                <FormattedPrice amount={overviewData?.transactions?.totalOutwardsSum || 0} />
                }
              </Typography>
            </Box>
            <Box className="flex flex-col gap-1 items-start">
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
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                        {isLoading ? 
                <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                :
                <FormattedPrice amount={overviewData?.transactions?.filterOutwardsSum || 0} />
                }
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
              Total Customers
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
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                    {isLoading ? 
                <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                :
                <FormattedPrice amount={overviewData?.users?.totalUserCount || 0} />
                }
              </Typography>
            </Box>
            <Box className="flex flex-col gap-1 items-start">
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
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                        {isLoading ? 
                <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                :
                <FormattedPrice amount={overviewData?.users?.filterUserCount || 0} />
                }
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
              Total Merchants{" "}
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
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                         {isLoading ? 
                <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                :
                <FormattedPrice amount={overviewData?.merchants?.totalMerchantCount || 0} />
                }
              </Typography>
            </Box>
            <Box className="flex flex-col gap-1 items-start">
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
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                        {isLoading ? 
                <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                :
                <FormattedPrice amount={overviewData?.transactions?.filterMerchantCount || 0} />
                }
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
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                        {isLoading ? 
                <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                :
                <FormattedPrice amount={overviewData?.commissions?.totalInwardsSum || 0} />
                }
              </Typography>
            </Box>
            <Box className="flex flex-col gap-1 items-start">
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
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#000",
                }}
              >
                      {isLoading ? 
                <CircularProgress size="0.6rem" sx={{ color: "#DC0019" }} />
                :
                <FormattedPrice amount={overviewData?.transactions?.filterInwardsSum || 0} />
                }
              </Typography>
            </Box>
          </Box>
        </Card>
      </Box>
      {/*  */}

      <Box sx={{ flexGrow: "1", my: "10px" }}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Item>
              <Box sx={{ alignItems: "start" }}>
                <Typography
                  sx={{
                    fontWeight: "500",
                    fontSize: "20px",
                    color: "#1E1E1E",
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
            <Box sx={{ flexGrow: "1", flexDirection: "column" }}>
              <Item className="mb-4">
                <Box sx={{ alignItems: "start", pt: "10px", px: "10px" }}>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "20px",
                      color: "#1E1E1E",
                      py: "10px",
                    }}
                  >
                    Total Users Status
                  </Typography>
                </Box>
                <div className="w-full  p-3 items-start">
                  <div className="flex items-start flex-col gap-2">
                    <div className="flex items-center gap-2 w-full">
                      <div className="w-[24px] h-[8px] bg-[#27AE60]"></div>

                      <div className="flex items-center justify-between w-full">
                        <p className="text-[#828282] font-normal text-[14px]">
                          Total Active Users 
                          {isLoading ? 
                <CircularProgress size="0.3rem" sx={{ color: "#DC0019" }} />
                :
                `[${overviewData?.users?.activeUserCount || 0}]`
                }
                        </p>
                        <span className="text-[#F78105] cursor-pointer text-[12px] hover:text-[#333333]">
                          View More
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full">
                      <div className="w-[24px] h-[8px] bg-[#E52929]"></div>

                      <div className="flex items-center justify-between w-full">
                        <p className="text-[#828282] font-normal text-[14px]">
                          Total Inactive Users 
                          {isLoading ? 
                <CircularProgress size="0.3rem" sx={{ color: "#DC0019" }} />
                :
                `[${overviewData?.users?.inactiveUserCount || 0}]`
                }
                        </p>
                        <span className="text-[#F78105] cursor-pointer text-[12px] hover:text-[#333333]">
                          View More
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full">
                      <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                      <div className="flex items-center justify-between w-full">
                        <p className="text-[#828282] font-normal text-[14px]">
                          Total Suspended Users 
                          {isLoading ? 
                <CircularProgress size="0.3rem" sx={{ color: "#DC0019" }} />
                :
                `[${overviewData?.users?.suspendedUserCount || 0}]`
                }
                        </p>
                        <span className="text-[#F78105] cursor-pointer text-[12px] hover:text-[#333333]">
                          View More
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                      <div className="w-[24px] h-[8px] bg-[#1367D8]"></div>

                      <div className="flex items-center justify-between w-full">
                        <p className="text-[#828282] font-normal text-[14px]">
                          Total Reactivated Users [234]
                        </p>
                        <span className="text-[#F78105] cursor-pointer text-[12px] hover:text-[#333333]">
                          View More
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                      <div className="w-[24px] h-[8px] bg-black"></div>

                      <div className="flex items-center justify-between w-full">
                        <p className="text-[#828282] font-normal text-[14px]">
                          Total Closed Users [234]
                        </p>
                        <span className="text-[#F78105]  cursor-pointer text-[12px] hover:text-[#333333]">
                          View More
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Item>
              <Item>
                <Box sx={{ alignItems: "start", pt: "10px", px: "10px" }}>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: "20px",
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
                        Total Inward Transfer
                        {isLoading ? 
                <CircularProgress size="0.3rem" sx={{ color: "#DC0019" }} />
                :
                `[${overviewData?.transactions?.totalInwardsCount || 0}]`
                }
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-[24px] h-[8px] bg-[#E52929]"></div>

                      <p className="text-[#828282] font-normal text-[14px]">
                        Total Outward Transfer 
                        {isLoading ? 
                <CircularProgress size="0.3rem" sx={{ color: "#DC0019" }} />
                :
                `[${overviewData?.transactions?.totalOutwardsCount || 0}]`
                }
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-[24px] h-[8px] bg-[#BD00FF]"></div>

                      <p className="text-[#828282] font-normal text-[14px]">
                        Total Wallet To Wallet 
                        {isLoading ? 
                <CircularProgress size="0.3rem" sx={{ color: "#DC0019" }} />
                :
                `[${overviewData?.transactions?.totalWalletCount || 0}]`
                }
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-[24px] h-[8px] bg-[#1367D8]"></div>

                      <p className="text-[#828282] font-normal text-[14px]">
                        Total Mycliq 
                        {isLoading ? 
                <CircularProgress size="0.3rem" sx={{ color: "#DC0019" }} />
                :
                `[${overviewData?.transactions?.totalCliqPayCount || 0}]`
                }
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-[24px] h-[8px] bg-pink-400"></div>

                      <p className="text-[#828282] font-normal text-[14px]">
                        Total Soft POS 
                        {isLoading ? 
                <CircularProgress size="0.3rem" sx={{ color: "#DC0019" }} />
                :
                `[${overviewData?.transactions?.totalTerminalCount || 0}]`
                }
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-[24px] h-[8px] bg-red-500"></div>

                      <p className="text-[#828282] font-normal text-[14px]">
                        Total Bills 
                        {isLoading ? 
                <CircularProgress size="0.3rem" sx={{ color: "#DC0019" }} />
                :
                `[${overviewData?.transactions?.totalBillsCount || 0}]`
                }
                      </p>
                    </div>
                  </div>
                </div>
              </Item>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* chart */}
    </Box>
  );
};
