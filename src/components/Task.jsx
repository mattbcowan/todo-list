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

const Task = ({ text, checked, handleChecked }) => {
  return (
    <TaskContainer>
      <Checkbox checked={checked} onChange={handleChecked} />
      {checked ? <CompletedTask>{text}</CompletedTask> : <span>{text}</span>}
    </TaskContainer>
  );
};

export default Task;
