import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { RemoveButton } from "./styles";

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
