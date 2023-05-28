import { breakpoints } from "@/theme";
import { m } from "framer-motion";
import styled from "styled-components";

export const Container = styled(m.div)`
  height: 100vh;
  position: relative;
  overflow: hidden;
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Border = styled(m.div)`
  width: 150%;
  aspect-ratio: 1/1;
  border-radius: 100%;
  background: conic-gradient(${(props) => props.theme.gradients.rainbow});
  position: absolute;
  top: 50vh;
  left: -25%;
  animation: rotate 30s linear infinite;
  ${breakpoints.tablet} {
    top: 70vh;
  }
`;

export const Background = styled(m.div)`
  width: 150%;
  aspect-ratio: 1/1;
  border-radius: 100% 100% 0 0;
  background-color: ${(props) => props.theme.colors.secondaryAccent};
  position: absolute;
  top: 51vh;
  left: -25%;
  transition: ${(props) => props.theme.utils.themeTransition};

  ${breakpoints.tablet} {
    top: 70.5vh;
  }
`;

export const Glow = styled(m.div)`
  width: 150vw;
  aspect-ratio: 1/1;
  height: 150vw;
  border-radius: 100%;
  background: conic-gradient(${(props) => props.theme.gradients.rainbow});
  position: absolute;
  top: 50vh;
  left: -25%;
  filter: blur(40px);
  animation: rotate 30s linear infinite;

  ${breakpoints.tablet} {
    top: 70vh;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-top: 50vh;

  ${breakpoints.tablet} {
    gap: 5rem;
    margin-top: 70vh;
  }
`;

export const IconContainer = styled(m.div)`
  background-color: transparent;
  border: none;
`;
