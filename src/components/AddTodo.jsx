import styled from "styled-components";
import { TextInput } from ".";

const TaskContainer = styled.form`
  display: flex;
  padding: 1rem;
  background-color: hsl(235, 24%, 19%);
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
`;

const SubmitLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
  height: 1rem;
  background-color: hsl(234, 11%, 52%);
  border-radius: 2rem;
  padding: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;
`;

const SubmitButton = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const AddTodo = ({ handleSubmit, onChange, value }) => {
  return (
    <TaskContainer onSubmit={handleSubmit}>
      <SubmitLabel htmlFor="addTodo">
        <img src="./images/icon-add.svg" alt="add symbol" />
      </SubmitLabel>
      <SubmitButton
        type="submit"
        value="submit"
        id="addTodo"
        name="add-to-do"
      />
      <TextInput
        value={value}
        onChange={onChange}
        placeholder="Create a new todo..."
      />
    </TaskContainer>
  );
};

export default AddTodo;
