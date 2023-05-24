import { size } from "@/theme";
import React, { useEffect, useState } from "react";
import DesktopHeader from "./desktop";
import MobileHeader from "./mobile";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth > size.laptop ? <DesktopHeader /> : <MobileHeader />;
};

export default Header;
