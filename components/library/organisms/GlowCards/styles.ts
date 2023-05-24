import { breakpoints } from "@/theme";
import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  max-width: ${(props) => props.theme.spacings.contentMaxWidth};
  margin: 0 auto;
  padding-left: ${(props) => props.theme.spacings.padding};
  padding-right: ${(props) => props.theme.spacings.padding};
  padding-top: ${(props) => props.theme.spacings.padding};
  padding-bottom: ${(props) => props.theme.spacings.padding};
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
