import React from "react";
import {
  Typography,
  Avatar,
  makeStyles,
  Card,
  CardContent,
  useTheme,
} from "@material-ui/core";
import {
  Computer,
  MusicNote,
  Book,
  Flight,
  Restaurant,
  CameraAlt,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    minHeight: "100vh",
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "800px",
    margin: "0 auto",
    marginTop: theme.spacing(4),
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(2),
  },
  aboutTitle: {
    fontFamily: "'Kaushan Script', cursive",
    marginBottom: theme.spacing(2),
  },
  hobbiesContainer: {
    marginTop: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  hobbyCard: {
    width: "200px",
    height: "120px",
    margin: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    boxShadow:
      "0px 3px 6px rgba(0, 0, 0, 0.16), 0px 3px 6px rgba(0, 0, 0, 0.23)",
    backgroundColor: theme.palette.background.default,
    transition: "transform 0.2s",
    cursor: "pointer",
    color: theme.palette.text.primary,
    "&:hover": {
      transform: "scale(1.1)",
      boxShadow:
        "0px 6px 12px rgba(0, 0, 0, 0.16), 0px 6px 12px rgba(0, 0, 0, 0.23)",
    },
  },
  hobbyIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3rem",
    marginBottom: "4px",
    transition: "color 0.2s",
  },
  hobbyCardHover: {
    "&:hover $hobbyIcon": {
      color: theme.palette.primary.main,
    },
  },
  hobbyName: {
    textAlign: "center",
    fontWeight: "bold",
    color: theme.palette.text.primary,
  },
}));

const About = (props) => {
  const { name, introduction, avatarUrl } = props;
  const classes = useStyles();
  const theme = useTheme();

  const hobbies = [
    {
      name: "Programming",
      icon: <Computer style={{ color: "#f44336" }} />,
    },
    {
      name: "Playing guitar",
      icon: <MusicNote style={{ color: "#f44336" }} />,
    },
    { name: "Reading books", icon: <Book style={{ color: "#ff9800" }} /> },
    { name: "Traveling", icon: <Flight style={{ color: "#4caf50" }} /> },
    { name: "Cooking", icon: <Restaurant style={{ color: "#2196f3" }} /> },
    { name: "Photography", icon: <CameraAlt style={{ color: "#9c27b0" }} /> },
  ];

  return (
    <div className={classes.aboutContainer}>
      <Typography variant="h4" className={classes.aboutTitle}>
        About
      </Typography>
      <Avatar
        src={avatarUrl}
        alt="Developer Avatar"
        className={classes.avatar}
      />
      <Typography variant="body1" align="center">
        {name} {introduction}
      </Typography>
      <div className={classes.hobbiesContainer}>
        {hobbies.map((hobby, index) => (
          <Card
            className={`${classes.hobbyCard} ${classes.hobbyCardHover}`}
            key={index}
          >
            <CardContent>
              <div className={classes.hobbyIcon}>{hobby.icon}</div>
              <Typography
                variant="subtitle1"
                style={{
                  color: theme.palette.text.primary,
                }}
              >
                {hobby.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default About;
