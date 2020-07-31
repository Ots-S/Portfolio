import React from "react";
import { Grid, Typography, Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";

const useStyles = makeStyles(theme => ({
  languages: {
    marginTop: theme.spacing(2),
  },
  container: {
    backgroundColor: "#ffffff",
  },
  typography: {
    fontSize: "1.5em",
  },
}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.container} lg={10}>
      <Box py={5} pl={1}>
        <Typography className={classes.typography}>
          Passionné par le développement Web, j'ai décidé de me réorienter
          professionnellement dans ce domaine.
          <br />
          Actuellement en stage au sein de la Start-Up Serjee, je développe leur
          application web.
        </Typography>
      </Box>
    </Grid>
  );
}
