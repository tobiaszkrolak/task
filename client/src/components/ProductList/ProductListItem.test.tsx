import React from "react";
import { render } from "@testing-library/react";
import ProductListItem, { Props, TEST_IDS } from "./ProductListItem";

const defaultProps = {
  name: "Name",
  imageUrl: "url",
  price: 5,
};

const ProductListItemFactory = (props: Partial<Props>) => (
  <ProductListItem {...defaultProps} {...props} />
);

test("Renders name properly", () => {
  const name = "Some name";

  const { getByTestId } = render(<ProductListItemFactory name={name} />);

  expect(getByTestId(TEST_IDS.name)).toHaveTextContent(name);
});

test("Renders image properly", () => {
  const imageUrl = "imageUrl";

  const { getByTestId } = render(
    <ProductListItemFactory imageUrl={imageUrl} />
  );

  expect(getByTestId(TEST_IDS.image)).toHaveAttribute("src", imageUrl);
});

test("Renders properly price", () => {
  const price = 3;

  const { getByTestId } = render(<ProductListItemFactory price={price} />);

  expect(getByTestId(TEST_IDS.price)).toHaveTextContent(String(price));
});
