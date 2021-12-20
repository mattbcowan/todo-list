import { useContext } from "react";
import styled from "styled-components";
import { sortableContainer } from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";
import { GlobalContext } from "../context/GlobalState";
import Checkbox from "./Checkbox";
import RemoveTodo from "./RemoveTodo";
import SortableListItem from "./SortableListItem";
import ListFooter from "./ListFooter";

const Container = styled.div`
  background-color: hsl(235, 24%, 19%);
  border-radius: 0.5em;
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  list-style: none;
  margin-top: 1em;
`;

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TaskText = styled.span`
  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
  color: ${(props) => (props.isChecked ? "hsl(234, 11%, 52%)" : "#ffffff")};
`;

const TaskList = () => {
  const { tasks, updateTask } = useContext(GlobalContext);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    let newArray = arrayMoveImmutable(tasks, oldIndex, newIndex);
    updateTask(newArray);
  };

  const handleChange = (id) => {
    const newTaskList = tasks.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          isChecked: !item.isChecked,
        };
        return updatedItem;
      }
      return item;
    });
    updateTask(newTaskList);
  };

  const SortableContainer = sortableContainer(({ children }) => {
    return <ListContainer>{children}</ListContainer>;
  });

  return (
    <Container>
      <SortableContainer onSortEnd={onSortEnd}>
        {tasks.map((item, index) => (
          <SortableListItem key={item.id} index={index}>
            <TaskContainer>
              <Checkbox
                onChange={() => handleChange(item.id)}
                checked={item.isChecked}
              />
              <TaskText isChecked={item.isChecked}>{item.text}</TaskText>
            </TaskContainer>
            <RemoveTodo item={item} />
          </SortableListItem>
        ))}
      </SortableContainer>
      <ListFooter tasks={tasks} />
    </Container>
  );
};

export default TaskList;
