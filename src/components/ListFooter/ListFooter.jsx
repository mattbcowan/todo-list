import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { ListItem, ClearButton } from "./styles";

const ListFooter = () => {
  const { tasks, clearCompletedTasks } = useContext(GlobalContext);

  const ItemsLeft = (items) => {
    if (items.length > 1) {
      return `${items.length} Items Left`;
    } else if (items.length === 1) {
      return "1 Item Left";
    } else {
      return "You're all done!";
    }
  };

  const handleClearComplete = (list) => {
    list.forEach((item) => clearCompletedTasks(item));
  };

  return (
    <ListItem>
      <span>{ItemsLeft(tasks.filter((item) => item.isChecked === false))}</span>
      <ClearButton onClick={() => handleClearComplete(tasks)}>
        Clear Completed
      </ClearButton>
    </ListItem>
  );
};

export default ListFooter;
