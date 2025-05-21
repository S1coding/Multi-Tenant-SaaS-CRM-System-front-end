import React, { useState } from 'react';
import { Button, Paper, Typography } from '@mui/material';
import TenantUpdateForm from './TenantUpdateForm';

const AccountSettings = () => {
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);

  return (
    <Paper elevation={0} sx={{}}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Account Settings
      </Typography>
      
      <Button 
        variant="outlined"
        onClick={() => setIsUpdateFormOpen(true)}
      >
        Update Account Details
      </Button>

      <TenantUpdateForm 
        open={isUpdateFormOpen}
        onClose={() => setIsUpdateFormOpen(false)}
      />
    </Paper>
  );
};

export default AccountSettings;