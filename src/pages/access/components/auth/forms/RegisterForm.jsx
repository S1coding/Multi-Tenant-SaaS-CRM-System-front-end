import React, { useState } from 'react';
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  FormControlLabel,
  Checkbox,
  Typography,
  Alert
} from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SendIcon from '@mui/icons-material/Send';
import { validateRegisterForm } from '../formValidation';
import { registerTenant } from '../../../../../features/tenantService';

const RegisterForm = () => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    eterprise: "", // Keep this as is to maintain existing data structure
    phone: "",
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: null, text: null });

  const handleTerms = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'acceptTerms' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset submission state
    setSubmitMessage({ type: null, text: null });
    
    const validationErrors = validateRegisterForm(formData);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Structure the data exactly as expected by your backend
        const response = await registerTenant({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          company: formData.eterprise, // This maps to company on the backend
          phoneNumber: formData.phone  // This maps to phoneNumber on the backend
        });
        
        console.log('Registration successful:', response);
        setSubmitMessage({ 
          type: 'success', 
          text: 'Registration successful! You can now log in.' 
        });
        
        // Optional: Reset form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          eterprise: "",
          phone: "",
          password: '',
          confirmPassword: '',
          acceptTerms: false,
        });
      } catch (error) {
        console.error('Registration failed:', error);
        setSubmitMessage({ 
          type: 'error', 
          text: error.message || 'Registration failed. Please try again.' 
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <Avatar sx={{ bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
      </Box>
      
      {submitMessage.type && (
        <Alert 
          severity={submitMessage.type} 
          sx={{ width: '100%', mb: 2 }}
        >
          {submitMessage.text}
        </Alert>
      )}
      
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            value={formData.firstName}
            onChange={handleTerms}
            error={!!errors.firstName}
            helperText={errors.firstName}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            value={formData.lastName}
            onChange={handleTerms}
            error={!!errors.lastName}
            helperText={errors.lastName}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="eterprise"
            label="Enterprise"
            name="eterprise"
            autoComplete="company-name"
            value={formData.eterprise}
            onChange={handleTerms}
            error={!!errors.eterprise}
            helperText={errors.eterprise}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            type="tel"
            id="phone"
            label="Phone"
            name="phone"
            autoComplete="phone-number"
            value={formData.phone}
            onChange={handleTerms}
            error={!!errors.phone}
            helperText={errors.phone}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleTerms}
            error={!!errors.email}
            helperText={errors.email}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
            value={formData.password}
            onChange={handleTerms}
            error={!!errors.password}
            helperText={errors.password}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleTerms}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="acceptTerms"
                color="primary"
                checked={formData.acceptTerms}
                onChange={handleTerms}
              />
            }
            label="I accept the terms and conditions"
            disabled={isSubmitting}
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
        {isSubmitting ? 'Signing Up...' : 'Sign Up'}
        <SendIcon style={{marginLeft:"10px"}} />
      </Button>
    </Box>
  );
};

export default RegisterForm;