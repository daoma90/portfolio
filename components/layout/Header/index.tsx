import CustomLink from "@/components/library/atoms/CustomLink";
import Logo from "@/components/library/atoms/Logo";
import { HeaderNavLink } from "@/components/library/atoms/typography";
import { useMouseContext } from "@/context/MouseContext";
import React, { useEffect, useState } from "react";
import ThemeToggle from "../../library/atoms/ThemeToggle";
import * as s from "./styles";

const Header = () => {
  // const [scrollY, setScrollY] = useState<number>(0);
  const { cursorChangeHandler } = useMouseContext();

  // useEffect(() => {
  //   const handleScroll = (e: Event) => {
  //     setScrollY(window.scrollY);
  //   };
  //   if (window !== undefined) {
  //     document.addEventListener("scroll", handleScroll);
  //   }

  //   return () => document.removeEventListener("scroll", handleScroll);
  // }, []);

  const renderHeaderLink = (href: string, label: string, hoverType: string) => {
    return (
      <div
        onMouseEnter={() => cursorChangeHandler(hoverType)}
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
  return (
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
  );
};

export default Header;
