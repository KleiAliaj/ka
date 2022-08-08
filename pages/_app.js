import "@/styles/index.css";
import "@/styles/global.scss";


import Layout from "@/components/layout/layout";
import React from "react";
import { ThemeProvider } from "next-themes";

import { Toaster } from "react-hot-toast";
import Head from "next/head";
import { useRouter } from "next/router";
import FullLoader from "@/components/FullLoader";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  const router = useRouter();

  //Loading animation logic
  React.useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, [router]);
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
        <meta name="twitter:image" content="./assets/other/Ty-lofi.jpeg" />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
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

        {/* <!-- Disable tap highlight on IE --> */}
        <meta name="msapplication-tap-highlight" content="no" />

        {/*Add to homescreen for Chrome on Android --> */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="IdeaIsland" />
        <link
          rel="icon"
          sizes="192x192"
          href="/assets/icons/chrome-touch-icon-192x192.png"
        />

        {/* Add to homescreen for Safari on iOS --> */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Ty Fiero" />
        <link
          rel="apple-touch-icon"
          href="/assets/icons/apple-touch-icon.png"
        />

        {/* <!-- Tile icon for Win8 (144x144 + tile color) --> */}
        <meta
          name="msapplication-TileImage"
          content="/assets/icons/ms-touch-icon-144x144-precomposed.png"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
      </Head>
      <Layout>
        <Toaster />
        <FullLoader show={loading} />

        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
