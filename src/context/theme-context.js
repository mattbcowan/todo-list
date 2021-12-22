import React, { createContext } from "react";

export const themes = {
  light: {
    background: "#E4E5F1",
    foreground: "#FAFAFA",
    text: "#484B6A",
    completedText: "#D2D3DB",
  },
  dark: {
    background: "#161722",
    foreground: "#4D5066",
    text: "#E4E5F1",
    completedText: "#777A92",
  },
};

export const ThemeContext = createContext(themes.dark);
