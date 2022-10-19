import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import TechStack from "@/components/projects/TechStack";
import Projects from "@/components/projects/Projects";
import DualSection from "@/components/layout/DualSection";
import TextSection from "@/components/layout/TextSection";
import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import CompactProjects from "@/components/projects/CompactProjects";
import Head from "next/head";
import { experiments } from "@/components/ai/aiArray";
import MotionHeader from "@/components/etc/animation/MotionHeader";
import MotionText from "@/components/etc/animation/MotionText";
import MotionImage from "@/components/etc/animation/MotionImage";
const CubeWaveSketch = dynamic(
  () => import("../../components/projects/art/CubeWaveSketch"),
  {
    ssr: false,
  }
);

function CodeIndex() {
  const prefersReducedMotion = useReducedMotion();
  const [showSketch, setShowSketch] = React.useState(false);

  return (
    <>
      <Head>
        <title>Code and Projects</title>
        <meta
          name="description"
          content={"Ty&apos;s code projects and overview of coding career."}
        />
      </Head>
      <div className="page-container">
        <h2 className="text-left heading-lg fade-effect-quick ">Code</h2>

        <DualSection>
          <TextSection title="" headerClassNames="hidden">
            <MotionHeader>
              <h2 className={"font-bold heading-md "}>Tech Stack</h2>
            </MotionHeader>
            <MotionText>
              <div className="text-box">
                <p className="font-bold ">
                  Learning new technologies is a rush for me. I try to learn
                  something new every week that I can apply to projects in the
                  future. My favorite technologies thus far are React, Next.js,
                  Tailwind CSS, p5.js and Framer Motion, I have the confidence
                  and the know-how to wield these tools to create awesome web
                  experiences for users. <br />
                  <br /> I&apos;m learning Typescript right now and I can tell
                  that it will be a game changer for my workflow. I&apos;d like
                  to learn SQL, machine learning, and backend frameworks down
                  the line, but for now I want to focus on getting good at front
                  end.{" "}
                  <Link href={"/contact"}>
                    <a className="underline text-sky-500">Let me know</a>
                  </Link>{" "}
                  if you have any cool technology recommendations!
                </p>
              </div>
            </MotionText>
            <MotionText delay={0.4}>
              <div className="flex justify-center w-full gap-4 mt-5">
                <a
                  href="https://github.com/tyfiero/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-10 button-bw w-fit f2 !px-3"
                >
                  Github <span className="sm:hidden md:block">Profile</span>
                  <picture>
                    <source
                      srcSet="assets/CodeLogos/github.png"
                      type="image/png"
                    />
                    <img
                      src="assets/CodeLogos/github.png"
                      alt="github logo"
                      className="w-6 h-6 invert dark:invert-0"
                    />
                  </picture>
                </a>
                <a
                  href="https://profile.codersrank.io/user/tyfiero/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 text-black transition rounded-full shadow-md bg-sky-100 shadow-sky-300/50 hover:bg-sky-200 hover:shadow-sky-400/50 hover:shadow-lg hover:scale-105 active:scale-90 f2"
                >
                  CodersRank
                  <picture>
                    <source
                      srcSet="assets/CodeLogos/codersrank.png"
                      type="image/png"
                    />
                    <img
                      src="assets/CodeLogos/codersrank.png"
                      alt="github logo"
                      className="w-auto h-5"
                    />
                  </picture>
                </a>
              </div>
            </MotionText>
          </TextSection>
          <div className="relative md:max-w-[60%] mt-4 shadow-xl rounded-xl shadow-sky-600/30 ">
            <MotionImage>
              {" "}
              <TechStack />
            </MotionImage>
          </div>
        </DualSection>
        {/* separator */}
        <div className="my-28" />

        <DualSection invert>
          <TextSection title="" headerClassNames="hidden">
            <MotionHeader invert>
              <h2 className={"font-bold heading-md "}>Projects</h2>
            </MotionHeader>
            <MotionText invert>
              <div className="mx-2 text-box">
                <p className="font-bold ">
                  There&apos;s no better way to learn than by doing. Courses and
                  books are good for grasping the concepts, but applying this
                  knowledge is how to achieve mastery. Each project teaches me
                  something new, not only the technologies themselves, but also
                  new ways of thinking like a programmer.
                  <br />
                  <br />
                  Side projects encourage exploration, foster curiosity, and
                  have helped me level up as a developer. With each new side
                  project, the complexity and speed increase but the difficulty
                  and strain decrease. Of all these projects, ideaisland and
                  PriceArt shaped who I am today.
                </p>
              </div>
            </MotionText>
            <MotionText invert delay={0.4}>
              <div className="flex justify-center w-full mt-5 ">
                <Link href="/code/projects">
                  <a className="mt-2 text-xl font-bold cursor-pointer button-1 w-fit">
                    All Projects <FaArrowRight />
                  </a>
                </Link>
              </div>
            </MotionText>
          </TextSection>

          <div className="flex items-center justify-center w-full h-full mt-11">
            <MotionImage>
              {" "}
              <CompactProjects />
            </MotionImage>
          </div>
        </DualSection>
        <div className="my-28" />

        <DualSection>
          <TextSection title="" headerClassNames="hidden">
            <MotionHeader>
              <h2 className={"font-bold heading-md "}>Generative Art</h2>
            </MotionHeader>
            <MotionText>
              <div className="text-box">
                <p className="font-bold ">
                  Javascript art in P5.js is what made me fall in love with
                  coding. It&apos;s an excellent medium to start learning code,
                  as it helps to visualize how loops, functions, and other
                  concepts work through instant visual feedback. Shout out to
                  Daniel Shiffman of the{" "}
                  <a
                    href="https://thecodingtrain.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-sky-400"
                  >
                    Coding Train
                  </a>{" "}
                  for the incredible tutorials! I haven&apos;t had as much time
                  as I&apos;d like for generative art recently, but I&apos;ll
                  always love it.
                </p>
              </div>
            </MotionText>
            <MotionText delay={0.4}>
              <div className="flex justify-center w-full mt-5 ">
                <Link href="/art/generative">
                  <a className="mt-2 text-xl font-bold cursor-pointer button-1 w-fit">
                    All Generative Art <FaArrowRight />
                  </a>
                </Link>
              </div>
            </MotionText>
          </TextSection>

          <MotionImage>
            <CubeWaveSketch />
          </MotionImage>
        </DualSection>
        <div className="my-28" />

        <DualSection invert>
          <TextSection title="" headerClassNames="hidden">
            <MotionHeader invert>
              <h2 className={"font-bold heading-md "}>AI Experiments</h2>
            </MotionHeader>
            <MotionText invert>
              <div className="text-box">
                <p className="font-bold ">
                  The notion that a computer can learn is fascinating to me. The
                  first time I used GPT3 back in 2020, it was inspiring. It felt
                  like magic, almost anything I&apos;d ask it, it would send
                  back text that made sense, both contextually and
                  grammatically. I spent hours having conversations about
                  philosophy, politics, and technology with a computer that
                  didn&apos; even know my name. It will always be something
                  I&apos;m interested in.
                </p>
              </div>
            </MotionText>
          </TextSection>

          <div className="flex items-center justify-center w-full h-full mt-11">
            <MotionImage>
              <div className="flex flex-wrap justify-center w-full gap-3">
                {experiments.map((experiment) => (
                  <Experiment
                    key={experiment.name}
                    name={experiment.name}
                    description={experiment.description}
                    path={experiment.path}
                    imgSrc={experiment.imgSrc}
                  />
                ))}
              </div>
            </MotionImage>
          </div>
        </DualSection>
      </div>
    </>
  );
}

export default CodeIndex;

function Experiment({ path, imgSrc, name, description }) {
  return (
    <Link href={path}>
      <a className="flex items-center px-2 py-1 transition sm:w-full md:w-1/3 ring-2 ring-sky-400 hover:ring-4 hover:scale-105 rounded-xl active:scale-95 bg-gradient-to-br from-sky-50 via-sky-100 to-sky-200 dark:from-sky-700 dark:via-sky-800 dark:to-black">
        <div className="flex flex-col justify-between items-between">
          <h4 className="heading-sm !text-left">{name}</h4>
          <p>{description}</p>
        </div>
        <div className="flex items-center w-2/3 h-full">
          <picture>
            <source srcSet={imgSrc} type="image/png" />
            <img
              src={imgSrc}
              alt="logo"
              className="object-cover transition duration-500 rounded-lg group-hover:scale-105"
            />
          </picture>
        </div>
      </a>
    </Link>
  );
}
