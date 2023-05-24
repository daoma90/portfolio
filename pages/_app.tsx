import Layout from "@/components/layout";
import { MenuProvider } from "@/context/MenuContext";
import { MouseProvider } from "@/context/MouseContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { LazyMotion, domAnimation } from "framer-motion";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <LazyMotion features={domAnimation}>
      <ThemeProvider>
        <MouseProvider>
          <MenuProvider>
            <Layout pathname={router.pathname}>
              <Component {...pageProps} key={router.pathname} />
              <Analytics />
            </Layout>
          </MenuProvider>
        </MouseProvider>
      </ThemeProvider>
    </LazyMotion>
  );
}
