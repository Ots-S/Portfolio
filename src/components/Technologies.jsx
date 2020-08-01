import React, { useState } from "react";
import { Typography, Grid, Box, Fade } from "@material-ui/core";
import VisibilitySensor from "react-visibility-sensor";
import TechnologyCard from "./TechnologyCard";

export default function Technology() {
  const [display, setDisplay] = useState(false);
  const [displayTechnos, setDisplayTechnos] = useState(false);
  const [technologies, setTechnologies] = useState([
    { title: "React", level: "70%" },
    { title: "Java Spring", level: "60%" },
    { title: "HTML", level: "80%" },
    { title: "CSS", level: "75%" },
    { title: "Angular", level: "30%" },
  ]);

  function onChangeTitle(isVisible) {
    if (isVisible) {
      setDisplay(true);
    }
  }
  function onChangeTechnos(isVisible) {
    if (isVisible) {
      setDisplayTechnos(true);
    }
  }

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      style={{ minHeight: "100vh", backgroundColor: "whitesmoke" }}
    >
      <VisibilitySensor onChange={onChangeTitle}>
        <div
          style={{ width: "1px", height: "1px", backgroundColor: "white" }}
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
              TECHNOLOGIES
            </Typography>
          </Box>
        </Fade>
      ) : (
        <Box visibility="hidden">
          <Typography align="center" variant="h3" color="primary" gutterBottom>
            TECHNOLOGIES
          </Typography>
        </Box>
      )}
      <VisibilitySensor onChange={onChangeTechnos}>
        <div
          style={{ width: "1px", height: "1px", backgroundColor: "white" }}
        ></div>
      </VisibilitySensor>
      {displayTechnos && (
        <Grid container item direction="column" lg={6}>
          {technologies.map(technology => (
            <TechnologyCard technology={technology} />
          ))}
        </Grid>
      )}
    </Grid>
  );
}
