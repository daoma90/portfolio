import { m } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  max-width: ${(props) => props.theme.spacings.contentMaxWidth};
  margin: 0 auto;
`;

export const GreetingsAnimationContainer = styled(m.div)`
  position: absolute;
  width: 350px;
  height: 150px;
  overflow: hidden;
`;

export const GreetingsRowContainer = styled.div`
  height: 150px;
  position: relative;
`;

export const RowContainer = styled.div`
  height: 150px;
  position: relative;
  width: max-content;
  overflow: hidden;
`;

export const TextContainer = styled(m.div)`
  width: max-content;
`;

export const Block = styled(m.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.primaryAccent};
  height: 100%;
  width: 100%;
  will-change: transform;
`;
