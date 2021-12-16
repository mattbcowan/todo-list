import React from "react";
import styled from "styled-components";
import { Checkbox } from "./";

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  background-color: hsl(235, 24%, 19%);
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  list-style: none;
  margin-top: 1em;

  li {
    border-bottom: 1px solid hsl(234, 11%, 52%);
  }

  li:last-child {
    border: none;
    color: hsl(234, 11%, 52%);
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  padding: 1.5em 1em;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: hsl(234, 11%, 52%);
  margin-left: 0.5rem;
`;

const TaskList = ({ data }) => {
  return (
    <ListContainer>
      {data.map((item) => {
        return (
          <ListItem>
            <ItemContainer>
              <Checkbox />
              <span>{item}</span>
            </ItemContainer>
            <RemoveButton>
              <img src="./images/icon-cross.svg" alt="close" />
            </RemoveButton>
          </ListItem>
        );
      })}
      <ListItem>
        <span>{data.length} Items Left</span>
        <span>Clear Completed</span>
      </ListItem>
    </ListContainer>
  );
};

export default TaskList;
