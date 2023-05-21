import { useMouseContext } from "@/context/MouseContext";
import { useRouter } from "next/router";
import React from "react";
import { LogoText } from "../typography";

const Logo = () => {
  const { cursorChangeHandler } = useMouseContext();
  const router = useRouter();
  return (
    <LogoText
      onMouseEnter={() => {
        if (router.asPath !== "/") {
          cursorChangeHandler("home");
        }
      }}
      onMouseLeave={() => {
        cursorChangeHandler("");
      }}
    >
      D.Ö
    </LogoText>
  );
};

export default Logo;
