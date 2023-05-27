import { breakpoints } from "@/theme";
import styled from "styled-components";

export const Container = styled.footer`
  height: 45vh;
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

export const Border = styled.div`
  width: 150%;
  aspect-ratio: 1/1;
  border-radius: 100%;
  background: conic-gradient(${(props) => props.theme.gradients.rainbow});
  position: absolute;
  top: 10vh;
  left: -25%;
  animation: rotate 30s linear infinite;
`;

export const Background = styled.div`
  width: 150%;
  aspect-ratio: 1/1;
  border-radius: 100% 100% 0 0;
  background-color: ${(props) => props.theme.colors.secondaryAccent};
  position: absolute;
  top: calc(10.5vh);
  left: -25%;
  transition: ${(props) => props.theme.utils.themeTransition};
  ${breakpoints.tablet} {
    top: calc(10.4vh);
  }

  ${breakpoints.desktopL} {
    top: calc(10.25vh);
  }
`;

export const Glow = styled.div`
  width: 150%;
  aspect-ratio: 1/1;
  border-radius: 100%;
  background: conic-gradient(${(props) => props.theme.gradients.rainbow});
  position: absolute;
  top: 10vh;
  left: -25%;
  filter: blur(40px);
  animation: rotate 30s linear infinite;
`;
