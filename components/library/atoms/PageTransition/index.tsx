import { utils } from "@/theme";
import { AnimatePresence, m } from "framer-motion";
import { useRouter } from "next/router";
import React, { FC } from "react";
import styled from "styled-components";

interface PageTransitionProps {}

const PageTransition: FC<PageTransitionProps> = ({}) => {
  const router = useRouter();
  return (
    <>
      <PageEnter
        initial={{ x: "0%" }}
        animate={{ x: "100%" }}
        transition={{
          delay: 0.3,
          duration: utils.pageTransitionDuration,
          ease: [0, 0.89, 0.41, 1],
        }}
      />
      <PageEnter2
        initial={{ x: "0%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: utils.pageTransitionDuration,
          ease: [0, 0.89, 0.41, 1],
        }}
      />

      <PageExit
        initial={{ x: "-100%" }}
        animate={{ x: "-100%" }}
        exit={{ x: "0%" }}
        transition={{ duration: utils.pageTransitionDuration, ease: [0, 0.89, 0.41, 1] }}
        key="page-exit"
      />
      <PageExit2
        initial={{ x: "-100%" }}
        animate={{ x: "-100%" }}
        exit={{ x: "0%" }}
        transition={{
          duration: utils.pageTransitionDuration,
          delay: 0.3,
          ease: [0, 0.89, 0.41, 1],
        }}
      />
    </>
  );
};

export default PageTransition;

const PageEnter = styled(m.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.pageTransition};
`;

const PageEnter2 = styled(m.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.purple};
`;

const PageExit = styled(m.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.colors.pageTransition};
`;

const PageExit2 = styled(m.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.purple};
  z-index: 100;
`;
