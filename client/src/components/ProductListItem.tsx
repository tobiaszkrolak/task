/** @jsx jsx */
import { FunctionComponent } from "react";
import CurrencyNumberFormatter from "components/CurrencyNumberFormatter";
import { jsx, css } from "@emotion/react";

export type Props = {
  name: string;
  image: string;
  price: number;
};

const ProductListItem: FunctionComponent<Props> = ({ name, image, price }) => (
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
    <img src={image} alt={name} />
    <p>{name}</p>
    <p>
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

export default ProductListItem;
