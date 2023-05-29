import Footer from "@/components/layout/Footer/glow";
import PageTransition from "@/components/library/atoms/PageTransition";
import SectionContainer from "@/components/library/atoms/SectionContainer";
import GlowCards from "@/components/library/organisms/GlowCards";
import MainHero from "@/components/library/organisms/MainHero";
import SkillList from "@/components/library/organisms/SkillList";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState<number>(1026);

  // useEffect(() => {
  //   const onResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", onResize);
  //   return () => window.removeEventListener("resize", onResize);
  // }, []);

  return (
    <>
      <Head>
        <title>David the front-end developer</title>
        <meta name="description" content="Explore a front-end developers skill set" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keyword" content="portfolio, front-end, front end, developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ flex: "1", overflow: "hidden" }}>
        {/* {windowWidth > 1025 ? ( */}
        <ReactFullpage
          scrollingSpeed={1500}
          credits={{ enabled: false }}
          onLeave={(origin, destination, direction) => {}}
          lazyLoading={false}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <SectionContainer>
                  <MainHero direction={state.direction} index={0} origin={state?.origin?.index} />
                </SectionContainer>
                <SectionContainer>
                  <GlowCards direction={state.direction} index={1} origin={state?.origin?.index} />
                </SectionContainer>
                <SectionContainer>
                  <SkillList direction={state.direction} index={2} origin={state?.origin?.index} />
                </SectionContainer>
                <SectionContainer>
                  <Footer direction={state.direction} index={3} origin={state?.origin?.index} />
                </SectionContainer>
              </ReactFullpage.Wrapper>
            );
          }}
        />
        {/* ) : (
          <>
            <MainHero />
            <GlowCards />
            <Footer />
          </>
        )} */}
      </main>
      <PageTransition />
    </>
  );
}
