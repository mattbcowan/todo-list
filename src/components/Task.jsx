import { useState, useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";
import { Checkbox } from "./";

const CompletedTask = styled.span`
  text-decoration: line-through;
  color: hsl(234, 11%, 52%);
`;

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Task = (props) => {
  const { item } = props;

  const { updateTask } = useContext(GlobalContext);

  const handleChange = () => {
    console.log(item);
  };

  return (
    <TaskContainer>
      <Checkbox onChange={handleChange} checked={item.isChecked} />
      {item.isChecked ? (
        <CompletedTask>{item.text}</CompletedTask>
      ) : (
        <span>{item.text}</span>
      )}
    </TaskContainer>
  );
};

export default Task;
