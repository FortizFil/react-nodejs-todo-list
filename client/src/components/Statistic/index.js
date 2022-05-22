import React from "react";
import { useSelector } from "react-redux";

import { Box, Typography } from "@mui/material";

const Statistic = () => {
  const { data } = useSelector((state) => state.todos);

  return (
    <Box>
      <Typography>All todos: {data.allTodos}</Typography>
      <Typography>Complete todos: {data.completeTodos}</Typography>
    </Box>
  );
};

export default Statistic;
