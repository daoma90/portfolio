import { breakpoints } from "@/theme";
import { m } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  /* width: 100%; */
  max-width: ${(props) => props.theme.spacings.contentMaxWidth};
  padding-left: ${(props) => props.theme.spacings.paddingHorizontal};
  padding-right: ${(props) => props.theme.spacings.paddingHorizontal};
  padding-top: ${(props) => props.theme.spacings.sectionVerticalPadding};
  padding-bottom: ${(props) => props.theme.spacings.sectionVerticalPadding};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  ${breakpoints.laptop} {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 3rem;

  ${breakpoints.mobileL} {
    gap: 10vw;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
`;

export const ListItem = styled(m.div)``;
