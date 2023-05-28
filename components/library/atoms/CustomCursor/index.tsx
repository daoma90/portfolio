import { useMouseContext } from "@/context/MouseContext";
import { useThemeContext } from "@/context/ThemeContext";
import { colors } from "@/theme";
import React, { useEffect, useState } from "react";
import * as s from "./styles";

import { isChrome, isMacOs, isSafari } from "react-device-detect";
import Icons from "../Icons";

const CustomCursor = () => {
  const { cursorType } = useMouseContext();
  const { theme } = useThemeContext();
  const [cursorTransition, setCursorTransition] = useState<boolean>(false);

  useEffect(() => {
    if (isMacOs) {
      if (isChrome || isSafari) {
        setCursorTransition(false);
      } else {
        setCursorTransition(true);
      }
    } else {
      setCursorTransition(true);
    }

    const mouseRing = document.getElementById("mouseRing") as HTMLElement;
    const mouseDot = document.getElementById("mouseDot") as HTMLElement;
    const mouseMoveHandler = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      mouseRing.style.left = `${clientX}px`;
      mouseRing.style.top = `${clientY}px`;
      mouseDot.style.left = `${clientX}px`;
      mouseDot.style.top = `${clientY}px`;
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <>
      <s.Ring
        id="mouseRing"
        cursorTransition={cursorTransition}
        initial={{
          width: "25px",
          height: "25px",
          backgroundColor: "transparent",
          x: "-50%",
          y: "-50%",
        }}
        animate={
          cursorType
            ? {
                width: "60px",
                height: "60px",
                backgroundColor: colors[theme].primaryAccent,
                x: "-50%",
                y: "50%",
                borderColor: "transparent",
              }
            : {
                width: "25px",
                height: "25px",
                backgroundColor: "transparent",
                x: "-50%",
                y: "-50%",
                borderColor: colors[theme].cursor,
              }
        }
        // transition={{ type: "spring", damping: 10 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {cursorType && <Icons icon={cursorType} size={40} color="secondaryAccent" />}
      </s.Ring>

      <s.Dot
        id="mouseDot"
        initial={{ scale: 0.15, x: "-50%", y: "-50%" }}
        animate={
          cursorType ? { scale: 1, x: "-50%", y: "-50%" } : { scale: 0.15, x: "-50%", y: "-50%" }
        }
        // transition={{ type: "spring", damping: 7, stiffness: 100, mass: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </>
  );
};

export default CustomCursor;
