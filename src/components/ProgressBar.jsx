import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography, Grid, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    height: "1.5em",
    width: "100%",
    borderRadius: "8px",
    backgroundColor: "lightgrey",
  },
  filler: {
    backgroundColor: "#166999",
    height: "100%",
    borderRadius: "inherit",
    transition: "width 2s ease-in",
  },
  typo: {
    width: "10em",
  },
  typoLevel: {
    marginRight: "1.5em",
  },
}));

export default function ProgressBar(props) {
  const classes = useStyles();
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setCompleted(props.completed);
  });

  return (
    <div className={classes.container}>
      <div className={classes.filler} style={{ width: completed }}>
        <Box ml={2}>
          <Grid container item justify="space-between">
            <Typography color="secondary" className={classes.typo}>
              {props.technology}
            </Typography>
            <Typography color="secondary" className={classes.typoLevel}>
              {props.completed}
            </Typography>
          </Grid>
        </Box>
      </div>
    </div>
  );
}
