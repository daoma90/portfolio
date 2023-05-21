import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { HeaderNavLink, HeroText } from "../../atoms/typography";
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

const Hero = () => {
  const [currentGreeting, setCurrentGreeting] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      if (currentGreeting === greetings.length - 1) {
        setCurrentGreeting(0);
      } else {
        setCurrentGreeting(currentGreeting + 1);
      }
    }, 5000);
  }, [currentGreeting]);

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
                  transition={{ delay: 0.5, duration: 0 }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0,
                      delay: 0.5,
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
                    ease: [0.77, 0, 0.175, 1],
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
            transition={{ delay: 1.5, duration: 0 }}
          >
            <HeroText>I'm David.</HeroText>
          </s.TextContainer>
          <s.Block
            initial={{ x: "-101%" }}
            animate={{ x: [null, "0%", "101%"] }}
            transition={{
              delay: 0.5,
              duration: 2,
              ease: [0.77, 0, 0.175, 1],
            }}
          />
        </>
      </s.RowContainer>
      <s.RowContainer>
        <>
          <s.TextContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0 }}
          >
            <HeroText>A front-end developer.</HeroText>
          </s.TextContainer>
          <s.Block
            initial={{ x: "-101%" }}
            animate={{ x: [null, "0%", "101%"] }}
            transition={{
              delay: 1,
              duration: 2,
              ease: [0.77, 0, 0.175, 1],
            }}
          />
        </>
      </s.RowContainer>
      <HeaderNavLink>(The site is under construction)</HeaderNavLink>
    </s.Container>
  );
};

export default Hero;
