import "@/styles/index.css";
import "@/styles/global.scss";

import Layout from "@/components/layout/layout";
import React from "react";
import { ThemeProvider } from "next-themes";

import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import FullLoader from "@/components/etc/FullLoader";
import Head from "next/head";
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

  const canonicalUrl = (
    `https://tyfiero.com` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  console.log(canonicalUrl);
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          rel="canonical"
          href={`https://www.tyfiero.com${router.asPath}`}
        />

        <meta property="og:url" content={canonicalUrl} />
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
