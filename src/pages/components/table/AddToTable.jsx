import { postToServer } from "../../../features/genericRequest";
import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack,
  Typography,
  CircularProgress
} from '@mui/material';

const AddToTable = (props) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  
  const initialObjectState = props.object || {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    company: '',
    position: '',
    notes: '',
    tenant: ''
  };

  const [newObject, setNewObject] = useState(initialObjectState);
  const requiredFields = Object.keys(newObject);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setNewObject(initialObjectState);
    setError(null);
  };

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setNewObject(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      await postToServer(props.addEndpoint, newObject); 
      handleClose();
    } catch (err) {
      setError(err.message || 'Failed to get report');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = requiredFields.every(field => newObject[field].trim());

  // Function to generate label from field name
  const getLabel = (fieldName) => {
    return fieldName
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
  };

  return (
    <>
      <Button 
        variant="outlined" 
        onClick={handleOpen}
        sx={{ mb: 2 }}
      >
        Add New Row
      </Button>
      <Typography variant="overline" style={{marginLeft:"20px"}}>
        Refresh after adding row
      </Typography>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Add New Object</DialogTitle>
        
        <DialogContent>
          <Stack spacing={3} sx={{ mt: 1 }}>
            {Object.entries(newObject).map(([fieldName, value]) => (
              <TextField
                key={fieldName}
                name={fieldName}
                label={`${getLabel(fieldName)}${requiredFields.includes(fieldName) ? ' *' : ''}`}
                value={value}
                onChange={handleTextChange}
                fullWidth
                multiline={fieldName === 'notes'}
                rows={fieldName === 'notes' ? 3 : undefined}
                type={fieldName === 'email' ? 'email' : 'text'}
              />
            ))}
          </Stack>

          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit} 
            variant="contained"
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? <CircularProgress size={24} /> : 'Add Contact'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddToTable;