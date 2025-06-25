import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { lightTheme, darkTheme, AppTheme } from "../theme";


interface ThemeContextType {
  mode: "light" | "dark";
  theme: AppTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


interface ThemeProviderCustomProps {
  children: ReactNode;
}


export const ThemeProviderCustom = ({ children }: ThemeProviderCustomProps) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const value = useMemo(
    () => ({
      mode,
      theme: mode === "light" ? lightTheme : darkTheme,
      toggleTheme,
    }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={value.theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};


export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProviderCustom");
  }
  return context;
};
