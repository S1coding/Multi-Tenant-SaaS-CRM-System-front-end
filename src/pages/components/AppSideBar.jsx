import React from "react";
import { Box, Drawer, List, Toolbar, Typography } from "@mui/material";
import SidebarItem from "./SidebarItem";
import AppVersion from "./AppVersion";

const drawerWidth = 240;

const menuItems = [
  { text: "dashboard", icon: "DashboardIcon" },
  { text: "contacts", icon: "PeopleIcon", active: true },
  { text: "deals", icon: "LocalOfferIcon", active: true },
  { text: "tasks", icon: "FormatListNumberedIcon", active: true },
  { text: "reports", icon: "AssessmentIcon", active: true },
  { text: "settings", icon: "SettingsIcon" },
  { text: "exit", icon: "ExitToAppIcon" },
];

const AppSidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        borderRight: "1px solid lightgray",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderRight: "none",
          backgroundColor: "background.paper",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {menuItems.map((item) => (
            <div style={{ cursor: "pointer" }}>
              <SidebarItem
                key={item.text}
                text={item.text}
                icon={item.icon}
                active={item.active}
                onClick={() => console.log(item.text)}
              />
            </div>
          ))}
        </List>
      </Box>
      <AppVersion />
    </Drawer>
  );
};

export default AppSidebar;
