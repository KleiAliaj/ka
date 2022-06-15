import "@/styles/index.css";
import Layout from "@/components/layout/layout";
import React from "react";
import { ThemeProvider } from "next-themes";

import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
