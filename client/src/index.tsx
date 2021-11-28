import React from "react";
import ReactDOM from "react-dom";
import GraphQlClientProvider from "api/GraphQlClientProvider";
import GlobalEmotionStyles from "GlobalStyles";
import ProductList from "containers/ProductList";

ReactDOM.render(
  <React.StrictMode>
    <GlobalEmotionStyles />
    <GraphQlClientProvider>
      <ProductList />
    </GraphQlClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
