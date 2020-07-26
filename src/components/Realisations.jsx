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
    <Grid container justify="center" className={classes.container}>
      <Grid item lg={4}>
        <ProjectCard image={image} title="Serjee" content="front-end" />
      </Grid>
      <Grid item lg={4}>
        <ProjectCard
          image={image}
          title="Lekol"
          content="front-end / back-end"
        />
      </Grid>
      <Grid item lg={4}>
        <ProjectCard image={image} title="Serjee" content="front-end" />
      </Grid>
    </Grid>
  );
}
