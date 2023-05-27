import styled from "styled-components";
import { m } from "framer-motion";
import { breakpoints } from "@/theme";

export const Container = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
  z-index: 5;
  pointer-events: none;
  overflow: hidden;
  ${breakpoints.laptop} {
    height: unset;
    flex-direction: row;
    justify-content: center;
  }
`;

export const Header = styled(m.nav)`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;
  background-color: transparent;
  padding-left: ${(props) => props.theme.spacings.padding};
  padding-right: ${(props) => props.theme.spacings.padding};
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  pointer-events: auto;
  ${breakpoints.laptop} {
    flex-direction: row;
  }
`;

export const HeaderNavLinkContainer = styled(m.div)`
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Block = styled(m.div)`
  position: absolute;
  top: -10px;
  left: 0;
  right: 0;
  bottom: -10px;
  will-change: transform;
  background-color: ${(props) => props.theme.colors.primaryAccent};
  transition: unset;
`;
