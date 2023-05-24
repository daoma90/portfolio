import { useMouseContext } from "@/context/MouseContext";
import { useThemeContext } from "@/context/ThemeContext";
import { colors } from "@/theme";
import React, { useEffect, useState } from "react";
import * as s from "./styles";
import { IoArrowForward, IoMoonOutline, IoSunnyOutline, IoHomeOutline } from "react-icons/io5";
import Image from "next/image";
import { isChrome, isMacOs, isSafari } from "react-device-detect";

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
        transition={{ type: "spring", damping: 10 }}
      >
        {cursorType === "link" && (
          <IoArrowForward size={"60%"} color={colors[theme].secondaryAccent} />
        )}
        {cursorType === "dark" && (
          <IoMoonOutline size={"60%"} color={colors[theme].secondaryAccent} />
        )}
        {cursorType === "light" && (
          <IoSunnyOutline size={"70%"} color={colors[theme].secondaryAccent} />
        )}
        {cursorType === "home" && (
          <IoHomeOutline size={"60%"} color={colors[theme].secondaryAccent} />
        )}
        {cursorType === "construction" && (
          <Image
            src="/underconstruction.png"
            alt="Under construction sign"
            width={40}
            height={40}
          />
        )}
      </s.Ring>

      <s.Dot
        id="mouseDot"
        initial={{ scale: 0.15, x: "-50%", y: "-50%" }}
        animate={
          cursorType ? { scale: 1, x: "-50%", y: "-50%" } : { scale: 0.15, x: "-50%", y: "-50%" }
        }
        transition={{ type: "spring", damping: 5, stiffness: 100, mass: 1 }}
      />
    </>
  );
};

export default CustomCursor;
