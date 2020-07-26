import React from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";
import image from "../assets/portfolio-wallpaper.jpg";

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  subtitle: {
    marginBottom: theme.spacing(4),
  },
  typography: {
    fontSize: "1.5em",
  },
}));

export default function Realisations() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-around"
      className={classes.container}
      lg={10}
      spacing={1}
    >
      <Grid item lg={4}>
        <ProjectCard
          image={image}
          title="SERJEE"
          techno={"REACT JS"}
          content="front-end"
        />
      </Grid>
      <Grid item lg={4}>
        <ProjectCard
          image={image}
          title="LEKOL"
          techno={"THYMELEAF / JAVA SPRING"}
          content="front-end / back-end"
        />
      </Grid>
    </Grid>
  );
}
