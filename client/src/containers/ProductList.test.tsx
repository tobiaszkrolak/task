import React from "react";
import { render, waitFor } from "@testing-library/react";
import ProductList, { CATEGORY_TITLE_TEST_ID } from "./ProductList";
import {
  CategoriesMock,
  result as categoriesResult,
} from "api/categories.test";

test("Renders items, links, heading properly", async () => {
  const { getByText, getByTestId } = render(
    <CategoriesMock>
      <ProductList />
    </CategoriesMock>
  );

  const firstCategory = categoriesResult.data.categories[0];

  const categoryName = firstCategory.name;

  await waitFor(() => getByText(categoryName));

  const heading = getByTestId(CATEGORY_TITLE_TEST_ID);
  expect(heading).toHaveTextContent(categoryName);

  const articleName = getByText(
    firstCategory.categoryArticles.articles[0].name
  );
  expect(articleName).toBeInTheDocument();

  const childCatName = getByText(firstCategory.childrenCategories[0].name);
  expect(childCatName).toBeInTheDocument();
});
