import { sortableContainer, sortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";
import Task from "../Task/Task";
import { RemoveTodo } from "..";
import { ListContainer, ListItem } from "./styles";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export const SortableContainer = sortableContainer(({ children }) => {
  return <ListContainer>{children}</ListContainer>;
});

const SortableListItem = sortableElement(({ children }) => (
  <ListItem>{children}</ListItem>
));

const SortableArray = ({ textColor }) => {
  const { tasks, updateTask } = useContext(GlobalContext);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    let newArray = arrayMoveImmutable(tasks, oldIndex, newIndex);
    updateTask(newArray);
  };

  return (
    <SortableContainer onSortEnd={onSortEnd}>
      {tasks.map((item, index) => (
        <SortableListItem key={item.id} index={index}>
          <Task item={item} textColor={textColor} />
          <RemoveTodo item={item} />
        </SortableListItem>
      ))}
    </SortableContainer>
  );
};

export default SortableArray;
