import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Page } from "@/types/page";
import Head from "next/head";

type Props = AppProps & {
  Component: Page;
};

export default function App({ Component, pageProps }: Props) {
  const theme = {
    colors: {
      primary: "#355C7D",
    },
  };

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>NextJs</title>
        <meta name='description' content='Awesome Framework' />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}
