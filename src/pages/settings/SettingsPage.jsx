import React from "react";
import { Stack, Button, Box } from "@mui/material";
import AppLayout from "../components/AppLayout";
import AccountSettings from "./components/AccountSettings";
import FillerButton from "./components/FillerButtons";

const SettingsPage = () => {
  return (
    <AppLayout>
      <Stack spacing={2}>
        <AccountSettings />

        <FillerButton buttonText="delete account" />
         <FillerButton buttonText="privacy settings" />
      </Stack>
    </AppLayout>
  );
};

export default SettingsPage;
