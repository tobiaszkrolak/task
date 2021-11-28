import React, { FunctionComponent } from "react";
import { Global, css } from "@emotion/react";

const GlobalStyles: FunctionComponent = () => (
  <Global
    styles={css`
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `}
  />
);

export default GlobalStyles;
