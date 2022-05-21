import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import TodosTable from "../TodosTable";
import DefaultModal from "../Modal";
import SearchInput from "../SearchInput";
import { addTodo, changeTodo, removeTodo } from "../../Api";
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
    const res = await addTodo(variables);
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

  const deleteTodo = async () => {
    const res = await removeTodo(currentTodo);
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
            width: "60%",
            display: "flex",
            marginLeft: "auto",
            marginRight: "auto",
            padding: "15px",
            justifyContent: "space-between",
          }}
        >
          <SearchInput />
          <Button variant="contained" onClick={handleClick}>
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
        deleteTodo={deleteTodo}
      />
    </>
  );
};

export default TodosWrapper;
