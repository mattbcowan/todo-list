import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { TextInput } from "../";
import { TaskContainer, SubmitLabel, SubmitButton } from "./styles";

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
    event.preventDefault();
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
        id="createTodo"
        value={value.text}
        onChange={handleChange}
        textColor={textColor}
        placeholder="Create a new todo..."
        required
      />
    </TaskContainer>
  );
};

export default AddTodo;
