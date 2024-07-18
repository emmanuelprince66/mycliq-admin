import React from "react";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import { Button } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

const PageNumberPagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  return (
    <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
          style={{
            padding: "8px",
            borderRadius: "4px",
            fontSize: "14px",
            background: currentPage === pageNumber ? "#FEF2E6" : "transparent",
            color: currentPage === pageNumber ? "#F78105" : "#667085",
            fontWeight: currentPage === pageNumber ? "bold" : "normal",
          }}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex items-center w-full justify-between mt-5">
      <Button
        onClick={handleBack}
        disabled={currentPage === 1}
        sx={{
          background: "transparent",
          borderRadius: "8px",
          width: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "15px",
          border: "1px solid #5E5E5E",
          color: "#5E5E5E",
          "&:hover": {
            backgroundColor: "#FAFAFA",
          },
          textTransform: "capitalize",
          fontWeight: "400",
        }}
      >
        <KeyboardBackspaceRoundedIcon />
        Back
      </Button>
      {/* <span style={{ margin: "0 8px" }}>
        Page {currentPage} of {totalPages}
      </span> */}
      <PageNumberPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

      <Button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        sx={{
          background: "transparent",
          borderRadius: "8px",
          width: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "15px",
          border: "1px solid #5E5E5E",
          color: "#5E5E5E",
          "&:hover": {
            backgroundColor: "#FAFAFA",
          },
          textTransform: "capitalize",
          fontWeight: "400",
        }}
      >
        Next
        <EastRoundedIcon />
      </Button>
    </div>
  );
};

export default CustomPagination;
