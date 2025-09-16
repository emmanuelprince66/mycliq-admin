import React from "react";
import SelectDate from "../../components/SelectDate";
import { Grid, Card, Skeleton } from "@mui/material";
import pTwo from "../../assets/images/admin/profit/p-2.svg";
import pThree from "../../assets/images/admin/profit/p-3.svg";
import pFour from "../../assets/images/admin/profit/p-4.svg";
import pFive from "../../assets/images/admin/profit/p-5.svg";
import pSix from "../../assets/images/admin/profit/p-6.svg";
import pSeven from "../../assets/images/admin/profit/p-7.svg";
import pEight from "../../assets/images/admin/profit/p-8.svg";
import pNine from "../../assets/images/admin/profit/p-9.svg";
import FormattedPrice from "../../components/FormattedPrice";
import { useMutation, useQuery } from "@tanstack/react-query";
import AuthAxios from "../../helpers/axiosInstance";

const Profitability = () => {
  const {
    data: profitabilityData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["profitabilityData"],
    queryFn: async () => {
      try {
        const response = await AuthAxios.get(`/admin/profitability`);
        console.log("res", response);
        return response?.data?.data;
      } catch (error) {
        if (error?.response?.data?.code === 401) {
        }
        throw new Error("Failed to fetch customer data");
      }
    },
    onSuccess: (data) => {},
    staleTime: 5000, // Cache data for 5 seconds
  });

  console.log("isLoading", isLoading);

  console.log("profitabilityData--3", profitabilityData);
  const CustomCard = ({ image, textOne, textTwo }) => {
    return (
      <>
        <Card className="w-full bg-white p-4">
          <div className="w-full flex-col flex items-start gap-2">
            <img src={image} alt="icon" className="mb-2" />

            <p className="font-[500] text-[14px] text-[#4F4F4F]">{textOne}</p>
            <p className="font-[500] text-[#1E1E1E] text-[15px]">
              <FormattedPrice amount={textTwo} />
            </p>
          </div>
        </Card>
      </>
    );
  };

  return (
    <div className="w-full flex flex-col items-start  justify-center gap-5">
      <div className="flex justify-end w-full">
        <SelectDate />
      </div>

      <div className="w-full">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {isLoading ? (
              <Skeleton variant="rounded" width="100%" height={"100%"} />
            ) : (
              <CustomCard
                image={pTwo}
                textOne="Profit from Wallet to Wallet"
                textTwo={` ${profitabilityData?.wallet || 0} `}
              />
            )}
          </Grid>
          <Grid item xs={6}>
            {isLoading ? (
              <Skeleton variant="rounded" width="100%" height={"100%"} />
            ) : (
              <CustomCard
                image={pThree}
                textOne="Profit from CliqPay"
                textTwo={` ${profitabilityData?.cliq_pay || 0} `}
              />
            )}
          </Grid>
          <Grid item xs={6}>
            {isLoading ? (
              <Skeleton variant="rounded" width="100%" height={"100%"} />
            ) : (
              <CustomCard
                image={pFour}
                textOne="Profit from Ticketing Fee"
                textTwo={` ${profitabilityData?.ticket || 0} `}
              />
            )}
          </Grid>
          <Grid item xs={6}>
            {isLoading ? (
              <Skeleton variant="rounded" width="100%" height={"100%"} />
            ) : (
              <CustomCard
                image={pFive}
                textOne="Profit from Nip"
                textTwo={` ${profitabilityData?.nip || 0} `}
              />
            )}
          </Grid>
          <Grid item xs={6}>
            {isLoading ? (
              <Skeleton variant="rounded" width="100%" height={"100%"} />
            ) : (
              <CustomCard
                image={pSix}
                textOne="Profit from Merchant Commission"
                textTwo={` ${profitabilityData?.merchant || 0} `}
              />
            )}
          </Grid>
          <Grid item xs={6}>
            {isLoading ? (
              <Skeleton variant="rounded" width="100%" height={"100%"} />
            ) : (
              <CustomCard
                image={pSeven}
                textOne="Profit from Airtime/Data"
                textTwo={` ${profitabilityData?.airtime_data || 0} `}
              />
            )}
          </Grid>
          <Grid item xs={6}>
            {isLoading ? (
              <Skeleton variant="rounded" width="100%" height={"100%"} />
            ) : (
              <CustomCard
                image={pEight}
                textOne="Profit from Bills Tv/Electricity"
                textTwo={` ${profitabilityData?.bills_tv || 0} `}
              />
            )}
          </Grid>
          <Grid item xs={6}>
            {isLoading ? (
              <Skeleton variant="rounded" width="100%" height={"100%"} />
            ) : (
              <CustomCard
                image={pNine}
                textOne="Profit from Association Fee"
                textTwo={` ${profitabilityData?.association || 0} `}
              />
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Profitability;
