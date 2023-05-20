import styled from "styled-components";

export const Container = styled.footer`
  height: 300px;
  position: relative;
  background-color: ${(props) => props.theme.colors.bubbles};
`;

export const Bubbles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1rem;
  filter: url("#blob");
  background: ${(props) => props.theme.colors.bubbles};
`;

export const Bubble = styled.div<{ style: any }>`
  height: 50px;
  width: 50px;
  position: absolute;
  background: ${(props) => props.theme.colors.bubbles};
  border-radius: 100%;
  transform: translate(-50%, 100%);
  left: var(--position);
  animation: size var(--time) ease-in infinite var(--delay),
    move var(--time) ease-in infinite var(--delay);
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
