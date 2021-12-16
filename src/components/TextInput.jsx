import React from "react";
import styled from "styled-components";

const TaskInput = styled.input`
  color: #ffffff;
  border: none;
  background-color: transparent;

  ::placeholder {
    color: hsl(234, 11%, 52%);
  }

  :focus {
    outline: none;
  }
`;

const TextInput = ({ value, onChange, placeholder }) => {
  return (
    <TaskInput
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
