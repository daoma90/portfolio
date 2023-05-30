import Image from "next/image";
import React, { FC } from "react";
import {
  IoArrowDown,
  IoArrowForward,
  IoHomeOutline,
  IoMailOutline,
  IoMoonOutline,
  IoOpenOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import styled from "styled-components";
import ExpoIcon from "./expo";
import FigmaIcon from "./figma";
import GithubIcon from "./github";
import JSIcon from "./js";
import LinkedinIcon from "./linkedin";
import MailCircleIcon from "./mail-circle";
import NextIcon from "./next";
import ReactIcon from "./react";

interface IconsProps {
  icon: string;
  size: number;
  color: string;
}

const Icons: FC<IconsProps> = ({ icon, size, color }) => {
  switch (icon) {
    case "js":
      return (
        <StyledIcon size={size} color={color}>
          <JSIcon size={size} />
        </StyledIcon>
      );
    case "react":
      return (
        <StyledIcon size={size} color={color}>
          <ReactIcon size={size} />
        </StyledIcon>
      );
    case "next":
      return (
        <StyledIcon size={size} color={color}>
          <NextIcon size={size} />
        </StyledIcon>
      );
    case "figma":
      return (
        <StyledIcon size={size} color={color}>
          <FigmaIcon size={size} />
        </StyledIcon>
      );
    case "expo":
      return (
        <StyledIcon size={size} color={color}>
          <ExpoIcon size={size} />
        </StyledIcon>
      );
    case "mail-circle":
      return (
        <StyledIcon size={size} color={color}>
          <MailCircleIcon size={size} />
        </StyledIcon>
      );
    case "mail":
      return (
        <StyledIoIcon size={size} color={color}>
          <IoMailOutline size={size} />
        </StyledIoIcon>
      );
    case "github":
      return (
        <StyledIcon size={size} color={color}>
          <GithubIcon size={size} />
        </StyledIcon>
      );
    case "linkedin":
      return (
        <StyledIcon size={size} color={color}>
          <LinkedinIcon size={size} />
        </StyledIcon>
      );
    case "moon":
      return (
        <StyledIoIcon size={size} color={color}>
          <IoMoonOutline size={size} />
        </StyledIoIcon>
      );
    case "sun":
      return (
        <StyledIoIcon size={size} color={color}>
          <IoSunnyOutline size={size} />
        </StyledIoIcon>
      );
    case "arrow-forward":
      return (
        <StyledIoIcon size={size} color={color}>
          <IoArrowForward size={size} />
        </StyledIoIcon>
      );
    case "arrow-down":
      return (
        <StyledIoIcon size={size} color={color}>
          <IoArrowDown size={size} />
        </StyledIoIcon>
      );
    case "home":
      return (
        <StyledIoIcon size={size} color={color}>
          <IoHomeOutline size={size} />
        </StyledIoIcon>
      );
    case "open":
      return (
        <StyledIoIcon size={size} color={color}>
          <IoOpenOutline size={size} />
        </StyledIoIcon>
      );
    case "construction":
      return <Image src="/underconstruction.png" alt="Construction sign" width={40} height={40} />;
    default:
      return null;
  }
};

export default Icons;

interface StyledIconProps {
  color: string;
  size: number;
}

const StyledIcon = styled.div<StyledIconProps>`
  max-height: ${(props) => props.size}px;
  max-width: ${(props) => props.size}px;
  path {
    fill: ${(props) => props.theme.colors[props.color]};
    transition-duration: 0.5s;
  }
`;

const StyledIoIcon = styled.div<StyledIconProps>`
  max-height: ${(props) => props.size}px;
  max-width: ${(props) => props.size}px;
  svg {
    color: ${(props) => props.theme.colors[props.color]};
    transition-duration: 0.5s;
  }
`;
