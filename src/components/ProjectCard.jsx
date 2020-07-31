import React, { useState, useEffect } from "react";
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
      backgroundColor: "#115293",
    },
  },
  button: {
    color: "#1976d2",
    "&:hover": {
      color: "white",
      backgroundColor: "#115293",
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
  const [images, setImages] = useState([]);
  const [lekolImages, setLekolImages] = useState([]);
  const [image, setImage] = useState();

  useEffect(() => {
    setImages(props.images);
  }, [props.images]);

  useEffect(() => {
    setImage(images[0]);
  }, [open]);

  function getNextImage() {
    const totalImages = images.length;
    if (images.indexOf(image) < totalImages - 1) {
      setImage(images[images.indexOf(image) + 1]);
    } else {
      setImage(images[0]);
    }
  }

  function getPrevImage() {
    if (images.indexOf(image) > 0) {
      setImage(images[images.indexOf(image) - 1]);
    } else {
      setImage(images[images.length - 1]);
    }
  }

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
            <Typography align="center" variant="h3" color="primary">
              {props.title}
            </Typography>
            <Typography align="center" variant="h5">
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
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            maxWidth="md"
            className={classes.modal}
          >
            <Paper>
              <Box mt={2} mx={10}>
                <CardMedia
                  component="img"
                  image={image}
                  className={classes.screenshot}
                />
              </Box>
              <CardActions disableSpacing className={classes.iconRight}>
                <IconButton
                  aria-label="image suivante"
                  onClick={() => getNextImage(props.title)}
                >
                  <NavigateNextIcon />
                </IconButton>
              </CardActions>
              <CardActions disableSpacing className={classes.iconLeft}>
                <IconButton
                  aria-label="image précédente"
                  onClick={() => getPrevImage()}
                >
                  <NavigateBeforeIcon />
                </IconButton>
              </CardActions>
              <Box p={10}>
                <Typography>{props.presentation}</Typography>
                <Typography>
                  Technologies utilisées :
                  <Typography>{props.technologies}</Typography>
                </Typography>
              </Box>
            </Paper>
          </Dialog>
        </Grid>
      </Fade>
    </Card>
  );
}
