import "@/styles/index.css";
import "@/styles/global.scss";

import Layout from "@/components/layout/layout";
import React from "react";
import { ThemeProvider } from "next-themes";

import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <meta name="description" content="The Blog of Ty Fiero." />
        <meta
          name="keywords"
          content="tyfiero, ty fiero blog, ty fiero, ty blog, code blog"
        />

        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta charSet="utf-8" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@FieroTy" />
        <meta name="twitter:title" content="FieroTy" />
        <meta name="twitter:description" content="The Blog of Ty Fiero." />
        <meta name="twitter:image" content="./Ty-lofi.jpeg" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* <!-- Disable tap highlight on IE --> */}
        <meta name="msapplication-tap-highlight" content="no" />

        {/*Add to homescreen for Chrome on Android --> */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="IdeaIsland" />
        <link
          rel="icon"
          sizes="192x192"
          href="images/touch/chrome-touch-icon-192x192.png"
        />

        {/* Add to homescreen for Safari on iOS --> */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Ty Fiero" />
        <link rel="apple-touch-icon" href="images/touch/apple-touch-icon.png" />

        {/* <!-- Tile icon for Win8 (144x144 + tile color) --> */}
        <meta
          name="msapplication-TileImage"
          content="images/touch/ms-touch-icon-144x144-precomposed.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
