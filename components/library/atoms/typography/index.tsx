import styled from "styled-components";
import { m } from "framer-motion";
import { norican, sourceCodePro, sourceSerifPro400, sourceSerifPro800 } from "@/theme/fonts";
import { breakpoints } from "@/theme";

export const HeroText = styled(m.h1)`
  ${sourceSerifPro800}
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: clamp(50px, 9vw, 128px);
  margin: 0;
  transition: ${(props) => props.theme.utils.themeTransition};
`;

export const H2 = styled(m.h2)`
  ${sourceSerifPro800}
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: clamp(25px, 9vw, 30px);
  margin: 0;
  transition: ${(props) => props.theme.utils.themeTransition};
`;

export const H3 = styled(m.h3)`
  ${sourceSerifPro800.style}
  weight: 600;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: clamp(26px, 9vw, 48px);
  margin: 0;
  transition: ${(props) => props.theme.utils.themeTransition};
`;

export const BodyRegular = styled(m.p)`
  ${sourceCodePro.style}
  weight: 400;
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.textPrimary};
  font-size: clamp(14px, 4vw, 16px);
  transition: ${(props) => props.theme.utils.themeTransition};
`;

export const BodyLarge = styled(m.p)`
  ${sourceCodePro.style}
  weight: 400;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: clamp(14px, 4vw, 18px);
  transition: ${(props) => props.theme.utils.themeTransition};
`;

export const BodyXL = styled(m.p)`
  ${sourceCodePro.style}
  weight: 400;
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: clamp(16px, 2vw, 26px);
  transition: ${(props) => props.theme.utils.themeTransition};
`;

export const HeaderNavLink = styled(m.p)`
  ${sourceCodePro.style}
  text-decoration: none;
  color: ${(props) => props.theme.colors.textPrimary};
  pointer-events: none;
  margin: 0;
  font-size: 2rem;
  display: flex;
  align-items: center;
  transition: ${(props) => props.theme.utils.themeTransition};
  ${breakpoints.laptop} {
    font-size: 1rem;
    height: 40px;
  }
`;

export const LogoText = styled.p`
  ${norican.style}
  color: ${(props) => props.theme.colors.textPrimary};
  font-size: 25px;
  margin: 0;
  transition: ${(props) => props.theme.utils.themeTransition};
`;
