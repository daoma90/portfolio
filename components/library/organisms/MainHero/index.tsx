import { utils } from "@/theme";
import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
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
      <div key={index}>
        <s.GreetingsAnimationContainer>
          <AnimatePresence>
            {currentGreeting === index && (
              <>
                <s.TextContainer
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + utils.pageTransitionDuration, duration: 0 }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0,
                      delay: 0.5 + utils.pageTransitionDuration,
                    },
                  }}
                >
                  <HeroText>{text}</HeroText>
                </s.TextContainer>
                <s.Block
                  initial={{ x: "-101%" }}
                  animate={{ x: [null, "0%", "101%"] }}
                  transition={{
                    duration: 1,
                    delay: utils.pageTransitionDuration,
                    ease: [0.7, 0, 0, 1],
                  }}
                />
              </>
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
        <>
          <s.TextContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 + utils.pageTransitionDuration, duration: 0 }}
          >
            <HeroText>
              I&apos;m <s.Name>David.</s.Name>
            </HeroText>
          </s.TextContainer>
          <s.Block
            initial={{ x: "-101%" }}
            animate={{ x: [null, "0%", "101%"] }}
            transition={{
              delay: 0.5 + utils.pageTransitionDuration,
              duration: 2,
              ease: [0.7, 0, 0, 1],
            }}
          />
        </>
      </s.RowContainer>
      <s.RowContainer>
        <>
          <s.TextContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 + utils.pageTransitionDuration, duration: 0 }}
          >
            <HeroText>A front-end developer.</HeroText>
          </s.TextContainer>
          <s.Block
            initial={{ x: "-101%" }}
            animate={{ x: [null, "0%", "101%"] }}
            transition={{
              delay: 1 + utils.pageTransitionDuration,
              duration: 2,
              ease: [0.7, 0, 0, 1],
            }}
          />
        </>
      </s.RowContainer>
      <BodyRegular>{"(The site is under construction)"}</BodyRegular>
    </s.Container>
  );
};

export default MainHero;
