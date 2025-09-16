import React, { useState, useEffect, useContext } from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { Box } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
const Arrow = ({ children, disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        right: "1%",
        opacity: disabled ? "0" : "1",
        userSelect: "none",
      }}
    >
      {children}
    </button>
  );
};

export function LeftArrow() {
  const { isFirstItemVisible, scrollPrev, visibleItemsWithoutSeparators } =
    useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !visibleItemsWithoutSeparators.length && isFirstItemVisible
  );

  useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollPrev()}>
      <Box
        sx={{
          width: "40px",
          height: "40px",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          borderRadius: "8px",
          mx: "10px",
          justifyContent: "center",
          border: "1px solid #E0E0E0",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Adjust the alpha value for darkness
        }}
      >
        <ArrowBackIosRoundedIcon
          sx={{
            color: "#828282",
          }}
        />
      </Box>
    </Arrow>
  );
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleItemsWithoutSeparators } =
    useContext(VisibilityContext);

  const [disabled, setDisabled] = useState(
    !visibleItemsWithoutSeparators.length && isLastItemVisible
  );

  useEffect(() => {
    if (visibleItemsWithoutSeparators.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()}>
      <Box
        sx={{
          width: "40px",
          height: "40px",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          borderRadius: "8px",
          mx: "10px",
          justifyContent: "center",
          border: "1px solid #E0E0E0",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Adjust the alpha value for darkness
        }}
      >
        <ArrowForwardIosRoundedIcon
          sx={{
            color: "#828282",
          }}
        />
      </Box>
    </Arrow>
  );
}
