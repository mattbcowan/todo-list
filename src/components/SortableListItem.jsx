import React from "react";
import styled from "styled-components";
import { sortableElement } from "react-sortable-hoc";

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.9rem;
  padding: 1.5em 1em;
  border-bottom: 1px solid hsl(234, 11%, 52%);
  z-index: 2;
`;

const SortableListItem = sortableElement(({ children }) => (
  <ListItem>{children}</ListItem>
));

export default SortableListItem;
