import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import TableChartIcon from "@mui/icons-material/TableChart";
import InfoIcon from "@mui/icons-material/Info";
import ListAltIcon from "@mui/icons-material/ListAlt";

const Dashboard = () => {
  return (
    <Container maxWidth="md" sx={{}}>
      <Paper elevation={0} sx={{}}>
        <Box display="flex" alignItems="center" gap={2} mb={2}>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <TableChartIcon fontSize="large" />
            Dashboard
          </Typography>
        </Box>

        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          This web app is not designed for mobile devices. Please use a desktop
          or laptop for the best experience.
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box>
              <InfoIcon sx={{ fontSize: 30, mb: 1 }} />
              <Typography variant="h6" sx={{ mb: 1 }}>
                What You Can Do
              </Typography>
              <List dense sx={{ pl: 1 }}>
                <ListItem>
                  <ListItemText primary="View existing records" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Add new entries" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Update selected fields" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Understand the system" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Manage your account" />
                </ListItem>
              </List>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box>
              <ListAltIcon sx={{ fontSize: 30, mb: 1 }} />
              <Typography variant="h6" sx={{ mb: 1 }}>
                Table Categories
              </Typography>
              <List dense sx={{ pl: 1 }}>
                <ListItem>
                  <ListItemText primary="Deals and Contacts" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Tasks and Activities" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Reports and Logs" />
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="overline">
          To make an account hit exit on the left and then sign up
        </Typography>
      </Paper>
    </Container>
  );
};

export default Dashboard;
