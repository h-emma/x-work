import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="sv">
      <Head>
        {/* <link
          rel="preload"
          href="/assets/fonts/Poppins-Regular.woff"
          as="font"
          type="font/woff"
          crossorigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/Poppins-Regular.woff2"
          as="font"
          type="font/woff2"
          crossorigin=""
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
