import React, { useState, useEffect } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TextField,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { getToServer, postToServer } from "../../../features/genericRequest";

const objectToEntries = (obj) =>
  Object.entries(obj).map(([key, value]) => ({ key, value }));

const TableRowEditor = ({ entry, index, onValueChange }) => (
  <TableRow>
    <TableCell>{entry.key}</TableCell>
    <TableCell>
      <TextField
        variant="standard"
        style={{
          width: "100%",
          border: "none",
          borderBottom: "1px solid #ccc",
        }}
        value={entry.value ?? ""}
        onChange={(e) => onValueChange(index, e.target.value)}
      />
    </TableCell>
  </TableRow>
);

const RowUpdater = ({ initialObject, endpoint, updateEndpoint }) => {
  const [entries, setEntries] = useState(objectToEntries(initialObject));

  const updateCellValue = (index, newValue) => {
    setEntries((prev) =>
      prev.map((entry, i) =>
        i === index ? { ...entry, value: newValue } : entry
      )
    );
  };

  const sendUpdatedRow = async () => {
    console.log("Updating row with data:", entries);
    const combined = entries.reduce((acc, { key, value }) => {
      acc[key] = value;
      return acc;
    }, {});
    console.log("Updated object:", combined);
    const response = await postToServer(updateEndpoint, combined);
    if (response) {
      console.log("Row updated successfully:", response);
    } else {
      console.error("Failed to update row");
    }
  };

  return (
    <>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ maxWidth: 800, mb: 2 }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Property</strong>
              </TableCell>
              <TableCell>
                <strong>Value</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {entries.map((entry, index) => (
              <TableRowEditor
                key={entry.key}
                entry={entry}
                index={index}
                onValueChange={updateCellValue}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="outlined" onClick={sendUpdatedRow}>
        Update Row
      </Button>
    </>
  );
};

export default RowUpdater;
