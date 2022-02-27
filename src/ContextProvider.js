import React, { useContext, useState } from "react";

export const DarkThemeContext = React.createContext();
export const ToggleThemeContext = React.createContext();

export function useDarkTheme() {
  console.log(DarkThemeContext, ToggleThemeContext);
  console.log(useContext(DarkThemeContext));
  return [useContext(DarkThemeContext), useContext(ToggleThemeContext)];
}

export default function ContextProvider({ children }) {
  console.log(useContext(DarkThemeContext));
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const toggleTheme = () => setIsDarkTheme((prev) => !prev);
  return (
    <DarkThemeContext.Provider value={isDarkTheme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        {children}
      </ToggleThemeContext.Provider>
    </DarkThemeContext.Provider>
  );
}
