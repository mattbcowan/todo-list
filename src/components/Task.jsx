import { useState } from "react";
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
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TaskContainer>
      <Checkbox onChange={handleChange} />
      {isChecked ? <CompletedTask>{text}</CompletedTask> : <span>{text}</span>}
    </TaskContainer>
  );
};

export default Task;
