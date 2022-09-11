import React from "react";
import { FaArrowRight } from "react-icons/fa";
import ProjectModal from "@/components/projects/modals/ProjectModal";
import ModalConsistenSea from "@/components/projects/modals/ModalConsistenSea";
import ModalOliverAIProject from "@/components/projects/modals/ModalOliverAIProject";
import ModalDD from "@/components/projects/modals/ModalDD";
import Link from "next/link";
import Image from "next/image";
import ModalCombinator from "@/components/projects/modals/ModalCombinator";
import ModalDrum from "@/components/projects/modals/ModalDrum";
import ModalPAAda from "@/components/projects/modals/ModalPAAda";
import ModalPAeth from "@/components/projects/modals/ModalPAeth";
import ModalTy from "@/components/projects/modals/ModalTy";
import ModalPAWeb from "@/components/projects/modals/ModalPAWeb";
import ModalIdeaIsland from "@/components/projects/modals/ModalIdeaIsland";
import TechStack from "@/components/projects/TechStack";
import Projects from "@/components/code/Projects";
import DualSection from "@/components/layout/DualSection";
import TextSection from "@/components/layout/TextSection";
import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
const CubeWaveSketch = dynamic(
  () => import("../../components/projects/CubeWaveSketch"),
  {
    ssr: false,
  }
);

function CodeIndex() {
  const prefersReducedMotion = useReducedMotion();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("consistensea");
  const [selectedContent, setSelectedContent] = React.useState(
    <ModalConsistenSea />
  );
  const photoAnimate = {
    offscreen: { scale: prefersReducedMotion ? 1 : 0.6, opacity: 0 },
    onscreen: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1.5 },
    },
  };
  const headingAnimate = {
    offscreen: { x: prefersReducedMotion ? 0 : -300, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1.5 },
    },
  };
  const textAnimate = {
    offscreen: {
      x: prefersReducedMotion ? 0 : -300,
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.2,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.2, duration: 1.5, delay: 0.2 },
    },
  };
  const thirdAnimate = {
    offscreen: {
      x: prefersReducedMotion ? 0 : -300,
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.2,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.2, duration: 1.5, delay: 0.4 },
    },
  };
  const invertHeader = {
    offscreen: { x: prefersReducedMotion ? 0 : 300, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1.5 },
    },
  };
  const invertText = {
    offscreen: {
      x: prefersReducedMotion ? 0 : 300,
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.2,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.2, duration: 1.5, delay: 0.2 },
    },
  };
  const invertThird = {
    offscreen: {
      x: prefersReducedMotion ? 0 : 300,
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.2,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.2, duration: 1.5, delay: 0.4 },
    },
  };
  return (
    <div className="page-container">
      {modalOpen && selected === "ConsistentSea" ? (
        <ProjectModal
          content={selectedContent}
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          selected={selected}
        />
      ) : null}
      {modalOpen && selected === "Oliver" ? (
        <ProjectModal
          content={<ModalOliverAIProject />}
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          selected={selected}
        />
      ) : null}
      {modalOpen && selected === "Deliberate Design" ? (
        <ProjectModal
          content={<ModalDD />}
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          selected={selected}
        />
      ) : null}
      {modalOpen && selected === "Formulata" ? (
        <ProjectModal
          content={<ModalCombinator />}
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          selected={selected}
        />
      ) : null}
      {modalOpen && selected === "JS Drum Set" ? (
        <ProjectModal
          content={<ModalDrum />}
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          selected={selected}
        />
      ) : null}
      {modalOpen && selected === "PriceArt ADA" ? (
        <ProjectModal
          content={<ModalPAAda />}
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          selected={selected}
        />
      ) : null}
      {modalOpen && selected === "PriceArt ETH" ? (
        <ProjectModal
          content={<ModalPAeth />}
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          selected={selected}
        />
      ) : null}
      {modalOpen && selected === "PriceArt Website" ? (
        <ProjectModal
          content={<ModalPAWeb />}
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          selected={selected}
        />
      ) : null}
      {modalOpen && selected === "tyfiero.com" ? (
        <ProjectModal
          content={<ModalTy />}
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          selected={selected}
        />
      ) : null}
      {modalOpen && selected === "ideaisland" ? (
        <ProjectModal
          content={<ModalIdeaIsland />}
          setModalOpen={setModalOpen}
          modalOpen={modalOpen}
          selected={selected}
        />
      ) : null}
      <h2 className="text-left heading-lg fade-effect-quick ">Code</h2>

      <DualSection>
        <TextSection title="" headerClassNames="hidden">
          <motion.h2
            variants={headingAnimate}
            className={"font-bold heading-md "}
          >
            Tech Stack
          </motion.h2>
          <motion.div variants={textAnimate} className="text-box">
            <p className="pb-3 font-bold">
              Learning new technologies is a rush for me. I try to learn
              something new every week that I can apply to projects in the
              future. My favorite technologies thus far are React, Next.js,
              Tailwind CSS, p5.js and Framer Motion, I have the confidence and
              the know-how to wield these tools to create awesome web
              experiences for users. <br />
              <br /> I&apos;m learning Typescript right now and I can tell that
              it will be a game changer for my workflow. I&apos;d like to learn
              SQL, machine learning, and backend frameworks down the line, but
              for now I want to focus on getting good at front end.{" "}
              <Link href={"/contact"}>
                <a className="underline text-sky-500">Let me know</a>
              </Link>{" "}
              if you want to share a cool technology for me to explore!
            </p>
          </motion.div>
          <motion.div
            variants={thirdAnimate}
            className="flex justify-center w-full mt-5"
          >
            <a
              href="https://github.com/tyfiero/"
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 button-bw w-fit f2"
            >
              Github Profile
              <picture>
                <source srcSet="assets/CodeLogos/github.png" type="image/png" />
                <img
                  src="assets/CodeLogos/github.png"
                  alt="github logo"
                  className="w-6 h-6 invert dark:invert-0"
                />
              </picture>
            </a>
          </motion.div>
        </TextSection>
        <motion.div
          variants={photoAnimate}
          className="relative md:max-w-[60%] mt-4 shadow-xl rounded-xl shadow-sky-600/30 "
        >
          <TechStack />
        </motion.div>
      </DualSection>
      {/* separator */}
      <div className="md:mb-28 md:mt-28 sm:mb-6 sm:mt-6" />
      <DualSection invert>
        <TextSection title="" headerClassNames="hidden">
          <motion.h2
            variants={invertHeader}
            className={"font-bold heading-md "}
          >
            Generative Art
          </motion.h2>
          <motion.div variants={invertText} className="text-box">
            <p className="pb-3 font-bold">
              Javascript art in P5.js is what made me fall in love with coding.
              It&apos;s an excellent medium to start learning code, as it helps
              to visualize how loops, functions, and other concepts work. The
              instant visual feedback is amazing. Shout out to Daniel Shiffman
              of the{" "}
              <a
                href="https://thecodingtrain.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sky-400"
              >
                Coding Train
              </a>{" "}
              for the incredible tutorials. I don&apos;t make generative art as
              much anymore, but it will always have a place in my heart.
            </p>
          </motion.div>
          <motion.div
            variants={invertThird}
            className="flex justify-center w-full mt-5 "
          >
            <Link href="/code/art">
              <a className="mt-2 text-xl font-bold cursor-pointer button-1 w-fit">
                View All Generative Art <FaArrowRight />
              </a>
            </Link>
          </motion.div>
        </TextSection>

        <motion.div className="w-full" variants={headingAnimate}>
          <CubeWaveSketch />
        </motion.div>
      </DualSection>
      <h3 className="heading-lg !mb-0 mt-20">Projects </h3>
      <Projects
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
        setSelected={setSelected}
      />
    </div>
  );
}

export default CodeIndex;
