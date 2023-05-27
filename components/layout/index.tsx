import { FC, ReactNode } from "react";
import { GlobalStyle, Theme } from "@/theme";
import Header from "./Header";
import Container from "./Container";
import { useThemeContext } from "@/context/ThemeContext";
import CustomCursor from "../library/atoms/CustomCursor";
import dynamic from "next/dynamic";
import Splash from "../library/atoms/Splash";
import ReactFullpage from "@fullpage/react-fullpage";

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
        <ReactFullpage.Wrapper>
          <Header />
          {children}
          {/* <DynamicFooter /> */}
        </ReactFullpage.Wrapper>
      </Container>
      {/* <Splash /> */}
      <DynamicCursor />
    </Theme>
  );
};

export default Layout;
