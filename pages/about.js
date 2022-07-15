import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

function About() {
  return (
    <div className="page-container">
      <h2 className="text-left heading-lg ">About Me</h2>

      <p className="pb-3 text-2xl font-bold text-sky-600">Resume</p>
      <p className="pb-3 font-bold text-sky-600">Link to my pdf resume.</p>
      <p className="pb-3 text-2xl font-bold text-sky-600">Interests</p>
      <p className="pb-3 font-bold text-sky-600">
        List out concepts that I find interesting
      </p>

      <div className="flex justify-center gap-10 sm:flex-col-reverse md:flex-row sm:items-center">
        <div className="md:w-1/2 sm:w-full ">
          <p className="pb-3 text-2xl font-bold text-sky-600">
            Why am I interesting?
          </p>
          <p className="pb-3 font-bold text-sky-600">
            Keep it short and sweet. Less than two paragraphs of who I am as a
            person. I am a software engineer with a passion for building things
            that people love.
          </p>
        </div>
        <Link href="/links">
          <a className="text-xl font-bold button-1">
            View my links <FaLink />
          </a>
        </Link>

        <div className="w-[640px] h-[423px] relative shadow-xl rounded-xl shadow-sky-600/30">
          <Image
            src="/assets/other/profileshot.jpg"
            alt="Ty Fiero image"
            layout="fill"
            className=" rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
