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
  }
  body {
    margin: 0;
  }
`;

const lightColors: { [key: string]: any } = {
  background: "#FFFFFF",
  primaryAccent: "#000000",
  secondaryAccent: "#FFFFFF",
  textPrimary: "#000000",
  cursor: "#000000",
  bubbles: "#000000",
};
const darkColors: { [key: string]: any } = {
  background: "#000000",
  primaryAccent: "#FFFFFF",
  secondaryAccent: "#000000",
  textPrimary: "#FFFFFF",
  cursor: "#646464",
  bubbles: "#FFFFFF",
};

const colors: { [key: string]: any } = {
  dark: darkColors,
  light: lightColors,
};

const fonts = {};

const spacings = {
  contentMaxWidth: "1420px",
  padding: "2rem",
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

export { Theme, GlobalStyle, breakpoints, size, lightColors, darkColors, colors, utils };
