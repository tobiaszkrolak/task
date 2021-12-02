import React from "react";
import { render } from "@testing-library/react";
import ProductCategoriesLinks from "./ProductCategoriesLinks";

test("Renders links with proper href", () => {
  const categories = [
    {
      id: "1",
      name: "Link",
      urlPath: "url",
    },
  ];
  
  const { getByText } = render(
    <ProductCategoriesLinks categories={categories} />
  );

  expect(getByText(categories[0].name)).toHaveAttribute(
    "href",
    "/" + categories[0].urlPath
  );
});
