import React from "react";

import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  appWrapper: {
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "center",
  },
}));

const AppWrapper = ({ children }) => {
  const classes = useStyles();

  return <Box className={classes.appWrapper}>{children}</Box>;
};

export default AppWrapper;
