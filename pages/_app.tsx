import Layout from "@/components/layout";
import { MouseProvider } from "@/context/MouseContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { LazyMotion, domMax } from "framer-motion";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LazyMotion features={domMax}>
      <ThemeProvider>
        <MouseProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MouseProvider>
      </ThemeProvider>
    </LazyMotion>
  );
}
