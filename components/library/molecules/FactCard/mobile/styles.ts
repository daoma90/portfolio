import { breakpoints } from "@/theme";
import { m } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BlobContainer = styled.div`
  filter: url("#blob");
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BackgroundContainer = styled(m.div)`
  width: 100%;
  position: absolute;
  right: 0;
  left: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const CardBackground = styled(m.div)`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.primaryAccent};
  border-radius: 25px;
  transition: ${(props) => props.theme.utils.themeTransition};
`;

export const FactContainer = styled(m.div)`
  width: 100%;
  position: absolute;
  right: 0;
  left: 0;
  /* z-index: -1; */
  display: flex;
  align-items: center;
`;

export const FactContent = styled(m.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 50px;
  pointer-events: none;
`;

export const ToggleButton = styled.button`
  position: relative;
  z-index: 2;
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primaryAccent};
  pointer-events: auto;
  transition: ${(props) => props.theme.utils.themeTransition};
`;

export const Icon = styled.div`
  position: absolute;
  z-index: 2;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;
