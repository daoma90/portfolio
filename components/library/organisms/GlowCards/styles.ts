import { breakpoints } from "@/theme";
import { m } from "framer-motion";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  margin: 0 auto;
  max-width: ${(props) => props.theme.spacings.contentMaxWidth};
  padding-left: ${(props) => props.theme.spacings.paddingHorizontal};
  padding-right: ${(props) => props.theme.spacings.paddingHorizontal};
  padding-top: ${(props) => props.theme.spacings.sectionVerticalPadding};
  padding-bottom: ${(props) => props.theme.spacings.sectionVerticalPadding};
  gap: 3rem;

  ${breakpoints.laptop} {
    padding-top: 0;
    padding-bottom: 0;
    align-items: flex-start;
  }
`;

export const TextContainer = styled(m.div)`
  position: relative;
  overflow: hidden;
`;

export const Block = styled(m.div)<{ offset: string }>`
  position: absolute;
  top: ${(props) => props.offset};
  left: 0;
  right: 0;
  bottom: ${(props) => props.offset};
  background-color: ${(props) => props.theme.colors.primaryAccent};
`;

export const CardRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  ${breakpoints.laptop} {
    flex-direction: row;
    gap: 4vw;
  }
`;

export const CardContainer = styled(m.div)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Row = styled(m.div)`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
