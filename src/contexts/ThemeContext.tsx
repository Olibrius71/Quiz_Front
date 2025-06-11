import { createContext, useContext, useState, useMemo } from "react";
import {lightTheme, darkTheme, AppTheme} from "../theme";
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

interface ThemeContextType {
  mode: string;
  theme: AppTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  theme: lightTheme,
  toggleTheme: () => {}
});

export const ThemeProviderCustom = ({ children }) => {
  const [mode, setMode] = useState("light");

  const toggleTheme = () => {
    setMode(prev => (prev === "light" ? "dark" : "light"));
  };

  const value = useMemo(() => ({
    mode,
    theme: mode === "light" ? lightTheme : darkTheme,
    toggleTheme,
  }), [mode]);

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={value.theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);