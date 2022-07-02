import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme";
import { AppProps } from "next/app";
import Head from "next/head";
import AppProvider from "../context";

import "typeface-open-sans";
import "../styles/carousel.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Sintech - Sua segurança digital na ponta dos dedos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Sintech - Sua segurança digital na ponta dos dedos"
          key="title"
        />
        <meta
          name="description"
          content="Com mais de sete anos no mercado, a Sintech apresenta um
menu de soluções de Certificação Digital de forma confiável no
meio eletrônicos e soluções em Gestão Empresarial para empre
sas que atuam diretamente com a atividade de certificação"
        />
        <meta
          name="keywords"
          content="Segurança Digital, Certificado, Gestão Empresarial"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ChakraProvider>
  );
}

export default App;
