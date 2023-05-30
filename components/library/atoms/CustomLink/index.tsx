import Link from "next/link";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface CustomLinkProps {
  children: ReactNode;
  link: string;
  target?: string;
  ariaLabel?: string;
}

const CustomLink: FC<CustomLinkProps> = ({ children, link, target = "_self", ariaLabel }) => {
  return (
    <StyledLink href={link} target={target} aria-label={ariaLabel}>
      {children}
    </StyledLink>
  );
};

export default CustomLink;

const StyledLink = styled(Link)`
  text-decoration: none;
  pointer-events: auto;
`;
