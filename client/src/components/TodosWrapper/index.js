import React from "react";

import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

import TodosTable from "../TodosTable";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const TodosWrapper = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <TodosTable />
    </Box>
  );
};

export default TodosWrapper;
