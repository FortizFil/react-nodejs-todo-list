import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import TodosTable from "../TodosTable";
import DefaultModal from "../Modal";
import { addTodo, changeTodo } from "../../Api";
import { TODO_STATUS } from "../../Constants";
import { setModalType, setCurrentTodo } from "../../redux/todos";
import { sagaActions } from "../../redux/saga/sagaAcions";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const TodosWrapper = () => {
  const [openModal, setOpenModal] = useState(false);
  const { currentTodo } = useSelector((state) => state.todos);
  const classes = useStyles();
  const dispatch = useDispatch();

  const closeModal = () => {
    setOpenModal(false);
    dispatch(setCurrentTodo(null));
    dispatch(setModalType(""));
  };

  const createTodo = async (variables) => {
    const res = await addTodo(variables, TODO_STATUS[0].value);
    if (res.status === "success") {
      dispatch({ type: sagaActions.FETCH_TODOS });
      closeModal();
      dispatch(setModalType(""));
    }
  };

  const editTodo = async (variables) => {
    const res = await changeTodo(variables, currentTodo);
    if (res.status === "success") {
      dispatch({ type: sagaActions.FETCH_TODOS });
      closeModal();
      dispatch(setCurrentTodo(null));
      dispatch(setModalType(""));
    }
  };

  const handleClick = () => {
    setOpenModal(true);
    dispatch(setModalType("create"));
  };

  return (
    <>
      <Box className={classes.wrapper}>
        <Box
          sx={{
            width: "80%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "15px",
          }}
        >
          <Button
            variant="contained"
            sx={{ display: "block", marginLeft: "auto" }}
            onClick={handleClick}
          >
            Add new todo
          </Button>
        </Box>
        <TodosTable setOpenModal={setOpenModal} />
      </Box>
      <DefaultModal
        open={openModal}
        handleClose={closeModal}
        createTodo={createTodo}
        editTodo={editTodo}
      />
    </>
  );
};

export default TodosWrapper;
