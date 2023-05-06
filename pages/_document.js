import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Oswald:wght@300;400;500&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap" rel="stylesheet"/>
        
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="../scripts/cursor.js"></Script>
      </body>
    </Html>
  );
}
