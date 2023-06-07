import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline, createTheme } from "@material-ui/core";
import { darkTheme, lightTheme } from "./theme";
import { Element } from "react-scroll";
import Intro from "./components/home/Intro";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contacts/Contact";
import Navbar from "./components/navbar/Navbar";
import Message from "./components/message/Message";
// images
import Inventory from "./assets/images/Inventory_dashboard.png";
import me from "./assets/images/me.jpg";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = (isDark) => {
    setIsDarkTheme(isDark);
  };

  const theme = createTheme(isDarkTheme ? darkTheme : lightTheme);

  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
  }, [isDarkTheme]);

  const aboutMe = {
    name: "",
    introduction:
      "Experienced full stack developer specializing in efficient, scalable, and user-friendly web applications. Skilled in HTML5, CSS3, JavaScript, ReactJS, AngularJS, Node.js, Express.js, SQL, MongoDB, and AWS. Successfully delivered projects of varying sizes for 5+ years. Collaborative team player with strong communication and attention to detail. Constant learner, staying updated with industry trends and leveraging cutting-edge tools. Analytical problem solver focused on enhancing user experience and following best practices. Seeking opportunities to contribute as a dedicated full stack developer.",
    avatarUrl: me,
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Element name="home" style={{ margin: "40px 0" }}>
          <Intro />
        </Element>
        <Element name="about" style={{ margin: "40px 0" }}>
          <About
            name={aboutMe.name}
            introduction={aboutMe.introduction}
            avatarUrl={aboutMe.avatarUrl}
          />
        </Element>
        <Element name="projects" style={{ margin: "40px 0" }}>
          <Projects />
        </Element>
        <Element name="contact" style={{ margin: "40px 0" }}>
          <Contact />
        </Element>
      </Router>
    </ThemeProvider>
  );
};

export default App;
