import Link from "next/link";
import React from "react";
import { slimProjects } from "@/components/projects/projectArray";
import Atropos from "atropos/react";

function CompactProjects() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 md:w-full sm:w-screen h-fit">
        {slimProjects.map((project, index) => {
          return (
            <Link href={project.route} key={index}>
              <Atropos
                shadow={false}
                activeOffset={40}
                className={
                  "rounded-xl transition md:pr-3  active:scale-95  shadow-md cursor-pointer hover:shadow-lg lg:w-64 sm:w-[10.8rem] h-fit  " +
                  project.styles.shadow
                }
              >
                <a
                  className={
                    "   flex items-center rounded-xl sm:gap-1 lg:gap-3   w-full h-fit !break-words "
                  }
                >
                  <div
                    className="w-16 h-16 sm:min-w-[4rem]  shadow-md rounded-xl overflow-hidden "
                    data-atropos-offset="1"
                  >
                    <picture>
                      <source srcSet={project.imgSrc} type="image/webp" />
                      <img
                        src={project.imgSrc}
                        alt={"Image of the " + project.title + " project"}
                        className="object-cover rounded-xl"
                      />
                    </picture>
                  </div>
                  <div className="flex flex-col ">
                    <p
                      className={
                        project.styles.textColor +
                        " sm:text-base sm:whitespace-pre-line  lg:text-xl f1"
                      }
                      data-atropos-offset="-10"
                    >
                      {project.title}
                    </p>
                    <p
                      className="-mt-1 text-xs sm:hidden lg:block"
                      data-atropos-offset="-5"
                    >
                      {project.shortDescription}
                    </p>
                  </div>
                </a>
              </Atropos>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default CompactProjects;
