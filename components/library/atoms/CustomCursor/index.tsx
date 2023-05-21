import { useMouseContext } from "@/context/MouseContext";
import { useThemeContext } from "@/context/ThemeContext";
import useMousePosition from "@/hooks/useMousePosition";
import { colors } from "@/theme";
import React, { useEffect } from "react";
import * as s from "./styles";
import { IoArrowForward, IoMoonOutline, IoSunnyOutline, IoHomeOutline } from "react-icons/io5";
import Image from "next/image";

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const { cursorType } = useMouseContext();
  const { theme } = useThemeContext();

  return (
    <>
      <s.Ring
        style={{ top: `${y}px`, left: `${x}px` }}
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
                // scale: 1.2,
                width: "60px",
                height: "60px",
                backgroundColor: colors[theme].primaryAccent,
                x: "-50%",
                y: "50%",
                borderColor: "transparent",
              }
            : {
                // scale: 1,
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
        style={{ top: `${y}px`, left: `${x}px` }}
        initial={{ scale: 1, x: "-50%", y: "-50%" }}
        animate={
          cursorType ? { scale: 5, x: "-50%", y: "-50%" } : { scale: 1, x: "-50%", y: "-50%" }
        }
        transition={{ type: "spring", damping: 5, stiffness: 100, mass: 1 }}
      />
    </>
  );
};

export default CustomCursor;