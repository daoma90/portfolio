import CustomLink from "@/components/library/atoms/CustomLink";
import Icons from "@/components/library/atoms/Icons";
import { useMouseContext } from "@/context/MouseContext";
import React from "react";
import * as s from "./styles";

const Footer = () => {
  const { cursorChangeHandler } = useMouseContext();
  return (
    <s.Container>
      <s.Glow />
      <s.Border />
      <s.Background></s.Background>
      <s.ContentContainer>
        <s.IconContainer>
          <s.IconLink
            onMouseEnter={() => {
              cursorChangeHandler("mail");
            }}
            onMouseLeave={() => {
              cursorChangeHandler("");
            }}
          >
            <CustomLink link="mailto:daoma90@gmail.com">
              <Icons icon="mail-circle" color="primaryAccent" size={50} />
            </CustomLink>
          </s.IconLink>
          <s.IconLink
            onMouseEnter={() => {
              cursorChangeHandler("open");
            }}
            onMouseLeave={() => {
              cursorChangeHandler("");
            }}
          >
            <CustomLink link="https://github.com/daoma90" target="_blank">
              <Icons icon="github" color="primaryAccent" size={50} />
            </CustomLink>
          </s.IconLink>
          <s.IconLink
            onMouseEnter={() => {
              cursorChangeHandler("open");
            }}
            onMouseLeave={() => {
              cursorChangeHandler("");
            }}
          >
            <CustomLink link="https://www.linkedin.com/in/davidoman90/" target="_blank">
              <Icons icon="linkedin" color="primaryAccent" size={50} />
            </CustomLink>
          </s.IconLink>
        </s.IconContainer>
      </s.ContentContainer>
    </s.Container>
  );
};

export default Footer;
