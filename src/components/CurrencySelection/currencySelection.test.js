import { render, screen } from "@testing-library/react";
import CurrencySelection from "./currencySelection";

test("CurrencySelection component renders correctly", () => {
  const baseCurrency = "USD";
  const selectedCurrencies = ["EUR", "GBP"];
  const onBaseCurrencyChange = jest.fn();
  const onAddCurrency = jest.fn();
  const onRemoveCurrency = jest.fn();

  render(
    <CurrencySelection
      baseCurrency={baseCurrency}
      onBaseCurrencyChange={onBaseCurrencyChange}
      selectedCurrencies={selectedCurrencies}
      onAddCurrency={onAddCurrency}
      onRemoveCurrency={onRemoveCurrency}
    />
  );

  // Check if base currency label is rendered
  expect(screen.getByLabelText("Base Currency")).toBeInTheDocument();

  // Check if base currency value is rendered
  expect(screen.getByText("USD")).toBeInTheDocument();

  // Check if selected currencies are rendered
  expect(screen.getByText("EUR")).toBeInTheDocument();
  expect(screen.getByText("GBP")).toBeInTheDocument();

  // Check if "Add Currency" button is rendered
  expect(screen.getByText("Add Currency")).toBeInTheDocument();

  // Check if "Remove Currency" button is rendered
  expect(screen.getByText("Remove Currency")).toBeInTheDocument();
});
