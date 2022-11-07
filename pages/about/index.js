import React from "react";
import Image from "next/image";
import Link from "next/link";
import DualSection from "@/components/layout/DualSection";
import TextSection from "@/components/layout/TextSection";
import Head from "next/head";
import MotionHeader from "@/components/etc/animation/MotionHeader";
import MotionText from "@/components/etc/animation/MotionText";
import BooksSection from "@/components/about/books";
import BookMarks from "@/components/about/links";
import TravelButton from "@/components/about/travelButton";
import TravelSvg from "@/components/about/travelSvg";
import ResumeButton from "@/components/about/resumeButton";
import MotionImage from "@/components/etc/animation/MotionImage";

function About() {
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
        <h1 className="text-left heading-lg fade-effect-quick !mb-0 ">
          About Me
        </h1>

        <DualSection>
          <TextSection cn="lg:min-w-[36rem]">
            <MotionHeader>
              <h2 className={"font-bold heading-md "}>Who I am</h2>
              {/* <h2 className={"font-bold heading-md "}>The Short</h2> */}
            </MotionHeader>
            <MotionText>
              <div className="w-full text-box">
                <p>
                  I&apos;m a former Microbiologist turned Web Developer striving
                  for world-class user experiences through simplicity and clean
                  design. When I&apos;m not working I&apos;m making{" "}
                  <Link className="anc" href="/art">
                    art
                  </Link>{" "}
                  and spending time with my girlfriend{" "}
                  <a
                    className="anc"
                    href="https://oliviawitt.myportfolio.com/about-me"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Olivia
                  </a>{" "}
                  in our houseplant jungle, with our two dogs and numerous
                  reptiles.
                </p>
              </div>
            </MotionText>
            {/* <MotionHeader>
              <h2 className={"font-bold heading-md mt-5 "}>The Long</h2>
            </MotionHeader>
            <MotionText>
              <div className="w-full text-box">
                <MotionHeader>
                  <h2 className={"font-bold heading-sm text-left "}>
                    My Story
                  </h2>
                </MotionHeader>
                <p>
                  Born in San Diego, moved to Denver at 10, then went to College
                  at{" "}
                  <a
                    className="anc italic"
                    href="https://www.colostate.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CSU
                  </a>{" "}
                  to get a Bachelor&apos;s degree in Microbiology. Moved to
                  Seattle three weeks before the Covid-19 lockdown in 2020.
                </p>
                <MotionHeader delay={0.4}>
                  <h2 className={"font-bold heading-sm text-left  mt-2"}>
                    What I Do Now
                  </h2>
                </MotionHeader>
                <p>Currently teaching myself web development.</p>
                <MotionHeader delay={0.2}>
                  <h2 className={"font-bold heading-sm text-left mt-2"}>
                    What I Used To Do
                  </h2>
                </MotionHeader>
                <p>
                  Worked as a computer lab monitor and a librarian, where I
                  helped the homeless get jobs by teaching them how to make
                  their own resumes. (And was almost stabbed twice, you win some
                  you lose some lol.)
                  <br />
                  In College, I was a Research Assistant (glorified lab rat)
                  studying the black plague in amoebas, as well as the evolution
                  of the skeletons of frogs and toads. Research on the latter{" "}
                  <a
                    className="anc"
                    href="https://pubmed.ncbi.nlm.nih.gov/29383712/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    was published
                  </a>{" "}
                  in{" "}
                  <a
                    className="anc italic"
                    href="https://onlinelibrary.wiley.com/journal/15585646"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Evolution
                  </a>{" "}
                  journal.
                  <br />
                  After College, I worked at{" "}
                  <a
                    className="anc italic"
                    href="https://www.newbelgium.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    New Belgium
                  </a>{" "}
                  brewery as a Microbiologist, QA testing beer and tending to
                  all the little yeasty babies.
                  <br />
                  My last job in the biology field was monitoring and preventing
                  bioterrorism as a Microbiologist at the Department of Health.
                  Wild stories, can&apos;t tell you any of them ;)
                </p>

                <MotionHeader delay={0.6}>
                  <h2 className={"font-bold heading-sm text-left  mt-2"}>
                    Interests
                  </h2>
                </MotionHeader>
                <p>
                  I love code, AI, nature, reptiles, plants, photography, art
                  and my dogs.
                  <br />
                  <br />
                  Enough about me,
                  <span className="font-bold"> how can I help you?</span>{" "}
                  <Link className="anc" href="/contact">
                   Shoot me a message
                  </Link>
                  , let&apos;s work together!
                </p>
              </div>
            </MotionText> */}
          </TextSection>

          <div className="w-1/2 flex flex-col items-center ">
            <MotionImage classes="md:w-4/5 md:h-[300px] sm:w-4/5 sm:h-[311px] relative shadow-xl rounded-xl shadow-sky-600/30 ring-offset-8 hover:ring-8 dark:ring-offset-sky-600 dark:ring-sky-700  ring-offset-sky-400 ring-sky-300 transition duration-500">
              <Image
                src="/assets/other/profileshot.webp"
                alt="Ty Fiero about image"
                fill
                className="object-cover rounded-xl "
              />
            </MotionImage>
            <MotionText delay={0.2}>
              <div className="flex  flex-col mt-2 w-full items-center  ">
                <div className="flex sm:flex-col lg:flex-row gap-2 md:gap-1 sm:gap-2 xl:gap-12 lg:gap-2 ">
                  <ResumeButton />
                  <BooksSection />
                </div>
                <div className="flex sm:flex-col lg:flex-row gap-2 mt-2 md:gap-1 sm:gap-2 xl:gap-12 lg:gap-2 ">
                  <BookMarks />
                  <TravelButton />
                </div>
              </div>
            </MotionText>
          </div>
        </DualSection>
      </div>
    </>
  );
}

export default About;
