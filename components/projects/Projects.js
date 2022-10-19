import React from "react";
import Atropos from "atropos/react";
import { useRouter } from "next/router";
import Tilt from "react-parallax-tilt";
import { FaArrowRight } from "react-icons/fa";
import { projectArray } from "./projectArray";
import Link from "next/link";
function Projects({ modalOpen, setModalOpen, setSelected }) {
  return (
    <div className="relative flex flex-wrap items-center justify-center px-5 py-0 transition duration-1000 ring-2 hover:ring-4 ring-sky-200 bg-sky-200/30 dark:ring-sky-600 dark:bg-sky-900/30 rounded-2xl ">
      <div className="flex flex-wrap items-center justify-center w-full gap-5 py-5 mt-3 sm:px-16 md:px-2 h-fit">
        {projectArray.map((project) => {
          return <ProjectUnit key={project.title} projectData={project} />;
        })}
      </div>
    </div>
  );
}

const ProjectUnit = ({ projectData }) => {
  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      transitionSpeed={1000}
      scale={1.02}
      className="sm:w-full md:w-fit"
    >
      <ProjectCard
        route={projectData.route}
        color={projectData.styles.color}
        bColor={projectData.styles.bColor}
        textColor={projectData.styles.textColor}
        title={projectData.title}
        description={projectData.description}
        imgSrc={projectData.imgSrc}
      />
    </Tilt>
  );
};

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
    <Atropos
      shadow={false}
      activeOffset={40}
      className={
        "my-atropos hover:ring-8 rounded-xl  transition duration-500  bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-500 dark:via-slate-700 dark:to-slate-900  shadow-lg hover:shadow-2xl ring-2  " +
        bColor
      }
    >
      <div
        className={
          "flex flex-col group  items-center justify-center sm:w-full md:w-[15em] sm:h-fit md:h-[25em] p-2   z-0 hover:z-10   "
        }
      >
        <div
          data-atropos-offset="2"
          className="w-full sm:h-fit md:h-[10em] bg-white/40  rounded-lg  "
        >
          <picture>
            <source srcSet={imgSrc} type="image/png" />
            <img
              src={imgSrc}
              alt={"Image of the " + title + " project"}
              className="object-cover group-hover:scale-100 sm:h-[10em] md:h-[10em] w-full transition duration-500 rounded-lg shadow-md group-hover:shadow-xl"
            />
          </picture>
        </div>

        <div
          className="flex flex-col justify-between items-center sm:h-48 md:h-[15em] px-5 py-2   "
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
          <Link href={route}>
            <div className="relative transition duration-500 md:active:scale-95 ">
              <a
                data-atropos-offset="-8"
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
              </a>
              <button
                data-atropos-offset="0"
                className={
                  " absolute top-2 -left-1   rounded-full justify-center py-1 px-4 whitespace-no-wrap    text-xl f1 !z-0 !opacity-0 group-hover:!opacity-50 bg-slate-400/20 text-slate-400/0 !transition !duration-500 filter blur-[3px]   "
                }
              >
                More info d
              </button>
            </div>
          </Link>
        </div>
      </div>
    </Atropos>
  );
};
export default Projects;
