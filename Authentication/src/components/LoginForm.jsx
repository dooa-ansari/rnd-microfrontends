import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function LoginForm() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Username"
        />
        <TextField
          required
          id="outlined-disabled"
          label="Required"
          defaultValue="Password"
        />
      
      </div>
      <Button style={{marginLeft: 300}} variant="contained" disableElevation>
          Login
      </Button>
    </Box>
  );
}


