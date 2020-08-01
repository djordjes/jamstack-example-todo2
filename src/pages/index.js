import React from "react";
import { useQuery, gql } from "@apollo/client";

const ALL_CUSTOMERS = gql`
  {
    allCustomers {
      data {
        firstName
        lastName
        _id
      }
    }
  }
`;

export default () => {
  return (
    <>
      <h1>Hello Gatsby !</h1>
      
    </>
  );
};
