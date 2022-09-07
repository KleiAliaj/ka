import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Carousel from "./Carousel";
import TechChip from "./TechChip";

function ModalPAeth() {
  let tech = ["P5.js", "Vanilla Javascript", "HTML", "CSS", "WebGL"];
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="w-full text-left heading-sm !mb-0 !mt-2">Description</h2>
        <p>
          This project took a lot of the learnings from the ADA PriceArt, and
          applied them to a new blockchain.
          <br />
          <br />
        </p>
      </div>
      <section className="flex gap-4 lg:flex-row sm:flex-col">
        <div className="flex flex-col items-center w-full lg:w-1/2">
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
            <a
              href="https://github.com/tyfiero/ETH-PriceArt-explorer"
              target="_blank"
              rel="noopener noreferrer"
              className="button-bw w-fit f2"
            >
              Github
              <img
                src="assets/CodeLogos/github.png"
                alt="github logo"
                className="w-6 h-6 dark:invert invert-0"
              />
            </a>
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
          />
        </div>
      </section>
    </div>
  );
}

export default ModalPAeth;
