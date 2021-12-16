import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { DARK_THEME } from "../styles/themes/dark";
import { LIGHT_THEME } from "../styles/themes/light";
import GlobalStyle from "../styles/global";
export const ThemeContext = createContext({});

export const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [selectedTheme, setSelectedTheme] = useState(DARK_THEME);
  useEffect(() => {
    setSelectedTheme(theme === "dark" ? DARK_THEME : LIGHT_THEME);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <GlobalStyle theme={selectedTheme} />
      <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
