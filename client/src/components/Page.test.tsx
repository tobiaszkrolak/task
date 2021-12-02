import React from "react";
import { render } from "@testing-library/react";
import Page, { TEST_IDS } from "./Page";

const defaultProps = {
  header: "header",
  footer: "footer",
  children: "content",
  sidebar: "sidebar",
};

const PageFactory = () => <Page {...defaultProps} />;

test("Renders properly header", () => {
  const { getByTestId } = render(<PageFactory />);

  expect(getByTestId(TEST_IDS.header)).toHaveTextContent(defaultProps.header);
});

test("Renders properly footer", () => {
  const { getByTestId } = render(<PageFactory />);

  expect(getByTestId(TEST_IDS.footer)).toHaveTextContent(defaultProps.footer);
});

test("Renders properly content", () => {
  const { getByTestId } = render(<PageFactory />);

  expect(getByTestId(TEST_IDS.content)).toHaveTextContent(
    defaultProps.children
  );
});

test("Renders properly sidebar", () => {
  const { getByTestId } = render(<PageFactory />);

  expect(getByTestId(TEST_IDS.sidebar)).toHaveTextContent(defaultProps.sidebar);
});
