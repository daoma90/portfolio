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
  /* pointer-events: none; */
  // overflow: hidden;
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
  padding-left: ${(props) => props.theme.spacings.paddingHorizontal};
  padding-right: ${(props) => props.theme.spacings.paddingHorizontal};
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

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;
