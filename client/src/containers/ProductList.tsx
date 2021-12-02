/** @jsx jsx */
/* @jsxFrag React.Fragment */
import React, { useMemo, useCallback } from "react";
import Page from "components/Page";
import ProductListItem from "components/ProductList/ProductListItem";
import { useGetCategoryWithProducts, Article } from "api/categories";
import LoadingIndicator from "components/LoadingIndicator";
import { jsx } from "@emotion/react";
import List from "components/GenericList";
import ProductCategoriesLinks from "components/ProductList/ProductCategoriesLinks";

const ProductList = () => {
  const { loading, data: category, ...query } = useGetCategoryWithProducts();

  const products = useMemo(() => {
    if (!category) return [];

    return category.categoryArticles.articles;
  }, [category]);

  const productRenderer = useCallback(
    ({ name, variantName, images, prices }: Article) => (
      <ProductListItem
        key={name + variantName}
        name={name}
        imageUrl={images.length ? images[0].path : undefined}
        price={prices.regular.value / 100}
      />
    ),
    []
  );

  return (
    <Page
      header={
        <>
          <strong>home24</strong>
          <input
            placeholder="Search"
            css={{
              float: "right",
            }}
          />
        </>
      }
      sidebar={
        <>
          <h3>Kategorien</h3>
          <LoadingIndicator loading={loading}>
            {!!category && (
              <ProductCategoriesLinks
                categories={category.childrenCategories}
              />
            )}
          </LoadingIndicator>
        </>
      }
      footer={
        <p>
          Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
          Versandkosten.
        </p>
      }
    >
      <section>
        {!!category && (
          <h1>
            {category.name}
            <small> ({category.articleCount})</small>
          </h1>
        )}
        <List
          loading={loading}
          data={products}
          itemRenderer={productRenderer}
          {...query}
        />
      </section>
    </Page>
  );
};

export default ProductList;
