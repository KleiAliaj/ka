import React from "react";
import { table } from "@/lib/Airtable";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";
import AiExperiments from "@/components/ai/aiExperiments";
export default function AI({ aiImages }) {
  const [pics, setPics] = React.useState(aiImages);

  return (
    <>
      <Head>
        <title>AI Experiments</title>
        <meta name="description" content={`Ty&apos;s experiments with AI`} />
      </Head>
      <div className="page-container">
        <h2 className="text-left heading-lg fade-effect-quick">
          AI Experiments
        </h2>

        <div className="flex flex-col items-start mt-5 sm:px-10 sm:w-full md:w-2/3">
          <AiExperiments />
        </div>
      </div>
    </>
  );
}
