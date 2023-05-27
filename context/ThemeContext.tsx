import { utils } from "@/theme";
import { createContext, FC, useContext, useState } from "react";

type ThemeContextType = {
  theme: string;
  setDarkTheme: () => void;
  setLightTheme: () => void;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setDarkTheme: () => null,
  setLightTheme: () => null,
});

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<string>("dark");

  const setDarkTheme = () => {
    // handleSetTransition();
    setTheme("dark");
  };

  const setLightTheme = () => {
    // handleSetTransition();
    setTheme("light");
  };

  // const handleSetTransition = () => {
  //   if (document) {
  //     const body = document.querySelector("body");
  //     if (body) {
  //       body.style.transition = `background-color ${utils.themeColorTransitionDuration}s linear, color ${utils.themeColorTransitionDuration}s linear`;
  //       setTimeout(() => {
  //         body.style.transition = "unset";
  //       }, 1000);
  //     }
  //   }
  // };

  const value = {
    theme,
    setDarkTheme,
    setLightTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
