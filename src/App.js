import styled from "styled-components";

const AppContainer = styled.div`
  font-family: "Josefin Sans", sans-serif;
  color: #ffffff;
  background-color: hsl(235, 21%, 11%);
  height: 100vh;
  width: 100%;
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
`;

function App() {
  return (
    <AppContainer>
      <HeaderImage src="./images/bg-mobile-dark.jpg" />
      <StyledHeader>
        <h1>TODO</h1>
      </StyledHeader>
      <main></main>
      <footer></footer>
    </AppContainer>
  );
}

export default App;
