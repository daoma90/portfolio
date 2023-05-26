import styled from "styled-components";
import { m } from "framer-motion";
import { norican, sourceCodePro, sourceSerifPro400, sourceSerifPro800 } from "@/theme/fonts";
import { breakpoints } from "@/theme";

export const HeroText = styled(m.h1)`
  ${sourceSerifPro800}
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: clamp(50px, 9vw, 128px);
  margin: 0;
`;

export const H2 = styled(m.h2)`
  ${sourceSerifPro800}
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: clamp(25px, 9vw, 30px);
  margin: 0;
`;

export const H3 = styled(m.h3)`
  ${sourceSerifPro800.style}
  weight: 600;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: clamp(26px, 9vw, 48px);
  margin: 0;
`;

export const BodyRegular = styled(m.p)`
  ${sourceCodePro.style}
  weight: 400;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 16px;
`;

export const BodyLarge = styled(m.p)`
  ${sourceCodePro.style}
  weight: 400;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 18px;
`;

export const HeaderNavLink = styled(m.p)`
  ${sourceCodePro.style}
  text-decoration: none;
  color: ${(props) => props.theme.colors.textPrimary};
  pointer-events: none;
  margin: 0;
  font-size: 2rem;

  ${breakpoints.laptop} {
    font-size: 1rem;
  }
`;

export const LogoText = styled.p`
  ${norican.style}
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 25px;
  margin: 0;
`;
