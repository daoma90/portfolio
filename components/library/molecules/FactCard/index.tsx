import { useFactContext } from "@/context/FactContext";
import { useMouseContext } from "@/context/MouseContext";
import React, { useEffect, useRef, useState } from "react";
import Icons from "../../atoms/Icons";
import { BodyRegular } from "../../atoms/typography";
import * as s from "./styles";

const FactCard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number>(0);
  const { fact } = useFactContext();
  const { cursorChangeHandler } = useMouseContext();
  const ref = useRef<HTMLInputElement>(null);

  const toggleFactCard = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (ref.current) {
      setContentHeight(ref.current.clientHeight);
    }
  }, [ref, fact]);

  useEffect(() => {
    console.log("content height", contentHeight);
  }, [contentHeight]);

  return (
    <s.Container>
      <s.Icon>
        <Icons icon="brain" color="secondaryAccent" size={25} />
      </s.Icon>
      <s.BlobContainer>
        <s.ToggleButton
          onClick={() => toggleFactCard()}
          onMouseEnter={() => cursorChangeHandler("brain")}
          onMouseLeave={() => cursorChangeHandler("")}
        />
        <s.CardBackground
          initial={{ width: 38, height: 38, right: 0, top: 0 }}
          animate={
            isOpen
              ? { width: 400, height: contentHeight, right: -5, top: 38 }
              : {
                  width: 38,
                  height: 38,
                  right: 0,
                  top: 0,
                  transition: {
                    duration: 0.3,
                    delay: 0,
                    ease: "easeOut",
                  },
                }
          }
          transition={{ type: "spring", damping: 10, stiffness: 150, mass: 0.5 }}
        />
      </s.BlobContainer>
      <s.FactContent
        ref={ref}
        initial={{ scale: 0, right: -180, top: -85 }}
        animate={
          isOpen
            ? {
                scale: 1,
                right: -10,
                top: 38,
                transition: { type: "spring", damping: 10, stiffness: 150, mass: 0.5 },
              }
            : {
                scale: 0,
                right: -180,
                top: -85,
                transition: { duration: 0.3, delay: 0, ease: "easeOut" },
              }
        }
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
      >
        <BodyRegular color="secondaryAccent">Fact of the day</BodyRegular>
        <BodyRegular color="secondaryAccent">{fact}</BodyRegular>
      </s.FactContent>
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
    </s.Container>
  );
};

export default FactCard;
