import { createContext, FC, useContext, useState, ReactNode, useEffect } from "react";

type WindowContextType = {
  windowWidth: number;
  windowHeight: number;
};

interface WindowProviderProps {
  children: ReactNode;
}

export const WindowContext = createContext<WindowContextType>({
  windowWidth: 1026,
  windowHeight: 1026,
});

export const useWindowContext = () => {
  return useContext(WindowContext);
};

export const WindowProvider: FC<WindowProviderProps> = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState<number>(1026);
  const [windowHeight, setWindowHeight] = useState<number>(1026);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    const onResize = () => {
      if (windowWidth !== window.innerWidth) {
        setWindowWidth(window.innerWidth);
      }
      if (windowHeight !== window.innerHeight) {
        setWindowHeight(window.innerHeight);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const value = {
    windowWidth,
    windowHeight,
  };

  return <WindowContext.Provider value={value}>{children}</WindowContext.Provider>;
};
