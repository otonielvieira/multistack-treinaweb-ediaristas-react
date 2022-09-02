import { useEffect } from "react";
import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core';
import theme from "ui/themes/theme";
import Header from "ui/components/surfaces/Header/Header";
import Footer from "ui/components/surfaces/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    document.querySelector('#jss-server-side')?.remove();
  }, [])
  return (
    <>
      <Head>
        <title>
          e-diaristas
        </title>
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>


    </>

  );
}

export default MyApp
