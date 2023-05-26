import CustomLink from "@/components/library/atoms/CustomLink";
import Logo from "@/components/library/atoms/Logo";
import { HeaderNavLink } from "@/components/library/atoms/typography";
import { useMouseContext } from "@/context/MouseContext";
import { utils } from "@/theme";
import { useRouter } from "next/router";
import React from "react";
import ThemeToggle from "../../../library/atoms/ThemeToggle";
import * as s from "./styles";

const DesktopHeader = () => {
  const { cursorChangeHandler } = useMouseContext();
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
              initial={{ opacity: 0, fontWeight: 400 }}
              animate={{ opacity: 1, fontWeight: router.asPath === href ? 800 : 400 }}
              transition={{
                opacity: { delay: 3, duration: 0 },
                fontWeight: { duration: 0.5, delay: utils.pageTransitionDuration },
              }}
            >
              {label}
            </HeaderNavLink>
          </CustomLink>
        ) : (
          <HeaderNavLink
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.8, duration: 0 }}
          >
            {label}
          </HeaderNavLink>
        )}
        <s.Block
          initial={{ y: "-101%" }}
          animate={{ y: [null, "0%", "101%"] }}
          transition={{
            delay: 3.5,
            duration: 0.6,
            ease: "linear",
          }}
        />
      </s.HeaderNavLinkContainer>
    );
  };
  return (
    <s.Container>
      <s.Header>
        <Logo />
        <s.Navigation>
          {renderHeaderLink("/", "<Home />", "link", 0)}
          {renderHeaderLink("/about", "<About />", "construction", 1)}
          {renderHeaderLink("/contact", "<Contact />", "construction", 2)}
        </s.Navigation>
        <ThemeToggle />
      </s.Header>
    </s.Container>
  );
};

export default DesktopHeader;
