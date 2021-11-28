/** @jsx jsx */
/* @jsxFrag React.Fragment */
import React, { useMemo } from "react";
import Page from "components/Page";
import ProductListItem from "components/ProductListItem";
import { useGetCategoryWithProducts } from "api/categories";
import LoadingIndicator from "components/LoadingIndicator";
import { jsx } from "@emotion/react";

const ProductList = () => {
  const { loading, error, data: category } = useGetCategoryWithProducts();

  const products = useMemo(() => {
    if (!category) return [];

    return category.categoryArticles.articles.map(
      ({ name, variantName, images, prices }) => (
        <ProductListItem
          key={name + variantName}
          name={name}
          image={images[0].path}
          price={prices.regular.value / 100}
        />
      )
    );
  }, [category]);

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
              <nav>
                <ul
                  css={{
                    listStyleType: "none",
                    margin: 0,
                    padding: 0,
                  }}
                >
                  {category.childrenCategories.map(({ name, id, urlPath }) => (
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
      <>
        <LoadingIndicator loading={loading}>
          {!!category && (
            <h1>
              {category.name}
              <small> ({category.articleCount})</small>
            </h1>
          )}
          <section
            css={{
              display: "grid",
              gridGap: "26px",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            }}
          >
            {products}
          </section>
        </LoadingIndicator>
        {error && (
          <p>
            Es ist ein Fehler aufgetreten. Bitte versuchen Sie die Seite zu
            aktualisieren
          </p>
        )}
      </>
    </Page>
  );
};

export default ProductList;
