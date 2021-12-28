import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.backgroundColor || "hsl(235, 24%, 19%)"};
  border-radius: 0.5em;
`;
