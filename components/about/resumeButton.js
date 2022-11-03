import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import TravelSvg from "./travelSvg";

function ResumeButton() {
  return (
    <a
      className="!p-3 overflow-hidden rounded-xl cursor-pointer  text-box w-72 h-32 hover:bg-sky-100/60 dark:hover:bg-sky-700/60 transition duration-500 group hover:shadow-xl relative"
      href="/assets/other/TyFieroResume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex gap-1 absolute top-2 left-2 items-center">
        <p className="f1 transition group-hover:text-sky-400 text-sky-600 dark:text-sky-300 dark:group-hover:text-sky-200 text-xl z-50">
          Resume
        </p>
        <FaArrowRight className="opacity-0 group-hover:opacity-100 transition duration-500 text-sm text-sky-400 dark:text-sky-200 z-50" />
      </div>
      <div className="absolute z-10 top-12 -left-3 group-hover:-translate-y-20 duration-700 group-hover:scale-90 transition">
        <img
          className="w-auto h-[13rem]"
          src="/assets/other/about/ty.webp"
          alt="Image of Ty pointing"
        />
      </div>
      <div className="flex absolute right-5 transition duration-1000  z-0 group-hover:scale-110 pl-10 translate-y-5 group-hover:translate-y-0 group-hover:-rotate-[10deg]  w-fit mt-3">
        <div className="rounded-md h-36 w-28 bg-white ring-1 ring-slate-500 py-1 px-3 overflow-hidden">
          <div className="flex flex-col">
            <p className="f1 text-sky-600 text-center text-sm">Ty Fiero</p>
            <div className="flex gap-3 px-5">
              <div className="bg-slate-800 h-[2px] w-3 rounded-full"></div>
              <div className="bg-slate-800 h-[2px] w-3 rounded-full"></div>
              <div className="bg-slate-800 h-[2px] w-3 rounded-full"></div>
            </div>
            <div className="w-full flex items-center justify-between">
              {" "}
              <div className="mt-2 rounded-full bg-sky-600 w-9  h-[4px]"></div>
              <div className="mt-2 rounded-full bg-slate-400 w-4  h-[2px]"></div>
            </div>
            <div className="mt-1 rounded-full bg-slate-800 w-full mx-auto h-[2px]"></div>
            <div className="mt-1 rounded-full bg-slate-800 w-full mx-auto h-[2px]"></div>
            <div className="mt-1 rounded-full bg-slate-800 w-full mx-auto h-[2px]"></div>
            <div className="w-full flex items-center justify-between">
              {" "}
              <div className="mt-2 rounded-full bg-sky-600 w-7  h-[4px]"></div>
              <div className="mt-2 rounded-full bg-slate-400 w-4  h-[2px]"></div>
            </div>
            <div className="mt-1 rounded-full bg-slate-800 w-full mx-auto h-[2px]"></div>
            <div className="mt-1 rounded-full bg-slate-800 w-full mx-auto h-[2px]"></div>
            <div className="mt-1 rounded-full bg-slate-800 w-full mx-auto h-[2px]"></div>
            <div className="w-full flex items-center justify-between">
              {" "}
              <div className="mt-2 rounded-full bg-sky-600 w-8  h-[4px]"></div>
              <div className="mt-2 rounded-full bg-slate-400 w-4  h-[2px]"></div>
            </div>
            <div className="mt-1 rounded-full bg-slate-800 w-full mx-auto h-[2px]"></div>
            <div className="mt-1 rounded-full bg-slate-800 w-full mx-auto h-[2px]"></div>
            <div className="mt-1 rounded-full bg-slate-800 w-full mx-auto h-[2px]"></div>
            <div className="w-full flex items-center justify-between">
              {" "}
              <div className="mt-2 rounded-full bg-sky-600 w-12  h-[4px]"></div>
              <div className="mt-2 rounded-full bg-slate-400 w-4  h-[2px]"></div>
            </div>
            <div className="mt-1 rounded-full bg-slate-800 w-full mx-auto h-[2px]"></div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ResumeButton;
