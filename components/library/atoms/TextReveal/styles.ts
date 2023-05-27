import { m } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div<{ containerStyle: object }>`
  position: relative;
  overflow: hidden;
  ${(props) => ({ ...props.containerStyle })};
`;

export const Block = styled(m.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.primaryAccent};
`;
