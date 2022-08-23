import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Carousel from "./Carousel";
import TechChip from "./TechChip";

function ModalConsistenSea() {
  let tech = ["React", "TailwindCSS", "Framer Motion", "Chrome Extension API"];
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="w-full text-left heading-sm !mb-0 !mt-2">Description</h2>
        <p>
          This was a fun project to build. I wanted to create a habit tracker
          that I would actually remember to use, so I decided to make a new tab
          chrome extension so that I would see my habits on every single new
          tab. Turns out React plays well with chrome extensions, and there is
          so much you can do with the Chrome Extension API. This project took me
          about a week to build.
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
                <li>Chrome extensions are simpler than I imagined.</li>
                <li>
                  The possibilities for extensions are endless due to the
                  feature-rich Chrome API , and I will definitely make more
                  extensions in the future.
                </li>
                <li>Framer motion is a joy to work with.</li>
                <li>
                  Building cool things you want for yourself makes coding way
                  more fun.
                </li>
              </ol>
            </div>
          </div>
          <div className="flex justify-center w-full gap-3 mt-4">
            <a
              href="https://chrome.google.com/webstore/detail/consistensea-new-tab-page/kknggaienefkejfafpgdnjgokkangnhc"
              target="_blank"
              rel="noopener noreferrer"
              className="button-1 w-fit f2"
            >
              Link <FaExternalLinkAlt />
            </a>
            <a
              href="https://github.com/tyfiero/consistensea"
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
          <h2 className="w-full text-left heading-sm !mb-0">Images</h2>
          <Carousel
            imgs={[
              "/assets/other/projects/consistensea/cs2.webp",
              "/assets/other/projects/consistensea/cs4.webp",
              "/assets/other/projects/consistensea/cs3.webp",
              "/assets/other/projects/consistensea/cs1.webp",
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export default ModalConsistenSea;
