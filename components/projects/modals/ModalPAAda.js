import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Carousel from "./Carousel";
import TechChip from "./TechChip";

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
    <div>
      <div className="flex flex-col items-center">
        <h2 className="w-full text-left heading-sm !mb-0 !mt-2">Description</h2>
        <p>
          This is the project that turned me from a student to a developer. It
          took me three months to build this project out.
          <br />
          <br />
          Maybe one day I&apos;ll make an improved version of this in React that
          is more interactive with more fun features. But for now, it&apos;s a
          reminder of how far I have come with JavaScript.
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
                <li>
                  More to come...
                </li>
                
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
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <h2 className="w-full text-left heading-sm !mb-0">Images</h2>
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
          />
        </div>
      </section>
    </div>
  );
}

export default ModalPAAda;
