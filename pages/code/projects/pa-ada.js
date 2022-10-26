import React from "react";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import Carousel from "@/components/projects/Carousel";
import TechChip from "@/components/projects/TechChip";
import Link from "next/link";
import Head from "next/head";

function ModalPAAda() {
  let tech = [
    "P5.js",
    "Vanilla Javascript",
    "HTML",
    "CSS",
    "WebGL",
    "GLSL Shaders",
  ];
  return (
    <>
      <Head>
        <title>PriceArt ADA</title>
        <meta name="description" content={`Cardano PriceArt NFTs`} />
      </Head>
      <div className="relative page-container">
        <Link href={"/code/projects"}>
          <a className="absolute flex items-center gap-1 p-1 transition rounded-full top-3 text-sky-500 left-5 f2 hover:scale-105 hover:ring-2 ring-sky-500 ">
            <FaArrowLeft /> Back to Projects
          </a>
        </Link>
        <div
          className={
            "flex flex-col items-center sm:!px-3 md:!px-10 !pt-5 !pb-10 grow-effect overflow-auto"
          }
        >
          <div className="flex justify-center w-full fade-effect">
            <h1 className="heading-lg !mb-0">
              PriceArt Cardano NFT Collection
            </h1>
          </div>
          <div className="flex flex-col items-center mb-2 text-box">
            <p>
              Official write up coming soon, but I did write{" "}
              <Link
                href={
                  "/blog/posts/timeless-lessons-from-shipping-an-nft-collection-as-a-new-developer"
                }
              >
                <a className="underline text-sky-500">a full blog post</a>
              </Link>{" "}
              about this experience.
            </p>
          </div>
          <section className="flex gap-4 lg:flex-row sm:flex-col">
            <div className="w-full lg:w-1/2">
              <h2 className="w-full text-center heading-md !mb-0">Details</h2>
              <div className="flex flex-col items-center text-box h-fit">
                <div className="flex flex-col">
                  <div className="w-full">
                    {" "}
                    <h2 className="w-full text-left heading-sm !mb-0 !mt-2 ">
                      Tech Stack
                    </h2>
                    <div className="flex flex-wrap gap-2 px-3 py-1">
                      {tech.map((tech) => (
                        <TechChip key={tech} content={tech} />
                      ))}
                    </div>
                  </div>

                  <div className="w-full">
                    <h2 className="w-full text-left !mb-0 !mt-2 heading-sm">
                      Learnings
                    </h2>
                    <ol className="ml-6 font-bold list-decimal f2 text-sky-600 dark:text-sky-200">
                      <li>More to come...</li>
                    </ol>
                  </div>
                </div>
                <div className="flex justify-center w-full mt-4">
                  <a
                    href="https://priceart.xyz/ada-explorer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-1 w-fit f2"
                  >
                    Link <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full lg:w-1/2">
              <h2 className="w-full text-center heading-md !mb-0">Images</h2>
              <Carousel
                imgs={[
                  "/assets/other/projects/PA/ada8.jpg",
                  "/assets/other/projects/PA/ada1.webp",
                  "/assets/other/projects/PA/ada2.webp",
                  "/assets/other/projects/PA/ada3.webp",
                  "/assets/other/projects/PA/ada4.webp",
                  "/assets/other/projects/PA/ada5.webp",
                  "/assets/other/projects/PA/ada6.webp",
                  "/assets/other/projects/PA/ada7.jpg",
                ]}
                altText={"Image of the PriceArt ADA project"}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ModalPAAda;
