import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox } from "./";

const CompletedTask = styled.span`
  text-decoration: line-through;
  color: hsl(234, 11%, 52%);
`;

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Task = ({ text }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <TaskContainer>
      <Checkbox checked={checked} onChange={handleChange} />
      {checked ? <CompletedTask>{text}</CompletedTask> : <span>{text}</span>}
    </TaskContainer>
  );
};

export default Task;
