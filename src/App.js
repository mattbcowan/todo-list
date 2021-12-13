import styled from "styled-components";

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

const TaskContainer = styled.div`
  display: flex;
  padding: 1rem;
  background-color: hsl(235, 24%, 19%);
  color: #ffffff;
  border: none;
  border-radius: 0.5rem;
`;

const TaskInput = styled.input`
  color: #ffffff;
  border: none;
  background-color: transparent;

  :focus {
    outline: none;
  }
`;

const CheckBox = styled.input`
  border: 1px solid hsl(234, 39%, 85%);
  background-color: transparent;
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
          <TaskContainer>
            <CheckBox type="checkbox" />
            <TaskInput type="text" placeholder="Create a new todo..." />
          </TaskContainer>
        </StyledMain>
        <footer></footer>
      </Container>
    </AppContainer>
  );
}

export default App;
