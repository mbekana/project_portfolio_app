import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
  CircularProgress,
  Card,
} from "@material-ui/core";
import emailjs from "emailjs-com";
import { Alert } from "@material-ui/lab";
import SendIcon from "@material-ui/icons/Send";

import Message from "../message/Message";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submitBtn: {
    width: "100%",
  },
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

const Contact = () => {
  const classes = useStyles();
  const [sending, setSending] = useState(false);
  const [sendEmailSuccess, setSendEmailSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleFormSubmit = async (values) => {
    setSending(true);

    try {
      const messageBody = {
        ...values,
        message: `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`,
      };

      await emailjs.send(
        // "service_60xb7ud",
        "template_94883si",
        messageBody,
        "3R2euMpeKbg3pkIxp"
      );

      setSendEmailSuccess(true);
      setFormValues(initialValues); // Clear form values
      setShowAlert(true);
    } catch (error) {
      console.log(error);
      setErrorMessage("Failed to send email. Please try again.");
    }

    setSending(false);
  };

  const validateForm = (values) => {
    let formErrors = {};

    if (!values.name) {
      formErrors.name = "Name is required";
    }

    if (!values.email) {
      formErrors.email = "Email address is required";
    } else if (!isValidEmail(values.email)) {
      formErrors.email = "Email address is not valid";
    }

    if (!values.message) {
      formErrors.message = "Message is required";
    }

    return formErrors;
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm(formValues);

    if (Object.keys(errors).length === 0) {
      handleFormSubmit(formValues);
    } else {
      setFormErrors(errors);
    }
  };

  const handleInputBlur = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const errors = validateForm({ ...formValues, [fieldName]: fieldValue });
    setFormErrors({ ...formErrors, ...errors });
  };

  useEffect(() => {
    let timer;

    if (sendEmailSuccess || errorMessage) {
      setShowMessage(true);
      timer = setTimeout(() => {
        setShowMessage(false);
        setSendEmailSuccess(false);
        setErrorMessage("");
      }, 3000); // Set the duration (in milliseconds) for the message to close automatically
    }

    return () => {
      clearTimeout(timer);
    };
  }, [sendEmailSuccess, errorMessage]);

  const handleAlertClose = () => {
    setShowAlert(false);
    setSendEmailSuccess(false);
  };

  return (
    <Container
      maxWidth="md"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflowY: "hidden",
        height: "90vh",
      }}
    >
      <Box overflow="hidden">
        <div className="row">
          <Typography
            variant="h4"
            style={{
              fontFamily: "Kaushan Script, cursive",
              textAlign: "center",
            }}
          >
            Contact Me
          </Typography>
        </div>
        <div className="row">
          <Typography variant="h6" style={{ textAlign: "center" }}>
            I'd love to hear from you!
          </Typography>
        </div>

        {showAlert && (
          <Alert
            severity="success"
            onClose={handleAlertClose}
            style={{ marginTop: "1rem" }}
          >
            Email sent successfully!
          </Alert>
        )}
        {errorMessage && (
          <Alert severity="error" style={{ marginTop: "1rem" }}>
            {errorMessage}
          </Alert>
        )}

        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            error={Boolean(formErrors.name)}
            helperText={formErrors.name}
            variant="filled"
            margin="normal"
            type="text"
            fullWidth
            id="name"
            label={"Full Name"}
            name="name"
            value={formValues.name}
            onBlur={handleInputBlur}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
          />
          <TextField
            error={Boolean(formErrors.email)}
            helperText={formErrors.email}
            variant="filled"
            margin="normal"
            type="email"
            fullWidth
            id="email"
            label={"Email Address"}
            name="email"
            value={formValues.email}
            onBlur={handleInputBlur}
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          />
          <TextField
            error={Boolean(formErrors.message)}
            helperText={formErrors.message}
            variant="filled"
            margin="normal"
            multiline
            fullWidth
            id="message"
            label={"Message"}
            name="message"
            rows={4}
            value={formValues.message}
            onBlur={handleInputBlur}
            onChange={(e) =>
              setFormValues({ ...formValues, message: e.target.value })
            }
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submitBtn}
            disabled={sending}
            endIcon={sending ? <CircularProgress size={20} /> : <SendIcon />}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Contact;
