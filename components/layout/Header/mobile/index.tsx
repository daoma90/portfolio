import BurgerButton from "@/components/library/atoms/BurgerButton";
import CustomLink from "@/components/library/atoms/CustomLink";
import Logo from "@/components/library/atoms/Logo";
import { HeaderNavLink } from "@/components/library/atoms/typography";
import { useMenuContext } from "@/context/MenuContext";
import { useMouseContext } from "@/context/MouseContext";
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
      >
        {hoverType === "link" ? (
          <CustomLink link={href}>
            <HeaderNavLink
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.3 + 0.6, duration: 0 }}
            >
              {label}
            </HeaderNavLink>
          </CustomLink>
        ) : (
          <HeaderNavLink
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3 + 0.6, duration: 0 }}
          >
            {label}
          </HeaderNavLink>
        )}
        <s.Block
          initial={{ x: "-101%" }}
          animate={{ x: [null, "0%", "101%"] }}
          transition={{
            delay: index * 0.3 + 0.2,
            duration: 1,
            ease: [0.7, 0, 0, 1],
          }}
        />
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
          <s.MenuContentContainer>
            {menuIsOpen && (
              <s.Navigation>
                {renderHeaderLink("/", "<Home />", "link", 0)}
                {renderHeaderLink("/about", "<About />", "link", 1)}
                {renderHeaderLink("/contact", "<Contact />", "construction", 2)}
              </s.Navigation>
            )}
            <ThemeToggle />
          </s.MenuContentContainer>
        </s.MobileMenuContainer>
      </AnimatePresence>
    </s.Container>
  );
};

export default MobileHeader;
