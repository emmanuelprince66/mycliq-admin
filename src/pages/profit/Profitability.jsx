import React from "react";
import SelectDate from "../../components/SelectDate";
import { Grid, Card } from "@mui/material";
import pTwo from "../../assets/images/admin/profit/p-2.svg";
import pThree from "../../assets/images/admin/profit/p-3.svg";
import pFour from "../../assets/images/admin/profit/p-4.svg";
import pFive from "../../assets/images/admin/profit/p-5.svg";
import pSix from "../../assets/images/admin/profit/p-6.svg";
import pSeven from "../../assets/images/admin/profit/p-7.svg";
import pEight from "../../assets/images/admin/profit/p-8.svg";
import pNine from "../../assets/images/admin/profit/p-9.svg";
import FormattedPrice from "../../components/FormattedPrice";

const Profitability = () => {
  const CustomCard = ({ image, textOne, textTwo }) => {
    return (
      <>
        <Card className="w-full bg-white p-4">
          <div className="w-full flex-col flex items-start gap-2">
            <img src={image} alt="icon" className="mb-2" />

            <p className="font-[500] text-[14px] text-[#4F4F4F]">{textOne}</p>
            <p className="font-[600] text-[#1E1E1E] text-[20px]">
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
            <CustomCard
              image={pTwo}
              textOne="Profit from Wallet to Wallet"
              textTwo={` ${557000 || 0} `}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomCard
              image={pThree}
              textOne="Profit from CliqPay"
              textTwo={` ${557000 || 0} `}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomCard
              image={pFour}
              textOne="Profit from Ticketing Fee"
              textTwo={` ${557000 || 0} `}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomCard
              image={pFive}
              textOne="Profit from Nip"
              textTwo={` ${557000 || 0} `}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomCard
              image={pSix}
              textOne="Profit from Merchant Commission"
              textTwo={` ${557000 || 0} `}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomCard
              image={pSeven}
              textOne="Profit from Airtime/Data"
              textTwo={` ${557000 || 0} `}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomCard
              image={pEight}
              textOne="Profit from Bills Tv/Electricity"
              textTwo={` ${557000 || 0} `}
            />
          </Grid>
          <Grid item xs={6}>
            <CustomCard
              image={pNine}
              textOne="Profit from Association Fee"
              textTwo={` ${557000 || 0} `}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Profitability;
