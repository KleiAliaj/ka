import "@/styles/index.css";
import "@/styles/global.scss";

import Layout from "@/components/layout/layout";
import React from "react";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import FullLoader from "@/components/etc/FullLoader";
import Head from "next/head";
import { Quicksand, Baloo_Thambi_2 } from "@next/font/google";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});
const baloo = Baloo_Thambi_2({
  variable: "--font-baloo",
  weight: "700",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

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
    `https://www.tyfiero.com` + (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

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
      <Layout fontCn={` ${baloo.variable}  ${quicksand.variable}`}>
        <FullLoader show={loading} />
        <Toaster />
        <Component {...pageProps} />

        <Analytics />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
