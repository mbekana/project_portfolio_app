import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Tab,
  Tabs,
  useTheme,
  ThemeProvider, // Import the useTheme hook
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import GoogleFontLoader from "react-google-font-loader";

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    transition: "box-shadow 0.3s ease-in-out",
  },
  navbarBrand: {
    marginRight: theme.spacing(2),
    textDecoration: "none",
    color: theme.palette.text.primary,
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  navbarLinks: {
    marginLeft: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    textDecoration: "none",
    "& a": {
      color: theme.palette.text.primary,
      marginLeft: theme.spacing(2),
    },
  },
  iconButton: {
    color: theme.palette.text.primary,
  },
  appBarShadow: {
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  },
  activeTab: {
    color: theme.palette.text.primary,
  },
  tabs: {
    "& .MuiTab-root": {
      minWidth: 0,
      padding: "6px 8px",
      margin: "0 2px",
    },
  },
}));

const Navbar = ({ toggleTheme, isDarkTheme }) => {
  const classes = useStyles();
  const theme = useTheme(); // Access the current theme using useTheme hook

  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  const handleThemeToggle = () => {
    toggleTheme(!isDarkTheme);
  };

  const fontConfig = {
    fonts: [
      {
        font: "Kaushan Script",
        weights: [400],
      },
    ],
  };

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <GoogleFontLoader {...fontConfig} />
      <ThemeProvider theme={theme}>
        <AppBar
          position="fixed"
          className={classes.appBar}
          color={isDarkTheme ? "default" : "primary"}
          style={{
            backgroundColor: isDarkTheme
              ? theme.palette.background.default
              : theme.palette.primary.main,
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              component={Link}
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={classes.navbarBrand}
              style={{ fontFamily: "Kaushan Script, cursive" }}
            >
              Milkias Bekana
            </Typography>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              className={classes.navbarLinks}
            >
              <Tab
                label="Home"
                component={Link}
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={activeTab === 0 ? classes.activeTab : ""}
              />
              <Tab
                label="About"
                component={Link}
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={activeTab === 1 ? classes.activeTab : ""}
              />
              <Tab
                label="Projects"
                component={Link}
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={activeTab === 2 ? classes.activeTab : ""}
              />
              <Tab
                label="Contact"
                component={Link}
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className={activeTab === 3 ? classes.activeTab : ""}
              />
            </Tabs>
            <IconButton
              color="inherit"
              onClick={handleThemeToggle}
              className={classes.iconButton}
            >
              {isDarkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
