import { utils } from "@/theme";
import { useInView } from "framer-motion";
import React, { FC, useEffect, useRef, useState } from "react";
import TextReveal from "../../atoms/TextReveal";
import { BodyRegular, H2 } from "../../atoms/typography";
import GlowCard from "../../molecules/GlowCard";
import * as s from "./styles";
import { m } from "framer-motion";

interface GlowCardsProps {
  direction: string;
  index: number;
  origin: number;
}

const GlowCards: FC<GlowCardsProps> = ({ direction, index, origin }) => {
  const [currentCard, setCurrentCard] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.1 });

  const handleSetCurrentCard = (index: number | null) => {
    setCurrentCard(index);
  };

  const downIn = (delay: number) => {
    return {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
        opacity: {
          duration: 1,
          ease: "easeOut",
          delay: delay,
        },
      },
    };
  };

  const downOut = (delay: number) => {
    return { y: -200, opacity: 0, transition: { duration: 0.3, delay: delay, ease: "easeOut" } };
  };

  const upIn = (delay: number) => {
    return {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
        opacity: {
          duration: 1,
          ease: "easeOut",
          delay: delay,
        },
      },
    };
  };

  const upOut = (delay: number) => {
    return { y: 200, opacity: 0, transition: { duration: 0.3, delay: delay, ease: "easeOut" } };
  };
  return (
    <s.Container ref={ref}>
      <m.div
        initial={{ y: 0, opacity: 1 }}
        animate={
          direction === "down" && origin === index
            ? downOut(0)
            : direction === "down" && origin === index - 1
            ? downIn(0.3)
            : direction === "up" && origin === index + 1
            ? upIn(0.3)
            : direction === "up" && origin === index && upOut(0)
        }
      >
        <TextReveal inView={inView} direction="x" blockDelay={0.7} blockDuration={1}>
          <H2>What can I do?</H2>
        </TextReveal>
      </m.div>
      <s.CardRow>
        <s.CardContainer
          initial={{ y: 0, opacity: 1 }}
          animate={
            direction === "down" && origin === index
              ? downOut(0)
              : direction === "down" && origin === index - 1
              ? downIn(0.3)
              : direction === "up" && origin === index + 1
              ? upIn(0.3)
              : direction === "up" && origin === index && upOut(0)
          }
        >
          <GlowCard
            inView={inView}
            gradient="bluePurple"
            header="Web"
            items={[
              { title: "Javascript", icon: "js", iconSize: 25 },
              { title: "React", icon: "react", iconSize: 25 },
              { title: "Next.js", icon: "next", iconSize: 25 },
            ]}
            index={0}
            currentCard={currentCard}
            handleSetCurrentCard={handleSetCurrentCard}
          />
        </s.CardContainer>
        <s.CardContainer
          initial={{ y: 0, opacity: 1 }}
          animate={
            direction === "down" && origin === index
              ? downOut(0.1)
              : direction === "down" && origin === index - 1
              ? downIn(0.4)
              : direction === "up" && origin === index + 1
              ? upIn(0.4)
              : direction === "up" && origin === index && upOut(0.1)
          }
        >
          <GlowCard
            inView={inView}
            gradient="orangeRed"
            header="Mobile"
            items={[
              { title: "React native", icon: "react", iconSize: 25 },
              { title: "Expo", icon: "expo", iconSize: 25 },
            ]}
            index={1}
            currentCard={currentCard}
            handleSetCurrentCard={handleSetCurrentCard}
          />
        </s.CardContainer>
        <s.CardContainer
          initial={{ y: 0, opacity: 1 }}
          animate={
            direction === "down" && origin === index
              ? downOut(0.2)
              : direction === "down" && origin === index - 1
              ? downIn(0.5)
              : direction === "up" && origin === index + 1
              ? upIn(0.5)
              : direction === "up" && origin === index && upOut(0.2)
          }
        >
          <GlowCard
            inView={inView}
            gradient="yellowGreen"
            header="Design"
            items={[{ title: "Figma", icon: "figma", iconSize: 25 }]}
            index={2}
            currentCard={currentCard}
            handleSetCurrentCard={handleSetCurrentCard}
          />
        </s.CardContainer>
      </s.CardRow>
      <s.Row
        initial={{ y: 0, opacity: 1 }}
        animate={
          direction === "down" && origin === index
            ? downOut(0)
            : direction === "down" && origin === index - 1
            ? downIn(0.3)
            : direction === "up" && origin === index + 1
            ? upIn(0.3)
            : direction === "up" && origin === index && upOut(0)
        }
      >
        <TextReveal inView={inView} direction="x" blockDelay={4} blockDuration={1}>
          <BodyRegular>Is that it?</BodyRegular>
        </TextReveal>
        <TextReveal inView={inView} direction="x" blockDelay={6} blockDuration={1}>
          <BodyRegular>NO!</BodyRegular>
        </TextReveal>
      </s.Row>
    </s.Container>
  );
};

export default GlowCards;
