import React from "react";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { CATEGORY_WITH_PRODUCTS_QUERY } from "./categories";

const result = {
  data: {
    categories: [
      {
        name: "Möbel",
        articleCount: 75091,
        childrenCategories: [
          {
            id: "156154",
            name: "Wohnzimmer",
            urlPath: "kategorie/wohnzimmermoebel/",
            __typename: "Category",
          },
        ],
        categoryArticles: {
          articles: [
            {
              name: "Premium Komfortmatratze Smood",
              variantName: "180 x 200cm",
              prices: {
                currency: "EUR",
                regular: { value: 56999, __typename: "ArticleRegularPrice" },
                __typename: "ArticlePrices",
              },
              images: [
                {
                  path: "https://cdn1.home24.net/images/media/catalog/product/200x200/png/m/a/matratzenbezug-smood-webstoff-180-x-200cm-3477221.webp",
                  __typename: "ArticleGalleryImage",
                },
              ],
              __typename: "Article",
            },
          ],
          __typename: "CategoryArticles",
        },
        __typename: "Category",
      },
    ],
  },
};

export const mock = [
  {
    request: {
      query: CATEGORY_WITH_PRODUCTS_QUERY,
    },
    result,
  },
];
