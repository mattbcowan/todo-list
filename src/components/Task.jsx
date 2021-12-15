import React from "react";
import styled from "styled-components";
import { Checkbox, TextInput } from "./";

const TaskContainer = styled.div`
  display: flex;
  padding: 1rem;
  background-color: hsl(235, 24%, 19%);
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
`;

const Task = () => {
  return (
    <TaskContainer>
      <Checkbox />
      <TextInput />
    </TaskContainer>
  );
};

export default Task;
