import { useRouter } from "next/dist/client/router";
import { createContext, FC, useContext, useState, ReactNode } from "react";

type FactContextType = {
  fact: string;
  handleSetFact: (fact: string) => void;
};

interface FactProviderProps {
  children: ReactNode;
}

export const FactContext = createContext<FactContextType>({
  fact: "",
  handleSetFact: () => null,
});

export const useFactContext = () => {
  return useContext(FactContext);
};

export const FactProvider: FC<FactProviderProps> = ({ children }) => {
  const [fact, setFact] = useState<string>("");

  const handleSetFact = (fact: string) => {
    setFact(fact);
  };

  const value = {
    fact,
    handleSetFact,
  };

  return <FactContext.Provider value={value}>{children}</FactContext.Provider>;
};
