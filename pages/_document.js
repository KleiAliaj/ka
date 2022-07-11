import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className={""}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@700&family=Varela+Round&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-white dark:bg-slate-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
