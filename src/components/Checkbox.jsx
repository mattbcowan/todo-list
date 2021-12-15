import React from "react";
import styled from "styled-components";

const StyledCheckbox = styled.label`
  font-size: 2rem;
  font-weight: bold;
  line-height: 0.75;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
`;

const StyledInput = styled.input`
  appearance: none;
  background-color: transparent;
  margin: 0;
  font: inherit;
  width: 0.9em;
  height: 0.9em;
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
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
    );
  }

  &:checked::before {
      content: url('./images/icon-check.svg');
    transform: scale(1);
  }
`;

const Checkbox = () => {
  return (
    <div>
      <StyledCheckbox>
        <StyledInput type="checkbox" name="checkbox" />
      </StyledCheckbox>
    </div>
  );
};

export default Checkbox;
