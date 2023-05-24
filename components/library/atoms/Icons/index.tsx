import React, { FC, ReactElement } from "react";
import { DiJsBadge, DiReact } from "react-icons/di";
import styled from "styled-components";
import FigmaIcon from "./figma";
import JSIcon from "./js";
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
          <JSIcon size={size} color={color} />
        </StyledIcon>
      );
    case "react":
      return (
        <StyledIcon size={size} color={color}>
          <ReactIcon size={size} color={color} />
        </StyledIcon>
      );
    case "next":
      return (
        <StyledIcon size={size} color={color}>
          <NextIcon size={size} color={color} />
        </StyledIcon>
      );
    case "figma":
      return (
        <StyledIcon size={size} color={color}>
          <FigmaIcon size={size} color={color} />
        </StyledIcon>
      );
    default:
      return (
        <StyledIcon size={size} color={color}>
          <ReactIcon size={size} color={color} />
        </StyledIcon>
      );
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
  }
`;
