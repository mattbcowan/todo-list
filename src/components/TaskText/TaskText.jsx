import { Text } from "./styles";

const TaskText = ({ children, isChecked, textColor }) => {
  return (
    <Text isChecked={isChecked} textColor={textColor}>
      {children}
    </Text>
  );
};

export default TaskText;
