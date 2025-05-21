import React from 'react';
import { Box, Toolbar } from '@mui/material';
import AppHeader from './AppHeader';
import AppSidebar from './AppSideBar';

const AppLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <AppHeader />
      <AppSidebar />
      <Box
        component="main"
        sx={{ 
          flexGrow: 1, 
          p: 3,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;