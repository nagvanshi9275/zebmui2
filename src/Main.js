


import React from "react";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export default function Login() {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={12} style={{ maxWidth: '300px' }}>
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid>
      <Grid item xs={12} style={{ maxWidth: '300px' }}>
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid>
      <Grid item xs={12} style={{ maxWidth: '300px' }}>
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid>
      <Grid item xs={12} style={{ maxWidth: '300px' }}>
        <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid>
    </Grid>
  );
}








