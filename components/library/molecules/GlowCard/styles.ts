import { breakpoints } from "@/theme";
import { m } from "framer-motion";
import styled from "styled-components";

export const Container = styled(m.article)`
  background-color: transparent;
  position: relative;
  max-width: 400px;
  width: 100%;
  padding: 4px;

  ${breakpoints.laptop} {
    max-width: 100%;
  }
`;

export const CardContainer = styled(m.div)`
  height: 30vh;
  min-height: 400px;
  position: relative;
  ${breakpoints.laptop} {
    height: 50vh;
  }

  ${breakpoints.laptopL} {
    height: 40vh;
  }
`;

export const Card = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.colors.secondaryAccent};
  z-index: 2;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
  transition: ${(props) => props.theme.utils.themeTransition};
  ${breakpoints.laptop} {
    gap: 3vh;
  }
`;

interface CardBorderProps {
  gradient: string;
}

export const CardBorder = styled.div<CardBorderProps>`
  position: absolute;
  z-index: 1;
  width: calc(100% + 10px);
  height: calc(100% + 10px);
  top: -5px;
  left: -5px;
  background: linear-gradient(${(props) => props.theme.gradients[props.gradient]});
  border-radius: 25px;
`;

interface CardGlowProps {
  gradient: string;
  hovered: boolean;
  isSafari: boolean;
}

export const CardGlow = styled.div<CardGlowProps>`
  visibility: ${(props) => (props.isSafari ? "hidden" : "visible")};
  position: absolute;
  z-index: 1;
  width: calc(100% + 10px);
  height: calc(100% + 10px);
  top: -5px;
  left: -5px;
  background: linear-gradient(${(props) => props.theme.gradients[props.gradient]});
  transform: ${(props) => (props.hovered ? "scale(0.95)" : "scale(0.85)")};
  transition: all 0.5s ease-out;
  filter: ${(props) => (props.isSafari ? "" : "blur(45px)")};
  will-change: scale;
`;

export const ContentContainer = styled(m.div)`
  display: flex;
  flex-direction: column;
  gap: 5vh;
  ${breakpoints.laptop} {
    gap: 3vh;
  }
`;

export const TitleContainer = styled(m.div)``;

export const SkillsContainer = styled(m.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

// export const CardContainer = styled.div`
//   position: relative;
//   width: 400px;
//   height: 400px;
//   z-index: 1;

//   &:before,
//   &:after {
//     content: "";
//     z-index: -1;
//     position: absolute;
//     width: calc(100% + 10px);
//     height: calc(100% + 10px);
//     top: -5px;
//     left: -5px;
//     background: linear-gradient(
//       45deg,
//       #ffff00,
//       #00ff00,
//       #0099ff,
//       #001aff,
//       #ff0055,
//       #ff0000,
//       #ffff00,
//       #00ff00
//     );
//     background-size: 300%;
//     animation: border 12s linear infinite;
//     border-radius: 25px;

//     @keyframes border {
//       0%,
//       100% {
//         background-position: 0 0;
//       }

//       50% {
//         background-position: 300%;
//       }
//     }

//     /* @keyframes border {
//       0% {
//         transform: rotate(0deg);
//       }

//       100% {
//         transform: rotate(360deg);
//       }
//     } */
//   }

//   &:after {
//     filter: blur(50px);
//     transform: scale(0.85);
//   }
// `;

// export const Card = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background: #151320;
//   border-radius: 20px;
// `;
