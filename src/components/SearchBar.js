import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {Link} from 'react-router-dom'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { FormControl, InputAdornment, InputLabel, OutlinedInput, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const SearchBar = ({ value, onChange, onSearch })=> {

 
const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(value);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed"  component="nav">
        <Toolbar style={{display:'flex',justifyContent:'space-between'}}>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-search"
            type='text'
            value={value}
            onChange={onChange}
            onKeyDown={handleKeyPress}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle search"
                  o 
                  edge="end"
                  onClick={() => onSearch(value)}
                >
                 <Link to= "/"><SearchOutlinedIcon/></Link>  
                </IconButton >
              </InputAdornment>
            }
            label="Search"
          />
        </FormControl>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


 

export default SearchBar;
