import React from "react";
import { Grid, Fade } from "@material-ui/core";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Realisations from "./Realisations";

function Home() {
  return (
    <Fade in={true} timeout={800}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        lg={12}
      >
        <Introduction />
        <AboutMe />
        <Realisations />
      </Grid>
    </Fade>
  );
}

export default Home;
