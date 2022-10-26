import React from "react";
import { experiments } from "@/components/ai/aiArray";
import Link from "next/link";
import MotionImage from "../etc/animation/MotionImage";

function AiExperiments() {
  return (
    <MotionImage>
      <div className="flex flex-wrap justify-center w-full gap-5">
        {experiments.map((experiment) => (
          <Experiment
            key={experiment.name}
            name={experiment.name}
            description={experiment.description}
            path={experiment.path}
            imgSrc={experiment.imgSrc}
            styles={experiment.styles}
          />
        ))}
      </div>
    </MotionImage>
  );
}

export default AiExperiments;

function Experiment({ path, imgSrc, name, description, styles }) {
  return (
    <Link href={path}>
      <a
        className={
          "flex items-center px-2 py-1 transition sm:w-full md:w-1/2  hover:scale-105 rounded-xl shadow-md cursor-pointer hover:shadow-lg active:scale-95 h-32   " +
          styles.shadow
        }
      >
        <div className="flex flex-col justify-between items-between pr-3">
          <h4 className={"heading-sm !text-left " + styles.textColor}>
            {name}
          </h4>
          <p className="text-sm">{description}</p>
        </div>
        <div className="w-28 !h-28 ">
          <picture>
            <source srcSet={imgSrc} type="image/png" />
            <img
              src={imgSrc}
              alt={`Image of the ${name} AI experiment`}
              className="object-cover w-full h-full rounded-lg  "
            />
          </picture>
        </div>
      </a>
    </Link>
  );
}
