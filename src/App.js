import React, { useState } from "react";
import styled from "styled-components";
import { Header, Footer, TaskList, Filter } from "./components/";
import AddTodo from "./components/AddTodo/AddTodo";
import { ThemeContext, themes } from "./context/theme-context";
import { GlobalProvider } from "./context/GlobalState";

const AppContainer = styled.div`
  font-family: "Josefin Sans", sans-serif;
  color: #ffffff;
  background-color: ${(props) => props.backgroundColor || "hsl(235, 21%, 11%)"};
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
          srcSet="https://mattbcowan.github.io/todo-list/images/bg-desktop-dark.jpg"
        />
        <img
          src="https://mattbcowan.github.io/todo-list/images/bg-mobile-dark.jpg"
          alt="dark background"
          aria-hidden="true"
        />
      </HeaderImage>
    );
  } else {
    return (
      <HeaderImage>
        <source
          media="(min-width: 800px)"
          srcSet="https://mattbcowan.github.io/todo-list/images/bg-desktop-light.jpg"
        />
        <img
          src="https://mattbcowan.github.io/todo-list/images/bg-mobile-light.jpg"
          alt="light background"
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
    <AppContainer textColor={theme.text} backgroundColor={theme.background}>
      <GlobalProvider>
        <ThemeContext.Provider value={theme}>
          {HeaderPhotos(themes.dark === theme)}
          <Container>
            <Header
              handleOnClick={handleOnClick}
              darkmode={themes.dark === theme}
            />
            <StyledMain>
              <AddTodo
                backgroundColor={theme.foreground}
                textColor={theme.text}
              />
              <TaskList
                backgroundColor={theme.foreground}
                textColor={theme.text}
              />
            </StyledMain>
          </Container>
          <Footer />
        </ThemeContext.Provider>
      </GlobalProvider>
    </AppContainer>
  );
}

export default App;
