import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  People as PeopleIcon,
  Settings as SettingsIcon,
  Dashboard as DashboardIcon,
  ExitToApp as ExitToAppIcon,
  LocalOffer as LocalOfferIcon,
  FormatListNumbered as FormatListNumberedIcon,
  Assessment as AssessmentIcon
} from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
const iconComponents = {
  DashboardIcon: <DashboardIcon />,
  PeopleIcon: <PeopleIcon />,
  SettingsIcon: <SettingsIcon />,
  ExitToAppIcon: <ExitToAppIcon />,
  LocalOfferIcon: <LocalOfferIcon />,
  FormatListNumberedIcon: <FormatListNumberedIcon />,
  AssessmentIcon: <AssessmentIcon />
};

const SidebarItem = ({ text, icon, active }) => {
  const navigate = useNavigate();

  return (
    <ListItem 
      button 
      selected={active}
      onClick = {() => navigate(`/${text}`)}
      sx={{
        '&.Mui-selected': {
          backgroundColor: 'action.selected',
          '&:hover': {
            backgroundColor: 'action.selected',
          }
        }
      }}
    >
      <ListItemIcon sx={{ color: 'inherit' }}>
        {iconComponents[icon]}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  );
};

export default SidebarItem;