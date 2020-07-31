import React, { useState } from "react";
import { Typography, Grid, Box } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import ProgressBar from "./ProgressBar";

const BorderLinearProgress = withStyles(theme => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

const useStyles = makeStyles(theme => ({
  title: {
    width: "6em",
    height: "1em",
  },
  typography: {
    fontSize: "1.5em",
  },
}));

function TechnologyCard(props) {
  const classes = useStyles();
  const [percentage, setPercentage] = useState(0);

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
