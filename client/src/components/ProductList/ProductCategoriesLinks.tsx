/** @jsx jsx */
/* @jsxFrag React.Fragment */
import { FunctionComponent } from "react";
import { ChildCategory } from "api/categories";
import { jsx } from "@emotion/react";

const ProductCategoriesLinks: FunctionComponent<{
  categories: ChildCategory[];
}> = ({ categories }) => (
  <nav>
    <ul
      css={{
        listStyleType: "none",
        margin: 0,
        padding: 0,
      }}
    >
      {categories.map(({ name, id, urlPath }) => (
        <li
          key={id}
          css={{
            margin: "0 0 0 8px",
            padding: "8px 0",
          }}
        >
          <a href={`/${urlPath}`}>{name}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default ProductCategoriesLinks;
