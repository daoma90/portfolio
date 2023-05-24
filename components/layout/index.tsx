import { FC, ReactNode } from "react";
import { GlobalStyle, Theme } from "@/theme";
import Header from "./Header";
import Container from "./Container";
import { useThemeContext } from "@/context/ThemeContext";
import CustomCursor from "../library/atoms/CustomCursor";
import dynamic from "next/dynamic";
import PageTransition from "./PageTransition";

const DynamicFooter = dynamic(() => import("./Footer"), { ssr: false });

interface LayoutProps {
  children: ReactNode;
  pathname: string;
}

const Layout: FC<LayoutProps> = ({ children, pathname }) => {
  const { theme } = useThemeContext();
  return (
    <Theme themeString={theme}>
      <GlobalStyle />
      <Container>
        <Header />
        <PageTransition key={pathname}>{children}</PageTransition>
        <DynamicFooter />
      </Container>
      <CustomCursor />
    </Theme>
  );
};

export default Layout;
