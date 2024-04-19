import React from "react";
import PropTypes from "prop-types";
// import { DatePicker as MuiDatePicker } from '@mui/lab';
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Box, Typography, TextField } from "@mui/material";

const DatePicker = ({ selectedDate, onDateChange }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{ padding: "5px", borderBottom: "2px solid black" }}
      >
        Select a Date
        <Typography variant="span" sx={{ fontSize: "12px" }}>
          (To check the exchange rates against the base currency)
        </Typography>
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MuiDatePicker
          sx={{width: "40%"}}
          value={selectedDate}
          onChange={onDateChange}
          renderInput={(params) => <TextField {...params} />}
          format="yyyy/MM/dd"
        />
      </LocalizationProvider>
    </Box>
  );
};

DatePicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default DatePicker;
