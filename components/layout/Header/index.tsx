import CustomLink from "@/components/library/atoms/CustomLink";
import Logo from "@/components/library/atoms/Logo";
import { HeaderNavLink } from "@/components/library/atoms/typography";
import { useMouseContext } from "@/context/MouseContext";
import React, { useEffect, useState } from "react";
import ThemeToggle from "../../library/atoms/ThemeToggle";
import * as s from "./styles";

const Header = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const { cursorChangeHandler } = useMouseContext();

  useEffect(() => {
    const handleScroll = (e: Event) => {
      setScrollY(window.scrollY);
    };
    if (window !== undefined) {
      document.addEventListener("scroll", handleScroll);
    }

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const renderHeaderLink = (href: string, label: string) => {
    return (
      <div
        onMouseEnter={() => cursorChangeHandler("link")}
        onMouseLeave={() => cursorChangeHandler("")}
      >
        <CustomLink link={href}>
          <HeaderNavLink>{label}</HeaderNavLink>
        </CustomLink>
      </div>
    );
  };
  return (
    <s.Container>
      <s.Header
      // initial={{
      //   width: "100%",
      //   borderRadius: 0,
      //   backgroundColor: "transparent",
      //   y: 0,
      // }}
      // animate={
      //   scrollY > 100
      //     ? {
      //         width: "70%",
      //         borderRadius: 100,
      //         // backgroundColor: "red",
      //         y: 30,
      //       }
      //     : {
      //         width: "100%",
      //         borderRadius: 0,
      //         backgroundColor: "transparent",
      //         y: 0,
      //       }
      // }
      // transition={{ duration: 0.3 }}
      >
        <Logo />
        <s.Navigation>
          {renderHeaderLink("/", "<Home />")}
          {renderHeaderLink("/about", "<About />")}
          {renderHeaderLink("/contact", "<Contact />")}
        </s.Navigation>
        <ThemeToggle />
      </s.Header>
    </s.Container>
  );
};

export default Header;
