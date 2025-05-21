import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import TableData from './TableData';
import RowUpdater from './TableRowUpdater';

const TableDisplayer = (props) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (rowData) => {
    setSelectedRow(rowData);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedRow(null);
  };

  return (
    <Container maxWidth="lg" sx={{ }}>
      <Paper elevation={0} sx={{
        backgroundColor: 'background.paper'
      }}>
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}
        >
          {props.icon || <PeopleIcon color="primary" />}
          {props.tableName || 'Table name'}
        </Typography>

        <TableData
          object={props.object}
          forEndpoint={props.forEndpoint}
          addEndpoint={props.addEndpoint}
          onRowClick={handleRowClick} // 👈 pass handler
        />
      </Paper>

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Edit Row</DialogTitle>
        <DialogContent dividers>
          {selectedRow && (
            <RowUpdater
              initialObject={selectedRow}
              endpoint={props.forEndpoint}
              updateEndpoint={props.updateEndpoint}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default TableDisplayer;
