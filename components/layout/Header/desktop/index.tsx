import CustomLink from "@/components/library/atoms/CustomLink";
import FactToggle from "@/components/library/atoms/FactToggle";
import Logo from "@/components/library/atoms/Logo";
import TextReveal from "@/components/library/atoms/TextReveal";
import { HeaderNavLink } from "@/components/library/atoms/typography";
import FactCard from "@/components/library/molecules/FactCard";
import { useFullPageContext } from "@/context/FullPageContext";
import { useMouseContext } from "@/context/MouseContext";
import { utils } from "@/theme";
import { useRouter } from "next/router";
import React from "react";
import ThemeToggle from "../../../library/atoms/ThemeToggle";
import * as s from "./styles";

const DesktopHeader = () => {
  const { cursorChangeHandler } = useMouseContext();
  // const { handleMoveTo } = useFullPageContext();
  const router = useRouter();

  const renderHeaderLink = (href: string, label: string, hoverType: string) => {
    return (
      <s.HeaderNavLinkContainer
        onMouseEnter={() => {
          if (router.asPath !== href) {
            cursorChangeHandler(hoverType);
          }
        }}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <TextReveal direction="y" blockDelay={2 + utils.pageTransitionDuration} blockDuration={0.6}>
          {hoverType === "link" ? (
            <CustomLink link={href}>
              <HeaderNavLink
                initial={{ fontWeight: 400 }}
                animate={{ fontWeight: router.asPath === href ? 800 : 400 }}
                transition={{
                  duration: 0.5,
                  delay: utils.pageTransitionDuration,
                }}
              >
                {label}
              </HeaderNavLink>
            </CustomLink>
          ) : (
            <HeaderNavLink
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ delay: 3.9 + utils.pageTransitionDuration, duration: 0 }}
            >
              {label}
            </HeaderNavLink>
          )}
        </TextReveal>
      </s.HeaderNavLinkContainer>
    );
  };
  return (
    <s.Container>
      <s.Header>
        <Logo />
        <s.Navigation>
          {renderHeaderLink("/", "<Home />", "arrow-forward")}
          {renderHeaderLink("/about", "<About />", "construction")}
          {renderHeaderLink("/#contact", "<Contact />", "construction")}
        </s.Navigation>
        <s.ToggleContainer>
          <FactToggle />
          <ThemeToggle />
        </s.ToggleContainer>
      </s.Header>
      <FactCard />
    </s.Container>
  );
};

export default DesktopHeader;
