import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useMemo,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextData {
  currentTheme: Theme;
  changeTheme: (theme: Theme) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext({} as ThemeContextData);

function prefersDarkScheme() {
  if (!window.matchMedia) {
    return false;
  }
  const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
  return matches;
}

export function ThemeProvider({ children }: Readonly<ThemeProviderProps>) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      return theme as Theme;
    }
    if (prefersDarkScheme()) return "dark";
    return "light";
  });

  function changeTheme(theme: Theme) {
    if (theme !== currentTheme) {
      setCurrentTheme(theme);
    }
  }

  const values = useMemo(() => {
    return {
      currentTheme,
      changeTheme,
    };
  }, [currentTheme]);

  useEffect(() => {
    document.documentElement.className = `theme-${currentTheme}`;
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
