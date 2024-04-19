import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import CurrencySelection from "../CurrencySelection/currencySelection";
import DatePicker from "../DatePicker/datePicker";
import ExchangeRateTable from "../ExchangeRateTable/exchangeRateTable";

const ExchangeRateComponent = () => {
  const [baseCurrency, setBaseCurrency] = useState("GBP");
  const [selectedCurrencies, setSelectedCurrencies] = useState([
    "USD",
    "EUR",
    "JPY",
    "CHF",
    "CAD",
    "AUD",
    "ZAR",
  ]);
  const [allCurrencies, setAllCurrencies] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [exchangeRates, setExchangeRates] = useState({});
  const [ratesDataError, setRatesDataError] = useState(null);
  const [currenciesDataError, setCurrenciesDataError] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await fetch(
          "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"
        );
        const data = await response.json();
        const currencies = Object.keys(data);
        setAllCurrencies(currencies);
      } catch (error) {
        console.error(error);
        setCurrenciesDataError(error);
      }
    };

    fetchCurrencies();
  }, []);

  useEffect(() => {
    const fetchExchangeRatesData = async () => {
      try {
        const formattedDate = selectedDate.toISOString().slice(0, 10);
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${formattedDate}/v1/currencies/${baseCurrency.toLowerCase()}.json`
        );
        const data = await response.json();
        const result = data[baseCurrency.toLowerCase()];
        setExchangeRates(result);
      } catch (error) {
        console.error(error);
        setRatesDataError(error);
      }
    };

    fetchExchangeRatesData();
  }, [selectedDate, baseCurrency]);

  const refreshPage = () => {
    window.location.reload(false);
  };

  const handleBaseCurrencyChange = (currency) => {
    setBaseCurrency(currency);
  };

  const handleAddCurrency = (currency) => {
    if (
      selectedCurrencies.length < 7 &&
      !selectedCurrencies.includes(currency)
    ) {
      setSelectedCurrencies([...selectedCurrencies, currency.toUpperCase()]);
    }
  };

  const handleRemoveCurrency = (currency) => {
    setSelectedCurrencies(
      selectedCurrencies.filter((curr) => curr !== currency)
    );
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  if (ratesDataError || currenciesDataError) {
    return (
      <Box
        sx={{
          bgcolor: "#cfe8fc",
          width: "80%",
          height: "100px",
          padding: "20px",
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Unable to fetch the Currencies data from the server for the selected date!!!!!
        </Typography>
        <Button variant="contained" disableElevation onClick={refreshPage}>
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        bgcolor: "#cfe8fc",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ backgroundColor: "#9965dc" }}>
        <Typography
          variant="h1"
          gutterBottom
          sx={{ padding: "10px", textAlign: "center" }}
        >
          Exchange Rate App
        </Typography>
      </Box>
      <Box
        sx={{
          margin: "16px",
          width: "100%",
        }}
      >
        <DatePicker
          selectedDate={selectedDate}
          onDateChange={handleDateChange}
        />
      </Box>
      <Divider />
      <Box
        sx={{
          margin: "16px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CurrencySelection
          baseCurrency={baseCurrency}
          onBaseCurrencyChange={handleBaseCurrencyChange}
          allCurrencies={allCurrencies}
          selectedCurrencies={selectedCurrencies}
          onAddCurrency={handleAddCurrency}
          onRemoveCurrency={handleRemoveCurrency}
        />
      </Box>
      <Box sx={{ margin: "16px" }}>
        <ExchangeRateTable
          baseCurrency={baseCurrency}
          selectedCurrencies={selectedCurrencies}
          exchangeRates={exchangeRates}
        />
      </Box>
    </Box>
  );
};
export default ExchangeRateComponent;
