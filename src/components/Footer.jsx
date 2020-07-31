import React from "react";
import linkedinIcon from "../assets/linkedin.jpg";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  Grid,
  Typography,
  Button,
  Fade,
  Dialog,
  Paper,
  CardActions,
  IconButton,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  linkedinLogo: {
    width: "5em",
  },
  container: {
    backgroundColor: "#166999",
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid container justify="space-around" className={classes.container}>
      <Button>
        <a
          href="https://www.linkedin.com/in/s%C3%A9bastien-ots-651106197/"
          target="_blank"
        >
          <CardMedia
            component="img"
            image={linkedinIcon}
            className={classes.linkedinLogo}
          />
        </a>
      </Button>
      <Typography color="secondary">Sébastien Ots ©2020</Typography>
    </Grid>
  );
}
