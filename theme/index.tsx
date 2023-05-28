import { FC } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

export const themeTransition = `background-color 0.5s linear, color 0.5s linear`;

const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 475,
  tablet: 768,
  laptop: 1025,
  laptopM: 1340,
  laptopL: 2000,
  desktop: 2600,
};

const breakpoints = {
  mobileS: `@media (min-width: ${size.mobileS}px)`,
  mobileM: `@media (min-width: ${size.mobileM}px)`,
  mobileL: `@media (min-width: ${size.mobileL}px)`,
  tablet: `@media (min-width: ${size.tablet}px)`,
  laptop: `@media (min-width: ${size.laptop}px)`,
  laptopM: `@media (min-width: ${size.laptopM}px)`,
  laptopL: `@media (min-width: ${size.laptopL}px)`,
  desktop: `@media(min-width: ${size.desktop}px)`,
  desktopL: `@media (min-width: ${size.desktop}px)`,
};

const GlobalStyle = createGlobalStyle`
  * {
    /* transition: inherit; */
    cursor: auto;
    ${breakpoints.tablet} {
      cursor: none;
    }
    margin:0;
  }
  body {
    margin: 0;
  }

  .fp-watermark {
    opacity: 0;
  }
`;

const supportColors: { [key: string]: string } = {
  orange: "#CF7914",
  red: "#D11B15",
  green: "#45CF15",
  purple: "#6915D1",
  yellow: "#D1C915",
  blue: "#158CD1",
};

const lightColors: { [key: string]: string } = {
  background: "#E8E4DE",
  primaryAccent: "#242424",
  secondaryAccent: "#E8E4DE",
  textPrimary: "#242424",
  cursor: "#242424",
  bubbles: "#242424",
  pageTransition: "#FFFFFF",
  ...supportColors,
};
const darkColors: { [key: string]: string } = {
  background: "#242424",
  primaryAccent: "#E8E4DE",
  secondaryAccent: "#242424",
  textPrimary: "#E8E4DE",
  cursor: "#646464",
  bubbles: "#E8E4DE",
  pageTransition: "#000000",
  ...supportColors,
};

const g = {
  1: "#CF7914",
  2: "#D11B15",
  3: "#45CF15",
  4: "#6915D1",
  5: "#D1C915",
  6: "#158CD1",
};
const gradients: { [key: string]: any } = {
  bluePurple: `to right bottom, ${supportColors.blue} 0% 30%, ${supportColors.purple} 70% 100%`,
  orangeRed: `to right bottom, ${supportColors.orange} 0% 30%, ${supportColors.red} 70% 100%`,
  yellowGreen: `to right bottom, ${supportColors.yellow} 0% 30%, ${supportColors.green} 70% 100%`,
  rainbow: `from 0deg , ${g[1]}, ${g[2]}, ${g[3]}, ${g[4]},  ${g[5]}, ${g[6]},${g[1]}, ${g[2]}, ${g[3]}, ${g[4]},  ${g[5]}, ${g[6]},${g[1]}, ${g[2]}, ${g[3]}, ${g[4]},  ${g[5]}, ${g[6]}, ${g[1]}`,
};

const colors: { [key: string]: any } = {
  dark: darkColors,
  light: lightColors,
  gradients: gradients,
};

const fonts = {};

const spacings = {
  contentMaxWidth: "1420px",
  padding: "2rem",
};

const utils = {
  borderRadius: "25px",
  themeColorTransitionDuration: 0.5,
  themeTransition,
  pageTransitionDuration: 1,
};

const theme = {
  fonts,
  spacings,
  breakpoints,
  utils,
};

interface ThemeProps {
  children: React.ReactNode;
  themeString: string;
}

const Theme: FC<ThemeProps> = ({ children, themeString }) => (
  <ThemeProvider
    theme={{
      ...theme,
      colors: themeString == "light" ? lightColors : darkColors,
      gradients: gradients,
    }}
  >
    {children}
  </ThemeProvider>
);

export { Theme, GlobalStyle, breakpoints, size, lightColors, darkColors, colors, utils };
