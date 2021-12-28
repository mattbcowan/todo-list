import styled from "styled-components";

export const TaskInput = styled.input`
  color: ${(props) => props.textColor || "#ffffff"};
  border: none;
  background-color: transparent;

  ::placeholder {
    color: hsl(234, 11%, 52%);
  }

  :focus {
    outline: none;
  }
`;
