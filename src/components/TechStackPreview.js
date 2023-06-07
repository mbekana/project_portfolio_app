import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  cardWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100px",
    height: "100px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "8px",
    backgroundColor: "#fff",
    transformStyle: "preserve-3d",
  },
  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "48px",
    height: "48px",
    fontSize: "24px",
    color: "#000",
    marginBottom: "8px",
    transform: "translateZ(50px)",
  },
  label: {
    textTransform: "capitalize",
    fontSize: "14px",
    color: "#000",
  },
}));

const TechStackPreview = ({ icons }) => {
  const classes = useStyles();

  if (!icons || icons.length === 0) {
    return null;
  }

  const rows = Math.ceil(icons.length / 5); // Calculate the number of rows

  return (
    <div className={classes.wrapper}>
      {Array.from({ length: rows }, (_, rowIndex) => (
        <div key={rowIndex} className={classes.row}>
          {icons
            .slice(rowIndex * 5, rowIndex * 5 + 5) // Get four icons for each row
            .map((icon, index) => (
              <motion.div
                key={index}
                className={classes.cardWrapper}
                initial={{ scale: 0, rotateY: 0 }}
                animate={{ scale: [0, 1.1, 1], rotateY: [0, 180, 0] }}
                transition={{
                  // repeat: Infinity,
                  duration: 5,
                  delay: index * 0.5,
                  ease: "easeInOut",
                }}
              >
                <div className={classes.iconWrapper}>{icon.icon}</div>
                <div className={classes.label}>{icon.name}</div>
              </motion.div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default TechStackPreview;
