import React from "react";
import { Modal } from "@mui/material";
import { useState } from "react";
import { Padding } from "@mui/icons-material";

const CustomModal = ({ children, open, closeModal, cwidth }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    background: "white",
    maxHeight: "95%",
    padding: "1rem",
    overflowY: "auto",
    width: cwidth ? cwidth : "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "12px",
    bgcolor: "background.paper",
  };
  return (
    <>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        PaperProps={{
          sx: {
            border: "none", // Remove the border
            boxShadow: "none", // Remove the box shadow
          },
        }}
      >
        <div style={style}>{children}</div>
      </Modal>
    </>
  );
};

export default CustomModal;
