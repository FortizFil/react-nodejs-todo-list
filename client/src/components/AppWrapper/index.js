import React from "react";

import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  appWrapper: {
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "center",
    // backgroundColor: "#0093E9",
    // height: "100%",
    // backgroundImage: "linear - gradient(160deg, #0093E9 0%, #80D0C7 100%)",
  },
}));

const AppWrapper = ({ children }) => {
  const classes = useStyles();

  return <Box className={classes.appWrapper}>{children}</Box>;
};

export default AppWrapper;
