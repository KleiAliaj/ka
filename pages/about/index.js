import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import DualSection from "@/components/layout/DualSection";
import TextSection from "@/components/layout/TextSection";
import ImageSection from "@/components/layout/ImageSection";
import { motion, useReducedMotion } from "framer-motion";
import Head from "next/head";
import { BsBook, BsBookshelf } from "react-icons/bs";
import MotionHeader from "@/components/etc/animation/MotionHeader";
import MotionText from "@/components/etc/animation/MotionText";

function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <Head>
        <title>About Me - Ty Fiero</title>
        <meta
          name="description"
          content={`Coder, musician, artist. All about Ty.`}
        />
      </Head>
      <div className="page-container">
        <h2 className="text-left heading-lg fade-effect-quick ">About Me</h2>

        <DualSection centerText>
          <TextSection>
            <MotionHeader>
              <h2 className={"font-bold heading-md "}>Who am I?</h2>
            </MotionHeader>
            <MotionText>
              <div className="w-full text-box">
                <p className="font-bold text-sky-600">
                  I have always been a science geek, I love learning how the
                  world works and thinking about how it might work better.
                  Initially, I was fascinated with the natural sciences and
                  biology, which led me to getting a B.S. in Microbiology with a
                  minor in Zoology from Colorado State University. While I still
                  enjoy biology, I made a decision to pivot my career to pursue
                  computer science for more opportunities to express my
                  creativity and to build useful things. This scientific
                  background has given me a unique lens on computer science.
                  Follow along on my journey to see what I create next!
                </p>
              </div>
            </MotionText>
            <MotionText delay={0.2}>
              <div className="flex justify-center w-full">
                <div className="flex gap-3">
                  <Link href="/about/links">
                    <a className="mt-10 text-xl font-bold w-fit button-1">
                      Best Links <FaLink />
                    </a>
                  </Link>
                  <Link href="/about/books">
                    <a className="mt-10 text-xl font-bold w-fit button-1">
                      Books <BsBook />
                    </a>
                  </Link>
                </div>
              </div>
            </MotionText>
          </TextSection>
          <ImageSection
            src="/assets/other/profileshot.webp"
            alt="Ty Fiero about image"
          />
        </DualSection>
      </div>
    </>
  );
}

export default About;
