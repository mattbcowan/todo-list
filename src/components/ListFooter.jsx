import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/GlobalState";

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  padding: 1.5em 1em;
  color: hsl(234, 11%, 52%);
`;

const ClearButton = styled.button`
  background: transparent;
  border: none;
  color: hsl(234, 11%, 52%);
  cursor: pointer;
`;

const ListFooter = ({ tasks }) => {
  const { clearCompletedTasks } = useContext(GlobalContext);

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
