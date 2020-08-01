import React from "react";
import { useQuery, gql } from "@apollo/client";

const ALL_TODOS = gql`
  query {
    allTodos {
      data {
        _id
        text
        completed
      }
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(ALL_TODOS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <h1>Hello Gatsby !</h1>
      <ul>
        {data.map((response) => {
          return (
            <li>
              {response.data.text} {response.data.completed}
            </li>
          );
        })}
      </ul>
    </>
  );
};
