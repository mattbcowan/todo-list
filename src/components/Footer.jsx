import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  color: hsl(234, 11%, 52%);
  text-align: center;
  margin-top: 1em;
`;

const Footer = () => {
  return <StyledFooter>Drag and drop to reorder list</StyledFooter>;
};

export default Footer;
