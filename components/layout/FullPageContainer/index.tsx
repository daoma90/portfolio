import SectionContainer from "@/components/library/atoms/SectionContainer";
import ReactFullpage from "@fullpage/react-fullpage";
import React, { FC, ReactNode } from "react";

interface FullPageContainerProps {
  children: ReactNode;
}

const FullPageContainer: FC<FullPageContainerProps> = ({ children }) => {
  return null;
  //   return (
  //     <ReactFullpage
  //       scrollingSpeed={1000}
  //       credits={{ enabled: false }}
  //       onLeave={(origin, destination, direction) => {}}
  //       lazyLoading={false}
  //       render={({ state, fullpageApi }) => {
  //         return (
  //           <ReactFullpage.Wrapper>
  //             {children?.map((child) => (
  //               <SectionContainer>{child}</SectionContainer>
  //             ))}
  //           </ReactFullpage.Wrapper>
  //         );
  //       }}
  //     />
  //   );
};

export default FullPageContainer;
