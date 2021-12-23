import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";

const RemoveButton = styled.input`
  background-color: transparent;
  border: none;
  color: hsl(234, 11%, 52%);
  margin-left: 0.5rem;
  z-index: 10;
  cursor: pointer;
`;

const RemoveTodo = (props) => {
  const { item } = props;

  const { removeTask } = useContext(GlobalContext);

  const handleClick = (event) => {
    event.stopPropagation();
    removeTask(item);
  };

  return (
    <RemoveButton
      type="image"
      name="remove button"
      onClick={handleClick}
      src="./images/icon-cross.svg"
      alt="close"
    />
  );
};

export default RemoveTodo;
