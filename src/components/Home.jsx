import React from "react";
import { Grid } from "@material-ui/core";
import Introduction from "./Introduction";
import AboutMe from "./AboutMe";
import Realisations from "./Realisations";

function Home() {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      lg={12}
    >
      <Grid item>
        <Introduction />
        <AboutMe />
        <Realisations />
      </Grid>
    </Grid>
  );
}

export default Home;
