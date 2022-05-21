import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { setFilter } from "../../redux/todos";

const SearchInput = () => {
  const { filterParam } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <Box>
      <TextField
        id="standard-basic"
        value={filterParam}
        variant="standard"
        placeholder="Search todo"
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </Box>
  );
};

export default SearchInput;
