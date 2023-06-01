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
  ${breakpoints.laptop} {
    height: unset;
    flex-direction: row;
    justify-content: center;
  }
`;

export const Navigation = styled(m.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  pointer-events: auto;
  ${breakpoints.laptop} {
    flex-direction: row;
  }
`;

export const MobileMenuBackground = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  height: 100%;
  min-height: 100svh;
  transition: ${(props) => props.theme.utils.themeTransition};
  overflow-y: auto;
`;

export const MobileMenuContainer = styled.div<{ show: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transform: ${(props) => (props.show ? "translate(0)" : "translate(100%)")};
  transition: transform 0.5s cubic-bezier(0.7, 0, 0, 1);
  pointer-events: auto;
`;

export const MobileHeaderContainer = styled.div<{ menuIsOpen: boolean }>`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: ${(props) => props.theme.spacings.paddingHorizontal};
  padding-right: ${(props) => props.theme.spacings.paddingHorizontal};
  position: absolute;
  left: 0;
  right: 0;
  z-index: 5;
  pointer-events: auto;
`;

export const MenuContentContainer = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* margin-top: 20%; */
  gap: 15vh;
  padding: 8rem;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const MenuButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const HeaderNavLinkContainer = styled(m.div)`
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
