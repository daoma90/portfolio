import styled from "styled-components";
import { m } from "framer-motion";
import { breakpoints } from "@/theme";

export const Ring = styled(m.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 25px;
  height: 25px;
  border: 2px solid ${(props) => props.theme.colors.cursor};
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: 100ms ease-out !important;
  -webkit-transition: 100ms ease-out !important;
  will-change: width, height, transform, border;
  z-index: 999;
  pointer-events: none;
  display: none;
  align-items: center;
  justify-content: center;

  ${breakpoints.tablet} {
    display: flex;
  }
`;

export const Dot = styled(m.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background-color: #ffffff;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  z-index: 998;
  pointer-events: none;
  backdrop-filter: grayscale(1);
  mix-blend-mode: difference;
  display: none;
  ${breakpoints.tablet} {
    display: initial;
  }
`;

export const IconContainer = styled(m.div)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
