import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import TravelSvg from "./travelSvg";

function TravelButton() {
  const [hover, setHover] = React.useState(false);
  return (
    <Link href={"/about/travel"}>
      <a
        className="!p-3 overflow-hidden rounded-xl cursor-pointer  text-box w-72 h-32 hover:bg-sky-100/60 dark:hover:bg-sky-700/60 transition duration-500 group hover:shadow-xl"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <div className="flex gap-1 absolute top-2 left-2 items-center">
          <p className="f1 transition group-hover:text-sky-400 text-sky-600 dark:text-sky-300 dark:group-hover:text-sky-200 text-xl ">
            Travels
          </p>
          <FaArrowRight className="opacity-0 group-hover:opacity-100 transition duration-500 text-sm text-sky-400 dark:text-sky-200" />
        </div>

        <div className="flex relative transition duration-1000  z-0 hover:scale-125 pl-10 scale-110  w-full mt-3">
          <img
            src="assets/other/about/usa.png"
            alt="USA map"
            className="-rotate-12"
          />
          <div className="z-10 h-16 w-64 absolute  -top-7 left-5 scale-100">
            <TravelSvg hover={hover} />
          </div>
        </div>
      </a>
    </Link>
  );
}

export default TravelButton;
