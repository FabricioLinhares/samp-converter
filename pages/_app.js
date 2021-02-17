/* eslint-disable react/prop-types */
import Head from "next/head";
import { ThemeProvider, CSSReset } from "@chakra-ui/react";
import theme from "../src/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>SAMP Converter</title>
      </Head>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
