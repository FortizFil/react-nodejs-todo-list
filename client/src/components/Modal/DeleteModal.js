import React from "react";

import { Box, Typography, Button } from "@mui/material";

const DeleteModal = ({ submit, handleClose }) => {
  return (
    <Box>
      <Typography>
        Do you really want to delete this todo? This process cannot be undone
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
          marginTop: "10px",
        }}
      >
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
