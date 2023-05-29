import { m } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  max-width: ${(props) => props.theme.spacings.contentMaxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 10vw;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
`;

export const ListItem = styled(m.div)``;
