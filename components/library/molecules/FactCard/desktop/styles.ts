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
`;

export const CardBackground = styled(m.div)`
  width: 400px;
  height: 300px;
  background-color: ${(props) => props.theme.colors.primaryAccent};
  position: absolute;
  top: 40px;
  right: 0;
  z-index: -1;
  display: flex;
  flex-direction: column;
  gap: 25px;
  border-radius: 25px;
  transition: ${(props) => props.theme.utils.themeTransition};
  margin: 0 auto;
`;

export const FactContent = styled(m.div)`
  position: absolute;
  top: 40px;
  width: 400px;
  right: -10px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 50px;
  pointer-events: none;
`;

export const ToggleButton = styled.button`
  position: relative;
  z-index: 2;
  height: 38px;
  width: 38px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primaryAccent};
  pointer-events: auto;
  transition: ${(props) => props.theme.utils.themeTransition};
`;

export const Icon = styled.div`
  position: absolute;
  z-index: 2;
  height: 38px;
  width: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;
