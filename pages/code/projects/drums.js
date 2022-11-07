import React from "react";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import Carousel from "@/components/projects/Carousel";
import TechChip from "@/components/projects/TechChip";
import Link from "next/link";
import Head from "next/head";

function ModalDrum() {
  let tech = ["Vanilla Javascript", "HTML", "CSS"];
  return (
    <>
      <Head>
        <title>JavaScript Drum Kit</title>
        <meta name="description" content={`Drum kit in JavaScript.`} />
      </Head>
      <div className="relative page-container">
        <Link
          className="absolute flex items-center gap-1 p-1 transition rounded-full top-3 text-sky-500 left-5 f2 hover:scale-105 hover:ring-2 ring-sky-500 "
          href={"/code/projects"}
        >
          <FaArrowLeft /> Back to Projects
        </Link>
        <div
          className={
            "flex flex-col items-center sm:!px-3 md:!px-10 !pt-5 !pb-10 grow-effect overflow-auto w-full"
          }
        >
          <div className="flex justify-center w-full fade-effect">
            <h1 className="heading-lg !mb-0">JS Drum Set</h1>
          </div>
          <div className="flex flex-col items-center mb-2 text-box">
            <p>
              Simple drum machine project that you can play with your keyboard.
              It was from a tutorial from Wes Bos, and one of my very first JS
              projects. I was so excited about it that I added my own custom
              designed drum samples to really personalize it. It&apos;s
              hilariously simple, I read through the code recently and it&apos;s
              so funny that I thought this code was hard back then. But, it was
              the first project I was really proud of with JS, so I had to
              include it here.
              <br />
              <br />
              Maybe one day I&apos;ll make an improved version of this in React
              that is more interactive with more fun features. But for now,
              it&apos;s a reminder of how far I have come with JavaScript.
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
                      <li>
                        Adding/removing class names using JavaScript to apply
                        CSS.
                      </li>
                      <li>Keyboard events in JS.</li>
                      <li>
                        Using the <code>this</code> keyword.
                      </li>
                      <li>JavaScript is fun!</li>
                    </ol>
                  </div>
                </div>
                <div className="flex justify-center w-full mt-4">
                  <a
                    href="https://codesandbox.io/embed/intelligent-joliot-p99m2g?fontsize=14&hidenavigation=1&theme=dark&view=preview"
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
                  "/assets/other/projects/drum/drum2.webp",
                  "/assets/other/projects/drum/drum3.webp",
                ]}
                altText={"Image of the drum set project"}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ModalDrum;
