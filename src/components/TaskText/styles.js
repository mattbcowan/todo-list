import styled from "styled-components";

export const Text = styled.span`
  text-decoration: ${(props) => (props.isChecked ? "line-through" : "none")};
  opacity: ${(props) => (props.isChecked ? "30%" : "100%")};
  color: ${(props) => props.textColor || "#ffffff"};
`;
