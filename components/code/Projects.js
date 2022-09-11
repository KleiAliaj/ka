import React from "react";
import Atropos from "atropos/react";
import { useRouter } from "next/router";
import Tilt from "react-parallax-tilt";
import { FaArrowRight } from "react-icons/fa";
function Projects({ modalOpen, setModalOpen, setSelected }) {
  return (
    <div className="relative flex flex-wrap items-center justify-center px-5 py-0 transition duration-1000 ring-2 hover:ring-4 ring-sky-200 bg-sky-200/30 dark:ring-sky-600 dark:bg-sky-900/30 rounded-2xl ">
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
              textColor=" text-blue-600 dark:text-blue-400"
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
              textColor=" text-red-600 dark:text-red-400"
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
              textColor=" text-teal-600 dark:text-teal-300 whitespace-nowrap"
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
              textColor=" text-indigo-500 dark:text-indigo-300"
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
              textColor=" text-pink-600 dark:text-pink-300"
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
              textColor=" text-sky-600 dark:text-sky-300"
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
              textColor=" text-green-600 dark:text-green-300"
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
              color={"bg-lime-500"}
              bColor="hover:ring-lime-500"
              textColor=" text-lime-600 dark:text-lime-300"
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
              color={"bg-teal-400 dark:bg-teal-500"}
              bColor="hover:ring-teal-500"
              textColor=" text-teal-600 dark:text-teal-300"
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
              color={"bg-yellow-500"}
              bColor="hover:ring-yellow-500"
              textColor=" text-yellow-600 dark:text-yellow-300"
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
  );
}

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
        "my-atropos hover:ring-4 rounded-xl  transition duration-500  bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-500 dark:via-slate-700 dark:to-slate-900  shadow-lg hover:shadow-2xl " +
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
          <picture>
            <source srcSet={imgSrc} type="image/png" />
            <img
              src={imgSrc}
              alt="logo"
              className="object-cover group-hover:scale-100 sm:h-[14em] md:h-[10em] w-full transition duration-500 rounded-lg shadow-md group-hover:shadow-xl"
            />
          </picture>
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
          <div className="relative transition duration-500 md:active:scale-95 ">
            <button
              data-atropos-offset="-8"
              onClick={() => {
                setSelected(title);
                setModalOpen(true);
              }}
              className={
                " flex gap-1 items-center rounded-full justify-center py-2 px-5 z-50 !opacity-100 whitespace-nowrap transition duration-500 shadow-md cursor-pointer !blur-none  text-white group-hover:shadow-lg " +
                color +
                " " +
                bColor
              }
            >
              <p className="m-0  text-white text-test f2 !opacity-100 ">
                More Info
              </p>{" "}
              <FaArrowRight />
            </button>
            <button
              data-atropos-offset="0"
              onClick={() => {
                setSelected(title);
                setModalOpen(true);
              }}
              className={
                " absolute top-2 -left-1   rounded-full justify-center py-1 px-4 whitespace-no-wrap    text-xl f1 !z-0 !opacity-0 group-hover:!opacity-50 bg-slate-400/20 text-slate-400/0 !transition !duration-500 filter blur-[3px]   "
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
export default Projects;
