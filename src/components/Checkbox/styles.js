import styled from "styled-components";

export const StyledInput = styled.input`
  appearance: none;
  font-size: 1.5rem;
  width: 0.9em;
  height: 0.9em;
  margin: 0;
  margin-right: 0.5em;
  line-height: 0.6;
  background-color: transparent;
  border: 1px solid hsl(234, 11%, 52%);
  border-radius: 1em;
  transform: translateY(-0.075em);
  overflow: hidden;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    text-align: center;
    width: 0.9em;
    height: 0.9em;
    border-radius: 1em;
    transition: 150ms transform ease-in-out;
    transform: scale(0);
    background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    );
  }

  &:checked::before {
      content: url('./images/icon-check.svg');
      transform: scale(1);
  }
`;
