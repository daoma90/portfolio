import { FC } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 475,
  tablet: 768,
  laptop: 1025,
  laptopM: 1340,
  laptopL: 1440,
  desktop: 2560,
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
    transition: inherit;
    cursor: auto;
    ${breakpoints.tablet} {
      cursor: none;
    }
    margin:0;
  }
  body {
    margin: 0;
  }
`;

const lightColors: { [key: string]: any } = {
  background: "#E8E4DE",
  primaryAccent: "#242424",
  secondaryAccent: "#E8E4DE",
  textPrimary: "#242424",
  cursor: "#242424",
  bubbles: "#242424",
  pageTransition: "#FFFFFF",
};
const darkColors: { [key: string]: any } = {
  background: "#242424",
  primaryAccent: "#E8E4DE",
  secondaryAccent: "#242424",
  textPrimary: "#E8E4DE",
  cursor: "#646464",
  bubbles: "#E8E4DE",
  pageTransition: "#000000",
};
const gradients: { [key: string]: any } = {
  bluePurple: "to right bottom, #3BB2F6 0% 30%, #8D36F9 70% 100%",
  orangeRed: "to right bottom, #EEA12D 0% 30%, #DF2A2A 70% 100%",
  yellowGreen: "to right bottom, #E5E92A 0% 30%, #4CC123 70% 100%",
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
  pageTransitionDuration: 0.5,
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
