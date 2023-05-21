import styled from "styled-components";
import { m } from "framer-motion";
import { norican, sourceCodePro, sourceSerifPro800 } from "@/theme/fonts";

export const HeroText = styled(m.h1)`
  ${sourceSerifPro800}
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 128px;
  margin: 0;
`;

export const HeaderNavLink = styled(m.p)`
  ${sourceCodePro.style}
  text-decoration: none;
  color: ${(props) => props.theme.colors.textPrimary};
  pointer-events: none;
  margin: 0;
`;

export const LogoText = styled.p`
  ${norican.style}
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 25px;
`;
