import React from "react";
import { Stack } from "@mui/material";
import AppLayout from "../components/AppLayout";
import TableDisplayer from "../components/table/TableDisplayer";
import DownloadReportButton from "./components/ReportPdfDownloader";
import { Typography } from "@mui/material";
import { Assessment, Assessment as AssessmentIcon } from "@mui/icons-material";

const initialObjectState = {
  title: "",
  notes: "",
  forProject: "",
  madeBy: "",
};
const ReportsPage = () => {
  return (
    <AppLayout>
      <Stack spacing={2}>
        <DownloadReportButton projectName="CRM Upgrade Phase 2" /> 
        <Typography variant="overline" >Downloads last updated report</Typography>
        <TableDisplayer
          tableName="Reports"
          icon={<AssessmentIcon />}
          object={initialObjectState}
          forEndpoint={"REPORTS_TENANT"}
          addEndpoint={"REPORT_ADD"}
          updateEndpoint={"REPORT_UPDATE"}
          deleteEndpoint={"REPORT_DELETE"} //too add soon
        />
      </Stack>
    </AppLayout>
  );
};

export default ReportsPage;
