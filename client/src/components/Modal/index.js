import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddTodoForm from "../Forms/AddOrEditTodoForm";

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

const DefaultModal = ({ open, handleClose, createTodo, editTodo }) => {
  const { modalType } = useSelector((state) => state.todos);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {modalType === "create" ? (
          <AddTodoForm handleClose={handleClose} submitForm={createTodo} />
        ) : (
          <AddTodoForm handleClose={handleClose} submitForm={editTodo} />
        )}
      </Box>
    </Modal>
  );
};

export default DefaultModal;
