import React, { useState } from "react";
import styled from "styled-components";
import { AddTodo, Header, Footer, TaskList } from "./components/";
import { ThemeContext, themes } from "./context/theme-context";

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

const HeaderImage = styled.picture`
  object-fit: cover;
  width: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;

  img {
    width: 100%;
  }
`;

const StyledMain = styled.main`
  position: relative;
  z-index: 2;
`;

function HeaderPhotos(darkmode) {
  if (darkmode) {
    return (
      <HeaderImage>
        <source
          media="(min-width: 800px)"
          srcSet="/images/bg-desktop-dark.jpg"
        />
        <img
          src="/images/bg-mobile-dark.jpg"
          alt="mobile dark background"
          aria-hidden="true"
        />
      </HeaderImage>
    );
  } else {
    return (
      <HeaderImage>
        <source
          media="(min-width: 800px)"
          srcSet="/images/bg-desktop-light.jpg"
        />
        <img
          src="/images/bg-mobile-light.jpg"
          alt="mobile light background"
          aria-hidden="true"
        />
      </HeaderImage>
    );
  }
}

function App() {
  const [theme, setTheme] = useState(themes.dark);

  const handleOnClick = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };

  return (
    <AppContainer>
      <ThemeContext.Provider>
        {HeaderPhotos(themes.dark === theme)}
        <Container>
          <Header handleOnClick={handleOnClick} />
          <StyledMain>
            <AddTodo />
            <TaskList />
          </StyledMain>
        </Container>
        <Footer />
      </ThemeContext.Provider>
    </AppContainer>
  );
}

export default App;
