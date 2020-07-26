import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  Button,
  Fade,
  Dialog,
  Paper,
  CardActions,
  IconButton,
} from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
  },
  image: {},
  overlay: {
    position: "absolute",
    background:
      "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8183648459383753) 50%);",
    top: 0,
    width: "100%",
    height: "100%",
    transitionDelay: "250ms",
  },
  typography: {
    color: "white",
    "&:hover": {
      backgroundColor: "#1E90FF",
    },
  },
  button: {
    color: "#1E90FF",
    "&:hover": {
      color: "white",
      backgroundColor: "#1E90FF",
    },
  },
  screenshot: {
    position: "relative",
  },
  iconRight: {
    position: "absolute",
    top: "50%",
    right: 0,
  },
  iconLeft: {
    position: "absolute",
    top: "50%",
    left: 0,
  },
  modal: {},
}));

export default function ProjectCard(props) {
  const classes = useStyles();
  const [opacity, setOpacity] = useState(0);
  const [open, setOpen] = useState();
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        image={props.image}
        className={classes.image}
      />
      <Fade in={true} timeout={900}>
        <Grid
          onMouseOver={() => setOpacity(1)}
          className={classes.overlay}
          style={{ opacity: opacity }}
          onMouseOut={() => setOpacity(0)}
          container
          justify="space-around"
          alignItems="center"
          direction="column"
        >
          <Grid item>
            <Typography align="center" variant="h3">
              {props.title}
            </Typography>
            <Typography color="primary" align="center" variant="h5">
              {props.techno}
            </Typography>
          </Grid>
          <Button
            onClick={() => setOpen(true)}
            variant="outlined"
            className={classes.button}
          >
            PLUS D'INFOS
          </Button>
          <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md">
            <Paper>
              <CardMedia component="img" className={classes.screenshot} />
              <CardActions disableSpacing className={classes.iconRight}>
                <IconButton aria-label="add to favorites">
                  <NavigateNextIcon />
                </IconButton>
              </CardActions>
              <CardActions disableSpacing className={classes.iconLeft}>
                <IconButton aria-label="add to favorites">
                  <NavigateBeforeIcon />
                </IconButton>
              </CardActions>
              <Typography align="center">Serjee</Typography>
              <Typography>
                Serjee est une application Web permettant de recevoir des
                recommandations de bouteilles de vin.
              </Typography>
            </Paper>
          </Dialog>
        </Grid>
      </Fade>
    </Card>
  );
}
