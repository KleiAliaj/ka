import React from "react";
import Tilt from "react-parallax-tilt";
import { useRouter } from "next/router";
import { FaArrowRight } from "react-icons/fa";
import ProjectModal from "@/components/projects/modals/ProjectModal";
import ModalConsistenSea from "@/components/projects/modals/ModalConsistenSea";
import ModalOliverAIProject from "@/components/projects/modals/ModalOliverAIProject";
import ModalDD from "@/components/projects/modals/ModalDD";
import Atropos from "atropos/react";
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

function Projects() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("consistensea");
  const [selectedContent, setSelectedContent] = React.useState(
    <ModalConsistenSea />
  );

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
      <h2 className="text-left heading-lg ">Code</h2>

      <section className="flex items-center w-full sm:gap-5 md:gap-10 md:flex-row sm:flex-col md:justify-center">
        {" "}
        <div className="flex flex-col gap-2 sm:items-center sm:w-full md:w-1/3 md:items-start">
          <h3 className="heading-md !mb-1">Tech Stack</h3>
          <div className="w-full glass-box bg-white/80 dark:bg-black/80">
            <p>
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
          </div>
          <div className="flex w-full md:justify-start sm:justify-center">
            <a
              href="https://github.com/tyfiero/"
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 button-bw w-fit f2"
            >
              Github Profile
              <img
                src="assets/CodeLogos/github.png"
                alt="github logo"
                className="w-6 h-6 dark:invert invert-0"
              />
            </a>
          </div>
        </div>
        <div className="relative max-w-[60%] mt-4 shadow-xl rounded-xl shadow-sky-600/30 ">
          <TechStack />
        </div>
      </section>
      <section className="flex items-center w-full mt-8 sm:gap-5 md:gap-10 md:flex-row sm:flex-col md:justify-center">
        {" "}
        <div className="flex flex-col gap-2 sm:items-center sm:w-full md:w-1/3 md:items-start">
          <h3 className="heading-md !mb-1">Generative Art</h3>
          <div className="w-full glass-box bg-white/80 dark:bg-black/80">
            <p>
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
          </div>
          <div className="flex w-full md:justify-start sm:justify-center">
            <Link href="/code/art">
              <a className="mt-2 text-xl font-bold button-1 w-fit">
                View Generative Art <FaArrowRight />
              </a>
            </Link>
          </div>
        </div>
        <div className="relative  mt-4 shadow-xl w-[300px] h-[260px] rounded-xl shadow-sky-600/30 ">
          <Image
            src="/assets/other/projects/art/genArt.webp"
            alt="Ty's Generative Art'"
            layout="fill"
            className=" rounded-xl"
          />
        </div>
      </section>
      <div className="relative flex flex-wrap items-center justify-center px-5 py-0 mt-4 transition duration-1000 ring-2 hover:ring-4 ring-sky-200 bg-sky-200/30 dark:ring-sky-600 dark:bg-sky-900/30 rounded-2xl ">
        <div className="absolute top-1 left-3">
          <p className="pb-3 font-bold text-sky-600">Coding Projects</p>
        </div>
        <Atropos shadow={false} activeOffset={0} rotateXMax={0} rotateYMax={2}>
          <div className="flex flex-wrap items-center justify-center w-full gap-5 py-5 mt-3">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              transitionSpeed={1000}
              scale={1.02}
            >
              <ProjectCard
                route=""
                color={"bg-blue-400"}
                bColor="hover:ring-blue-500 "
                textColor=" text-blue-600"
                title="ConsistentSea"
                description="Habit tracking chrome extension built with React, framer motion, tailwind, and the Chrome extension API."
                imgSrc="/assets/other/consistensea.png"
                setModalOpen={setModalOpen}
                setSelected={setSelected}
              />
            </Tilt>
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              transitionSpeed={1000}
              scale={1.02}
            >
              <ProjectCard
                route="tyfiero.com/ai/Oliver"
                color={"bg-red-400"}
                bColor="hover:ring-red-500"
                textColor=" text-red-600"
                title="Oliver"
                description="Interactive AI life advice app built with Next.js, tailwind, GPT-3, and CSS illustration."
                imgSrc="/assets/other/projects/oliver/oliver.webp"
                setModalOpen={setModalOpen}
                setSelected={setSelected}
              />
            </Tilt>
            <Tilt
              className="parallax-effect-glare-scale"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={500}
              transitionSpeed={1000}
              scale={1.02}
            >
              <ProjectCard
                route="https://www.deliberatedesign.art"
                color={"bg-teal-400"}
                bColor="hover:ring-teal-500"
                textColor=" text-teal-600 whitespace-nowrap"
                title="Deliberate Design"
                description="A web app to generate creative, detailed text prompts for AI image generators. Built with Next.js, Tailwind, and Recoil."
                imgSrc="/assets/other/projects/dd/deliberate.png"
                setModalOpen={setModalOpen}
                setSelected={setSelected}
              />
            </Tilt>
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={500}
              transitionSpeed={1000}
              scale={1.02}
            >
              <ProjectCard
                route="/"
                color={"bg-indigo-400"}
                bColor="hover:ring-indigo-500"
                textColor=" text-indigo-500"
                title="tyfiero.com"
                description="My personal website built with Next.js, Tailwind, and Cosmic CMS."
                imgSrc="/assets/other/Ty-lofi.jpeg"
                setModalOpen={setModalOpen}
                setSelected={setSelected}
              />
            </Tilt>
            <Tilt
              className="parallax-effect-glare-scale"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={500}
              transitionSpeed={1000}
              scale={1.02}
            >
              <ProjectCard
                route="https://www.ideaisland.app/"
                color={"bg-pink-400"}
                bColor="hover:ring-pink-500"
                textColor=" text-pink-600"
                title="ideaisland"
                description="A web application for idea generation. Built with Next.js, Tailwind, Firebase, and GPT-3."
                imgSrc="/assets/other/ii.png"
                setModalOpen={setModalOpen}
                setSelected={setSelected}
              />
            </Tilt>

            <Tilt
              className="parallax-effect-glare-scale"
              tiltMaxAngleX={5}
              tiltMaxAngleY={15}
              perspective={500}
              transitionSpeed={1000}
              scale={1.02}
            >
              <ProjectCard
                route="https://priceart.xyz/eth-explorer/"
                color={"bg-sky-400"}
                bColor="hover:ring-sky-500 "
                textColor=" text-sky-600"
                title="PriceArt ETH"
                description="Generative art NFT project using real Ethereum price data. Built with P5.js, Polygon blockchain, and vanilla JavaScript."
                imgSrc="/assets/other/projects/PA/eth6.jpg"
                setModalOpen={setModalOpen}
                setSelected={setSelected}
              />
            </Tilt>

            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              transitionSpeed={1000}
              scale={1.02}
            >
              <ProjectCard
                route="https://priceart.xyz/ada-explorer/"
                color={"bg-green-400"}
                bColor="hover:ring-green-500"
                textColor=" text-green-600"
                title="PriceArt ADA"
                description="Generative art NFT project using real Cardano price data. Built with P5.js, Cardano blockchain, GLSL shaders and vanilla JavaScript."
                imgSrc="/assets/other/projects/PA/ada7.jpg"
                setModalOpen={setModalOpen}
                setSelected={setSelected}
              />
            </Tilt>
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              transitionSpeed={1000}
              scale={1.02}
            >
              <ProjectCard
                route="https://priceart.xyz"
                color={"bg-lime-400"}
                bColor="hover:ring-lime-500"
                textColor=" text-lime-600"
                title="PriceArt Website"
                description="Home page for the PriceArt NFT project built with WordPress."
                imgSrc="/assets/other/projects/PA/paweb1.png"
                setModalOpen={setModalOpen}
                setSelected={setSelected}
              />
            </Tilt>
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              transitionSpeed={1000}
              scale={1.02}
            >
              <ProjectCard
                route="https://editor.p5js.org/tyfiero/full/mvmllsRDI"
                color={"bg-teal-400"}
                bColor="hover:ring-teal-500"
                textColor=" text-teal-600"
                title="Formulata"
                description="A simple web app to combine words for combinatorial ideation. Built with vanilla JavaScript and P5.js, library."
                imgSrc="/assets/other/projects/combinator/formulata.png"
                setModalOpen={setModalOpen}
                setSelected={setSelected}
              />
            </Tilt>

            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              transitionSpeed={1000}
              scale={1.02}
            >
              <ProjectCard
                route="https://codesandbox.io/embed/intelligent-joliot-p99m2g?fontsize=14&hidenavigation=1&theme=dark&view=preview"
                color={"bg-yellow-400"}
                bColor="hover:ring-yellow-500"
                textColor=" text-yellow-600"
                title="JS Drum Set"
                description="Drum set from a tutorial from Wes Bos, one of my first JS projects."
                imgSrc="/assets/other/projects/drum/drum.webp"
                setModalOpen={setModalOpen}
                setSelected={setSelected}
              />
            </Tilt>
          </div>
        </Atropos>
      </div>
    </div>
  );
}

export default Projects;

const ProjectCard = ({
  color,
  bColor,
  imgSrc,
  title,
  description,
  textColor,
  route,
  setModalOpen,
  setSelected,
}) => {
  const router = useRouter();

  return (
    <Atropos
      shadow={false}
      activeOffset={40}
      className={
        "my-atropos hover:ring-4 rounded-xl  transition duration-500  bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-500 dark:via-slate-700 dark:to-slate-900 dark:bg-slate-800 shadow-lg hover:shadow-2xl " +
        bColor
      }
    >
      <div
        className={
          "flex flex-col group  items-center justify-center sm:w-[22em] md:w-[15em] h-[25em] p-2   z-0 hover:z-10   "
        }
      >
        <div
          data-atropos-offset="2"
          className="w-full sm:h-[14em] md:h-[10em] bg-white/40  rounded-lg  "
        >
          <img
            src={imgSrc}
            alt="logo"
            className="object-cover group-hover:scale-105 sm:h-[14em] md:h-[10em] w-full transition duration-500 rounded-lg shadow-md group-hover:shadow-xl"
          />
        </div>

        <div
          className="flex flex-col justify-between items-center h-[15em] px-5 py-2   "
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative transition duration-500 group-hover:scale-110">
            <h3
              className={"m-0 text-2xl f1 z-10  " + textColor}
              data-atropos-offset="-7"
            >
              {title}
            </h3>
            <h3
              className={
                "m-0 text-xl f1 z-0 absolute top-2 -left-1 opacity-0 group-hover:opacity-100 text-slate-400/30 dark:text-slate-900/50 !transition !duration-500 filter blur-[2px] "
              }
              data-atropos-offset="-3"
            >
              {title}
            </h3>
          </div>

          <div className={" flex-grow  transition duration-300 pt-2"}>
            <p className="text-sm text-left card-text" data-atropos-offset="-2">
              {description}
            </p>
          </div>
          <div className="relative transition duration-500 group-hover:scale-110 md:hover:!scale-125  md:active:scale-95 ">
            <button
              data-atropos-offset="-8"
              onClick={() => {
                setSelected(title);
                setModalOpen(true);
              }}
              className={
                " flex gap-1 items-center rounded-full justify-center py-2 px-5 z-50 !opacity-100 whitespace-nowrap transition duration-500 shadow-md cursor-pointer  text-white group-hover:shadow-lg " +
                color +
                " " +
                bColor
              }
            >
              <p className="m-0 text-white f2 !opacity-100 ">More Info</p>{" "}
              <FaArrowRight />
            </button>
            <button
              data-atropos-offset="0"
              onClick={() => {
                setSelected(title);
                setModalOpen(true);
              }}
              className={
                " absolute top-2 -left-1   rounded-full justify-center py-1 px-4 whitespace-no-wrap    text-xl f1 !z-0 !opacity-0 group-hover:!opacity-100 bg-slate-400/20 text-slate-400/0 !transition !duration-500 filter blur-[3px]   "
              }
            >
              More info d
            </button>
          </div>
        </div>
      </div>
    </Atropos>
  );
};
