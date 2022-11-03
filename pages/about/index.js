import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFile, FaFileAlt, FaLink } from "react-icons/fa";
import DualSection from "@/components/layout/DualSection";
import TextSection from "@/components/layout/TextSection";
import ImageSection from "@/components/layout/ImageSection";
import { motion, useReducedMotion } from "framer-motion";
import Head from "next/head";
import { BsBook, BsBookshelf } from "react-icons/bs";
import MotionHeader from "@/components/etc/animation/MotionHeader";
import MotionText from "@/components/etc/animation/MotionText";
import BooksSection from "@/components/about/books";
import BookMarks from "@/components/about/links";
import TravelButton from "@/components/about/travelButton";
import TravelSvg from "@/components/about/travelSvg";
import ResumeButton from "@/components/about/resumeButton";

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
          <TextSection cn="lg:min-w-[36rem]">
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
              <div className="flex  flex-col mt-2 w-full items-center  ">
                <div className="flex sm:flex-col lg:flex-row gap-2 md:gap-1 sm:gap-2 xl:gap-12 lg:gap-2 ">
                  <BooksSection />
                  <ResumeButton />
                </div>
                <div className="flex sm:flex-col lg:flex-row gap-2 mt-2 md:gap-1 sm:gap-2 xl:gap-12 lg:gap-2 ">
                  <BookMarks />
                  <TravelButton />
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
