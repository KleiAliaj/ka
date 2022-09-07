import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

function About() {
  return (
    <div className="page-container">
      <h2 className="text-left heading-lg ">About Me</h2>

      <div className="flex justify-center w-full gap-10 sm:flex-col-reverse md:flex-row sm:items-center">
        <div className="md:w-1/2 sm:w-full ">
          <p className="pb-3 text-2xl font-bold text-sky-600">
            Hi 👋🏻, I&apos;m Ty, a web developer, artist, and AI enthusiast based
            out of Seattle.{" "}
          </p>
          <div className="w-full glass-box bg-white/80 dark:bg-black/80">
            <p className="pb-3 font-bold text-sky-600">
              I have always been a science geek, I love learning how the world
              works and thinking about how it might work better. Initially, I
              was fascinated with the natural sciences and biology, which led me
              to getting a B.S. in Microbiology with a minor in Zoology from
              Colorado State University. While I still enjoy biology, I made a
              decision to pivot my career to pursue computer science for more
              opportunities to express my creativity and to build useful things. This scientific background has given me a unique lens on computer science, and helped me to appreciate the 
              Follow along on my journey to see what I create next!
            </p>
          </div>
        </div>

        <div className="relative shadow-xl sm:w-full md:w-1/2 rounded-xl shadow-sky-600/30">
          <img
            src="/assets/other/profileshot.jpg"
            alt="Ty Fiero image"
            className=" rounded-xl"
          />
        </div>
      </div>
      <Link href="/links">
        <a className="mt-10 text-xl font-bold button-1">
          My Fav Links & Resources <FaLink />
        </a>
      </Link>
    </div>
  );
}

export default About;
