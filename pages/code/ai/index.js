import React from "react";
import { table } from "@/lib/Airtable";
import axios from "axios";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
import Head from "next/head";
import { experiments } from "@/components/ai/aiArray";
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

        <div className="flex flex-col items-start mt-5 sm:w-full md:w-2/3">
          <div className="flex flex-wrap justify-center w-full gap-3">
            {experiments.map((experiment) => (
              <Experiment
                key={experiment.name}
                name={experiment.name}
                description={experiment.description}
                path={experiment.path}
                imgSrc={experiment.imgSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Experiment({ path, imgSrc, name, description }) {
  return (
    <Link href={path}>
      <a className="flex items-center px-2 py-1 transition sm:w-full md:w-1/2 ring-2 ring-sky-400 hover:ring-4 hover:scale-110 rounded-xl active:scale-95 bg-gradient-to-br from-sky-50 via-sky-100 to-sky-200 dark:from-sky-700 dark:via-sky-800 dark:to-black">
        <div className="flex flex-col justify-between items-between">
          <h4 className="heading-sm !text-left">{name}</h4>
          <p>{description}</p>
        </div>
        <picture>
          <source srcSet={imgSrc} type="image/png" />
          <img
            src={imgSrc}
            alt="logo"
            className="object-cover group-hover:scale-105 h-[10em] w-full transition duration-500 rounded-lg"
          />
        </picture>
      </a>
    </Link>
  );
}
