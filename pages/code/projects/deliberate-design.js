import React from "react";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import Carousel from "@/components/projects/Carousel";
import TechChip from "@/components/projects/TechChip";
import Link from "next/link";
import Head from "next/head";

function DD() {
  let tech = ["Next.js", "Tailwind CSS", "React", "Recoil.js"];
  return (
    <>
      <Head>
        <title>Deliberate Design</title>
        <meta name="description" content={`AI art prompt generator`} />
      </Head>
      <div className="relative page-container">
        <Link legacyBehavior href={"/code/projects"}>
          <a className="absolute flex items-center gap-1 p-1 transition rounded-full top-3 text-sky-500 left-5 f2 hover:scale-105 hover:ring-2 ring-sky-500 ">
            <FaArrowLeft /> Back to Projects
          </a>
        </Link>
        <div
          className={
            "flex flex-col items-center sm:!px-3 md:!px-10 !pt-5 !pb-10 grow-effect overflow-auto w-full"
          }
        >
          <div className="flex justify-center w-full fade-effect">
            <h1 className="heading-lg !mb-0">Deliberate Design</h1>
          </div>
          <div className="flex flex-col items-center mb-2 text-box">
            <p>
              This started off as just a simple project that I could learn
              Recoil.js with, and it ended up being way more than that. I wanted
              to create a unique, walk-through wizard style prompt designer for
              image AI&apos;s, specifically for MidJourney. When I started using
              MidJourney, I noticed that I was having image prompt writers
              block. The AI could make <strong>anything</strong> you wanted, and
              that lead me to analysis paralysis, so I would just write whatever
              came to my mind. After a few off the top prompts like, &quot;A
              monkey on a spaceship painted by Picasso&quot;, I realized that I
              wanted to be more deliberate with my prompt design. Instead of
              just throwing whatever into the prompt, I wanted to plan out my
              prompts much like a professional artist would would plan an art
              piece. Thus, the idea for DeliberateDesign.art was born.
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
                        The wizard style UI is an enjoyable way to do stepwise
                        processes, and in particular, was great for building a
                        prompt.
                      </li>
                      <li>
                        Recoil.js is incredible. Amazing. World-class. Redux is
                        good, it gets the job done, but Recoil makes global
                        state so much easier.
                      </li>
                      <li>
                        Next.js is my true love. I have enough experience with
                        it now to take full advantage of its features and bend
                        it to my will.
                      </li>
                      <li>
                        This was my first project where I began with a defined
                        color system first. It made styling decisions a lot
                        easier.
                      </li>
                      <li>
                        I wrote what felt like a million array.map()&apos;s,
                        what a powerful tool to build numerous UI components
                        from a single array in React.
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="flex justify-center w-full mt-4">
                  <a href="" className="button-1 w-fit f2">
                    Link <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full lg:w-1/2">
              <h2 className="w-full text-center heading-md !mb-0">Images</h2>
              <Carousel
                imgs={["/assets/other/projects/dd/deliberate.png"]}
                altText={"Image of the Deliberate Design project"}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default DD;
