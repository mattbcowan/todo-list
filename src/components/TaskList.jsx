import styled from "styled-components";
import { Task } from "./";

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  background-color: hsl(235, 24%, 19%);
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
  list-style: none;
  margin-top: 1em;

  li {
    border-bottom: 1px solid hsl(234, 11%, 52%);
  }

  li:last-child {
    border: none;
    color: hsl(234, 11%, 52%);
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  padding: 1.5em 1em;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: hsl(234, 11%, 52%);
  margin-left: 0.5rem;
  cursor: pointer;
`;

// const handleOnClick = (event) => {
//   event.preventDefault();
//   let currentData = [...list];
//   let index = currentData.indexOf(
//     `${event.currentTarget.parentElement.innerText}`
//   );
//   currentData.splice(index, 1);
//   setList(currentData);
// };

const handleOnClick = (event) => {
  event.preventDefault();
  console.log("Clicked");
};

const TaskList = ({ data }) => {
  return (
    <ListContainer>
      {data &&
        data.length > 0 &&
        data[0].tasks.map((item, i) => {
          return (
            <ListItem key={i}>
              <Task text={item.value} />
              <RemoveButton onClick={handleOnClick}>
                <img src="./images/icon-cross.svg" alt="close" />
              </RemoveButton>
            </ListItem>
          );
        })}
      <ListItem>
        <span>{data.length} Items Left</span>
        <button>Clear Completed</button>
      </ListItem>
    </ListContainer>
  );
};

export default TaskList;
