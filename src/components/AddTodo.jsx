import React, { useState, useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";
import { TextInput } from ".";

const TaskContainer = styled.form`
  display: flex;
  padding: 1rem;
  background-color: ${(props) => props.backgroundColor || "hsl(235, 24%, 19%)"};
  color: ${(props) => props.textColor || "#ffffff"};
  border: none;
  border-radius: 0.5rem;
`;

const SubmitLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 0.75rem;
  height: 0.75rem;
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

const generateId = () => {
  return Math.floor(1000 + Math.random() * 9000);
};

const AddTodo = ({ backgroundColor, textColor }) => {
  const [value, setValue] = useState({
    text: "",
    isChecked: false,
    id: generateId(),
  });
  const { addTask } = useContext(GlobalContext);

  const handleSubmit = (event) => {
    if (value.text.length) {
      event.preventDefault();
      addTask(value);
      setValue({ text: "", isChecked: false, id: generateId() });
    }
  };

  const handleChange = (event) => {
    setValue({ ...value, text: event.target.value });
  };

  return (
    <TaskContainer onSubmit={handleSubmit} backgroundColor={backgroundColor}>
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
        value={value.text}
        onChange={handleChange}
        textColor={textColor}
        placeholder="Create a new todo..."
      />
    </TaskContainer>
  );
};

export default AddTodo;
