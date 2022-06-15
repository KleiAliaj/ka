import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className={"dar"}>
        <Head />
        <body className="bg-white dark:bg-slate-700">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
