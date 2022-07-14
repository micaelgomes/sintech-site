import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";
import Script from "next/script";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
          <Script src="https://tag.goadopt.io/injector.js%3Fwebsite_code=83251943-8ca0-4eab-8dbb-3618f34def94"></Script>
        </body>
      </Html>
    );
  }
}
