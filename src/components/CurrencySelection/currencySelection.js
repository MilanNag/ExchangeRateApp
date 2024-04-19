import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DropdownSelect from "./dropdownSelect";

const CurrencySelection = ({
  baseCurrency,
  onBaseCurrencyChange,
  allCurrencies,
  selectedCurrencies,
  onAddCurrency,
  onRemoveCurrency,
}) => {
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
      <Box>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ padding: "5px", borderBottom: "2px solid black" }}
      >
      Select a Base Currency
      </Typography>
        <FormControl sx={{ margin: "20px" }}>
          <InputLabel id="base-currency-label" sx={{ fontSize: "12px" }}>
            Base Currency
          </InputLabel>
          <Select
            labelId="base-currency-label"
            id="base-currency-select"
            value={baseCurrency}
            onChange={(event) => onBaseCurrencyChange(event.target.value)}
            sx={{ width: "150px" }}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"GBP"}>GBP</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ padding: "5px", borderBottom: "2px solid black" }}
      >
      List of Selected Currencies
      </Typography>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          height: "150px",
          margin: "20px",
          bgcolor: "background.paper",
          overflowY: "scroll",
        }}
      >
        {selectedCurrencies.map((currency) => (
          <ListItem key={currency}>
            <ListItemText primary={currency} sx={{fontSize: "16px !important"}} />
            <ListItemAvatar>
              <Avatar sx={{ cursor: "pointer" }}>
                <DeleteOutlineIcon onClick={() => onRemoveCurrency(currency)} />
              </Avatar>
            </ListItemAvatar>
          </ListItem>
        ))}
      </List>
      <DropdownSelect options={allCurrencies} onSelect={onAddCurrency} />
    </Box>
  );
};
export default CurrencySelection;
