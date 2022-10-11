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
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
