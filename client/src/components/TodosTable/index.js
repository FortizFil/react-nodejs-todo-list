import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box, CircularProgress } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ClearIcon from "@mui/icons-material/Clear";
import { makeStyles } from "@mui/styles";

import { setCurrentTodo, setModalType } from "../../redux/todos";
import { sagaActions } from "../../redux/saga/sagaAcions";

const useStyles = makeStyles((theme) => ({
  listWrapper: {
    display: "block",
    width: "920px",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const columns = [
  { id: "name", label: "Name", minWidth: 200 },
  { id: "description", label: "Description", minWidth: 450 },
  {
    id: "status",
    label: "Status",
    minWidth: 100,
  },
  {
    id: "action",
    label: "Action",
    minWidth: 10,
  },
];

const TodosTable = ({ setOpenModal }) => {
  const { data, isLoading } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch({ type: sagaActions.FETCH_TODOS });
  }, []);

  const handleClick = (row) => {
    dispatch(setCurrentTodo(row));
    dispatch(setModalType("edit"));
    setOpenModal(true);
  };

  const handleRemove = (row) => {
    dispatch(setCurrentTodo(row));
    dispatch(setModalType("delete"));
    setOpenModal(true);
  };

  return (
    <Box>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Paper className={classes.listWrapper}>
            <TableContainer>
              <Table sx={{ width: 800 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.result.map((row) => (
                    <TableRow key={row._id}>
                      <TableCell
                        style={{ cursor: "pointer" }}
                        onClick={() => handleClick(row)}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        style={{ cursor: "pointer" }}
                        onClick={() => handleClick(row)}
                      >
                        {row.description}
                      </TableCell>
                      <TableCell
                        style={{ cursor: "pointer" }}
                        onClick={() => handleClick(row)}
                      >
                        {row.status}
                      </TableCell>
                      <TableCell>
                        <ClearIcon
                          style={{ cursor: "pointer" }}
                          onClick={() => handleRemove(row)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </>
      )}
    </Box>
  );
};

export default TodosTable;
