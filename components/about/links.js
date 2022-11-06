import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
function BookMarks() {
  const links = [
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.youtube.com/c/TheCodingTrain",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://learnjavascript.online/knowledge-map.html?ref=producthunt",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://usehooks.com/",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://developer.chrome.com/docs/devtools/javascript/",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://sandbox.eth.build/",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://waitbutwhy.com/2015/01/artificial-intelligence-revolution-1.html",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://beta.openai.com/codex-javascript-sandbox",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://github.com/unicodeveloper/awesome-nextjs",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=http://www.paulgraham.com/quo.html",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://medium.com/",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.brain.fm/app/player",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.nitrotype.com/race",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://dropbox.design/article/mental-models-for-designers",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://untools.co/",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://fs.blog/deliberate-practice-guide/",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://ocw.mit.edu/courses/15-s12-blockchain-and-money-fall-2018/",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=http://learnyouahaskell.com/introduction#about-this-tutorial",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://wattenberger.com/blog/css-cascade#level_4_1",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://news.mit.edu/topic/computers",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://spin.atomicobject.com/2017/05/18/what-is-design-thinking/",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://observablehq.com/@mattdzugan/generative-art-using-wind-turbine-data",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://www.swyx.io/puwtpd#why-does-this-work-on-them",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://dev.to/rfornal/think-with-a-programmers-brain-2109",
    "https://s2.googleusercontent.com/s2/favicons?domain_url=https://overapi.com/javascript",
  ];
  return (
    <Link legacyBehavior href={"/about/links"}>
      <a className="!px-2 overflow-hidden rounded-xl cursor-pointer text-box w-72 h-32 hover:bg-sky-100/60 dark:hover:bg-sky-700/60 transition duration-500 group hover:shadow-xl ">
        <div className="flex gap-1 absolute top-2 left-2 items-center">
          <p className="f1 transition group-hover:text-sky-400 text-sky-600 dark:text-sky-300 dark:group-hover:text-sky-200 text-xl ">
            Fun and Useful Links
          </p>
          <FaArrowRight className="opacity-0 group-hover:opacity-100 transition duration-500 text-sm text-sky-400 dark:text-sky-200" />
        </div>
        <div className="flex mt-6 h-4/5 gap-x-4 gap-y-3 transition   z-10 relative w-full flex-wrap ">
          {links.map((link, index) => {
            return (
              <div
                key={index}
                className=" transition duration-500 group-hover:scale-125   group-hover:-rotate-[22deg]  "
              >
                <img
                  className="rounded-xl h-auto w-5  shadow-md"
                  src={link}
                  alt={"favicon"}
                />
              </div>
            );
          })}
        </div>
      </a>
    </Link>
  );
}

export default BookMarks;
