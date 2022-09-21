import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className={""}>
        <Head>
          {/* <Script src="https://app.tinyanalytics.io/pixel/0333UQormJTGEbzB" /> */}
          {`<!-- Pixel Code for https://app.tinyanalytics.io/ -->`}
          <script
            defer
            src="https://app.tinyanalytics.io/pixel/0333UQormJTGEbzB"
          ></script>
          {`<!-- END Pixel Code -->`}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
          <link rel="shortcut icon" href="/assets/icons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="theme-color" content="#000" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <meta
            name="description"
            content={`Ty Fiero's blog on tech, life, and art.`}
          />
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@700&family=Varela+Round&display=swap"
            rel="stylesheet"
          />
          <meta
            name="google-site-verification"
            content="OhpRDnvN-fz_RpyK7E4eKh7UNfjD0ln1UOWZPaVRtVk"
          />
        </Head>
        <body className="bg-white dark:bg-slate-800">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
