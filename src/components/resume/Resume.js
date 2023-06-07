import React from "react";
import { Typography, Button } from "@material-ui/core";

const Resume = () => {
  return (
    <div>
      <Typography variant="h4">Resume</Typography>
      {/* Add a brief summary of your skills and qualifications */}
      <Typography variant="body1">
        Summary of skills and qualifications goes here.
      </Typography>
      <Button
        variant="contained"
        // color="primary"
        href="path/to/your/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </Button>
    </div>
  );
};

export default Resume;
