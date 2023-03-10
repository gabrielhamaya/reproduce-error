import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseLine, defaultTheme } from "@localhost/phds-core/";
import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseLine />
      <Component {...pageProps} />
    </>
  );
}
