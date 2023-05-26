import { m } from "framer-motion";
import styled from "styled-components";

export const BurgerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;
  pointer-events: auto;
`;

export const Button = styled.button`
  height: 60px;
  width: 60px;
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  position: relative;
`;

interface LineProps {
  menuIsOpen: boolean;
}

const Line = `
height: 2px;
  width: 35px;
  border-radius: 10px;
  transition: transform 0.6s cubic-bezier(.7,0,0,1);
`;

export const TopLine = styled.div<LineProps>`
  ${Line}
  transform: ${(props) =>
    props.menuIsOpen ? "rotate(45deg) translate(7px, 8px)" : "rotate(0deg) translate(0, 0)"};
  background-color: ${(props) => props.theme.colors.primaryAccent};
`;

export const MiddleLine = styled.div<LineProps>`
  ${Line}
  transform: ${(props) => (props.menuIsOpen ? "translateX(calc(-100vw + 180px))" : "")};
  position: absolute;
  background-color: ${(props) => props.theme.colors.primaryAccent};
`;

export const BottomLine = styled.div<LineProps>`
  ${Line}
  transform: ${(props) =>
    props.menuIsOpen ? "rotate(-45deg) translate(6px, -7px)" : "rotate(0deg)"};
  background-color: ${(props) => props.theme.colors.primaryAccent};
`;
