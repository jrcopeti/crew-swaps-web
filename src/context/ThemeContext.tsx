import { createContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const themes = {
  dark: "darkcrew",
  light: "lightcrew",
};

const initialTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? themes.dark
  : themes.light;

type ThemeContextType = {
  theme: string;
  handleToggleTheme: () => void;
  themes: typeof themes;
};

const defaultContextValue: ThemeContextType = {
  theme: initialTheme,
  handleToggleTheme: () => {},
  themes,
};

const ThemeContext = createContext(defaultContextValue);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { value: theme, setValue: setTheme } = useLocalStorageState(
    initialTheme,
    "theme",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    const newTheme = theme === themes.dark ? themes.light : themes.dark;
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
