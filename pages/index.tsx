import PageTransition from "@/components/library/atoms/PageTransition";
import GlowCards from "@/components/library/organisms/GlowCards";
import MainHero from "@/components/library/organisms/MainHero";
import Head from "next/head";
import dynamic from "next/dynamic";
import ReactFullpage from "@fullpage/react-fullpage";
import Footer from "@/components/layout/Footer/glow";

const DynamicPageTransition = dynamic(() => import("../components/library/atoms/PageTransition"), {
  ssr: false,
});

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
        <MainHero />
        <GlowCards />
        <Footer />
      </main>
      <DynamicPageTransition />
    </>
  );
}
