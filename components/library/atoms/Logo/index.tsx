import { useMouseContext } from "@/context/MouseContext";
import { useRouter } from "next/router";
import React from "react";
import CustomLink from "../CustomLink";
import { LogoText } from "../typography";
import * as s from "./styles";

const Logo = () => {
  const { cursorChangeHandler } = useMouseContext();
  const router = useRouter();
  return (
    <s.Container>
      <CustomLink link="/">
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
      </CustomLink>
    </s.Container>
  );
};

export default Logo;
