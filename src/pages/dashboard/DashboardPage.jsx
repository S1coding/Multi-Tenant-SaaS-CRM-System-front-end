import React from "react";
import AppLayout from "../components/AppLayout";
import { Stack } from "@mui/material";
import Dashboard from "./components/Dashboard";

const DashboardPage = () => {
  return (
    <AppLayout>
      <Stack spacing={2}>
        <Dashboard />
      </Stack>
    </AppLayout>
  );
};

export default DashboardPage;
