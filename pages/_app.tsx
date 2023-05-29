import Layout from "@/components/layout";
import { MenuProvider } from "@/context/MenuContext";
import { MouseProvider } from "@/context/MouseContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { FullPageProvider } from "@/context/FullPageContext";
import { WindowProvider } from "@/context/WindowContext";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <ThemeProvider>
        <WindowProvider>
          <MouseProvider>
            <MenuProvider>
              {/* <FullPageProvider> */}
              <Layout>
                <AnimatePresence mode="wait">
                  <Component {...pageProps} key={router.pathname} />
                </AnimatePresence>
                <Analytics />
              </Layout>
              {/* </FullPageProvider> */}
            </MenuProvider>
          </MouseProvider>
        </WindowProvider>
      </ThemeProvider>
    </LazyMotion>
  );
}
