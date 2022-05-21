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
import { makeStyles } from "@mui/styles";

import { sagaActions } from "../../redux/saga/sagaAcions";

const useStyles = makeStyles((theme) => ({
  listWrapper: {
    display: "block",
    width: "700px",
    "&.css-h4y409-MuiList-root": { marginLeft: "auto", marginRight: "auto" },
  },
}));

const TodosTable = () => {
  const { data, isLoading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_TODOS });
  }, []);

  return (
    <Box>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <List className={classes.listWrapper}>
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
                    sx={{ textAlign: "left" }}
                    primary={`${el.name}`}
                  />
                  <ListItemText
                    sx={{ textAlign: "center" }}
                    primary={`${el.description}`}
                  />
                  <ListItemText
                    sx={{ textAlign: "center" }}
                    primary={`${el.status}`}
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
