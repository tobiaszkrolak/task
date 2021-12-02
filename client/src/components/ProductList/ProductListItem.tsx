/** @jsx jsx */
import { FunctionComponent } from "react";
import CurrencyNumberFormatter from "components/CurrencyNumberFormatter";
import { jsx, css } from "@emotion/react";

export type Props = {
  name: string;
  imageUrl?: string;
  price: number;
};

const ProductListItem: FunctionComponent<Props> = ({
  name,
  imageUrl,
  price,
}) => (
  <article
    css={css`
      border: 1px solid lavenderblush;
      padding: 10px;
      & > * {
        display: inline-block;
        padding: 4px 0;
        margin: 4px 0;
        width: 100%;
      }
    `}
  >
    <img data-testid={TEST_IDS.image} src={imageUrl} alt={name} />
    <p data-testid={TEST_IDS.name}>{name}</p>
    <p data-testid={TEST_IDS.price}>
      <CurrencyNumberFormatter value={price} />
    </p>
    <button
      css={{
        padding: ".2em",
        backgroundColor: "lightgoldenrodyellow",
        border: "1px solid lightgray",
        cursor: "pointer",
        textAlign: "center",
      }}
    >
      Add to cart
    </button>
  </article>
);

export const TEST_IDS = {
  name: "name",
  image: "image",
  price: "price",
};

export default ProductListItem;
