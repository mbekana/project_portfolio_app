import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";

const Experience = (props) => {
  const { experiences } = props;

  return (
    <div>
      <Typography variant="h4">Experience</Typography>
      {experiences.map((experience, index) => (
        <Card key={index}>
          <CardContent>
            <Typography variant="h6">{experience.jobTitle}</Typography>
            <Typography variant="subtitle1">
              {experience.companyName}
            </Typography>
            <Typography variant="body2">{experience.description}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Experience;
