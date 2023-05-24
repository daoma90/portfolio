import React, { useEffect, useState } from "react";
import GlowCard from "../../molecules/GlowCard";
import * as s from "./styles";

const GlowCards = () => {
  const [currentCard, setCurrentCard] = useState<number | null>(null);

  const handleSetCurrentCard = (index: number | null) => {
    setCurrentCard(index);
  };

  return (
    <s.Container>
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
        items={[{ title: "React native", icon: "react", iconSize: 25 }]}
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
    </s.Container>
  );
};

export default GlowCards;
