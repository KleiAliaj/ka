import Link from "next/link";
import React from "react";
import { slimProjects } from "@/components/projects/projectArray";

function CompactProjects() {
  return (
    <>
      <div className="flex flex-wrap justify-center w-full gap-4 md:h-96 xl:h-72">
        {slimProjects.map((project, index) => {
          return (
            <Link href={project.route} key={index}>
              <a
                className={
                  "  rounded-xl transition pr-3 hover:scale-105 active:scale-95 flex items-center gap-3 shadow-md  hover:shadow-lg md:w-64 sm:w-[13.2rem] h-fit " +
                  project.styles.shadow
                }
              >
                <div className="w-16 h-16 sm:min-w-[4rem]  shadow-md ">
                  <picture>
                    <source srcSet={project.imgSrc} type="image/webp" />
                    <img
                      src={project.imgSrc}
                      alt={"Image of the " + project.title + " project"}
                      className="object-cover rounded-lg "
                    />
                  </picture>
                </div>
                <div className="flex flex-col ">
                  <p
                    className={
                      project.styles.textColor + " sm:text-base md:text-xl f1"
                    }
                  >
                    {project.title}
                  </p>
                  <p className="-mt-1 text-xs ">{project.shortDescription}</p>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default CompactProjects;
