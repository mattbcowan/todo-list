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
  return (
    <AppContainer>
      <GlobalProvider>
        <HeaderImage src="./images/bg-mobile-dark.jpg" />
        <Container>
          <Header />
          <StyledMain>
            <AddTodo />
            <TaskList />
          </StyledMain>
          <footer></footer>
        </Container>
      </GlobalProvider>
    </AppContainer>
  );
}

export default App;
