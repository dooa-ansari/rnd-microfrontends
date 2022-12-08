import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DATA } from '../Data';

export default function Search() {
  const [name, setName] = React.useState('Cat in the Hat');
  const [filteredData, setFilteredData] = React.useState([]);
  const handleChange = (event) => {
    setName(event.target.value);
    const data = DATA.filter((item => item.name.startsWith(event.target.value)));
    setFilteredData(data);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={{backgroundColor: "#FC8EAC",
      padding: 25
    
    }}
    >
      <TextField
        id="outlined-name"
        label="Search Products"
        value={name}
        onChange={handleChange}
        style={{color: "white"}}
      />
      {
        filteredData.map((item)=> {
            return <p>{item.name}</p>
        })
      }
    </Box>
  );
}
