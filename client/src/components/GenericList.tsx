/** @jsx jsx */
/* @jsxFrag React.Fragment */
import React, { useMemo, ReactNode } from "react";
import { jsx, Theme, Interpolation } from "@emotion/react";
import LoadingIndicator from "components/LoadingIndicator";
import { QueryResult } from "@apollo/client";

export type Props<Item> = {
  itemRenderer: (item: Item) => ReactNode;
  css?: Interpolation<Theme>;
} & Pick<QueryResult<Item[]>, "data" | "loading" | "error">;

function GenericList<Item>({
  loading,
  error,
  data,
  itemRenderer,
  css,
}: Props<Item>) {
  const items = useMemo(() => {
    if (!data) return [];

    return data.map(itemRenderer);
  }, [data, itemRenderer]);

  return (
    <>
      {error && <p>{error.message}</p>}
      <LoadingIndicator loading={loading}>
        <div
          css={
            css || {
              display: "grid",
              gridGap: "26px",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            }
          }
        >
          {items}
        </div>
      </LoadingIndicator>
    </>
  );
}

export default GenericList;
