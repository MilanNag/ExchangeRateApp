import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const DropdownSelect = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleApplyClick = () => {
    onSelect(selectedOption);
  };

  return (
    <Box sx={{display: "flex", flexDirection: "column"}}>
      <Typography variant="h3" gutterBottom sx={{padding: "5px", borderBottom: "2px solid black", marginBottom: "25px"}}>
        Add Currency
        <Typography variant="span" sx={{fontSize: "12px"}}>
        (Applies if selected currencies are less than 7)
      </Typography>
      </Typography>     
      <FormControl>
        <InputLabel id="dropdown-select-label" sx={{fontSize:"12px"}}>Select an Currency to Add</InputLabel>
        <Select
          labelId="dropdown-select-label"
          id="dropdown-select"
          value={selectedOption}
          onChange={handleChange}
          sx={{width: "100%", marginRight: "20px"}}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option} sx={{textTransform: "uppercase", fontSize: "16px"}}>
              {option.toUpperCase()}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button onClick={handleApplyClick} variant="contained" color="primary" sx={{position: "relative", top: "10px"}}>
        Add Currency
      </Button>
    </Box>
  );
};

export default DropdownSelect;
