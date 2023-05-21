import BurgerButton from "@/components/library/atoms/BurgerButton";
import CustomLink from "@/components/library/atoms/CustomLink";
import Logo from "@/components/library/atoms/Logo";
import { HeaderNavLink } from "@/components/library/atoms/typography";
import { useMenuContext } from "@/context/MenuContext";
import { useMouseContext } from "@/context/MouseContext";
import { size } from "@/theme";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ThemeToggle from "../../library/atoms/ThemeToggle";
import * as s from "./styles";

const Header = () => {
  const { cursorChangeHandler } = useMouseContext();
  const { menuIsOpen, handleOpenMenu, handleCloseMenu } = useMenuContext();
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderHeaderLink = (href: string, label: string, hoverType: string) => {
    return (
      <div
        onMouseEnter={() => {
          if (router.asPath !== href) {
            cursorChangeHandler(hoverType);
          }
        }}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        {hoverType === "link" ? (
          <CustomLink link={href}>
            <HeaderNavLink>{label}</HeaderNavLink>
          </CustomLink>
        ) : (
          <HeaderNavLink>{label}</HeaderNavLink>
        )}
      </div>
    );
  };
  return windowWidth > size.laptop ? (
    <s.Container>
      <s.Header>
        <Logo />
        <s.Navigation>
          {renderHeaderLink("/", "<Home />", "link")}
          {renderHeaderLink("/about", "<About />", "construction")}
          {renderHeaderLink("/contact", "<Contact />", "construction")}
        </s.Navigation>
        <ThemeToggle />
      </s.Header>
    </s.Container>
  ) : (
    <s.Container>
      <s.MobileHeaderContainer>
        <Logo />
        <BurgerButton />
      </s.MobileHeaderContainer>
      <AnimatePresence>
        {/* <s.MobileMenuBackground> */}
        <s.MobileMenuContainer show={menuIsOpen}>
          <s.MenuContentContainer>
            <s.Navigation>
              {renderHeaderLink("/", "<Home />", "link")}
              {renderHeaderLink("/about", "<About />", "construction")}
              {renderHeaderLink("/contact", "<Contact />", "construction")}
            </s.Navigation>
            <ThemeToggle />
          </s.MenuContentContainer>
        </s.MobileMenuContainer>
        {/* </s.MobileMenuBackground> */}
      </AnimatePresence>
    </s.Container>
  );
};

export default Header;