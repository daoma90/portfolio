import { FC } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    transition: inherit;
    cursor: none;
  }
  body {
    margin: 0;
    transition: unset;
  }
`;

const lightColors: { [key: string]: any } = {
  background: "#FFFFFF",
  primaryAccent: "#000000",
  secondaryAccent: "#FFFFFF",
  textPrimary: "#000000",
  cursor: "#000000",
  bubbles: "#ED5565",
};
const darkColors: { [key: string]: any } = {
  background: "#000000",
  primaryAccent: "#FFFFFF",
  secondaryAccent: "#000000",
  textPrimary: "#FFFFFF",
  cursor: "#646464",
  bubbles: "#3d3d3d",
};

const colors: { [key: string]: any } = {
  dark: darkColors,
  light: lightColors,
};

const fonts = {};

const spacings = {
  contentMaxWidth: "1420px",
};

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "475px",
  tablet: "768px",
  laptop: "1025px",
  laptopM: "1340px",
  laptopL: "1440px",
  desktop: "2560px",
};

const breakpoints = {
  mobileS: `@media (min-width: ${size.mobileS})`,
  mobileM: `@media (min-width: ${size.mobileM})`,
  mobileL: `@media (min-width: ${size.mobileL})`,
  tablet: `@media (min-width: ${size.tablet})`,
  laptop: `@media (min-width: ${size.laptop})`,
  laptopM: `@media (min-width: ${size.laptopM})`,
  laptopL: `@media (min-width: ${size.laptopL})`,
  desktop: `@media(min-width: ${size.desktop})`,
  desktopL: `@media (min-width: ${size.desktop})`,
};

const utils = {
  borderRadius: "25px",
  themeColorTransitionDuration: 0.5,
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
  <ThemeProvider theme={{ ...theme, colors: themeString == "light" ? lightColors : darkColors }}>
    {children}
  </ThemeProvider>
);

export { Theme, GlobalStyle, breakpoints, lightColors, darkColors, colors, utils };
