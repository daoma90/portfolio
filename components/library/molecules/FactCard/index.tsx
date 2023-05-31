import { useFactContext } from "@/context/FactContext";
import React, { useEffect } from "react";
import { BodyRegular } from "../../atoms/typography";
import * as s from "./styles";

const FactCard = () => {
  const { fact } = useFactContext();

  return (
    <s.Container>
      <BodyRegular>Fact of the day</BodyRegular>
      <BodyRegular>{fact}</BodyRegular>
    </s.Container>
  );
};

export default FactCard;
