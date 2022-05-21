import React from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddOrEditTodoForm from "../Forms/AddOrEditTodoForm";
import DeleteModal from "./DeleteModal";

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

const DefaultModal = ({
  open,
  handleClose,
  createTodo,
  editTodo,
  deleteTodo,
}) => {
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
          <AddOrEditTodoForm
            handleClose={handleClose}
            submitForm={createTodo}
          />
        ) : modalType === "edit" ? (
          <AddOrEditTodoForm
            handleClose={handleClose}
            submitForm={editTodo}
            edit
          />
        ) : (
          <DeleteModal handleClose={handleClose} submit={deleteTodo} />
        )}
      </Box>
    </Modal>
  );
};

export default DefaultModal;
