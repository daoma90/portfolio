import { useMouseContext } from "@/context/MouseContext";
import React from "react";
import { LogoText } from "../typography";

const Logo = () => {
  const { cursorChangeHandler } = useMouseContext();
  return (
    <LogoText
      onMouseEnter={() => cursorChangeHandler("home")}
      onMouseLeave={() => {
        cursorChangeHandler("");
      }}
    >
      D.Ö
    </LogoText>
  );
};

export default Logo;
