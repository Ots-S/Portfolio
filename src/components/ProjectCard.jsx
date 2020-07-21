import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import image from "../assets/portfolio-wallpaper.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    width: 345,
    height: 355,
  },
}));

export default function ProjectCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title="Serjee" />
      <CardMedia component="img" image={image} />
      <CardContent>
        <Typography>Front-End</Typography>
      </CardContent>
    </Card>
  );
}
