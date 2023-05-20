import { FC, ReactNode } from "react";
import { GlobalStyle, Theme } from "@/theme";
import Footer from "./Footer";
import Header from "./Header";
import Container from "./Container";
import { useThemeContext } from "@/context/ThemeContext";
import CustomCursor from "../library/atoms/CustomCursor";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { theme } = useThemeContext();
  return (
    <Theme themeString={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
      <CustomCursor />
    </Theme>
  );
};

export default Layout;
