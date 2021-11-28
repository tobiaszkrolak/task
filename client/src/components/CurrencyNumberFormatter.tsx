import React, { FunctionComponent } from "react";

export type Props = { value?: number };

const formatterConfig = {
  locale: "de-DE",
  currency: "EUR",
};

const { locale, currency } = formatterConfig;
const formatter = new Intl.NumberFormat(locale, {
  style: "currency",
  currency,
});

const CurrencyNumberFormatter: FunctionComponent<Props> = ({ value }) => (
  <>{value ? formatter.format(value) : "-"}</>
);

export default CurrencyNumberFormatter;
