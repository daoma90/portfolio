import React from "react";
import { useThemeContext } from "@/context/ThemeContext";
import * as s from "./styles";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { colors, utils } from "@/theme";
import { useMouseContext } from "@/context/MouseContext";

const ThemeToggle = () => {
  const { theme, setDarkTheme, setLightTheme } = useThemeContext();
  const { cursorChangeHandler } = useMouseContext();

  return (
    <s.Container>
      <s.IndicatorContainer justify={theme == "dark" ? "flex-start" : "flex-end"}>
        <s.Indicator
          layout
          initial={{ backgroundColor: colors[theme].primaryAccent }}
          animate={
            theme == "dark"
              ? { backgroundColor: colors[theme].primaryAccent }
              : { backgroundColor: colors[theme].primaryAccent }
          }
          transition={{ duration: utils.themeColorTransitionDuration }}
        />
      </s.IndicatorContainer>
      <s.ThemeItem
        onClick={setDarkTheme}
        onMouseEnter={() => {
          if (theme !== "dark") {
            cursorChangeHandler("dark");
          }
        }}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <s.Icon
          initial={{ stroke: colors.dark.primaryAccent }}
          animate={theme === "dark" && { stroke: colors[theme].secondaryAccent }}
          transition={{ duration: utils.themeColorTransitionDuration }}
        >
          <IoMoonOutline size={20} />
        </s.Icon>
      </s.ThemeItem>
      <s.ThemeItem
        onClick={setLightTheme}
        onMouseEnter={() => {
          if (theme !== "light") {
            cursorChangeHandler("light");
          }
        }}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <s.Icon
          initial={{ stroke: colors[theme].primaryAccent }}
          animate={
            theme === "light" && {
              stroke: colors[theme].secondaryAccent,
              fill: colors[theme].secondaryAccent,
            }
          }
          transition={{ duration: utils.themeColorTransitionDuration }}
        >
          <IoSunnyOutline size={20} />
        </s.Icon>
      </s.ThemeItem>
    </s.Container>
  );
};

export default ThemeToggle;
