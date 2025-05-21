import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  CircularProgress,
  Box,
} from "@mui/material";
import { getToServer } from "../../../features/genericRequest";
import AddToTable from "./AddToTable";

const TableData = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getToServer(props.forEndpoint);
        setData(response);
      } catch (err) {
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString() + " " + date.toLocaleTimeString();
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={2}>
        <Typography color="error">
          Access denied {"➡️"} {error}
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <TableContainer>
        <Table
          sx={{
            minWidth: 650,
            "& .MuiTableCell-root": {
              borderColor: "divider",
            },
          }}
          aria-label="data table"
        >
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "grey.50",
                "& th": { fontWeight: "bold" },
              }}
            >
              {Object.keys(props.object).map((key) => (
                <TableCell key={key}>
                  {key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((dataField) => (
              <TableRow
                key={dataField.id}
                hover
                onClick={() => props.onRowClick?.(dataField)} // Call onRowClick if provided
                sx={{
                  "&:last-child td": { borderBottom: 0 },
                  "&:hover": {
                    backgroundColor: "action.hover",
                    cursor: "pointer",
                  },
                }}
              >
                {Object.keys(props.object).map((key) => (
                  <TableCell key={key}>
                    {["createdAt", "updatedAt"].includes(key)
                      ? formatDate(dataField[key])
                      : dataField[key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddToTable object={props.object} addEndpoint={props.addEndpoint} />
    </>
  );
};

export default TableData;
