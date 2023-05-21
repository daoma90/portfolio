import Layout from "@/components/layout";
import { MenuProvider } from "@/context/MenuContext";
import { MouseProvider } from "@/context/MouseContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { LazyMotion, domMax } from "framer-motion";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domMax}>
      <ThemeProvider>
        <MouseProvider>
          <MenuProvider>
            <Layout>
              <Component {...pageProps} />
              <Analytics />
            </Layout>
          </MenuProvider>
        </MouseProvider>
      </ThemeProvider>
    </LazyMotion>
  );
}
