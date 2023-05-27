import Layout from "@/components/layout";
import { MenuProvider } from "@/context/MenuContext";
import { MouseProvider } from "@/context/MouseContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import ReactFullpage from "@fullpage/react-fullpage";

export default function App({ Component, pageProps, router }: AppProps) {
  console.log("app");
  return (
    <LazyMotion features={domAnimation}>
      <ThemeProvider>
        <MouseProvider>
          <MenuProvider>
            <Layout>
              <AnimatePresence mode="wait">
                <ReactFullpage
                  scrollingSpeed={700}
                  render={({ state }) => <Component {...pageProps} key={router.pathname} />}
                />
              </AnimatePresence>
              <Analytics />
            </Layout>
          </MenuProvider>
        </MouseProvider>
      </ThemeProvider>
    </LazyMotion>
  );
}
