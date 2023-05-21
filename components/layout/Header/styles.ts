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

export const MobileMenuBackground = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  height: 100%;
`;

export const MobileMenuContainer = styled.div<{ show: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.background};
  transform: ${(props) => (props.show ? "translate(0)" : "translate(100%)")};
  transition: transform 0.5s cubic-bezier(0.7, 0, 0, 1);
  pointer-events: auto;
`;

export const MobileHeaderContainer = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: ${(props) => props.theme.spacings.padding};
  padding-right: ${(props) => props.theme.spacings.padding};
  position: absolute;
  left: 0;
  right: 0;
  z-index: 5;
  pointer-events: auto;
`;

export const MenuContentContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20%;
  gap: 8rem;
  padding: 4rem;
`;

export const MenuButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
