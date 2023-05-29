import { useWindowContext } from "@/context/WindowContext";
import { size } from "@/theme";
import React from "react";
import DesktopHeader from "./desktop";
import MobileHeader from "./mobile";

const Header = () => {
  const { windowWidth } = useWindowContext();

  return windowWidth > size.laptop ? <DesktopHeader /> : <MobileHeader />;
};

export default Header;
