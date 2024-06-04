import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
} from "@mui/material";
import AssoBank from "./AssoBank";
import AssoContact from "./AssoContact";
import AssoIimage from "./AssoIimage";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import TranspoContact from "./TranspoContact";
import TranspoImage from "./TranspoImage";
import Cookies from "js-cookie";

import { toast, ToastContainer } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import closeIcon from "../assets/images/closeIcon.svg";
import successIcon from "../assets/successIcon.svg";
import info from "../assets/images/admin/info.svg";
import { BaseAxios } from "../helpers/axiosInstance";


import TranspoBank from "./TranspoBank";

const steps = ["Step 1", "Step 2"];
// const steps = ["Step 1", "Step 2", "Step 3"];

const Transportation = () => {
const token = Cookies.get("authToken")
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set()); // Step 1
  const [collectedData, setCollectedData] = useState({});
  const [resetForm, setResetForm] = useState(false);
  const [showSpinner , setShowSpinner] = useState(false)

  const CustomStepConnector = () => (
    <StepConnector
      sx={{
        borderTop: "1px solid #f4f4f4",
      }}
    />
  );
  const notifyError = (msg) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 6000, // Time in milliseconds
    });
  };
  // use mutation hook
  const registerTransportationMutation = useMutation({
    mutationFn: async (payLoad) => {
      try {
        const response = await BaseAxios({
          url: "/admin/merchant/onboard",
          method: "POST",
          data: payLoad,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        return response.data;
      } catch (error) {
        notifyError(error?.response?.data?.message);
        console.log(error);
        setShowSpinner(false);
        handleReset()
        throw new Error(error.response.data.message);
        // throw new Error(error.response.data.message);
      }
    },
    onSuccess: (data) => {
      console.log(data);
      setSuccess(true);
      setShowSpinner(false);
      handleReset();
      
    },
    onError: (error) => {
      console.log(error);
      setShowSpinner(false);
      handleReset();
      
    },
  });
  const handleNext = (data) => {
    const newData = { ...collectedData, ...data };
    setCollectedData(newData);

    setCompletedSteps((prev) => new Set(prev).add(activeStep)); // Step 2

    if (activeStep === steps.length - 1) {
      console.log("Final submission data:", newData);
      
      console.log(newData)
      registerTransportationMutation.mutate(newData)
      setShowSpinner(true)

      //   setResetForm(true);

    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCollectedData({});
    setCompletedSteps(new Set()); // Reset completed steps
    setResetForm(false);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <TranspoContact onSubmit={handleNext} />;
      case 1:
        return (
          <TranspoImage
            onSubmit={handleNext}
            handleBack={handleBack}
            showSpinner={showSpinner}
          />
        );
    //   case 2:
    //     return <TranspoBank onSubmit={handleNext} handleBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <Box className="p-5 w-full">
      <Typography
        sx={{
          color: "#1E1E1E",
          fontWeight: "500",
          fontSize: "14px",
          mb: "20px",
        }}
      >
        Register a New Transportation
      </Typography>

      <Box className=" w-[60%] mx-auto">
        <Stepper
          activeStep={activeStep}
          nonLinear
          connector={<CustomStepConnector />}
        >
          {steps.map((label, index) => (
            <Step
              key={label}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <StepLabel
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
                StepIconComponent={({ active, completed }) => (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "50px",
                      p: "3px",
                      background: completedSteps.has(index)
                        ? "#ff7f00"
                        : "#eee", // Change background based on completion
                      width: "30px",
                      height: "30px",
                      color: index === activeStep ? "#FF7F00" : "#fff",
                    }}
                  >
                    {completedSteps.has(index) ? (
                      <CheckRoundedIcon />
                    ) : (
                      index + 1
                    )}{" "}
                  </Box>
                )}
              >
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: completedSteps.has(index) ? "#FF7F00" : "inherit",
                  }}
                >
                  {label}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        {resetForm ? (
          <Box>
            <Typography>Form submitted successfully!</Typography>
            <Button onClick={handleReset}>Restart</Button>
          </Box>
        ) : (
          <>
            {getStepContent(activeStep)}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              {/* Next or Submit button is managed inside each step component */}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Transportation;
