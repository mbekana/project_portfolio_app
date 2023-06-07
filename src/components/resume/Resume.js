import React from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginTop: "2rem",
    height: "100vh",
  },
  title: {
    fontFamily: "Kaushan Script, cursive",
    marginBottom: "1rem",
  },
  summary: {
    marginBottom: "1rem",
  },
  button: {
    marginTop: "1rem",
    textDecoration: "none",
    position: "relative",
    display: "inline-block",
    overflow: "hidden",
    cursor: "pointer",
    // "&:hover span": {
    //   transform: "scale(1.5)",
    // },
  },
  buttonText: {
    position: "relative",
    zIndex: 1,
  },
  buttonOverlay: {
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: "rgba(255, 255, 255, 0.2)",
    transform: "rotate(-30deg)",
    transition: "transform 0.3s ease",
  },
  motionContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  motionVector: {
    width: "100%",
    height: "100%",
  },
}));

const Resume = () => {
  const classes = useStyles();

  const openPDFInNewTab = () => {
    window.open("Milkias_Bekana_Resume.pdf", "_blank");
  };

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Resume
      </Typography>
      {/* Add a brief summary of your skills and qualifications */}
      <Typography variant="body1" className={classes.summary}>
        Summary of skills and qualifications goes here.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        target="_blank"
        rel="noopener noreferrer"
        onClick={openPDFInNewTab}
      >
        <span className={classes.buttonText}>Download Resume</span>
        <span className={classes.buttonOverlay}></span>
      </Button>
      <motion.div
        className={classes.motionContainer}
        initial={{ x: 0, y: 0 }}
        // whileHover={{ scale: 1.1, rotate: 10 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {/* <motion.img
          src={resumeVector}
          alt="Vector"
          className={classes.motionVector}
        /> */}
      </motion.div>
    </div>
  );
};

export default Resume;
