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
  const { loading, error, data } = useQuery(ALL_CUSTOMERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <>
      <h1>Hello Gatsby !</h1>
      <ul>
        {data.allCustomers.data.map((customer) => {
          return (
            <li key={customer._id}>
              {customer._id} {customer.firstName} {customer.lastName}
            </li>
          );
        })}
      </ul>
    </>
  );
};
