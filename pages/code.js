import React from "react";
import Tilt from "react-parallax-tilt";
import { useRouter } from "next/router";
import { FaArrowRight } from "react-icons/fa";

function Projects() {
  return (
    <div className="page-container">
      <h2 className="text-left heading-lg ">Code</h2>
      <p className="pb-3 text-2xl font-bold text-sky-600">Learning Journey</p>
      <p className="pb-3 font-bold text-sky-600">
        What I have learned thus far, perhaps in a timeline format
      </p>
      <p className="pb-3 font-bold text-sky-600">
        Completed couses, fireship.io NextJs/git/vscode/firebase
        security/firebase data/etc, udemy, books
      </p>
      <p className="pb-3 font-bold text-sky-600">What I want to learn</p>
      <p className="pb-3 text-2xl font-bold text-sky-600">Resources</p>
      <p className="pb-3 font-bold text-sky-600">
        Links, websites, courses, books Ive read, really just a place to flex
        all the stuff I have learned.
      </p>
      <p className="pb-3 text-2xl font-bold text-sky-600">Crypto</p>
      <p className="pb-3 font-bold text-sky-600">
        Write up on the crypto stuff I have learned, and what I want to learn.
      </p>
      <div className="relative flex flex-wrap items-center justify-center  px-20 py-5 mt-2 transition duration-[1400ms] ring-2 hover:ring-8 ring-sky-200 bg-sky-200/30 rounded-2xl hover:bg-sky-500/50 ">
        <div className="absolute top-1 left-3">
          <p className="pb-3 font-bold text-sky-600">Coding Projects</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-3">
          <Tilt
            className="parallax-effect-glare-scale"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={500}
            transitionSpeed={1000}
            scale={1.02}
            glareEnable={true}
            glarePosition="top"
            glareColor="#ffffff5e"
          >
            <ProjectCard
              route="https://www.ideaisland.app/"
              color={"bg-pink-200"}
              bColor="md:hover:ring-pink-500"
              textColor=" text-pink-600"
              title="ideaisland"
              description="A web application for idea generation. Built with Next.js, Tailwind, Firebase, and GPT-3."
              imgSrc="/assets/other/ii.png"
            />
          </Tilt>
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            transitionSpeed={1000}
            scale={1.02}
            glareEnable={true}
            glarePosition="top"
            glareColor="#ffffff5e"
          >
            <ProjectCard
              route="https://priceart.xyz/eth-explorer/"
              color={"bg-sky-200"}
              bColor="md:hover:ring-sky-500"
              textColor=" text-sky-600"
              title="PriceArt ETH"
              description="Generative art NFT project using real Ethereum price data. Built with P5.js, Polygon blockchain, and vanilla JavaScript."
              imgSrc="/assets/other/71.jpg"
            />
          </Tilt>

          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            transitionSpeed={1000}
            scale={1.02}
            glareEnable={true}
            glarePosition="top"
            glareColor="#ffffff5e"
          >
            <ProjectCard
              route="https://priceart.xyz/ada-explorer/"
              color={"bg-green-200"}
              bColor="md:hover:ring-green-500"
              textColor=" text-green-600"
              title="PriceArt ADA"
              description="Generative art NFT project using real Cardano price data. Built with P5.js, Cardano blockchain, GLSL shaders and vanilla JavaScript."
              imgSrc="/assets/other/45.jpg"
            />
          </Tilt>

          {/* <ProjectCard
              route="/next-steps/mrr-calculator"
              color={"bg-blues-100"}
              bColor="md:hover:ring-clear-bd3"
              textColor=" text-t-bl"
              title="Pricing Tool"
              description="This tool helps you price your products and services."
              imgSrc="https://images.unsplash.com/photo-1598520106830-8c45c2035460?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGVib2FyZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <ProjectCard
              route="/next-steps/mrr-calculator"
              color={"bg-blues-100"}
              bColor="md:hover:ring-clear-bd3"
              textColor=" text-t-bl"
              title="Runway Calculator"
              description="How long can you operate without revenue? This tool aims to show you."
              imgSrc="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGNhbGN1bGF0b3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />
            <ProjectCard
              route="/next-steps/mrr-calculator"
              color={"bg-blues-100"}
              bColor="md:hover:ring-clear-bd3"
              textColor=" text-t-bl"
              title="Marketing plan"
              description="Build a simple marketing plan to help you grow your business."
              imgSrc="https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fG1hcmtldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            /> */}
        </div>
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
}) => {
  const router = useRouter();

  return (
    <div
      className={
        "flex flex-col core-element items-center justify-center w-[15em] h-[25em] p-1 bg-white/80 dark:bg-slate-800 rounded-xl md:hover:scale-105 transition duration-500 md:hover:ring-8  ring-clear-bd3 mx-2 " +
        bColor
      }
    >
      <div className="w-full h-[10em] bg-white/40  rounded-lg">
        <img
          src={imgSrc}
          alt="logo"
          className="object-cover  h-[10em] w-full rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-between items-center h-[15em] px-5 py-2 inner-element">
        <h3 className={"m-0 text-2xl f1  " + textColor}>{title}</h3>

        <p className="text-sm text-left ">{description}</p>
        <button
          onClick={() => {
            router.push(route);
          }}
          className={
            " flex gap-1 items-center rounded-full justify-center p-1 border-2  md:hover:scale-105 md:active:scale-95 whitespace-nowrap transition cursor-pointer h-[3em] w-[90%] " +
            color +
            " " +
            bColor
          }
        >
          <p className="m-0 dark:text-slate-800 f2">Launch</p>{" "}
          <FaArrowRight className={textColor} />
        </button>
      </div>
    </div>
  );
};
