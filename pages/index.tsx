import Footer from "@/components/layout/Footer/glow";
import PageTransition from "@/components/library/atoms/PageTransition";
import SectionContainer from "@/components/library/atoms/SectionContainer";
import GlowCards from "@/components/library/organisms/GlowCards";
import MainHero from "@/components/library/organisms/MainHero";
import SkillList from "@/components/library/organisms/SkillList";
import { useFactContext } from "@/context/FactContext";
import ReactFullpage from "@fullpage/react-fullpage";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

export default function Home({ fact }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { handleSetFact } = useFactContext();

  handleSetFact(fact);

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
      </main>
      <PageTransition />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const request = {
    method: "GET",
    headers: { "X-Api-Key": process.env.API_NINJAS_KEY as string },
    contentType: "application/json",
  };

  let data;

  try {
    const res = await fetch("https://api.api-ninjas.com/v1/facts", request);
    if (res.status === 200) {
      data = await res.json();
    } else {
      data = "No fact today";
    }
  } catch (e) {
    data = "No fact today";
    console.log("fact fetch error", e);
  }

  // const data = [{ fact: "No fact today" }];
  return { props: { fact: data[0].fact || null } };
};
