import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AddTodo, Header, TaskList } from "./components/";

const AppContainer = styled.div`
  font-family: "Josefin Sans", sans-serif;
  color: #ffffff;
  background-color: hsl(235, 21%, 11%);
  height: 100vh;
  width: 100%;
`;

const Container = styled.div`
  padding: 1rem 2rem;
`;

const HeaderImage = styled.img`
  object-fit: cover;
  width: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledMain = styled.main`
  position: relative;
  z-index: 2;
`;

function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isDarkmode, setIsDarkmode] = useState(true);

  const getData = async () => {
    await fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setTasks(myJson.tasks);
        setIsDarkmode(myJson.darkmode);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks((current) => [...current, { value: value, completed: false }]);
    setValue("");
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    let currentData = [...tasks];
    let index = currentData.find(
      (task) => task.value === `${event.currentTarget.parentElement.innerText}`
    );
    currentData.splice(currentData.indexOf(index), 1);
    setTasks(currentData);
  };

  const handleChecked = (event) => {
    event.preventDefault();
    event.preventDefault();
    let currentData = [...tasks];
    let index = currentData.find(
      (task) =>
        task.value ===
        `${event.currentTarget.parentElement.parentElement.lastChild.innerText}`
    );
    let currentIndex = currentData.indexOf(index);

    currentData[currentIndex].completed = !currentData[currentIndex].completed;
    setTasks(currentData);
    // console.log(currentData[currentData.indexOf(index)]);
  };

  return (
    <AppContainer>
      <HeaderImage src="./images/bg-mobile-dark.jpg" />
      <Container>
        <Header />
        <StyledMain>
          <AddTodo
            handleSubmit={handleSubmit}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <TaskList
            data={tasks}
            handleOnClick={handleOnClick}
            handleChecked={handleChecked}
          />
        </StyledMain>
        <footer></footer>
      </Container>
    </AppContainer>
  );
}

export default App;
