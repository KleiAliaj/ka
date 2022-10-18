import Link from "next/link";
import React from "react";
import { slimProjects } from "@/components/projects/projectArray";

function CompactProjects() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 md:w-full sm:w-screen h-fit">
        {slimProjects.map((project, index) => {
          return (
            <Link href={project.route} key={index}>
              <a
                className={
                  "  rounded-xl transition md:pr-3 hover:scale-105 active:scale-95 flex items-center sm:gap-1 lg:gap-3 shadow-md  hover:shadow-lg lg:w-64 sm:w-[10.8rem] h-fit !break-words " +
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
                      project.styles.textColor +
                      " sm:text-base sm:whitespace-pre-line  lg:text-xl f1"
                    }
                  >
                    {project.title}
                  </p>
                  <p className="-mt-1 text-xs sm:hidden lg:block">
                    {project.shortDescription}
                  </p>
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
