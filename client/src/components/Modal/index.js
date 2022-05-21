import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddTodoForm from "../Forms/AddTodoForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "600px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const DefaultModal = ({ open, handleClose, onSubmit }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <AddTodoForm handleClose={handleClose} submitForm={onSubmit} />
      </Box>
    </Modal>
  );
};

export default DefaultModal;
