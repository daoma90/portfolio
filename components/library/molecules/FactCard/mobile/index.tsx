import { useFactContext } from "@/context/FactContext";
import { useMenuContext } from "@/context/MenuContext";
import { useMouseContext } from "@/context/MouseContext";
import { useWindowContext } from "@/context/WindowContext";
import React, { useEffect, useRef, useState } from "react";
import Icons from "../../../atoms/Icons";
import { BodyRegular } from "../../../atoms/typography";
import * as s from "./styles";
import { isSafari } from "react-device-detect";

const FactCardMobile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const { fact } = useFactContext();
  const { cursorChangeHandler } = useMouseContext();
  const { menuIsOpen } = useMenuContext();
  const { windowWidth } = useWindowContext();
  const ref = useRef<HTMLInputElement>(null);

  const toggleFactCard = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (ref.current) {
      setContentHeight(ref.current.clientHeight);
    }
  }, [ref, fact, windowWidth]);

  useEffect(() => {
    if (!menuIsOpen) {
      setIsOpen(false);
    }
  }, [menuIsOpen]);

  return (
    <s.Container>
      <s.Icon>
        <Icons icon="brain" color="secondaryAccent" size={35} />
      </s.Icon>
      <s.BlobContainer>
        <s.ToggleButton
          onClick={() => toggleFactCard()}
          onMouseEnter={() => cursorChangeHandler("brain")}
          onMouseLeave={() => cursorChangeHandler("")}
          aria-label="Toggle fact of the day card."
        />
        <s.BackgroundContainer
          initial={{ bottom: 0 }}
          animate={
            isOpen
              ? { width: "100%", height: contentHeight, bottom: isSafari ? 80 : 60 }
              : {
                  bottom: 0,
                  transition: {
                    duration: 0.3,
                    delay: 0,
                    ease: "easeOut",
                  },
                }
          }
          transition={{ type: "spring", damping: 12, stiffness: 170, mass: 0.5 }}
        >
          <s.CardBackground
            initial={{ height: 50, width: 50 }}
            animate={
              isOpen
                ? { width: "100%", height: contentHeight }
                : {
                    height: 50,
                    width: 50,
                    transition: { duration: 0.2, delay: 0, ease: "easeOut" },
                  }
            }
            transition={{ type: "spring", damping: 12, stiffness: 170, mass: 0.5 }}
          />
        </s.BackgroundContainer>
      </s.BlobContainer>
      <s.FactContainer
        initial={{ opacity: 0, scale: 0, bottom: -contentHeight / 2 + 20 }}
        animate={
          isOpen
            ? {
                opacity: 1,
                scale: 1,
                bottom: isSafari ? 80 : 60,
                transition: { type: "spring", damping: 12, stiffness: 170, mass: 0.5 },
              }
            : {
                opacity: 0,
                scale: 0,
                bottom: -contentHeight / 2 + 20,
                transition: { duration: 0.2, delay: 0, ease: "easeOut" },
              }
        }
        transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
      >
        <s.FactContent ref={ref}>
          <BodyRegular color="secondaryAccent">Fact of the day</BodyRegular>
          <BodyRegular color="secondaryAccent">{fact}</BodyRegular>
        </s.FactContent>
      </s.FactContainer>
      {!isSafari && (
        <svg style={{ position: "fixed", top: "100vh" }}>
          <defs>
            <filter id="blob">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur"></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="blob"
              ></feColorMatrix>
            </filter>
          </defs>
        </svg>
      )}
    </s.Container>
  );
};

export default FactCardMobile;
