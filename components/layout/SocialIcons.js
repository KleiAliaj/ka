import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaRegEnvelope,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
function SocialIcons({ small }) {
  const groupAnimate = {
    offscreen: {
      x: -200,
      opacity: 0,
      scale: 0,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
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
        staggerChildren: 0.2,
        delayChildren: 0.2,
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
        duration: 0.3,
      },
    },
  };
  return (
    <motion.div
      variants={groupAnimate}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: false, amount: 0.5 }}
      className={"flex md:gap-3 sm:gap-8  " + (small ? " scale-75" : " mt-4")}
    >
      <Link href="/contact">
        <motion.a
          variants={iconAnimate}
          className="p-3 text-xl text-white transition rounded-full shadow-xl cursor-pointer bg-sky-400 hover:!scale-125 active:!scale-90"
        >
          <FaRegEnvelope />
        </motion.a>
      </Link>
      <motion.a
        variants={iconAnimate}
        href="http://twitter.com/FieroTy"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 text-xl text-white rounded-full bg-[#1DA1F2] shadow-xl transition hover:!scale-125 active:!scale-90"
      >
        <FaTwitter className="scale-110" />
      </motion.a>

      <motion.a
        variants={iconAnimate}
        href="http://twitter.com/FieroTy"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 text-xl text-white rounded-full bg-[#0077b5] shadow-xl transition hover:!scale-125 active:!scale-90"
      >
        <FaLinkedin className="scale-125" />
      </motion.a>
      <motion.a
        variants={iconAnimate}
        href="http://twitter.com/FieroTy"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 text-xl text-white rounded-full bg-[#171515] shadow-xl transition hover:!scale-125 active:!scale-90"
      >
        <FaGithub className="scale-125" />
      </motion.a>
    </motion.div>
  );
}

export default SocialIcons;
