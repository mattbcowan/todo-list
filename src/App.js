import styled from "styled-components";
import { Task, TaskList } from "./components/";

let data = [
  "Complete online JavaScript course",
  "Jog around the park 3x",
  "10 minutes of meditation",
  "Read for 1 hour",
  "Pick up groceries",
  "Complete Todo App on Frontend Mentor",
];

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

const StyledHeader = styled.header`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;
const StyledMain = styled.main`
  position: relative;
  z-index: 2;
`;

const StyledH1 = styled.h1`
  letter-spacing: 1rem;
  padding-top: 1rem;
`;

function App() {
  return (
    <AppContainer>
      <HeaderImage src="./images/bg-mobile-dark.jpg" />
      <Container>
        <StyledHeader>
          <StyledH1>TODO</StyledH1>
          <span>
            <img src="./images/icon-sun.svg" alt="sun" />
          </span>
        </StyledHeader>
        <StyledMain>
          <Task />
          <TaskList data={data} />
        </StyledMain>
        <footer></footer>
      </Container>
    </AppContainer>
  );
}

export default App;
