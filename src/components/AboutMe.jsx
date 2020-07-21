import React from "react";
import { Grid, Typography, Box, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";

const useStyles = makeStyles((theme) => ({
  languages: {
    marginTop: theme.spacing(2),
  },
  container: {
    backgroundColor: "#FFEDD3"
  },
  typography: {
    fontSize: "1.5em"
  }
}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.container}>
      <Paper>
        <Box px={55} py={5}>
          <Typography className={classes.typography}>
            Passionné par le développement informatique, j'ai décidé de me
            réortienter profesionnellement dans ce domaine.
          <br /><br />
          J'ai effectué la formation de Développeur Web au sein Wild Code School
          de Toulouse afin d'obtenir le titre RNCP de Développeur Web et Web
          Mobile.
          <br /> <br />
          Actuellement en stage au sein de la Start-Up Serjee, je développe leur application web.
      </Typography>
        </Box>
      </Paper>
    </Grid >
  );
}