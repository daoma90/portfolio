import { useRouter } from "next/dist/client/router";
import { createContext, FC, useContext, useState, ReactNode, useEffect, Dispatch } from "react";

type FullPageContextType = {
  moveTo: any;
  setMoveTo: Dispatch<any>;
  handleMoveTo: (index: number) => void;
};

interface FullPageProviderProps {
  children: ReactNode;
}

export const FullPageContext = createContext<FullPageContextType>({
  moveTo: () => {},
  setMoveTo: () => {},
  handleMoveTo: (index: number) => null,
});

export const useFullPageContext = () => {
  return useContext(FullPageContext);
};

export const FullPageProvider: FC<FullPageProviderProps> = ({ children }) => {
  const [moveTo, setMoveTo] = useState<any>();

  const handleMoveTo = (index: number) => {
    console.log("handle move to");
    moveTo(index);
  };

  const value = {
    moveTo,
    setMoveTo,
    handleMoveTo,
  };

  return <FullPageContext.Provider value={value}>{children}</FullPageContext.Provider>;
};
