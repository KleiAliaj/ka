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
              {/* <h2 className={"font-bold heading-md "}>Who I am</h2> */}
              <h2 className={"font-bold heading-md "}>The Short</h2>
            </MotionHeader>
            <MotionText>
              <div className="w-full text-box">
                <p>
                  I&apos;m a former Microbiologist turned Web Developer striving
                  for world-class user experiences through simplicity and clean
                  design. When I&apos;m not working, I&apos;m making{" "}
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
            <MotionHeader>
              <h2 className={"font-bold heading-md mt-5 "}>The Long</h2>
            </MotionHeader>
            <MotionText>
              <div className="w-full text-box">
                <MotionHeader delay={0.2}>
                  <h2 className={"font-bold heading-sm text-left "}>
                    My Journey
                  </h2>
                  {/* <h2 className={"font-bold heading-sm text-left "}>
                    What I&apos;ve Done
                  </h2> */}
                  <p>
                    I grew up in sunny San Diego for much of my life, before
                    trading the sun for snow to move to Denver with my family.
                    In high school, I developed my interest in all things
                    science, which led me to major in Microbiology at{" "}
                    <a
                      className="anc italic"
                      href="https://www.colostate.edu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CSU,
                    </a>{" "}
                    where I got my Bachelor&apos;s degree. In college, I was a
                    Research Assistant studying the black plague bacteria in
                    amoebas, as well as the evolution of the skeletons of frogs
                    and toads. Research on the latter{" "}
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
                    journal. I also worked as a computer lab monitor and a
                    librarian, where I taught the homeless how to use computers,
                    and helped over a dozen get jobs in the community by working
                    with them on their resumes and doing mock interviews. (
                    <span className="italic">
                      I was also nearly stabbed twice, but you win some and you
                      lose some
                    </span>
                    )
                    <br />
                    <br />
                    After College, I worked at the mighty{" "}
                    <a
                      className="anc"
                      href="https://www.newbelgium.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      New Belgium
                    </a>{" "}
                    brewery as a Microbiologist, QA testing beer and tending to
                    all the little yeast babies. Eventually, I could no longer
                    handle the snow and ice of Colorado and decided to move to
                    rainy Seattle with my best friend. My last job in the
                    biology field was monitoring and preventing bioterrorism in
                    Washington state as a Microbiologist at the Department of
                    Health. (
                    <span className="italic">
                      Wild stories there, but I can&apos;t tell you any of them
                    </span>{" "}
                    😉). After eight years in the biology field, I decided to
                    switch things up and teach myself web development in June of
                    2021. Many factors weighed into that decision, arthritis
                    from pipetting being one, but most importantly I was not
                    able to express my creativity as often as I&apos;d liked. It
                    proved to be a fantastic decision, and I&apos;ve loved every
                    minute of my learning thus far.
                  </p>
                </MotionHeader>
                {/* <MotionHeader delay={0.4}>
                  <h2 className={"font-bold heading-sm text-left  mt-2"}>
                    What I Do Now
                  </h2>
                  <p>Currently teaching myself web development.</p>
                </MotionHeader>
                <MotionHeader delay={0.4}>
                  <h2 className={"font-bold heading-sm text-left  mt-2"}>
                    Where I&apos;m Headed
                  </h2>
                  <p>Currently teaching myself web development.</p>
                </MotionHeader> */}
                <MotionHeader delay={0.6}>
                  <p className="mt-10 text-center">
                    Enough about me,
                    <span className="font-bold"> how can I help you?</span>{" "}
                    <Link className="anc" href="/contact">
                      Shoot me a message
                    </Link>
                    , let&apos;s work together!
                  </p>
                </MotionHeader>
              </div>
            </MotionText>
          </TextSection>

          <div className="w-1/2 flex flex-col items-center ">
            <MotionImage classes="md:w-4/5 md:h-[300px] sm:w-4/5 sm:h-[311px] relative shadow-xl rounded-xl shadow-sky-600/30 ring-offset-8 hover:ring-8 dark:ring-offset-sky-600 dark:ring-sky-700  ring-offset-sky-400 ring-sky-300 transition duration-500">
              <Image
                src="/assets/other/profileshot.webp"
                alt="Ty Fiero about image"
                fill
                sizes="(max-width: 768px) 50vw, 80vw"
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
