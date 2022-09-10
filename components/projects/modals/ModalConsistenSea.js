import GithubButton from "@/components/layout/githubButton";
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
          so much you can do with the Chrome Extension API. Framer Motion is so
          fun to use, and brings life into an otherwise static site! This
          project took me about a week to build. I launched it on ProductHunt,
          and learned a lot from the process of launching a product!
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
                <li>Framer motion is a joy to work with.</li>
                <li>Chrome extensions are simpler than I imagined.</li>
                <li>
                  The possibilities for extensions are endless due to the
                  feature-rich Chrome API , and I will definitely make more
                  extensions in the future.
                </li>
                <li>
                  Building cool things you want for yourself makes coding way
                  more fun.
                </li>
              </ol>
            </div>
          </div>
          <div className="flex justify-center w-full gap-2 mt-4">
            <a
              href="https://chrome.google.com/webstore/detail/consistensea-new-tab-page/kknggaienefkejfafpgdnjgokkangnhc"
              target="_blank"
              rel="noopener noreferrer"
              className="button-1 w-fit f2"
            >
              Install <FaExternalLinkAlt />
            </a>

            <GithubButton url="https://github.com/tyfiero/consistensea" />
            <a
              href="https://www.producthunt.com/posts/consistensea?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-consistensea"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 transition scale-110 hover:scale-125"
            >
              <picture>
                <source
                  srcSet={
                    "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=357189&theme=light"
                  }
                  type="image/svg"
                />
                <img
                  src={
                    "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=357189&theme=light"
                  }
                  alt="ConsistenSea - Chrome&#0032;extension&#0032;for&#0032;fun&#0032;habit&#0045;tracking&#0032;on&#0032;every&#0032;new&#0032;tab&#0032; | Product Hunt"
                  style={{ width: "250px", height: "54px" }}
                  width="250"
                  height="54"
                />
              </picture>
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
