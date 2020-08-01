import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

console.log(process.env);

const client = new ApolloClient({
  uri: "https://graphql.fauna.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${build.env.FAUNADB_CLIENT_SECRET}`,
  },
});

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
);
