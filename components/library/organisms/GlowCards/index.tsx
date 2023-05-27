import { utils } from "@/theme";
import { useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
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
    <div className="section">
      <s.Container ref={ref}>
        <s.TextContainer>
          <H2
            initial={{ opacity: 0 }}
            animate={inView && { opacity: 1 }}
            transition={{ duration: 0, delay: 2.5 }}
          >
            What can I do?
          </H2>
          <s.Block
            offset="-5px"
            initial={{ x: "-101%" }}
            animate={inView && { x: [null, "0%", "101%"] }}
            transition={{
              delay: 2,
              duration: 1,
              ease: [0.7, 0, 0, 1],
            }}
          />
        </s.TextContainer>
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
        </s.CardContainer>
        <s.Row>
          <s.TextContainer>
            <BodyRegular
              initial={{ opacity: 0 }}
              animate={inView && { opacity: 1 }}
              transition={{ duration: 0, delay: 6.5 }}
            >
              Is that it?
            </BodyRegular>
            <s.Block
              offset="-5px"
              initial={{ x: "-101%" }}
              animate={inView && { x: [null, "0%", "101%"] }}
              transition={{
                delay: 6,
                duration: 1,
                ease: [0.7, 0, 0, 1],
              }}
            />
          </s.TextContainer>
          <s.TextContainer>
            <BodyRegular
              initial={{ opacity: 0 }}
              animate={inView && { opacity: 1 }}
              transition={{ duration: 0, delay: 8.5 }}
            >
              NO!
            </BodyRegular>
            <s.Block
              offset="-5px"
              initial={{ x: "-101%" }}
              animate={inView && { x: [null, "0%", "101%"] }}
              transition={{
                delay: 8,
                duration: 1,
                ease: [0.7, 0, 0, 1],
              }}
            />
          </s.TextContainer>
        </s.Row>
      </s.Container>
    </div>
  );
};

export default GlowCards;
