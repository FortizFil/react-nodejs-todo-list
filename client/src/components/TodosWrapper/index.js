import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

import TodosTable from "../TodosTable";
import DefaultModal from "../Modal";
import { addTodo } from "../../Api";
import { TODO_STATUS } from "../../Constants";
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
  const classes = useStyles();
  const dispatch = useDispatch();

  const closeModal = () => setOpenModal(false);

  const createTodo = async (variables) => {
    const res = await addTodo(variables, TODO_STATUS[0].value);
    if (res.status === "success") {
      dispatch({ type: sagaActions.FETCH_TODOS });
      closeModal();
    }
  };

  return (
    <>
      <Box className={classes.wrapper} onClick={() => setOpenModal(true)}>
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
          >
            Add new todo
          </Button>
        </Box>
        <TodosTable />
      </Box>
      <DefaultModal
        open={openModal}
        handleClose={closeModal}
        onSubmit={createTodo}
      />
    </>
  );
};

export default TodosWrapper;
