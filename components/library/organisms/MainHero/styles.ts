import { breakpoints } from "@/theme";
import { m } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  max-width: ${(props) => props.theme.spacings.contentMaxWidth};
  padding-left: ${(props) => props.theme.spacings.paddingHorizontal};
  padding-right: ${(props) => props.theme.spacings.paddingHorizontal};
  padding-top: ${(props) => props.theme.spacings.sectionVerticalPadding};
  padding-bottom: ${(props) => props.theme.spacings.sectionVerticalPadding};
  margin: 0 auto;
  ${breakpoints.laptop} {
    min-height: auto;
    height: 100vh;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const GreetingsRowContainer = styled(m.div)`
  height: clamp(60px, 11vw, 150px);
  position: relative;
`;

export const GreetingsAnimationContainer = styled(m.div)`
  position: absolute;
  width: clamp(150px, 25vw, 350px);
  overflow: hidden;
  height: clamp(60px, 10vw, 150px);
  display: flex;
  align-items: center;
`;

export const RowContainer = styled(m.div)`
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

export const Name = styled.span`
  color: ${(props) => props.theme.colors.orange};
`;
