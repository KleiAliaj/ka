import GithubButton from "@/components/etc/githubButton";
import React from "react";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import Carousel from "@/components/projects/Carousel";
import TechChip from "@/components/projects/TechChip";
import Link from "next/link";
import Head from "next/head";

function OliverAIProject() {
  let tech = ["Next.js", "Tailwind CSS", "React", "VoiceRSS", "OpenAI"];

  return (
    <>
      <Head>
        <title>Oliver AI</title>
        <meta name="description" content={`AI therapist Oliver`} />
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
            <h1 className="heading-lg !mb-0">Oliver</h1>
          </div>
          <div className="flex flex-col items-center mb-2 text-box">
            <p>
              I&#39;ve had some experience with openAI&apos;s GPT-3 before, and
              I thought it would be so cool if I could ask it for life advice. I
              wrote a fairly detailed text prompt for it, and the results were
              astounding. Give it a try if you haven&apos;t already. It started
              with just therapist life advice, but I recently wrote new prompts
              and added a drop down menu to change the &quot;proffession&quot;
              of Oliver. This will not be my last GPT-3 project, especially now
              that I have boilerplate code for it.
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
                        GPT-3 is incredibly powerful, and does a great job at
                        providing life advice of all sorts. I was blown away
                        with the results after a few days of tweaking prompts.
                      </li>
                      <li>
                        CSS animations are so fun! It was really enjoyable
                        getting the mouth to &quot;talk&quot; and to get the
                        eyes to blink.
                      </li>
                      <li>
                        CSS is a medium for art just as much as painting or
                        Photoshop is.
                      </li>
                      <li>
                        Text to speech API&apos;s are easy to work with, and
                        free!
                      </li>
                      <li>
                        Learned how to stream text to make it look like he was
                        writing it as it was coming in.{" "}
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="flex justify-center w-full gap-3 mt-4">
                  <Link className="button-1 w-fit f2" href={"/code/ai/Oliver"}>
                      Link <FaExternalLinkAlt />
                  </Link>

                  <GithubButton url="https://github.com/tyfiero/tyfiero-blog/tree/main/components/ai" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full lg:w-1/2">
              <h2 className="w-full text-center heading-md !mb-0">Images</h2>
              <Carousel
                imgs={[
                  "/assets/other/projects/oliver/oliver.webp",
                  "/assets/other/projects/oliver/oliver2.webp",
                ]}
                altText={"Image of the Oliver AI project"}

              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default OliverAIProject;
