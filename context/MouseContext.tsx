import { createContext, FC, useContext, useState, ReactNode } from "react";

type MouseContextType = {
  cursorType: string;
  cursorChangeHandler: (cursorType: string) => void;
};

interface MouseProviderProps {
  children: ReactNode;
}

export const MouseContext = createContext<MouseContextType>({
  cursorType: "",
  cursorChangeHandler: () => null,
});

export const useMouseContext = () => {
  return useContext(MouseContext);
};

export const MouseProvider: FC<MouseProviderProps> = ({ children }) => {
  const [cursorType, setCursorType] = useState<string>("");

  const cursorChangeHandler = (cursorType: string) => {
    setCursorType(cursorType);
  };

  const value = {
    cursorType,
    cursorChangeHandler,
  };

  return <MouseContext.Provider value={value}>{children}</MouseContext.Provider>;
};
