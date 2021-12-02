import React from "react";
import { render, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import ProductList from "./ProductList";
import { mock } from "api/categories-mock";

test("Renders mocked items properly", async () => {
  const { getByText } = render(
    <MockedProvider mocks={mock}>
      <ProductList />
    </MockedProvider>
  );

  await waitFor(() => getByText("Möbel"));

  const heading = getByText("Möbel");
  expect(heading).toBeInTheDocument();

  const firstArticleName = getByText("Premium Komfortmatratze Smood");
  expect(firstArticleName).toBeInTheDocument();
});
