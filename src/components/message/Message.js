import React from "react";
import { Box, Typography, Card, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 400,
    height: 200,
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRadius: theme.spacing(2),
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
    transition: "box-shadow 0.3s ease-in-out",
    "&:hover": {
      boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.2)",
    },
  },
  icon: {
    fontSize: 80,
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main,
    animation: `$rotateOnce 1s ease-in-out`,
  },
  message: {
    fontFamily: "Kaushan Script, cursive",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: theme.spacing(2),
  },
  "@keyframes rotateOnce": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));

const Message = ({ showMessage }) => {
  const classes = useStyles();

  return (
    <>
      {showMessage && (
        <Box
          className="message-container"
          style={{
            position: "absolute",
            top: 0,
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className={classes.card}>
              <CheckCircleOutlinedIcon className={classes.icon} />
              <Typography variant="h5" className={classes.message}>
                Email sent successfully!
              </Typography>
            </Card>
          </motion.div>
        </Box>
      )}
    </>
  );
};

export default Message;
