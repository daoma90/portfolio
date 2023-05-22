import { size } from "@/theme";
import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import * as s from "./styles";
import { isFirefox } from "react-device-detect";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });
  const [bubbleCount, setBubbleCount] = useState<number>(0);

  useEffect(() => {
    if (window.innerWidth > size.laptop) {
      if (isFirefox) {
        setBubbleCount(70);
      } else {
        setBubbleCount(100);
      }
    } else if (window.innerWidth > size.tablet) {
      setBubbleCount(30);
    } else {
      setBubbleCount(10);
    }
  }, []);

  return (
    <s.Container ref={ref}>
      <s.BubblesBase>
        <s.Bubbles>
          {Array.from(
            {
              length: bubbleCount,
            },
            (_, i) => {
              return (
                <s.Bubble
                  id="bubble"
                  key={i}
                  style={{
                    "--size": `${8 + Math.random() * 8}rem`,
                    "--distance": `${2 + Math.random() * 10}rem`,
                    "--position": `${-5 + Math.random() * 110}%`,
                    "--time": `${2 + Math.random() * 4}s`,
                    "--delay": `${-1 * (2 + Math.random() * 2)}s`,
                  }}
                  pause={!isInView}
                ></s.Bubble>
              );
            }
          )}
        </s.Bubbles>
      </s.BubblesBase>
      {/* <s.Bubbles2>
          {Array.from({ length: 10 }, (_, i) => {
            return (
              <s.Bubble2
                key={i}
                style={{
                  "--size": `${20 + Math.random() * 10}rem`,
                  "--distance": `${6 + Math.random() * 10}rem`,
                  "--position": `${-5 + Math.random() * 110}%`,
                  "--time": `${2 + Math.random() * 4}s`,
                  "--delay": `${-1 * (2 + Math.random() * 2)}s`,
                }}
              ></s.Bubble2>
            );
          })}
        </s.Bubbles2> */}
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            ></feColorMatrix>
          </filter>
        </defs>
      </svg>
      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob2">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob2"
            ></feColorMatrix>
          </filter>
        </defs>
      </svg>
    </s.Container>
  );
};

export default Footer;
