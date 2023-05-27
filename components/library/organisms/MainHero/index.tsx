import { utils } from "@/theme";
import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import TextReveal from "../../atoms/TextReveal";
import { BodyRegular, HeroText } from "../../atoms/typography";
import * as s from "./styles";

const greetings = [
  "Hello!",
  "Hej!",
  "Moi!",
  "안녕!",
  "¡Hola!",
  "Ahoj!",
  "Salut!",
  "Hallo!",
  "Ciao!",
  "Olá!",
];

const MainHero = () => {
  const [currentGreeting, setCurrentGreeting] = useState<number>(0);
  const [siteVisible, setSiteVisible] = useState<boolean>(true);

  // useEffect(() => {
  //   const onChange = (e: Event) => {
  //     if (document.visibilityState === "visible") {
  //       setSiteVisible(true);
  //     } else {
  //       setSiteVisible(false);
  //     }
  //   };
  //   document.addEventListener("visibilitychange", onChange);
  //   return () => document.addEventListener("visibilitychange", onChange);
  // }, []);

  useEffect(() => {
    if (siteVisible) {
      setTimeout(() => {
        if (currentGreeting === greetings.length - 1) {
          setCurrentGreeting(0);
        } else {
          setCurrentGreeting(currentGreeting + 1);
        }
      }, 5000);
    }
  }, [currentGreeting, siteVisible]);

  const renderRow = (text: string, index: number) => {
    return (
      <div key={`greeting-${index}`}>
        <s.GreetingsAnimationContainer>
          <AnimatePresence>
            {currentGreeting === index && (
              <TextReveal
                containerStyle={{ width: "100%" }}
                direction="x"
                blockDelay={utils.pageTransitionDuration}
                blockDuration={2}
                textExit={{
                  opacity: 0,
                  transition: {
                    duration: 0,
                    delay: 0.6 + utils.pageTransitionDuration,
                  },
                }}
              >
                <HeroText>{text}</HeroText>
              </TextReveal>
            )}
          </AnimatePresence>
        </s.GreetingsAnimationContainer>
      </div>
    );
  };

  return (
    <s.Container>
      <s.GreetingsRowContainer>
        {greetings.map((item, index) => {
          return renderRow(item, index);
        })}
      </s.GreetingsRowContainer>
      <s.RowContainer>
        <TextReveal direction="x" blockDelay={0.5 + utils.pageTransitionDuration} blockDuration={2}>
          <HeroText>
            I&apos;m <s.Name>David.</s.Name>
          </HeroText>
        </TextReveal>
      </s.RowContainer>
      <s.RowContainer>
        <TextReveal direction="x" blockDelay={1 + utils.pageTransitionDuration} blockDuration={2}>
          <HeroText>A front-end developer.</HeroText>
        </TextReveal>
      </s.RowContainer>
      <BodyRegular>{"(The site is under construction)"}</BodyRegular>
    </s.Container>
  );
};

export default MainHero;
