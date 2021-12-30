import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #25273c;
  padding: 0.25em;
  margin-top: 1rem;
  border-radius: 0.5em;

  ul {
    display: flex;
    justify-content: space-evenly;
    list-style: none;

    li {
      color: #60617d;
    }

    li#active {
      color: hsl(220, 98%, 61%);
    }
  }
`;

const Filter = () => {
  return (
    <Container>
      <ul>
        <li id="active">All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
    </Container>
  );
};

export default Filter;
