import { m } from "framer-motion";
import React, { FC } from "react";
import styled from "styled-components";

interface SplashProps {
  //   showSplash: boolean;
}

const Splash: FC<SplashProps> = () => {
  return <StyledSplash />;
};

export default Splash;

const StyledSplash = styled(m.div)`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: pink;
  z-index: 1000;
  animation: slide 1s cubic-bezier(0.7, 0, 0, 1) forwards 2s;

  @keyframes slide {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
