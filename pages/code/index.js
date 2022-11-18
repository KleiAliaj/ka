import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import TechStack from "@/components/projects/TechStack";
import Projects from "@/components/projects/Projects";
import DualSection from "@/components/layout/DualSection";
import TextSection from "@/components/layout/TextSection";
import { useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import CompactProjects from "@/components/projects/CompactProjects";
import Head from "next/head";
import { experiments } from "@/components/ai/aiArray";
import MotionHeader from "@/components/etc/animation/MotionHeader";
import MotionText from "@/components/etc/animation/MotionText";
import MotionImage from "@/components/etc/animation/MotionImage";
import AiExperiments from "@/components/ai/aiExperiments";
import ShiftButton from "@/components/layout/shiftButton";
import { TbCode, TbDeviceLaptop } from "react-icons/tb";
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
                <p>
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
                  <Link className="anc" href={"/contact"}>
                    Let me know
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

        <DualSection invert centerText>
          <TextSection title="" headerClassNames="hidden">
            <MotionHeader invert>
              <h2 className={"font-bold heading-md "}>Projects</h2>
            </MotionHeader>
            <MotionText invert>
              <div className="mx-2 text-box">
                <p>
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
                <ShiftButton
                  href={"/code/projects"}
                  icon={<TbCode />}
                  title="All Projects "
                />
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
                <p>
                  Javascript art in P5.js is what made me fall in love with
                  coding. It&apos;s an excellent medium to start learning code,
                  as it helps to visualize how loops, functions, and other
                  concepts work through instant visual feedback. Shout out to
                  Daniel Shiffman of the{" "}
                  <a
                    href="https://thecodingtrain.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="anc"
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
                <ShiftButton
                  href="/art/generative"
                  classes="mt-2 text-xl font-bold  "
                  title="View Generative Art"
                  icon={<TbDeviceLaptop />}
                />
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
              <Link href={"/code/ai"}>
                <h2 className={"font-bold heading-md  "}>AI Experiments</h2>
              </Link>
            </MotionHeader>
            <MotionText invert>
              <div className="text-box">
                <p>
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
            <AiExperiments />
          </div>
        </DualSection>
      </div>
    </>
  );
}

export default CodeIndex;
