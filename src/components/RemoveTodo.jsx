import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";

const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: hsl(234, 11%, 52%);
  margin-left: 0.5rem;
  cursor: pointer;
`;

const RemoveTodo = (props) => {
  const { item } = props;

  const { removeTask } = useContext(GlobalContext);

  const handleClick = () => {
    removeTask(item);
  };

  return (
    <RemoveButton onClick={handleClick}>
      <img src="./images/icon-cross.svg" alt="close" />
    </RemoveButton>
  );
};

export default RemoveTodo;
