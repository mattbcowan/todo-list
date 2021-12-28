import { ListFooter, SortableArray } from "../";
import { Container } from "./styles";

const TaskList = ({ backgroundColor, textColor }) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <SortableArray textColor={textColor} />
      <ListFooter />
    </Container>
  );
};

export default TaskList;
