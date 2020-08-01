import React from "react";
import { Grid, Fade } from "@material-ui/core";
import Introduction from "./Introduction";
import Footer from "./Footer";
import Realisations from "./Realisations";
import Technologies from "./Technologies";
import Contact from "./Contact";

function Home() {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      lg={12}
    >
      <Introduction />
      <Realisations />
      <Technologies />
      <Contact />
      <Footer />
    </Grid>
  );
}

export default Home;
