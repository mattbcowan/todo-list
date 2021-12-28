import styled from "styled-components";

export const TaskContainer = styled.form`
  display: flex;
  padding: 1rem;
  background-color: ${(props) => props.backgroundColor || "hsl(235, 24%, 19%)"};
  color: ${(props) => props.textColor || "#ffffff"};
  border: none;
  border-radius: 0.5rem;
`;

export const SubmitLabel = styled.label`
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

export const SubmitButton = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
