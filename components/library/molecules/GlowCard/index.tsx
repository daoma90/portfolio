import React, { FC, MutableRefObject, useEffect, useRef, useState } from "react";
import { BodyLarge, BodyRegular, H3 } from "../../atoms/typography";
import * as s from "./styles";
import Icons from "../../atoms/Icons";
import { isSafari } from "react-device-detect";
import { useWindowContext } from "@/context/WindowContext";

interface GlowCardProps {
  gradient: string;
  header: string;
  items: { title: string; icon: string; iconSize: number }[];
  index: number;
  currentCard: number | null;
  handleSetCurrentCard: (index: number | null) => void;
  inView: boolean;
}

const duration = 0.5;
const ease = [0.165, 0.84, 0.44, 1];
const y = 100;
const delay = 2.6;

const GlowCard: FC<GlowCardProps> = ({
  gradient,
  header,
  items,
  index,
  currentCard,
  handleSetCurrentCard,
  inView,
}) => {
  const { windowHeight } = useWindowContext();
  const [hovered, setHovered] = useState<boolean>(false);
  const [contentHeight, setContentHeight] = useState<number>(260);
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const contentRef = useRef() as MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    setContentHeight(contentRef.current.clientHeight);
  }, [windowHeight]);

  const handlePress = () => {
    handleSetCurrentCard(index);
    setTimeout(() => {
      handleSetCurrentCard(null);
    }, 5000);
  };

  useEffect(() => {
    if (currentCard === index) {
      setHovered(true);
    } else {
      setHovered(false);
    }
  }, [currentCard, index]);

  return (
    <s.Container ref={containerRef}>
      <s.CardContainer
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ opacity: 0, y: 100 }}
        animate={inView && { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 + delay }}
      >
        <s.Card onClick={handlePress}>
          <s.TitleContainer
            initial={{ opacity: 0 }}
            animate={inView && { opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <H3
              initial={{ y: contentHeight / 2 + 10 }}
              animate={
                hovered
                  ? { y: 0 }
                  : {
                      y: contentHeight / 2 + 10,
                      transition: { duration: duration, delay: 0.2, ease: ease },
                    }
              }
              transition={{ duration: duration, ease: ease }}
            >
              {header}
            </H3>
          </s.TitleContainer>

          <s.ContentContainer ref={contentRef}>
            <s.SkillsContainer
              initial={{ opacity: 0, y: y }}
              animate={
                hovered
                  ? { opacity: 1, y: 0 }
                  : {
                      opacity: 0,
                      y: y,
                      transition: { duration: duration, delay: 0.1, ease: ease },
                    }
              }
              transition={{ duration: duration, delay: 0.2, ease: ease }}
            >
              {items.map((item, i) => (
                <s.Skill key={`skill-card-${index}-skill-${i}`}>
                  <Icons icon={item.icon} size={item.iconSize || 25} color="primaryAccent" />
                  <BodyLarge>{item.title}</BodyLarge>
                </s.Skill>
              ))}
            </s.SkillsContainer>
            <BodyRegular
              initial={{ opacity: 0, y: y }}
              animate={
                hovered
                  ? { opacity: 1, y: 0 }
                  : {
                      opacity: 0,
                      y: y,
                      transition: { duration: duration, delay: 0, ease: ease },
                    }
              }
              transition={{ duration: duration, delay: 0.4, ease: ease }}
            >
              And more...
            </BodyRegular>
          </s.ContentContainer>
        </s.Card>
        <s.CardBorder gradient={gradient}></s.CardBorder>

        <s.CardGlow hovered={hovered} gradient={gradient} isSafari={isSafari} />
      </s.CardContainer>
    </s.Container>
  );
};

export default GlowCard;
