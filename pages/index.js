import { getAllPostsForHome } from "@/lib/api";
import Head from "next/head";
import Image from "next/image";
import HomePosts from "@/components/blog/homePosts";
import ImageSection from "@/components/layout/ImageSection";
import DualSection from "@/components/layout/DualSection";
import TextSection from "@/components/layout/TextSection";
import Link from "next/link";
import CustomForm from "@/components/blog/NewsletterForm";
import SocialIcons from "@/components/etc/SocialIcons";
import { motion, useReducedMotion } from "framer-motion";
import { TbCode } from "react-icons/tb";
import CompactProjects from "@/components/projects/CompactProjects";

export default function Index({ allPosts }) {
  const prefersReducedMotion = useReducedMotion();
  const favTech = [
    {
      title: "Next.js",
      url: "/assets/CodeLogos/nextjs.png",
      styles: " invert-0 dark:invert scale-110",
    },
    {
      title: "React",
      url: "/assets/CodeLogos/react.png",
      styles: "scale-75",
    },
    {
      title: "JavaScript",
      url: "/assets/CodeLogos/js.png",
      styles: "scale-90",
    },
    {
      title: "Framer Motion",
      url: "/assets/CodeLogos/framer.png",
      styles: "scale-75",
    },
    {
      title: "TailwindCSS",
      url: "/assets/CodeLogos/tailwind.png",
      styles: "scale-75",
    },
    {
      title: "Firebase",
      url: "/assets/CodeLogos/firebase.png",
      styles: "scale-75",
    },
  ];
  const photoAnimate = {
    offscreen: { scale: prefersReducedMotion ? 1 : 0.6, opacity: 0 },
    onscreen: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1.5 },
    },
  };
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
  const rightSection = {
    offscreen: {
      x: prefersReducedMotion ? 0 : 300,
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.2,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.2, duration: 1, delay: 0.3 },
    },
  };
  const rightHeading = {
    offscreen: { x: prefersReducedMotion ? 0 : 300, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1.5 },
    },
  };
  const upHeading = {
    offscreen: { y: prefersReducedMotion ? 0 : 300, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1.5 },
    },
  };
  const upAnimate = {
    offscreen: { y: prefersReducedMotion ? 0 : 300, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1.5, delay: 0.4 },
    },
  };
  const upThird = {
    offscreen: { y: prefersReducedMotion ? 0 : 400, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1.5, delay: 0.7 },
    },
  };
  return (
    <>
      <Head>
        <title>Ty Fiero&#39;s blog on code, music, and life.</title>
        <meta name="description" content={`Home page for Ty Fiero`} />
        <link rel="canonical" href="https://www.tyfiero.com" />
      </Head>
      <div className="fade-effect-quick page-container !items-start">
        <DualSection centerText cn="w-full md:mt-10">
          <TextSection>
            <section className="flex flex-col sm:items-center md:items-start md:ml-24 sm:ml-0 ">
              <motion.div
                variants={headingAnimate}
                className="flex items-center w-full md:justify-start sm:justify-center"
              >
                <h1 className="font-bold leading-tight tracking-tighter sm:!text-7xl md:text-8xl pr-4 logo f1">
                  Hi! I&apos;m Ty
                </h1>
                <motion.p
                  initial={{ rotate: 40 }}
                  animate={{
                    rotate: -40,
                    transition: {
                      type: "spring",
                      bounce: 0.2,
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                  className="sm:!text-6xl md:!text-7xl "
                >
                  ✋🏻
                </motion.p>
              </motion.div>
              <motion.p
                variants={textAnimate}
                className="text-2xl md:text-left sm:text-center"
              >
                Web developer, musician, and photographer in Seattle,
                Washington.
              </motion.p>
              <SocialIcons />
            </section>
          </TextSection>
          <motion.div
            variants={photoAnimate}
            className="md:w-1/2 sm:h-[18em] sm:w-full md:h-[36em] rounded-lg drop-shadow-xl relative  "
          >
            <div className="absolute z-10 w-1/5 bg-teal-300/70 h-2/5 rounded-3xl dark:bg-teal-200/70 blur-3xl left-40 dot top-16"></div>
            <div className="absolute z-10 w-2/5 bg-indigo-200/70 h-2/5 rounded-full dark:bg-indigo-300/70 blur-2xl right-28 top-[12rem] dot2 bounds"></div>
            <div className="absolute w-3/5 h-4/5 rounded-3xl bg-sky-300/70 dark:bg-sky-400/70 blur-3xl left-40 top-10 dot3 bounds"></div>
            <Image
              src="/assets/other/tyheadshot.webp"
              alt="Ty Fiero image"
              className="!rounded-lg z-50"
              layout="fill"
              priority={true}
              objectFit="contain"
            />
          </motion.div>
        </DualSection>
        {/* separator */}
        <div className="md:mb-20 md:mt-20 sm:mb-6 sm:mt-6" />

        <DualSection cn="sm:px-0">
          <TextSection>
            <motion.h2
              variants={rightHeading}
              className={"font-bold heading-md "}
            >
              Work
            </motion.h2>
            <motion.div variants={rightSection} className="text-box sm:mx-3">
              <p>
                I&apos;m a developer with a passion for building things that are
                useful. My journey in software development started during the
                covid lock down of 2020. I began taking online courses for web
                development, starting with basic HTML and CSS. In May of 2021 I
                left my job as a public health microbiologist to learn full
                time. Since then, I&apos;ve worked on a variety of projects,
                from small vanilla javascript projects to full stack web
                applications in Next.js.
              </p>
              <motion.div variants={thirdAnimate}>
                <p className="mt-5 text-center">Favorite Technologies</p>
                <div className="flex items-center justify-center w-full gap-2">
                  {favTech.map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className={
                          "rounded-xl relative w-16 h-12 " + tech.styles
                        }
                      >
                        <Image
                          src={tech.url}
                          alt={tech.title}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              variants={thirdAnimate}
              className="flex justify-center w-full"
            >
              <Link href={"/code/projects"}>
                <a className="mt-5 button-1">
                  View All Projects <TbCode className="text-xl" />
                </a>
              </Link>
            </motion.div>
          </TextSection>
          {/* <div className="md:w-1/2 sm:w-full"></div> */}
          <motion.div variants={photoAnimate} className="sm:w-full md:w-1/2">
            <h4 className="heading-sm">Projects</h4>
            <CompactProjects />
          </motion.div>
        </DualSection>
        {/* separator */}
        <div className="md:mb-24 md:mt-28 sm:mb-8 sm:mt-8" />
        {/* Play SECTION */}
        <DualSection invert centerText>
          <TextSection>
            <motion.h2
              variants={headingAnimate}
              className={"font-bold heading-md "}
            >
              Play
            </motion.h2>
            <motion.div variants={textAnimate} className="text-box">
              <p>
                In my free time I make{" "}
                <Link href={"/music"}>
                  <a className="underline text-sky-500 ">music</a>
                </Link>
                , take my camera out for nature{" "}
                <Link href={"/photos"}>
                  <a className="underline text-sky-500 "> photography</a>
                </Link>
                , I&apos;m an avid reader, and I experiment with{" "}
                <Link href={"/photos"}>
                  <a className="underline text-sky-500 ">AI&apos;s</a>
                </Link>
                . Hobbies are important to me, and each one has a purpose. I
                express my creativity through my music, I get outside with my
                photography, I read to learn more about the the world around me,
                and I play with AI because it is fascinating. A well-rounded
                balance of hobbies and interesting work makes for a
                entertaining, fulfilled life!
              </p>
            </motion.div>
            <br />

            <div className="flex items-center justify-center w-full gap-3 ">
              <motion.a
                variants={thirdAnimate}
                href="https://unsplash.com/@tyfiero"
                target="_blank"
                rel="noreferrer"
                className="flex h-[4em] w-[10em] flex-col items-center p-2 transition bg-slate-900 dark:bg-white rounded-3xl hover:scale-110 active:scale-90 shadow-2xl drop-shadow-lg"
              >
                <span className="text-xs font-bold text-white dark:text-black">
                  View my photos on
                </span>
                <div className="w-[8em]  dark:invert-0 invert h-[3em]">
                  {" "}
                  <picture>
                    <source
                      srcSet="/assets/CodeLogos/u-logo.webp"
                      type="image/webp"
                    />
                    <img
                      src="/assets/CodeLogos/u-logo.webp"
                      alt="unsplash button"
                      className="object-contain"
                    />
                  </picture>
                </div>
              </motion.a>
              <motion.a
                variants={thirdAnimate}
                href="https://open.spotify.com/artist/3jxSd4I4g4AH76AzgPw006?si=NpMCWZEWT5uLvP5lyhI__A"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center p-2 transition shadow-xs bg-black/0 rounded-3xl hover:scale-110 active:scale-90 drop-shadow-sm "
              >
                <div className="md:w-40 sm:w-32 sm:h-16 md:h-auto">
                  <picture>
                    <source
                      srcSet="/assets/CodeLogos/spotify.webp"
                      type="image/webp"
                    />
                    <img
                      src="/assets/CodeLogos/spotify.webp"
                      alt="spotify button"
                      className="object-contain"
                    />
                  </picture>
                </div>
              </motion.a>
            </div>
          </TextSection>
          {/* <div className="md:w-1/2 sm:w-full"></div> */}

          {/* <motion.div
            className="flex justify-center w-full h-full"
            variants={photoAnimate}
          > */}
          <ImageSection
            src="/assets/other/Ty-lofi.webp"
            alt="Lofi Style image of Ty"
          />
          {/* </motion.div> */}
        </DualSection>
        {/* separator */}
        <div className="md:mb-24 md:mt-28 sm:mb-16 sm:mt-12" />
        {/* Writing SECTION */}
        <motion.section
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center w-full gap-10"
        >
          <div className="flex flex-col items-center w-full">
            <motion.h2
              variants={upHeading}
              className="font-bold heading-lg !mb-2"
            >
              Writing
            </motion.h2>

            <motion.div
              variants={upAnimate}
              className=" md:w-2/3 sm:w-full text-box"
            >
              <p>
                Writing is thinking, my best thinking always comes from my
                writing. I&apos;ve been sharing my recent writings on my{" "}
                <Link href={"/blog"}>
                  <a className="underline text-sky-500 ">blog</a>
                </Link>
                , where I write about technology and personal development every
                few weeks. I try to pack as much helpful info as I can into each
                post, and avoid fluff whenever I can.
                <br />
                <br />
                In my monthly newsletter, Ty&apos;s Bytes, I include helpful
                links from around the internet, a quote of the month, tech tips,
                and my recent blog posts. Sign up below! No spam, I promise.
              </p>
            </motion.div>
          </div>
          <motion.div variants={upThird}>
            {" "}
            <CustomForm />
          </motion.div>
        </motion.section>
        <div className="md:w-1/2 sm:w-full"></div>
        {/* separator */}
        <div className="mt-20 mb-20" />

        <div className="w-full">
          <motion.h2
            variants={upHeading}
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{ once: true, amount: 0.5 }}
            className="font-bold heading-lg !text-center"
          >
            Latest From the blog
          </motion.h2>
          {allPosts.length > 0 && <HomePosts posts={allPosts} />}

          <br />
        </div>
        <div className="flex justify-center w-full gap-10 sm:flex-col md:flex-row sm:items-center"></div>
      </div>
    </>
  );
}

export async function getStaticProps({ preview }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts },
  };
}
