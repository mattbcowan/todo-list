import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AddTodo, Header, TaskList } from "./components/";
import { GlobalProvider } from "./context/GlobalState";

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
  const [tasks, setTasks] = useState([]);

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
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContainer>
      <GlobalProvider>
        <HeaderImage src="./images/bg-mobile-dark.jpg" />
        <Container>
          <Header />
          <StyledMain>
            <AddTodo />
            <TaskList data={tasks} />
          </StyledMain>
          <footer></footer>
        </Container>
      </GlobalProvider>
    </AppContainer>
  );
}

export default App;
