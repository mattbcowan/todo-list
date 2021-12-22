import styled from "styled-components";

const StyledHeader = styled.header`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`;

const StyledH1 = styled.h1`
  letter-spacing: 1rem;
  padding-top: 1rem;
`;

const Header = ({ handleOnClick }) => {
  return (
    <StyledHeader>
      <StyledH1>TODO</StyledH1>
      <span>
        <img src="./images/icon-sun.svg" alt="sun" onClick={handleOnClick} />
      </span>
    </StyledHeader>
  );
};

export default Header;
