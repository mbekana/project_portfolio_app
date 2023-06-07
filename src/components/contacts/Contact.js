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
        message: `Name: ${values.name}\Email: ${values.email}\n\n${values.message}`,
      };

      await emailjs.send(
        "service_60xb7ud",
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

    if (sendEmailSuccess) {
      setShowMessage(true);
      timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000); // Set the duration (in milliseconds) for the message to close automatically
    }

    return () => {
      clearTimeout(timer);
    };
  }, [sendEmailSuccess]);

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
            variant="h2"
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
        {!sendEmailSuccess ? (
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
              fullWidth
              id="email"
              label={"Email"}
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
              fullWidth
              name="message"
              label="Message"
              type="text"
              id="message"
              multiline
              minRows={5}
              value={formValues.message}
              onBlur={handleInputBlur}
              onChange={(e) =>
                setFormValues({ ...formValues, message: e.target.value })
              }
            />
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mt={2}
            >
              <Button
                className={classes.submitBtn}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={sending}
                endIcon={<SendIcon />}
              >
                {sending ? (
                  <CircularProgress size={24} color="primary" />
                ) : (
                  "Send Mail"
                )}
              </Button>
            </Box>
          </form>
        ) : (
          <Message />
        )}

        {errorMessage && (
          <Box
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              margin: "8px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Alert severity="error" variant="filled" elevation={6}>
              <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                Error
              </Typography>
              {errorMessage}
            </Alert>
          </Box>
        )}
      </Box>
      {showMessage && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={9999}
          backgroundColor="rgba(0, 0, 0, 0.5)"
        >
          <Message />
        </Box>
      )}
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submitBtn: {
    width: "100%",
  },
}));

export default Contact;
