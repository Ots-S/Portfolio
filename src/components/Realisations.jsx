import React, { useState } from "react";
import { Typography, Grid, Box, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectCard";
import coverSerjee from "../assets//projects/serjee/cover.jpg";
import coverLekol from "../assets//projects/lekol/cover.jpg";
import home from "../assets/projects/serjee/home.png";
import historique from "../assets/projects/serjee/historique.png";
import accords from "../assets/projects/serjee/accords.png";
import suggestions from "../assets/projects/serjee/suggestions.png";
import homelekol from "../assets/projects/lekol/home.png";
import stats from "../assets/projects/lekol/stats.png";
import schools from "../assets/projects/lekol/schools.png";
import classroom from "../assets/projects/lekol/class.png";
import doc from "../assets/projects/lekol/doc.png";
import VisibilitySensor from "react-visibility-sensor";

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  subtitle: {
    marginBottom: theme.spacing(4),
  },
  typography: {
    fontSize: "1.5em",
  },
}));

export default function Realisations() {
  const classes = useStyles();
  const [display, setDisplay] = useState(false);
  const [serjeeImages, setSerjeeImages] = useState([
    home,
    suggestions,
    historique,
    accords,
  ]);
  const [lekolImages, setLekolImages] = useState([
    homelekol,
    stats,
    schools,
    classroom,
    doc,
  ]);

  function onChange(isVisible) {
    if (isVisible) {
      setDisplay(true);
    }
  }

  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      style={{ height: "100vh", backgroundColor: "#f8f8f8" }}
    >
      <VisibilitySensor onChange={onChange}>
        <div
          style={{ width: "2px", height: "1px", backgroundColor: "white" }}
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
              RÉALISATIONS
            </Typography>
          </Box>
        </Fade>
      ) : (
        <Box visibility="hidden">
          <Typography align="center" variant="h3" color="primary" gutterBottom>
            RÉALISATIONS
          </Typography>
        </Box>
      )}
      <Grid
        container
        justify="space-around"
        className={classes.container}
        lg={6}
        spacing={1}
      >
        <Grid item lg={6}>
          <ProjectCard
            image={coverSerjee}
            title="SERJEE"
            techno={"REACT JS"}
            content="front-end"
            images={serjeeImages}
            presentation={
              "Serjee est une application Web permettant de recevoir des recommandations de bouteilles de vin"
            }
            technologies={[
              "React",
              "Material-UI",
              "Axios",
              "MobX",
              "HTML & CSS",
            ]}
            realisations={[
              "Développement d'une application web dynamique et responsive",
              "Reproduction graphique en suivant une maquette",
              "Manipulation de données via des appels API",
            ]}
          />
        </Grid>
        <Grid item lg={6}>
          <ProjectCard
            image={coverLekol}
            title="LEKOL"
            techno={"THYMELEAF / JAVA SPRING"}
            content="front-end / back-end"
            images={lekolImages}
            presentation={
              "LEKOL est un projet de carnet de liaison numérique entre les professeurs des écoles et les parents d'élèves."
            }
            technologies={[
              "Java",
              "Spring",
              "Hibernate",
              "Thymeleaf",
              "MySql",
              "HTML & CSS",
            ]}
            realisations={[
              "Conception et création d'une base de données",
              "Création d'une API REST",
              "Création d'une interface d'administration",
              "Sécurisation par token",
            ]}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
