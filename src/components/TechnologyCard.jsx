import React from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProgressBar from "./ProgressBar";

function TechnologyCard(props) {
  return (
    <div>
      <Box m={1}>
        <Grid container item lg={12}>
          <ProgressBar
            completed={props.technology.level}
            technology={props.technology.title}
          />
        </Grid>
      </Box>
    </div>
  );
}

export default TechnologyCard;
