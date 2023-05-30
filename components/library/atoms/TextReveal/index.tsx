import React, { FC, ReactNode } from "react";
import * as s from "./styles";
import { m } from "framer-motion";

interface TextRevealProps {
  children: ReactNode;
  direction: string;
  blockDelay: number;
  blockDuration: number;
  textExit?: object;
  inView?: boolean;
  containerStyle?: object;
}

const TextReveal: FC<TextRevealProps> = ({
  children,
  direction,
  blockDelay,
  blockDuration = 1,
  textExit,
  inView = true,
  containerStyle,
}) => {
  return (
    <s.Container containerStyle={{ ...containerStyle }}>
      <m.div
        initial={{ opacity: 0 }}
        animate={inView && { opacity: 1 }}
        transition={{ delay: blockDelay + blockDuration / 2 - 0.2, duration: 0.2 }}
        exit={textExit}
      >
        {children}
      </m.div>
      <s.Block
        initial={{ [direction]: "-101%" }}
        animate={inView && { [direction]: [null, "0%", "101%"] }}
        transition={{ duration: blockDuration, delay: blockDelay, ease: [0.7, 0, 0, 1] }}
      />
    </s.Container>
  );
};

export default TextReveal;
