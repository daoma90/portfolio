import styled from "styled-components";
import { m } from "framer-motion";

export const Container = styled.div`
  /* height: 80px; */
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
`;

export const Header = styled(m.nav)`
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: "transparent";
  padding-left: 30px;
  padding-right: 30px;
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
`;
