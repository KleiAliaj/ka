import React from "react";
import { FaGithub, FaLinkedin, FaRegEnvelope, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { m, useReducedMotion } from "framer-motion";

function SocialIcons({ small }) {
  const prefersReducedMotion = useReducedMotion();

  const groupAnimate = {
    offscreen: {
      x: prefersReducedMotion ? 0 : -200,
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.05,
        staggerDirection: -1,
      },
    },
    onscreen: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1.5,
        delay: small ? 0 : 0.4,
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const iconAnimate = {
    offscreen: { opacity: 0, scale: 0 },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 5.4,
        duration: small ? 0.1 : 0.3,
      },
    },
  };
  return (
    <m.div
      variants={groupAnimate}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      className={"flex md:gap-3 sm:gap-8  " + (small ? " scale-75" : " mt-4")}
    >
      <Link href="/contact">
        <m.div
          variants={iconAnimate}
          className="p-3 text-xl text-white transition rounded-full shadow-sky-800/50 shadow-md cursor-pointer bg-sky-400 hover:!scale-125 active:!scale-90"
          role="link"
          aria-label="Email link"
          title="Email link"
        >
          <FaRegEnvelope />
        </m.div>
      </Link>
      <m.a
        variants={iconAnimate}
        href="http://twitter.com/FieroTy"
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        aria-label="Twitter link"
        className="p-3 text-xl text-white rounded-full bg-[#1DA1F2] shadow-sky-800/50 shadow-md transition hover:!scale-125 active:!scale-90"
      >
        <FaTwitter className="scale-110" />
      </m.a>

      <m.a
        variants={iconAnimate}
        href="https://www.linkedin.com/in/ty-fiero/"
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        aria-label="LinkedIn link"
        className="p-3 text-xl text-white rounded-full bg-[#0077b5] shadow-sky-800/50 shadow-md transition hover:!scale-125 active:!scale-90"
      >
        <FaLinkedin className="scale-125" />
      </m.a>
      <m.a
        variants={iconAnimate}
        href="https://github.com/tyfiero"
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        aria-label="GitHub link"
        className="p-3 text-xl text-white rounded-full invert-0 dark:invert bg-[#171515] shadow-slate-800/50 shadow-md transition hover:!scale-125 active:!scale-90"
      >
        <FaGithub className="scale-125" />
      </m.a>
    </m.div>
  );
}

export default SocialIcons;
