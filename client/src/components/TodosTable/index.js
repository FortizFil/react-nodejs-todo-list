import React, { useEffect, useState } from "react";
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
import TablePagination from "@mui/material/TablePagination";
import { makeStyles } from "@mui/styles";

import { setCurrentTodo, setModalType } from "../../redux/todos";
import { sagaActions } from "../../redux/saga/sagaAcions";

const useStyles = makeStyles((theme) => ({
  listWrapper: {
    display: "block",
    width: "950px",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const columns = [
  { id: "number", label: "#", minWidth: 10, align: "center" },
  { id: "name", label: "Name", minWidth: 200, align: "center" },
  { id: "description", label: "Description", minWidth: 430, align: "center" },
  {
    id: "status",
    label: "Status",
    minWidth: 100,
    align: "center",
  },
  {
    id: "action",
    label: "Delete",
    minWidth: 10,
    align: "center",
  },
];

const TodosTable = ({ setOpenModal }) => {
  const { data, isLoading, filterParam } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const classes = useStyles();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangeRowsPerPage = (event) => {
    console.log(parseInt(event.target.value, 10));
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

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

  const filteredData = data?.result.filter((el) =>
    filterParam.length === 0
      ? el
      : el.name.toLowerCase().includes(filterParam.toLowerCase()) ||
        el.description.toLowerCase().includes(filterParam.toLowerCase())
  );

  if (isLoading) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      {filteredData && (
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
                {filteredData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow key={row._id}>
                      <TableCell
                        align="center"
                        style={{ cursor: "pointer", padding: "10px" }}
                        onClick={() => handleClick(row)}
                      >
                        {index + 1}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ cursor: "pointer", padding: "10px" }}
                        onClick={() => handleClick(row)}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ cursor: "pointer", padding: "10px" }}
                        onClick={() => handleClick(row)}
                      >
                        {row.description}
                      </TableCell>
                      <TableCell
                        align="center"
                        style={{ cursor: "pointer", padding: "10px" }}
                        onClick={() => handleClick(row)}
                      >
                        {row.status}
                      </TableCell>
                      <TableCell align="center" style={{ padding: "10px" }}>
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
          <TablePagination
            rowsPerPageOptions={[5, 10]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </Box>
  );
};

export default TodosTable;
