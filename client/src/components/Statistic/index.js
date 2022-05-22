import React from "react";
import { useSelector } from "react-redux";

import { Box, Typography } from "@mui/material";

const Statistic = () => {
  const { data } = useSelector((state) => state.todos);

  return (
    <Box>
      <Typography sx={{ fontWeight: "bold" }}>
        All todos: {data?.allTodos}
      </Typography>
      <Typography sx={{ fontWeight: "bold" }}>
        Complete todos: {data?.completeTodos}
      </Typography>
    </Box>
  );
};

export default Statistic;
