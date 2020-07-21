import React from "react";
import { Grid } from "@material-ui/core";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Realisations from "./Realisations"

function Home() {
  return (
    <Grid container direction="column">
      <Introduction />
      <AboutMe />
      <Realisations />
    </Grid>
  );
}

export default Home;
