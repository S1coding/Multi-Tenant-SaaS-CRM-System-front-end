import React, { useState } from 'react';
import { 
  AppBar,
  Toolbar,
  IconButton,
  Typography
} from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';

const AppHeader = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'background.paper',
        color: 'text.primary',
        boxShadow: 'none',
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          sx={{ mr: 2 }}
        >
          <ComputerIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Multi-Tenant SaaS CRM System
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;