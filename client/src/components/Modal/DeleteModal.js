import React from "react";

import { makeStyles } from "@mui/styles";
import { Box, Typography, Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "end",
    alignItems: "end",
    marginTop: "10px",
  },
}));

const DeleteModal = ({ submit, handleClose }) => {
  const classes = useStyles();
  return (
    <Box>
      <Typography>
        Do you really want to delete this todo? This process cannot be undone
      </Typography>
      <Box className={classes.wrapper}>
        <Button variant="outlined" onClick={handleClose}>
          Cansel
        </Button>
        <Button
          variant="contained"
          sx={{ marginLeft: "10px" }}
          onClick={submit}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default DeleteModal;
