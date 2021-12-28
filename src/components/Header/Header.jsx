import { StyledHeader, StyledH1 } from "./styles";

const Header = ({ handleOnClick, darkmode }) => {
  return (
    <StyledHeader>
      <StyledH1>TODO</StyledH1>
      <span>
        {darkmode ? (
          <img src="./images/icon-sun.svg" alt="sun" onClick={handleOnClick} />
        ) : (
          <img
            src="./images/icon-moon.svg"
            alt="moon"
            onClick={handleOnClick}
          />
        )}
      </span>
    </StyledHeader>
  );
};

export default Header;
