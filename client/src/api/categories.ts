import { useMemo } from "react";
import { useQuery, gql } from "@apollo/client";

export type Category = {
  name: string;
  categoryArticles: CategoryArticle;
  articleCount: number;
  childrenCategories: ChildCategory[];
};

export type CategoryArticle = {
  articles: Article[];
};

export type ChildCategory = {
  id: string;
  name: string;
  urlPath: string;
};

export type Article = {
  name: string;
  variantName: string;
  prices: Prices;
  images: Image[];
};

export type Prices = {
  currency: string;
  regular: {
    value: number;
  };
};

export type Image = {
  path: string;
};

const CATEGORY_WITH_PRODUCTS = gql`
  {
    categories(ids: "156126", locale: de_DE) {
      name
      articleCount
      childrenCategories {
        id
        name
        urlPath
      }
      categoryArticles(first: 50) {
        articles {
          name
          variantName
          prices {
            currency
            regular {
              value
            }
          }
          images(format: WEBP, maxWidth: 200, maxHeight: 200, limit: 1) {
            path
          }
        }
      }
    }
  }
`;

export const useGetCategoryWithProducts = () => {
  const { data, ...rest } = useQuery<{
    categories: Category[];
  }>(CATEGORY_WITH_PRODUCTS);

  const firstCategory = useMemo(
    () => (data?.categories?.length ? data.categories[0] : undefined),
    [data]
  );

  return {
    ...rest,
    data: firstCategory,
  };
};
