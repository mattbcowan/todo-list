import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";
import Checkbox from "./Checkbox";
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

const ClearButton = styled.button`
  background: transparent;
  border: none;
  color: hsl(234, 11%, 52%);
  cursor: pointer;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  padding: 1.5em 1em;
`;

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TaskText = styled.span`
  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
  color: ${(props) => (props.isChecked ? "hsl(234, 11%, 52%)" : "#ffffff")};
`;

const TaskList = () => {
  const { tasks, updateTask, clearCompletedTasks } = useContext(GlobalContext);

  const handleChange = (id) => {
    const newTaskList = tasks.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          isChecked: !item.isChecked,
        };
        return updatedItem;
      }
      return item;
    });
    updateTask(newTaskList);
  };

  const handleClearComplete = (list) => {
    list.forEach((item) => clearCompletedTasks(item));
  };

  return (
    <ListContainer>
      {tasks.map((item) => (
        <ListItem key={item.id}>
          <TaskContainer>
            <Checkbox
              onChange={() => handleChange(item.id)}
              checked={item.isChecked}
            />
            <TaskText isChecked={item.isChecked}>{item.text}</TaskText>
          </TaskContainer>
          <RemoveTodo item={item} />
        </ListItem>
      ))}
      <ListItem>
        <span>{tasks.length} Items Left</span>
        <ClearButton onClick={() => handleClearComplete(tasks)}>
          Clear Completed
        </ClearButton>
      </ListItem>
    </ListContainer>
  );
};

export default TaskList;
