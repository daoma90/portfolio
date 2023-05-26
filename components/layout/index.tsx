import { FC, ReactNode } from "react";
import { GlobalStyle, Theme } from "@/theme";
import Header from "./Header";
import Container from "./Container";
import { useThemeContext } from "@/context/ThemeContext";
import CustomCursor from "../library/atoms/CustomCursor";
import dynamic from "next/dynamic";
import Splash from "./Splash";

const DynamicFooter = dynamic(() => import("./Footer"), { ssr: false });

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
        <DynamicFooter />
      </Container>
      {/* <Splash /> */}
      <CustomCursor />
    </Theme>
  );
};

export default Layout;
