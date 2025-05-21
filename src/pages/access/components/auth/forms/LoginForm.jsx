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
import { validateLoginForm } from '../formValidation';
import { generateJwt } from '../../../../../features/tenantService';
import { saveToken, getToken, removeToken} from '../../../../../utility/jwtStorage';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: null, text: null });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'rememberMe' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset submission state
    setSubmitMessage({ type: null, text: null });
    
    const validationErrors = validateLoginForm(formData);
    setErrors(validationErrors);
    
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Structure the data exactly as expected by your backend
        const response = await generateJwt({
          email: formData.email,
          password: formData.password,
          rememberMe: formData.rememberMe
        });
        
        console.log('Login successful:', response);
        saveToken(response.token)
        setSubmitMessage({ 
          type: 'success', 
          text: 'Login successful! Redirecting...' 
        });
        navigate("/dashboard");
        
        // Here you would typically handle redirect or token storage
        // For example: localStorage.setItem('token', response.token);
        
      } catch (error) {
        console.error('Login failed:', error);
        setSubmitMessage({ 
          type: 'error', 
          text: error.message || 'Invalid email or password. Please try again.' 
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
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            disabled={isSubmitting}
            autoFocus
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
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                name="rememberMe"
                color="primary"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
            }
            label="Remember me"
            disabled={isSubmitting}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Signing In...' : 'Sign In'}
        <SendIcon style={{marginLeft:"10px"}} />
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Typography variant="body2" color="text.secondary">
            <Button
              component="a"
              variant="text"
              size="small"
              sx={{ textTransform: 'none', p: 0 }}
              href="/forgot-password"
            >
              Forgot password?
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;