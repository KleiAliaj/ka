import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className={" "}>
        <Head>
          <meta
            name="keywords"
            content="tyfiero, ty fiero blog, ty fiero, ty blog, code blog"
          />
          <meta name="theme-color" content="#0FA5E9" />

          <meta name="application-name" content="Ty's blog" />

          {/*Add to homescreen for Chrome on Android --> */}
          <meta name="mobile-web-app-capable" content="yes" />

          {/* Add to homescreen for Safari on iOS --> */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="index, follow" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@FieroTy" />
          <meta name="twitter:title" content="Klei's Blog" />
          <meta
            name="twitter:description"
            content="Writings on tech, music, and life."
          />
          <meta name="twitter:image" content="./assets/other/Ty-lofi.webp" />
          {/* Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Klei's Blog" />
          <meta
            property="og:description"
            content="Writings on tech, music, and life. "
          />
          <meta property="og:image" content="./assets/other/Ty-lofi.webp" />
          {/* <script
            defer
            src="https://app.tinyanalytics.io/pixel/0333UQormJTGEbzB"
          ></script> */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          {/* <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          /> */}
          <link
            rel="icon"
            sizes="192x192"
            href="/icons/android-chrome-192x192.png"
          />

          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/maskable.png" />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="apple-mobile-web-app-title" content="Ty Fiero" />

          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@700&family=Quicksand:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          /> */}
          <meta
            name="google-site-verification"
            content="OhpRDnvN-fz_RpyK7E4eKh7UNfjD0ln1UOWZPaVRtVk"
          />
        </Head>
        <body className="transition duration-500 bg-white dark:bg-slate-800 ">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
