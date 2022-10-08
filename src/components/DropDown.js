import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function DropDown() {
  const theme = "dark";
  const [region, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(region)
  };
  return (
    <>
      <FormControl sx={{ m:{sm:1,lg:1,md:1}, minWidth: 200 ,}} size="larg">
        <InputLabel id="demo-simple-select-helper-label" sx={{color:"#111517",fontSize:"14px",fontWeight:"600"}}>Filter By</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={region}
          label="Filter By"
          onChange={handleChange}
          className="dropDown"
    
        >
          <MenuItem value={"Africa"}>Africa</MenuItem>
          <MenuItem value={"Americas"}>Americas</MenuItem>
          <MenuItem value={"Europe"}>Europe</MenuItem>
          <MenuItem value={"Oceania"}>Oceania</MenuItem>
          <MenuItem value={"Asia"}>Asia</MenuItem>
          <MenuItem value={"Favourites"}>Favourites</MenuItem>
        </Select>
      </FormControl>

    </>)
}

export default DropDown;
