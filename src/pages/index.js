import React from "react";
import { useQuery, gql } from "@apollo/client";

console.log(process.env.FAUNADB_CLIENT_SECRET);

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
        {data.allTodos.data.map((todo) => {
          return (
            <li key={todo._id}>
              {todo.text} {todo.completed}
            </li>
          );
        })}
      </ul>
    </>
  );
};
