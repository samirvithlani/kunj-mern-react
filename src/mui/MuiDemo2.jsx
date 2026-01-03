import { Box, Button, Fab, IconButton, Typography } from "@mui/material";
import React from "react";
import SendIcon from '@mui/icons-material/Send';
import FingerprintIcon from '@mui/icons-material/Fingerprint';

export const MuiDemo2 = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h3">BUTTON DEMO</Typography>
      <Button size="large">
        Test 1
      </Button>
      <Button variant="contained" size ="small">
        Test 1
      </Button>
      <Button variant="outlined" color="error">
        Test 1
      </Button>
      <Button variant="contained" startIcon={<SendIcon/>}>
        send
      </Button>
      <IconButton>
            <FingerprintIcon/>
      </IconButton>
      <Fab>
            <FingerprintIcon></FingerprintIcon>
      </Fab>
    </Box>
  );
};
