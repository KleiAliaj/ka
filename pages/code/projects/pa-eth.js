import GithubButton from "@/components/etc/githubButton";
import React from "react";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import Carousel from "@/components/projects/Carousel";
import TechChip from "@/components/projects/TechChip";
import Link from "next/link";
import Head from "next/head";

function ModalPAeth() {
  let tech = ["P5.js", "Vanilla Javascript", "HTML", "CSS", "WebGL"];
  return (
    <>
      <Head>
        <title>PriceArt ETH</title>
        <meta name="description" content={`Ethereum PriceArt NFTs`} />
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
              PriceArt Ethereum NFT Collection
            </h1>
          </div>
          <div className="flex flex-col items-center mb-2 text-box">
            <p>
              This project took a lot of the learnings from the ADA PriceArt,
              and applied them to a new blockchain. Official write up coming
              soon, but I did write{" "}
              <Link
                href={
                  "/blog/posts/timeless-lessons-from-shipping-an-nft-collection-as-a-new-developer"
                }
              >
                <a className="underline text-sky-500">a full blog post</a>
              </Link>{" "}
              about this experience.
              <br />
              <br />
            </p>
          </div>
          <section className="flex gap-4 lg:flex-row sm:flex-col">
            <div className="w-full lg:w-1/2 ">
              <h2 className="w-full text-center heading-md !mb-0">Details</h2>
              <div className="flex flex-col items-center text-box h-fit">
                <div className="flex flex-row-reverse lg:flex-col">
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
                      <li>How to mint NFT&apos;s on the Polygon Blockchain.</li>
                      <li>Responsive web design using media queries</li>
                    </ol>
                  </div>
                </div>
                <div className="flex justify-center w-full gap-3 mt-4">
                  <a
                    href="https://priceart.xyz/ada-explorer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-1 w-fit f2"
                  >
                    Explorer <FaExternalLinkAlt />
                  </a>
                  <a
                    href="https://opensea.io/collection/ethusd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-1 w-fit f2"
                  >
                    OpenSea <FaExternalLinkAlt />
                  </a>

                  <GithubButton url="https://github.com/tyfiero/ETH-PriceArt-explorer" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full lg:w-1/2">
              <h2 className="w-full  text-left heading-sm !mb-0">Images</h2>
              <Carousel
                imgs={[
                  "/assets/other/projects/PA/eth1.png",
                  "/assets/other/projects/PA/eth2.png",
                  "/assets/other/projects/PA/eth3.webp",
                  "/assets/other/projects/PA/eth4.webp",
                  "/assets/other/projects/PA/eth5.webp",
                ]}
                altText={"Image of the ETH PriceArt Project"}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ModalPAeth;
