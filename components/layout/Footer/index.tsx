import { size } from "@/theme";
import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import * as s from "./styles";
import { isFirefox } from "react-device-detect";

interface AnimationSettings {
  bubbleCount: number;
  size: number;
}

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });
  const [animationSettings, setAnimationSettings] = useState<AnimationSettings>({
    bubbleCount: 10,
    size: 8,
  });

  useEffect(() => {
    if (window.innerWidth > size.laptop) {
      if (isFirefox) {
        setAnimationSettings({ bubbleCount: 70, size: 20 });
      } else {
        setAnimationSettings({ bubbleCount: 150, size: 15 });
      }
    } else if (window.innerWidth > size.tablet) {
      setAnimationSettings({ bubbleCount: 30, size: 8 });
    } else {
      setAnimationSettings({ bubbleCount: 10, size: 15 });
    }
  }, []);

  return (
    <s.Container ref={ref}>
      <s.BubblesBase>
        <s.Bubbles>
          {Array.from(
            {
              length: animationSettings.bubbleCount,
            },
            (_, i) => {
              return (
                <s.Bubble
                  id="bubble"
                  key={i}
                  style={{
                    "--size": `${animationSettings.size + Math.random() * 8}rem`,
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
