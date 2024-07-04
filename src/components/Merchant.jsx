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
import BranchManagerForm from "./BranchManagerForm";
import CompanyInfoForm from "./CompanyInfoForm";
import BranchForm from "./BranchForm";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";

const steps = ["Step 1", "Step 2", "Step 3"];

const Merchant = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set()); // Step 1
  const [collectedData, setCollectedData] = useState({});
  const [resetForm, setResetForm] = useState(false);

  const CustomStepConnector = () => (
    <StepConnector
      sx={{
        borderTop: "1px solid #f4f4f4",
      }}
    />
  );

  const handleNext = (data) => {
    const newData = { ...collectedData, ...data };
    setCollectedData(newData);

    setCompletedSteps((prev) => new Set(prev).add(activeStep)); // Step 2

    if (activeStep === steps.length - 1) {
      console.log("Final submission data:", newData);
      setResetForm(true); // Set resetForm to true after final submission
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
        return <BranchManagerForm erForm onSubmit={handleNext} />;
      case 1:
        return <CompanyInfoForm onSubmit={handleNext} />;
      case 2:
        return <BranchForm onSubmit={handleNext} />;
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
        Register a New Merchant
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

export default Merchant;
