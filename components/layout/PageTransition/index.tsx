import { utils } from "@/theme";
import { m } from "framer-motion";
import React, { FC } from "react";
import styled from "styled-components";

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: FC<PageTransitionProps> = ({ children }) => {
  return (
    <>
      {children}
      <PageEnter
        initial={{ x: "-100%" }}
        animate={{ x: [null, "0%", "0%", "100%"] }}
        transition={{ duration: utils.pageTransitionDuration, ease: [0.7, 0, 0, 1] }}
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
