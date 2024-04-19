import React from "react";
import { shallow, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import DatePicker from "./datePicker";

const selectedDate = new Date("2024-04-19");
const onDateChange = jest.fn();
render(<DatePicker selectedDate={selectedDate} onDateChange={onDateChange} />);

test("renders with correct initial value", () => {
  const inputElement = screen.getByDisplayValue("2024-04-19");
  expect(inputElement).toBeInTheDocument();
});

test("calls onDateChange when date is selected", () => {
  const datePicker = shallow(
    <DatePicker selectedDate={selectedDate} onDateChange={onDateChange} />
  );
  fireEvent.change(datePicker, { target: { value: "2024-04-19" } });
  expect(onDateChange).toHaveBeenCalledTimes(1);
});
