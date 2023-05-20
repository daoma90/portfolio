import styled from "styled-components";
import { m } from "framer-motion";

export const Container = styled.div`
  position: relative;
  width: max-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid ${(props) => props.theme.colors.primaryAccent};
  border-radius: ${(props) => props.theme.utils.borderRadius};
`;

export const ThemeItem = styled.button`
  background-color: unset;
  border: none;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  z-index: 2;
`;

export const Icon = styled(m.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    stroke: inherit;
    fill: inherit;
  }
`;

export const IndicatorContainer = styled.div<{ justify: string }>`
  position: absolute;
  top: -1px;
  bottom: -1px;
  right: -1px;
  left: -1px;
  display: flex;
  justify-content: ${(props) => props.justify};
  pointer-events: none;
`;

export const Indicator = styled(m.div)`
  height: 100%;
  aspect-ratio: 1/1;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.primaryAccent};
  transition: unset;
`;
