import { breakpoints } from "@/theme";
import { m } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  max-width: ${(props) => props.theme.spacings.contentMaxWidth};
  padding-left: ${(props) => props.theme.spacings.padding};
  padding-right: ${(props) => props.theme.spacings.padding};
  padding-top: 5rem;
  margin: 0 auto;

  ${breakpoints.laptop} {
    min-height: auto;
  }
`;

export const GreetingsRowContainer = styled.div`
  height: clamp(60px, 11vw, 150px);
  position: relative;
`;

export const GreetingsAnimationContainer = styled(m.div)`
  position: absolute;
  width: clamp(135px, 25vw, 350px);
  overflow: hidden;
  height: 100%;
`;

export const RowContainer = styled.div`
  position: relative;
  width: auto;
  overflow: hidden;
`;

export const TextContainer = styled(m.div)`
  width: auto;
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
  /* height: clamp(50px, 10vw, 160px); */
  will-change: transform;
`;
