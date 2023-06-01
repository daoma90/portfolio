import BurgerButton from "@/components/library/atoms/BurgerButton";
import CustomLink from "@/components/library/atoms/CustomLink";
import Logo from "@/components/library/atoms/Logo";
import TextReveal from "@/components/library/atoms/TextReveal";
import { HeaderNavLink } from "@/components/library/atoms/typography";
import FactCard from "@/components/library/molecules/FactCard/desktop";
import FactCardMobile from "@/components/library/molecules/FactCard/mobile";
import { useMenuContext } from "@/context/MenuContext";
import { useMouseContext } from "@/context/MouseContext";
import { utils } from "@/theme";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";
import ThemeToggle from "../../../library/atoms/ThemeToggle";
import * as s from "./styles";

const MobileHeader = () => {
  const { cursorChangeHandler } = useMouseContext();
  const { menuIsOpen } = useMenuContext();
  const router = useRouter();
  const renderHeaderLink = (href: string, label: string, hoverType: string, index: number) => {
    return (
      <s.HeaderNavLinkContainer
        onMouseEnter={() => {
          if (router.asPath !== href) {
            cursorChangeHandler(hoverType);
          }
        }}
        onMouseLeave={() => cursorChangeHandler("")}
        exit={{ transition: { delay: 1 } }}
      >
        <TextReveal direction="x" blockDelay={index * 0.3 + 0.2} blockDuration={1}>
          {hoverType === "link" ? (
            <CustomLink link={href}>
              <HeaderNavLink>{label}</HeaderNavLink>
            </CustomLink>
          ) : (
            <HeaderNavLink>{label}</HeaderNavLink>
          )}
        </TextReveal>
      </s.HeaderNavLinkContainer>
    );
  };
  return (
    <s.Container>
      <s.MobileHeaderContainer menuIsOpen={menuIsOpen}>
        <Logo />
        <BurgerButton />
      </s.MobileHeaderContainer>
      <AnimatePresence>
        <s.MobileMenuContainer show={menuIsOpen}>
          <s.MobileMenuBackground>
            <s.MenuContentContainer>
              <ThemeToggle />
              <AnimatePresence>
                {menuIsOpen && (
                  <s.Navigation
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { delay: 1 } }}
                  >
                    {renderHeaderLink("/", "<Home />", "link", 0)}
                    {renderHeaderLink("/about", "<About />", "link", 1)}
                    {renderHeaderLink("/contact", "<Contact />", "construction", 2)}
                  </s.Navigation>
                )}
              </AnimatePresence>
              <FactCardMobile />
            </s.MenuContentContainer>
          </s.MobileMenuBackground>
        </s.MobileMenuContainer>
      </AnimatePresence>
    </s.Container>
  );
};

export default MobileHeader;
