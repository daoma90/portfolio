import { m } from "framer-motion";
import React, { FC } from "react";
import styled from "styled-components";

interface SplashProps {
  //   showSplash: boolean;
}

const Splash: FC<SplashProps> = () => {
  return (
    <>
      <StyledSplash />
      <StyledSplash2 />
    </>
  );
};

export default Splash;

const StyledSplash = styled(m.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 150;
  background-color: ${(props) => props.theme.colors.pageTransition};
  animation: slide ${(props) => props.theme.utils.pageTransitionDuration}s
    cubic-bezier(0, 0.89, 0.41, 1) forwards 1.3s;

  @keyframes slide {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const StyledSplash2 = styled(m.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 150;
  background-color: ${(props) => props.theme.colors.purple};
  animation: slide ${(props) => props.theme.utils.pageTransitionDuration}s
    cubic-bezier(0, 0.89, 0.41, 1) forwards 1s;

  @keyframes slide {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
