import CustomLink from "@/components/library/atoms/CustomLink";
import Icons from "@/components/library/atoms/Icons";
import { useMouseContext } from "@/context/MouseContext";
import React, { FC } from "react";
import * as s from "./styles";

interface FooterProps {
  direction: string;
  index: number;
  origin: number;
}

const Footer: FC<FooterProps> = ({ direction, index, origin }) => {
  const { cursorChangeHandler } = useMouseContext();

  const downIn = (delay: number) => {
    return { y: 0, opacity: 1, transition: { duration: 0.3, delay: delay, ease: "easeOut" } };
  };

  const upOut = (delay: number) => {
    return { y: 100, opacity: 0, transition: { duration: 0.2, delay: delay, ease: "easeOut" } };
  };

  return (
    <s.Container>
      <s.Glow />
      <s.Border />
      <s.Background></s.Background>
      <s.ContentContainer>
        <s.IconRow>
          <s.IconContainer
            onMouseEnter={() => {
              cursorChangeHandler("mail");
            }}
            onMouseLeave={() => {
              cursorChangeHandler("");
            }}
            initial={{ y: 200, opacity: 0 }}
            animate={direction === "down" && origin === index - 1 ? downIn(0.8) : upOut(0)}
          >
            <CustomLink link="mailto:daoma90@gmail.com">
              <Icons icon="mail-circle" color="primaryAccent" size={50} />
            </CustomLink>
          </s.IconContainer>
          <s.IconContainer
            onMouseEnter={() => {
              cursorChangeHandler("open");
            }}
            onMouseLeave={() => {
              cursorChangeHandler("");
            }}
            animate={direction === "down" && origin === index - 1 ? downIn(0.9) : upOut(0.1)}
          >
            <CustomLink link="https://github.com/daoma90" target="_blank">
              <Icons icon="github" color="primaryAccent" size={50} />
            </CustomLink>
          </s.IconContainer>
          <s.IconContainer
            onMouseEnter={() => {
              cursorChangeHandler("open");
            }}
            onMouseLeave={() => {
              cursorChangeHandler("");
            }}
            animate={direction === "down" && origin === index - 1 ? downIn(1) : upOut(0.2)}
          >
            <CustomLink link="https://www.linkedin.com/in/davidoman90/" target="_blank">
              <Icons icon="linkedin" color="primaryAccent" size={50} />
            </CustomLink>
          </s.IconContainer>
        </s.IconRow>
      </s.ContentContainer>
    </s.Container>
  );
};

export default Footer;
