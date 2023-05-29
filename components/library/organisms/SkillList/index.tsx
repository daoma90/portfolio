import React, { FC } from "react";
import { BodyLarge, BodyXL } from "../../atoms/typography";
import * as s from "./styles";

const columns = [
  ["NextJS", "ReactJS", "Javascript", "Typescript", "React native", "Expo"],
  ["Figma", "CSS", "Sass", "Styled components", "ChakraUI", "TailwindCSS", "Framer-motion"],
  ["HTML", "Headless CMS", "Firebase", "Git", "Storyblok", "Optimization", "Rest API"],
];

interface SkillListProps {
  direction: string;
  index: number;
  origin: number;
}

const SkillList: FC<SkillListProps> = ({ direction, index, origin }) => {
  const downIn = (delay: number) => {
    return { y: 0, opacity: 1, transition: { duration: 0.3, delay: delay, ease: "easeOut" } };
  };

  const downOut = (delay: number) => {
    return { y: -100, opacity: 0, transition: { duration: 0.3, delay: delay, ease: "easeOut" } };
  };

  const upIn = (delay: number) => {
    return { y: 0, opacity: 1, transition: { duration: 0.3, delay: delay, ease: "easeOut" } };
  };

  const upOut = (delay: number) => {
    return { y: 100, opacity: 0, transition: { duration: 0.3, delay: delay, ease: "easeOut" } };
  };

  return (
    <s.Container>
      <s.ListContainer>
        {columns.map((list) => (
          <s.List>
            {list.map((listItem, i) => (
              <s.ListItem
                initial={{ y: 100, opacity: 0 }}
                animate={
                  direction === "down" && origin === index
                    ? downOut(0.1 * i)
                    : direction === "down" && origin === index - 1
                    ? downIn(0.1 * i + 0.5)
                    : direction === "up" && origin === index + 1
                    ? upIn(0.7 - i * 0.15)
                    : direction === "up" && origin === index && upOut(0.7 - i * 0.1)
                }
              >
                <BodyXL>{listItem}</BodyXL>
              </s.ListItem>
            ))}
          </s.List>
        ))}
      </s.ListContainer>
    </s.Container>
  );
};

export default SkillList;
