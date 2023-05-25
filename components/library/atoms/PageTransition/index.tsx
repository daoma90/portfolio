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
          duration: utils.pageTransitionDuration,
          // delay: utils.pageTransitionDuration,
          ease: [0.7, 0, 0, 1],
        }}
      />
      <PageExit
        initial={{ x: "-100%" }}
        animate={{ x: "-100%" }}
        exit={{ x: "0%" }}
        transition={{ duration: utils.pageTransitionDuration, ease: [0.7, 0, 0, 1] }}
        key="page-exit"
      />
    </>
  );
};

export default PageTransition;

const PageEnter = styled(m.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: ${(props) => props.theme.colors.primaryAccent};
`;

const PageExit = styled(m.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: ${(props) => props.theme.colors.primaryAccent};
`;
