import React from "react";
import * as s from "./styles";

const Footer = () => {
  return (
    <s.Container>
      <s.Bubbles>
        {Array.from({ length: 150 }, (_, i) => {
          return (
            <s.Bubble
              key={i}
              style={{
                "--size": `${2 + Math.random() * 10}rem`,
                "--distance": `${6 + Math.random() * 10}rem`,
                "--position": `${-5 + Math.random() * 110}%`,
                "--time": `${2 + Math.random() * 4}s`,
                "--delay": `${-1 * (2 + Math.random() * 2)}s`,
              }}
            ></s.Bubble>
          );
        })}
        {/* <s.Bubble /> */}
      </s.Bubbles>
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
    </s.Container>
  );
};

export default Footer;
