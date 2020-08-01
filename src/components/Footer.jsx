import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#166999",
    height: "4em",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Typography color="secondary" align="center">
        Sébastien Ots ©2020
      </Typography>
    </Grid>
  );
}
