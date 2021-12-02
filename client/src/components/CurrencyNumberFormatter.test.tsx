import React from "react";
import { render } from "@testing-library/react";
import CurrencyNumberFormatter from "./CurrencyNumberFormatter";

test("renders the - if value is missing", () => {
  const { getByText } = render(<CurrencyNumberFormatter />);
  const missingValueIdentifier = getByText("-");
  expect(missingValueIdentifier).toBeInTheDocument();
});

test("renders formatted value", () => {
  const value = 5;
  const { getByText } = render(<CurrencyNumberFormatter value={value} />);
  const formattedValue = getByText(`${value},00 €`);
  expect(formattedValue).toBeInTheDocument();
});
