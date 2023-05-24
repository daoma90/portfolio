import MainHero from "@/components/library/organisms/MainHero";
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
        <MainHero />
      </main>
    </>
  );
}
