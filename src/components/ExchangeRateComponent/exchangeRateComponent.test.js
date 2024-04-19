import React from "react";
import { shallow, render, fireEvent, screen } from "@testing-library/react";
import ExchangeRateComponent from "./exchangeRateComponent";
import DatePicker from "../DatePicker/datePicker";

test("renders default currency table", () => {
  render(<ExchangeRateComponent />);
  const defaultCurrencies = ["USD", "EUR", "JPY", "CHF", "CAD", "AUD", "ZAR"];
  defaultCurrencies.forEach((currency) => {
    const currencyElement = screen.getByText(currency);
    expect(currencyElement).toBeInTheDocument();
  });
});

test("allows changing base currency", async () => {
  render(<ExchangeRateComponent />);
  const baseCurrencyDropdown = screen.getByLabelText("Base Currency");
  fireEvent.change(baseCurrencyDropdown, { target: { value: "USD" } });
  expect(baseCurrencyDropdown.value).toBe("USD");
});

test("allows adding new currency", async () => {
  render(<ExchangeRateComponent />);
  const addCurrencyButton = screen.getByText("Add Currency");
  fireEvent.click(addCurrencyButton);
  const newCurrencyDropdown = screen.getByLabelText("Add New Currency");
  fireEvent.change(newCurrencyDropdown, { target: { value: "GBP" } });
  expect(newCurrencyDropdown.value).toBe("GBP");
});

test("allows removing currency", async () => {
  render(<ExchangeRateComponent />);
  const removeCurrencyButtons = screen.getAllByText("Remove Currency");
  const initialCurrencyCount = removeCurrencyButtons.length;
  fireEvent.click(removeCurrencyButtons[0]);
  const updatedCurrencyCount = screen.getAllByText("Remove Currency").length;
  expect(updatedCurrencyCount).toBe(initialCurrencyCount - 1);
});

test("displays exchange rates for selected date", async () => {
  render(<ExchangeRateComponent />);
  const selectedDate = new Date("2024-04-19");
  const onDateChange = jest.fn();
  const datepicker = shallow(
    <DatePicker selectedDate={selectedDate} onDateChange={onDateChange} />
  );
  fireEvent.change(datepicker, { target: { value: "2024-02-27" } });
  const exchangeRateElements = await screen.findAllByText(/Exchange Rate:/);
  expect(exchangeRateElements.length).toBeGreaterThan(0);
});
