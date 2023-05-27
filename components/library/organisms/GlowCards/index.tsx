import { utils } from "@/theme";
import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import TextReveal from "../../atoms/TextReveal";
import { BodyRegular, H2 } from "../../atoms/typography";
import GlowCard from "../../molecules/GlowCard";
import * as s from "./styles";

const GlowCards = () => {
  const [currentCard, setCurrentCard] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });

  const handleSetCurrentCard = (index: number | null) => {
    setCurrentCard(index);
  };

  return (
    <s.Container ref={ref}>
      <TextReveal direction="x" blockDelay={1} blockDuration={1}>
        <H2>What can I do?</H2>
      </TextReveal>
      <s.CardContainer>
        <GlowCard
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
        <GlowCard
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
        <GlowCard
          gradient="yellowGreen"
          header="Design"
          items={[{ title: "Figma", icon: "figma", iconSize: 25 }]}
          index={2}
          currentCard={currentCard}
          handleSetCurrentCard={handleSetCurrentCard}
        />
      </s.CardContainer>
      <s.Row>
        <TextReveal direction="x" blockDelay={5} blockDuration={1}>
          <BodyRegular>Is that it?</BodyRegular>
        </TextReveal>
        <TextReveal direction="x" blockDelay={7} blockDuration={1}>
          <BodyRegular>NO!</BodyRegular>
        </TextReveal>
      </s.Row>
    </s.Container>
  );
};

export default GlowCards;
