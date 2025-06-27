import React, { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  FormControlLabel,
  Checkbox,
  Typography,
  Alert,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import SendIcon from "@mui/icons-material/Send";
import { validateRegisterForm } from "../formValidation";
import {
  registerTenant,
  registerAdmin,
} from "../../../../../features/tenantService";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  enterprise: "",
  phone: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

const RegisterForm = ({ type }) => {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({
    type: null,
    text: null,
  });

  const handleTerms = ({ target: { name, value, checked } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: name === "acceptTerms" ? checked : value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setSubmitMessage({ type: null, text: null });
  };

  const handleRegistration = async (registrationFunction) => {
    setIsSubmitting(true);
    try {
      const response = await registrationFunction({
        //TODO: update to a DTO
        id: "123456", // Placeholder for tenant ID
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
        company: formData.enterprise,
        phoneNumber: formData.phone,
        authority: "user",
        verificationToken: "123456",
        enabled: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });

      console.log("Registration successful:", response);
      setSubmitMessage({
        type: "success",
        text: "Registration successful! You can now log in.",
      });
      resetForm();
    } catch (error) {
      console.error("Registration failed:", error);

      const backendMessage = error.response?.data; // The actual string returned from backend
      const fallbackMessage =
        error.message + ", email already registered" || "Registration failed. Please try again.";

      setSubmitMessage({
        type: "error",
        text: backendMessage || fallbackMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage({ type: null, text: null });

    const validationErrors = validateRegisterForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      await handleRegistration(
        type === "admin" ? registerAdmin : registerTenant
      );
    }
  };

  const renderTextField = (name, label, options = {}) => (
    <TextField
      fullWidth
      required
      id={name}
      name={name}
      label={label}
      value={formData[name]}
      onChange={handleTerms}
      error={!!errors[name]}
      helperText={errors[name]}
      disabled={isSubmitting}
      {...options}
    />
  );

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Avatar sx={{ bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
      </Box>

      {submitMessage.type && (
        <Alert severity={submitMessage.type} sx={{ width: "100%", mb: 2 }}>
          {submitMessage.text}
        </Alert>
      )}

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          {renderTextField("firstName", "First Name", {
            autoFocus: true,
            autoComplete: "given-name",
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderTextField("lastName", "Last Name", {
            autoComplete: "family-name",
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderTextField("enterprise", "Enterprise", {
            autoComplete: "company-name",
          })}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderTextField("phone", "Phone", {
            type: "tel",
            autoComplete: "phone-number",
          })}
        </Grid>
        <Grid item xs={12}>
          {renderTextField("email", "Email Address", { autoComplete: "email" })}
        </Grid>
        <Grid item xs={12}>
          {renderTextField("password", "Password", {
            type: "password",
            autoComplete: "new-password",
          })}
        </Grid>
        <Grid item xs={12}>
          {renderTextField("confirmPassword", "Confirm Password", {
            type: "password",
          })}
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="acceptTerms"
                color="primary"
                checked={formData.acceptTerms}
                onChange={handleTerms}
                disabled={isSubmitting}
              />
            }
            label="I accept the terms and conditions"
          />
          {errors.acceptTerms && (
            <Typography color="error" variant="body2">
              {errors.acceptTerms}
            </Typography>
          )}
        </Grid>
      </Grid>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Signing Up..." : "Sign Up"}
        <SendIcon sx={{ ml: 1 }} />
      </Button>
    </Box>
  );
};

export default RegisterForm;
