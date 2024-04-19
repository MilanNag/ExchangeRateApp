import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';

const ExchangeRateTable = ({ baseCurrency, selectedCurrencies, exchangeRates }) => {
  return (
    <TableContainer component={Paper}>
      <Typography variant="h2" gutterBottom sx={{paddingLeft: "12px", borderBottom: "2px dotted black"}}>
        Base Currency: {baseCurrency}
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{padding: "24px", fontSize:"16px", fontWeight: "bold"}}>Currency</TableCell>
            <TableCell sx={{padding: "24px", fontSize:"16px", fontWeight: "bold"}}>Exchange Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedCurrencies.map(currency => (
            <TableRow key={currency}>
              <TableCell sx={{padding: "35px", fontSize:"12px"}}>{currency}</TableCell>
              <TableCell sx={{padding: "35px", fontSize:"12px"}}>{exchangeRates[currency.toLowerCase()]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExchangeRateTable;