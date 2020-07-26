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
} from "@material-ui/core";
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
}));

export default function ProjectCard(props) {
  const classes = useStyles();
  const [opacity, setOpacity] = useState(0);
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        image={props.image}
        className={classes.image}
      />
      <Fade in={true} timeout={1000}>
        <Grid
          onMouseOver={() => setOpacity(1)}
          className={classes.overlay}
          style={{ opacity: opacity }}
          onMouseOut={() => setOpacity(0)}
          container
          justify="center"
          alignItems="center"
          direction="column"
        >
          <Typography variant="h3">SERJEE</Typography>
          <Typography variant="h5">REACT JS</Typography>
          <Button variant="contained">
            <Typography>Plus d'infos</Typography>
          </Button>
        </Grid>
      </Fade>
    </Card>
  );
}
