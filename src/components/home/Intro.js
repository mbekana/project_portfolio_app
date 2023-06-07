import React, { useState, useEffect } from "react";
import { Typography, Grid, makeStyles, Button } from "@material-ui/core";
import { Link } from "react-scroll";
import { ReactComponent as SpringBootIcon } from "../../assets/icons/spring-svgrepo-com.svg";
import { ReactComponent as AngularIcon } from "../../assets/icons/angular-icon-logo-svgrepo-com.svg";
import { ReactComponent as VueIcon } from "../../assets/icons/vue-svgrepo-com.svg";
import { ReactComponent as NodeIcon } from "../../assets/icons/nodejs-svgrepo-com.svg";
import { ReactComponent as PostgreSql } from "../../assets/icons/postgresql-logo-svgrepo-com.svg";
import { ReactComponent as AwsIcon } from "../../assets/icons/aws-svgrepo-com.svg";
import { ReactComponent as ReactIcon } from "../../assets/icons/react-logo-programming-2-svgrepo-com.svg";
import { ReactComponent as MongoDbIcon } from "../../assets/icons/mongo-svgrepo-com.svg";
import { ReactComponent as FlutterIcon } from "../../assets/icons/flutter-svgrepo-com.svg";
import { ReactComponent as PythonIcon } from "../../assets/icons/python-svgrepo-com.svg";
import TechStackPreview from "../TechStackPreview";
import { motion, useAnimation } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(2),
    // margin: "3em",
    // marginTop: "4em",
    // backgroundColor: "white",
    // border: "1px solid red",
  },

  gridContainer: {
    height: "100%",
  },
  description: {
    marginBottom: theme.spacing(4),
  },
  carouselContainer: {
    position: "relative",
    height: 300,
    overflow: "hidden",
    borderRadius: 8,
  },
  iconCard: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.5s ease-in-out",
  },
  iconContainer: {
    width: "80%",
    height: "80%",
  },
  icon: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  label: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    background: "rgba(0, 0, 0, 0.7)",
    color: "#fff",
    padding: theme.spacing(2),
    textTransform: "capitalize",
  },

  controls: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
  },
  controlIcon: {
    cursor: "pointer",
    color: "#fff",
    margin: theme.spacing(1),
    fontSize: 30,
  },
}));

const Intro = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselTransform, setCarouselTransform] = useState(0);
  const controls = useAnimation();
  const icons = [
    { icon: <SpringBootIcon className={classes.icon} />, name: "Spring Boot" },
    { icon: <AngularIcon className={classes.icon} />, name: "Angular" },
    { icon: <VueIcon className={classes.icon} />, name: "VueJs" },
    { icon: <NodeIcon className={classes.icon} />, name: "NodeJs" },
    { icon: <PostgreSql className={classes.icon} />, name: "PostgreSql" },
    { icon: <AwsIcon className={classes.icon} />, name: "AWS" },
    { icon: <ReactIcon className={classes.icon} />, name: "ReactJs" },
    { icon: <MongoDbIcon className={classes.icon} />, name: "MongoDB" },
    { icon: <FlutterIcon className={classes.icon} />, name: "Flutter" },
    { icon: <PythonIcon className={classes.icon} />, name: "Python" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCarouselTransform(-activeIndex * 100);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? icons.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % icons.length);
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.gridContainer}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} sm={6}>
          <div>
            <Typography
              component={motion.div}
              animate={controls}
              custom={0}
              color="default"
              variant="h5"
              style={{ marginBottom: "0px" }}
            >
              Hello there
              <motion.div
                style={{ display: "inline-block" }}
                animate={{ rotate: [50, 90, 50] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.4,
                  repeatDelay: 0.7,
                }}
              >
                👋
              </motion.div>
              , I Am
            </Typography>
            <motion.div animate={controls} custom={1}>
              {/* <VideoLogo /> */}
              <h1
                style={{
                  color: "default",
                  fontWeight: "bold",
                  fontSize: "45px",
                }}
              >
                Milkias Bekana
              </h1>
            </motion.div>
            <Typography
              component={motion.p}
              animate={controls}
              custom={2}
              variant="h5"
              color="#006666"
            >
              Experienced Full Stack Developer skilled in front-end and back-end
              technologies!
            </Typography>
            <Typography
              component={motion.p}
              animate={controls}
              custom={3}
              variant="body2"
              // color="initial"
              style={{ marginBottom: "0" }}
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </Typography>
            <Typography
              component={motion.p}
              animate={controls}
              custom={4}
              variant="body1"
              // color="initial"
              style={{ marginBottom: "30px" }}
            >
              Based In Addis Ababa, Ethiopia
            </Typography>
            <motion.div animate={controls} custom={5}>
              <Button
                component={Link}
                spy
                smooth
                offset={0}
                duration={500}
                to="contact"
                variant="contained"
                color="primary"
                size="large"
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          container
          alignItems="center"
          // justify="center"
          style={{ paddingLeft: "7em" }}
        >
          <TechStackPreview icons={icons} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Intro;
