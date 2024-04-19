import React from 'react';
import { render, screen } from '@testing-library/react';
import ExchangeRateTable from './exchangeRateTable';

test('renders exchange rate table correctly', () => {
  const exchangeRates = {
    USD: 1.25,
    EUR: 1.15,
    JPY: 130.50,
    CHF: 1.10,
    CAD: 1.35,
    AUD: 1.40,
    ZAR: 20.00
  };
  const selectedCurrencies = Object.keys(exchangeRates);
  render(
    <ExchangeRateTable
      baseCurrency="GBP"
      selectedCurrencies={selectedCurrencies}
      exchangeRates={exchangeRates}
    />
  );

  selectedCurrencies.forEach(currency => {
    const currencyElement = screen.getByText(currency);
    expect(currencyElement).toBeInTheDocument();
  });

  const exchangeRateElements = screen.getAllByText(/(\d+(\.\d+)?)/);
  expect(exchangeRateElements.length).toBe(selectedCurrencies.length);
});