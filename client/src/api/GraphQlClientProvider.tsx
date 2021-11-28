import React, { FunctionComponent } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

const GraphQlClientProvider: FunctionComponent = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default GraphQlClientProvider;
