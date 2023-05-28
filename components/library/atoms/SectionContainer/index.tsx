import React, { FC, ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
}

const SectionContainer: FC<SectionContainerProps> = ({ children }) => {
  return <div className="section">{children}</div>;
};

export default SectionContainer;
