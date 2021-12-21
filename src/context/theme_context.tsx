import React, { createContext, useContext, useEffect, useReducer } from "react";
import { ITheme } from "../utils/interfaces";
import { darkTheme, lightTheme } from "../utils/theme";

enum ActionType {
  GET_THEME,
  TOGGLE_THEME,
}

interface IAction {
  type: ActionType;
}

type Theme = {
  mode: ITheme;
  darkMode?: boolean;
  toggleTheme?: () => void;
};

const INITIAL_STATE: Theme = {
  mode: darkTheme,
  darkMode: true,
};

export const ThemeContext = createContext<Partial<Theme>>({});

const themeReducer = (state: Theme, action: IAction) => {
  switch (action.type) {
    case ActionType.GET_THEME:
      const localTheme = localStorage.getItem("theme") ?? "dark";
      return {
        ...state,
        mode: localTheme == "dark" ? darkTheme : lightTheme,
        darkMode: localTheme == "dark" ? true : false,
      };

    case ActionType.TOGGLE_THEME:
      const mode = state.darkMode ? lightTheme : darkTheme;
      localStorage.setItem("theme", state.darkMode ? "light" : "dark");
      return { ...state, darkMode: !state.darkMode, mode };

    default:
      return state;
  }
};

export const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useReducer(themeReducer, INITIAL_STATE);
  const toggleTheme = () => {
    setTheme({ type: ActionType.TOGGLE_THEME });
  };

  useEffect(() => {
    setTheme({ type: ActionType.GET_THEME });
  }, []);
  console.log(theme);

  return (
    <ThemeContext.Provider
      value={{ mode: theme.mode, darkMode: theme.darkMode, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error("ThemeContext must be used under a ThemeProvider");
  return context;
};
