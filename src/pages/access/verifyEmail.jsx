import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const VerifyEmail = () => (
  <Box sx={{ mt: 12, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Typography variant="h6" sx={{ mb: 1, textAlign: 'center' }}>
      Thank you for registering!
    </Typography>
    <Typography variant="body2" sx={{ mb: 2, textAlign: 'center', maxWidth: 320 }} color="text.secondary">
      Please verify your account via the link sent to your email address.
    </Typography>
    <Link component={RouterLink} to="/dashboard" variant="body2" underline="hover">
      Go to Dashboard
    </Link>
  </Box>
);

export default VerifyEmail;
