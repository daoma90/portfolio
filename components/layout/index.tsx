import { FC, ReactNode } from "react";
import { GlobalStyle, Theme } from "@/theme";
import Header from "./Header";
import Container from "./Container";
import { useThemeContext } from "@/context/ThemeContext";
import dynamic from "next/dynamic";
import Splash from "../library/atoms/Splash";
import Footer from "./Footer/glow";

const DynamicFooter = dynamic(() => import("./Footer/glow"), { ssr: false });
const DynamicCursor = dynamic(() => import("../library/atoms/CustomCursor"), { ssr: false });

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
        {/* <DynamicFooter /> */}
        {/* <Footer /> */}
      </Container>
      {/* <Splash /> */}
      <DynamicCursor />
    </Theme>
  );
};

export default Layout;
