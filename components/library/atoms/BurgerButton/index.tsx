import { useMenuContext } from "@/context/MenuContext";
import React from "react";
import * as s from "./styles";

const BurgerButton = () => {
  const { menuIsOpen, handleOpenMenu, handleCloseMenu } = useMenuContext();
  return (
    <s.BurgerContainer>
      <s.Button
        aria-label="Toggle menu"
        onClick={() => {
          if (menuIsOpen) {
            handleCloseMenu();
          } else {
            handleOpenMenu();
          }
        }}
      >
        <s.TopLine menuIsOpen={menuIsOpen} />
        <s.MiddleLine menuIsOpen={menuIsOpen} />
        <s.BottomLine menuIsOpen={menuIsOpen} />
      </s.Button>
    </s.BurgerContainer>
  );
};

export default BurgerButton;
