import React, { useState } from "react";
import {
  Typography,
  Grid,
  Box,
  Fade,
  Button,
  CardMedia,
  Slide,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import VisibilitySensor from "react-visibility-sensor";
import linkedinIcon from "../assets/linkedin.jpg";
import githubIcon from "../assets/github.png";

const useStyles = makeStyles(theme => ({
  linkedinLogo: {
    width: "10em",
  },
  githubIcon: { margin: ".1em", width: "13em" },
  container: {
    backgroundColor: "#166999",
    height: "9em",
  },
}));

export default function Contact() {
  const classes = useStyles();
  const [display, setDisplay] = useState(false);
  const [displayContact, setDisplayContact] = useState(false);

  function onChangeTitle(isVisible) {
    if (isVisible) {
      setDisplay(true);
    }
  }

  function onChangeContact(isVisible) {
    if (isVisible) {
      setDisplayContact(true);
    }
  }

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      style={{ minHeight: "100vh", backgroundColor: "#f8f8f8" }}
    >
      <VisibilitySensor onChange={onChangeTitle}>
        <div
          style={{
            marginTop: "10em",
            width: "1px",
            height: "1px",
            backgroundColor: "white",
          }}
        ></div>
      </VisibilitySensor>
      {display ? (
        <Fade in timeout={2000}>
          <Box my={15}>
            <Typography
              align="center"
              variant="h3"
              color="primary"
              gutterBottom
            >
              CONTACT
            </Typography>
          </Box>
        </Fade>
      ) : (
        <Box visibility="hidden">
          <Typography align="center" variant="h3" color="primary" gutterBottom>
            CONTACT
          </Typography>
        </Box>
      )}
      <VisibilitySensor onChange={onChangeContact}>
        <div
          style={{ width: "1px", height: "1px", backgroundColor: "white" }}
        ></div>
      </VisibilitySensor>
      {displayContact && (
        <Grid container direction="row" justify="space-around" lg={8}>
          <Slide direction="right" in timeout={2500}>
            <a
              href="https://www.linkedin.com/in/s%C3%A9bastien-ots-651106197/"
              target="_blank"
            >
              <Button>
                <CardMedia
                  component="img"
                  image={linkedinIcon}
                  className={classes.linkedinLogo}
                />
              </Button>
            </a>
          </Slide>
          <Slide direction="left" in timeout={2500}>
            <a href="https://github.com/Ots-S" target="_blank">
              <Button>
                <CardMedia
                  component="img"
                  image={githubIcon}
                  className={classes.githubIcon}
                />
              </Button>
            </a>
          </Slide>
        </Grid>
      )}
    </Grid>
  );
}
