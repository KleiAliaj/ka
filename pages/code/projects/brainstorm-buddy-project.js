import GithubButton from "@/components/etc/githubButton";
import React from "react";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import Carousel from "@/components/projects/Carousel";
import TechChip from "@/components/projects/TechChip";
import Link from "next/link";
import Head from "next/head";

function Brainstorm() {
  let tech = ["React", "TailwindCSS", "Framer Motion", "Next.js", "GPT-3"];
  return (
    <>
      <Head>
        <title>Brainstorm Buddy Project</title>
        <meta
          name="description"
          content={`Brainstorm Buddy - Conversational idea AI`}
        />
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
            <h1 className="heading-lg !mb-0">Brainstorm Buddy</h1>
          </div>
          <div className="flex flex-col items-center mb-2 text-box">
            <p>
              A GPT-3 experiment I made to simulate a knowledgeable friend to
              brainstorm with. The AI is designed to ask you questions about the
              ideas you present it, in order to challenge your assumptions and
              create better ideas. I&apos;ve found that my best ideas come when
              talking to friends, making ideas by myself is tougher. But I
              can&apos;t always talk to a buddy to brainstorm, so I made this!
              It works surprisingly well, I honestly wasn&apos;t expecting it to
              perform as well as it does. Give it a try, and{" "}
              <Link href={"/contact"}>
                <a className="text-sky-400 underline">let me know</a>
              </Link>{" "}
              how it works for you.
              <br />
              <br />
              I&apos;m pretty happy with how it turned out. I could have made it
              with a simple UI, but emulating an Iphone sounded really fun in
              the moment, so here we are! Really made me appreciate how
              intricate IOS UI and animations are. Took me longer than I thought
              it would to recreate the messages app, but it was fun using framer
              motion and css animations to make the user experience feel
              familiar.
            </p>
          </div>
          <section className="flex gap-4 lg:flex-row sm:flex-col">
            <div className="w-full lg:w-1/2">
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
                      <li>
                        There is a ton of UX work involved with making a UI look
                        and work as simple as Apple&apos;s IOS.{" "}
                      </li>
                      <li>
                        Framer motion makes animating the web so much fun, it
                        might be my favorite JS library.
                      </li>
                      <li>
                        This project only took me a day to make, credit to
                        OpenAI for making an incredible API that makes AI easy.
                      </li>
                      <li>Brainstorming with a buddy is way more fun :)</li>
                    </ol>
                  </div>
                </div>
                <div className="flex justify-center w-full gap-2 mt-4">
                  <Link href={"/code/ai/brainstorm-buddy"}>
                    <a className="button-1 w-fit f2">
                      Link <FaExternalLinkAlt />
                    </a>
                  </Link>

                  <GithubButton url="https://github.com/tyfiero/tyfiero-blog/blob/main/pages/code/ai/brainstorm-buddy.js" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full lg:w-1/2">
              <h2 className="w-full text-center heading-md !mb-0">Images</h2>
              <Carousel
                imgs={[
                  "/assets/other/projects/buddy/sc3.webp",
                  "/assets/other/projects/buddy/sc2.webp",
                  "/assets/other/projects/buddy/sc1.webp",
                ]}
                altText={"Image of the ConsistenSea project"}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Brainstorm;
