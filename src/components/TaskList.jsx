import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";
import { Task } from "./";
import RemoveTodo from "./RemoveTodo";

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

const TaskList = () => {
  const { tasks } = useContext(GlobalContext);

  const tasksMarkup = tasks.map((item, index) => (
    <ListItem key={index}>
      <Task text={item} />
      <RemoveTodo item={item} />
    </ListItem>
  ));

  return (
    <ListContainer>
      {tasksMarkup}
      <ListItem>
        <span>{tasks.length} Items Left</span>
        <button onClick={() => console.log("clicked")}>Clear Completed</button>
      </ListItem>
    </ListContainer>
  );
};

export default TaskList;
