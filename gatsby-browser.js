/*import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.fauna.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${process.env.FAUNA_ADMIN_SECRET}`,
  },
});

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
*/