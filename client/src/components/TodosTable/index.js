import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  CircularProgress,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

import { sagaActions } from "../../redux/saga/sagaAcions";

const TodosTable = () => {
  const { data, isLoading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_TODOS });
  }, []);
  console.log(data);

  return (
    <Box>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <List>
          {data ? (
            data.result.map((el) => (
              <ListItem
                key={el._id}
                secondaryAction={
                  <IconButton edge="end" aria-label="comments">
                    <ClearIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton role={undefined} dense>
                  <ListItemText
                    sx={{ textAlign: "center" }}
                    primary={`Name: ${el.name}`}
                  />
                  <ListItemText
                    sx={{ textAlign: "center" }}
                    primary={`Description: ${el.description}`}
                  />
                  <ListItemText
                    sx={{ textAlign: "center" }}
                    primary={`Status: ${el.status}`}
                  />
                </ListItemButton>
              </ListItem>
            ))
          ) : (
            <ListItem sx={{ textAlign: "center" }}>
              <ListItemText primary={"No todos"} />
            </ListItem>
          )}
        </List>
      )}
    </Box>
  );
};

export default TodosTable;
