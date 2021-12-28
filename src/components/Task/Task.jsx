import { useContext } from "react";
import Checkbox from "../Checkbox/Checkbox";
import TaskText from "../TaskText/TaskText";
import { GlobalContext } from "../../context/GlobalState";
import { TaskContainer } from "./styles";

const Task = ({ item, textColor }) => {
  const { tasks, updateTask } = useContext(GlobalContext);
  const handleChecked = (id) => {
    const newTaskList = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, isChecked: !item.isChecked };
      } else {
        return item;
      }
    });
    updateTask(newTaskList);
  };
  return (
    <TaskContainer>
      <Checkbox
        onChange={() => handleChecked(item.id)}
        checked={item.isChecked}
      />
      <TaskText isChecked={item.isChecked} textColor={textColor}>
        {item.text}
      </TaskText>
    </TaskContainer>
  );
};

export default Task;
