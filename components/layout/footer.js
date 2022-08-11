import Container from "./container";
import { EXAMPLE_PATH } from "@/lib/constants";

export default function Footer() {
  let date = new Date().getFullYear();
  return (
    <footer className="relative ">
      {/* <footer className=" bg-gradient-to-t from-[#3CA0CB] via-[#3CA0CB] relative"> */}
      <div className="flex flex-col items-center lg:flex-row">
        <div className="flex flex-col items-center w-full gap-2 bg-clear-pl4">
          <p className="text-[11px] text-slate-300">
            Copyright © {date} Ty Fiero
          </p>
          <a
            href="https://www.termsfeed.com/live/666072e9-81d8-43ef-8a29-7547a11f7700"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-slate-300 mb-2 hover:underline hover:text-white"
          >
            Privacy Policy
          </a>
        </div>
      </div>

      {/* <div class="header"> */}
      {/* <div className="absolute w-full -top-[240px] "> */}

      <div className="absolute bottom-0 sm:w-[100vw] md:w-full -z-10 overflow-hidden">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="hsla(206, 91%, 44%, 0.31)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="hsla(206, 91%, 64%, 0.21)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="hsla(206, 91%, 64%, 0.41)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="7"
              fill="hsla(206, 91%, 64%, 1)"
            />
          </g>
        </svg>
      </div>

      {/* </div> */}

      {/* <div className="-translate-y-56 min-h-[10em] max-h-[10em] ocean  brightness-150 w-full absolute top-0">
        <div class="bgwave blur-sm brightness-150"></div>
        <div class="wave blur-sm brightness-125 min-h-[10em] max-h-[10em]"></div>
        <div class="wave blur-md brightness-150 min-h-[10em] max-h-[10em]"></div>
      </div> */}
      {/* <div className="wave"></div> */}
    </footer>
  );
}
