import React from "react";

import OliverPage from "@/components/ai/OliverPage";
import Head from "next/head";

function AiPageOliver() {
  return <>
   <Head>
        <title>Oliver - AI Therapist</title>
        <meta
            name="description"
            content={`AI powered therapist made by Ty Fiero`}
          />
      </Head>
  <OliverPage /></>;
}

export default AiPageOliver;
