import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import DualSection from "@/components/layout/DualSection";
import TextSection from "@/components/layout/TextSection";
import ImageSection from "@/components/layout/ImageSection";
import { motion, useReducedMotion } from "framer-motion";

function About() {
  const prefersReducedMotion = useReducedMotion();

  const headingAnimate = {
    offscreen: { x: prefersReducedMotion ? 0 : -300, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1.5 },
    },
  };
  const textAnimate = {
    offscreen: {
      x: prefersReducedMotion ? 0 : -300,
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.2,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.2, duration: 1.5, delay: 0.2 },
    },
  };
  const thirdAnimate = {
    offscreen: {
      x: prefersReducedMotion ? 0 : -300,
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.2,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.2, duration: 1.5, delay: 0.4 },
    },
  };
  return (
    <div className="page-container">
      <h2 className="text-left heading-lg ">About Me</h2>

      <DualSection centerText>
        <TextSection>
          <motion.h2
            variants={headingAnimate}
            className={"font-bold heading-md "}
          >
            Who am I?
          </motion.h2>
          <motion.div variants={textAnimate} className="w-full text-box">
            <p className="font-bold text-sky-600">
              I have always been a science geek, I love learning how the world
              works and thinking about how it might work better. Initially, I
              was fascinated with the natural sciences and biology, which led me
              to getting a B.S. in Microbiology with a minor in Zoology from
              Colorado State University. While I still enjoy biology, I made a
              decision to pivot my career to pursue computer science for more
              opportunities to express my creativity and to build useful things.
              This scientific background has given me a unique lens on computer
              science. Follow along on my journey to see what I create next!
            </p>
          </motion.div>
          <motion.div
            variants={thirdAnimate}
            className="flex justify-center w-full"
          >
            <Link href="/links">
              <a className="mt-10 text-xl font-bold w-fit button-1">
                My Fav Links & Resources <FaLink />
              </a>
            </Link>
          </motion.div>
        </TextSection>
        <ImageSection
          src="/assets/other/profileshot.jpg"
          alt="Ty Fiero about image"
        />
      </DualSection>
    </div>
  );
}

export default About;
