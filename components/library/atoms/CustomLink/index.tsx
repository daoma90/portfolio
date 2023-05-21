import Link from "next/link";
import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface CustomLinkProps {
  children: ReactNode;
  link: string;
}

const CustomLink: FC<CustomLinkProps> = ({ children, link }) => {
  return <StyledLink href={link}>{children}</StyledLink>;
};

export default CustomLink;

const StyledLink = styled(Link)`
  text-decoration: none;
  pointer-events: auto;
`;
