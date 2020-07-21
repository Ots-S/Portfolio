import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: 345,
    height: 355,
  },
}));

export default function ProjectCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title={props.title} />
      <CardMedia component="img" image={props.image} />
      <CardContent>
        <Typography>{props.content}</Typography>
      </CardContent>
    </Card>
  );
}
