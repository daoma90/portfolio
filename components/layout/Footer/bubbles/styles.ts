import styled from "styled-components";

export const Container = styled.footer`
  height: 310px;
  position: relative;
  padding-top: 200px;
  overflow: hidden;
  scroll-snap-align: start;
`;

export const BubblesBase = styled.div`
  height: 200px;
  background: ${(props) => props.theme.colors.bubbles};
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
`;

export const Bubbles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1rem;
  filter: url("#blob");
  background: ${(props) => props.theme.colors.bubbles};
  z-index: 2;
`;

export const Bubble = styled.div<{ style: any; pause: boolean }>`
  height: var(--size);
  width: var(--size);
  position: absolute;
  background-color: ${(props) => props.theme.colors.bubbles};
  border-radius: 100%;
  transform: translate(-50%, 100%);
  left: var(--position);
  z-index: 2;

  animation: size var(--time) ease-in infinite var(--delay),
    move var(--time) ease-in infinite var(--delay);
  animation-play-state: ${(props) => (props.pause ? "paused" : "running")};
  @keyframes size {
    0% {
      width: var(--size);
      height: var(--size);
    }
    100% {
      width: 0rem;
      height: 0rem;
    }
  }
  @keyframes move {
    0% {
      bottom: 0rem;
    }
    100% {
      bottom: var(--distance);
    }
  }
`;
