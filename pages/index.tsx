import Footer from "@/components/layout/Footer/glow";
import PageTransition from "@/components/library/atoms/PageTransition";
import SectionContainer from "@/components/library/atoms/SectionContainer";
import GlowCards from "@/components/library/organisms/GlowCards";
import MainHero from "@/components/library/organisms/MainHero";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>David the front-end developer</title>
        <meta name="description" content="Explore a front-end developers skill set" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keyword" content="portfolio, front-end, front end, developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ flex: "1" }}>
        <ReactFullpage
          scrollingSpeed={1000}
          credits={{ enabled: false }}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <SectionContainer>
                  <MainHero />
                </SectionContainer>
                <SectionContainer>
                  <GlowCards />
                </SectionContainer>

                <SectionContainer>
                  <Footer />
                </SectionContainer>
              </ReactFullpage.Wrapper>
            );
          }}
        />
      </main>
      <PageTransition />
    </>
  );
}
