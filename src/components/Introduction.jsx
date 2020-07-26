import React from "react";
import { Typography, Grid, Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  subtitle: {
    marginBottom: theme.spacing(4),
  },
}));

function Introduction() {
  const classes = useStyles();
  return (
    <Grid container justify="center" item direction="column">
      <Box pt={10} pl={1}>
        <Typography variant="h3" className={classes.title}>
          Sébastien Ots
        </Typography>
        <Typography variant="h4" className={classes.subtitle}>
          <Typed strings={["Développeur Web"]} typeSpeed={80} />
        </Typography>
      </Box>
    </Grid>
  );
}

export default Introduction;
