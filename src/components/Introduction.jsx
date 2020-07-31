import React, { useState, useEffect } from "react";
import { Typography, Grid, Box, Fade, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typed from "react-typed";
import wallpaper from "../assets/wallpaper.jpg";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  subtitle: {
    marginBottom: theme.spacing(4),
  },
  container: {
    backgroundImage: `url(${wallpaper})`,
    minWidth: "100%",
    maxWidth: "100%",
    backgroundSize: "cover",
    opacity: "0.9",
  },
  icon: {
    backgroundColor: "#011051",
    color: "white",
    border: ".1em solid white",
  },
}));

function Introduction() {
  const classes = useStyles();
  const [display, setDisplay] = useState(false);

  useEffect(() => setTimeout(() => setDisplay(true), 500), []);

  return (
    <Grid
      container
      item
      alignItems="center"
      direction="column"
      lg={10}
      style={{ minHeight: "100vh" }}
      className={classes.container}
    >
      <Box pt={"20%"}>
        <Fade in timeout={1500}>
          <Typography variant="h3" className={classes.title} color="secondary">
            SÉBASTIEN OTS
          </Typography>
        </Fade>
        <Typography variant="h4" className={classes.subtitle} color="secondary">
          {display && (
            <Typed
              timeout={1000}
              strings={["Développeur Web"]}
              typeSpeed={80}
            />
          )}
        </Typography>
      </Box>

      {display && (
        <Box mt={2}>
          <Fade in timeout={5000}>
            <IconButton aria-label="image suivante" className={classes.icon}>
              <ArrowDownwardIcon
                color="blue"
                fontSize="large"
                variant="contained"
              />
            </IconButton>
          </Fade>
        </Box>
      )}
    </Grid>
  );
}

export default Introduction;
