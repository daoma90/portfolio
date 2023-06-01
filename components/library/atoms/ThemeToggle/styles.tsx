import styled from "styled-components";
import { m } from "framer-motion";
import { breakpoints } from "@/theme";

export const Container = styled.div`
  position: relative;
  width: max-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid ${(props) => props.theme.colors.primaryAccent};
  border-radius: 30px;
  pointer-events: auto;
  transition: ${(props) => props.theme.utils.themeTransition};
`;

export const ThemeItem = styled.button`
  background-color: unset;
  border: none;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  z-index: 2;

  ${breakpoints.laptop} {
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

export const Icon = styled(m.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    stroke: inherit;
    fill: inherit;
    height: 30px;
    width: 30px;
  }

  ${breakpoints.laptop} {
    svg {
      height: 20px;
      width: 20px;
    }
  }
`;

export const IndicatorContainer = styled.div`
  position: absolute;
  top: -1px;
  bottom: -1px;
  right: -1px;
  left: -1px;
  pointer-events: none;
`;

export const Indicator = styled(m.div)`
  height: 100%;
  width: 50%;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.primaryAccent};
  transition: unset;
`;
