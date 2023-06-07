import React from "react";
import Card from "./Card";
import { Typography, makeStyles, Grid } from "@material-ui/core";
import Inventory from "../../assets/images/Inventory_dashboard.png";

const useStyles = makeStyles((theme) => ({
  projectsContainer: {
    minHeight: "100vh",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    margin: "0 auto",
    marginTop: theme.spacing(4),
  },
  aboutTitle: {
    fontFamily: "'Kaushan Script', cursive",
    marginBottom: theme.spacing(2),
  },
  cardGrid: {
    width: "80%", // Adjust the width as desired
    margin: "0 auto",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const Projects = () => {
  const classes = useStyles();
  const projects = [
    {
      id: 1,
      title: "Project 1",
      backgroundImage:
        "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
      frontImage: Inventory,
      overview: "Project 1 overview",
      technologies: ["Angular", "Sprng"],
    },
    {
      id: 2,
      title: "Project 2",
      backgroundImage: "image-url-2",
      frontImage: "front-image-url-2",
      overview: "Project 2 overview",
      technologies: ["Tech 3", "Tech 4"],
    },
    {
      id: 3,
      title: "Project 2",
      backgroundImage: "image-url-2",
      frontImage: "front-image-url-2",
      overview: "Project 2 overview",
      technologies: ["Tech 3", "Tech 4"],
    },
    {
      id: 4,
      title: "Project 1",
      backgroundImage:
        "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
      frontImage: Inventory,
      overview: "Project 1 overview",
      technologies: ["Angular", "Sprng"],
    },
    {
      id: 5,
      title: "Project 1",
      backgroundImage:
        "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
      frontImage: Inventory,
      overview: "Project 1 overview",
      technologies: ["Angular", "Sprng"],
    },
    {
      id: 6,
      title: "Project 1",
      backgroundImage:
        "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
      frontImage: Inventory,
      overview: "Project 1 overview",
      technologies: ["Angular", "Sprng"],
    },
    // Add more project objects as needed
  ];
  const handleClickOpen = () => {
    // Handle the click event
  };

  return (
    <div className={classes.projectsContainer}>
      <Typography variant="h4" className={classes.aboutTitle}>
        Projects
      </Typography>

      <Grid container spacing={2} className={classes.cardGrid} justify="center">
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card onClick={handleClickOpen} {...project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Projects;
