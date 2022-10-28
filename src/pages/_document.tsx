import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P8JBQNX" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
