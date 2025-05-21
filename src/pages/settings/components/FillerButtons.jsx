import React, { useState } from "react";
import { 
  Button, 
  Box, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  Typography 
} from "@mui/material";

const FillerButton = ({ buttonText }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => setIsDialogOpen(true);
  const handleCloseDialog = () => setIsDialogOpen(false);

  return (
    <>
      <Box display="flex" justifyContent="flex-start">
        <Button 
          variant="outlined" 
          sx={{ width: "auto" }}
          onClick={handleOpenDialog}
        >
          {buttonText}
        </Button>
      </Box>

      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Feature in Development</DialogTitle>
        <DialogContent>
          <Typography variant="overline">
            This button has no functionality yet
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FillerButton;
