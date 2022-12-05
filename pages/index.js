import Head from "next/head";
import Image from "next/image";
import ImageSection from "@/components/layout/ImageSection";
import DualSection from "@/components/layout/DualSection";
import TextSection from "@/components/layout/TextSection";
import Link from "next/link";
import CustomForm from "@/components/blog/NewsletterForm";
import SocialIcons from "@/components/etc/SocialIcons";
import { m, useReducedMotion } from "framer-motion";
import { TbCode } from "react-icons/tb";
import CompactProjects from "@/components/projects/CompactProjects";
import MotionHeader from "@/components/etc/animation/MotionHeader";
import MotionText from "@/components/etc/animation/MotionText";
import MotionImage from "@/components/etc/animation/MotionImage";
import { FaArrowRight } from "react-icons/fa";
import ShiftButton from "@/components/layout/shiftButton";
import { getAllPosts } from "utils/mdxUtils";
import MdXHomePosts from "@/components/blog/mdx/mdxHomePosts";

export default function Index({ allPosts }) {
  const favTech = [
    {
      title: "Next.js",
      url: "/assets/CodeLogos/nextjs.png",
      styles: " invert-0 dark:invert scale-90",
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

  return (
    <>
      <Head>
        <title>Ty Fiero&#39;s blog on code, music, and life.</title>
        <meta name="description" content={`Home page for Ty Fiero`} />
      </Head>
      <div className="fade-effect-quick page-container !items-start">
        <DualSection centerText cn="w-full md:mt-10">
          <TextSection>
            <section className="flex flex-col sm:items-center md:items-start md:ml-24 sm:ml-0 ">
              <MotionHeader>
                <div className="flex items-center w-full md:justify-start sm:justify-center tracking-in-expand">
                  <m.h1
                    whileHover={{
                      scale: 1.05,
                      originX: 1,
                      letterSpacing: "-0.05em",
                    }}
                    initial={{ letterSpacing: "-0.1em" }}
                    animate={{ letterSpacing: "0em" }}
                    className="font-bold leading-tight tracking-tighter sm:!text-7xl md:text-8xl pr-4 logo f1 drop-shadow-lg drop-shadow-sky-800 dark:drop-shadow-sky-500 "
                  >
                    Hi! I&apos;m Ty
                  </m.h1>
                  <m.p
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
                  </m.p>
                </div>
              </MotionHeader>
              <MotionText>
                <p className="text-2xl font-semibold md:text-left sm:text-center">
                  Web developer, musician, and photographer in Seattle,
                  Washington.
                </p>
              </MotionText>
              <SocialIcons />
            </section>
          </TextSection>
          <div className="md:w-1/2 sm:h-[18em] sm:w-full md:h-[36em] rounded-lg drop-shadow-xl relative">
            <MotionImage classes="relative w-full h-full">
              <div className="absolute z-10 w-1/5 bg-teal-300/70 h-2/5 rounded-3xl dark:bg-teal-200/70 blur-3xl left-40 dot top-16"></div>
              <div className="absolute z-10 w-2/5 bg-indigo-200/70 h-2/5 rounded-full dark:bg-indigo-300/70 blur-2xl right-28 top-[12rem] dot2 bounds"></div>
              <div className="absolute w-3/5 h-4/5 rounded-3xl bg-sky-300/70 dark:bg-sky-400/70 blur-3xl left-40 top-10 dot3 bounds"></div>
              <Image
                src="/assets/other/tyheadshot.webp"
                alt="Ty Fiero image"
                className="!rounded-lg z-50 object-contain"
                priority={true}
                fill
                sizes="(max-width: 768px) 80vw,
                50vw"
              />
            </MotionImage>
          </div>
        </DualSection>
        {/* separator */}
        <div className="md:mb-20 md:mt-20 sm:mb-6 sm:mt-6" />

        <DualSection cn="sm:px-0 !w-full h-fit">
          <TextSection>
            <MotionHeader>
              <h2 className={"font-bold heading-lg !mb-0 "}>Work</h2>
            </MotionHeader>
            <MotionText>
              <div className="text-box sm:mx-0">
                <p>
                  I&apos;m a developer with a passion for creating building
                  useful digital experiences. My journey in software development
                  started during the covid lock down of 2020. I began taking
                  online courses for web development, starting with basic HTML
                  and CSS. In May of 2021 I left my job as a public health
                  microbiologist to learn full time. Since then, I&apos;ve
                  worked on a variety of projects, from small vanilla javascript
                  projects to full stack web applications in Next.js.
                </p>
                <MotionText xPx={0} yPx={50} delay={0.4}>
                  <p className="mt-5 text-center">Favorite Technologies</p>
                  <div className="flex items-center justify-center w-full gap-2">
                    {favTech.map((tech, index) => {
                      return (
                        <div
                          key={tech.title}
                          className={
                            "rounded-xl relative w-16 h-12 " + tech.styles
                          }
                        >
                          <Image
                            src={tech.url}
                            alt={tech.title}
                            className="object-contain"
                            fill
                            sizes="4rem"
                          />
                        </div>
                      );
                    })}
                  </div>
                </MotionText>
              </div>
            </MotionText>
            <MotionText delay={0.4}>
              <div className="flex justify-center w-full mt-5">
                <ShiftButton
                  href={"/code/projects"}
                  icon={<TbCode />}
                  title="All Projects "
                />
              </div>
            </MotionText>
          </TextSection>
          {/* <div className="md:w-1/2 sm:w-full"></div> */}
          <div className="sm:w-screen md:w-1/2 h-fit">
            <MotionImage>
              <h3 className="heading-sm">Projects</h3>
              <CompactProjects />
            </MotionImage>
          </div>
        </DualSection>
        {/* separator */}
        <div className="md:mb-24 md:mt-28 sm:mb-8 sm:mt-8" />
        {/* Play SECTION */}
        <DualSection invert centerText>
          <TextSection>
            <MotionHeader invert>
              <h2 className={"font-bold heading-lg !mb-0 "}>Hobbies</h2>
            </MotionHeader>
            <MotionText invert>
              <div className="text-box">
                <p>
                  In my free time I make{" "}
                  <Link className="anc " href={"/art#music"}>
                    music
                  </Link>
                  , take my camera out for nature{" "}
                  <Link className="anc " href={"/art#photography"}>
                    photography
                  </Link>
                  , I&apos;m an avid reader, and I experiment with{" "}
                  <Link className="anc " href={"/code/ai"}>
                    AI&apos;s
                  </Link>
                  . Hobbies are important to me, and each one has a purpose. I
                  express my creativity through my music, I get outside with my
                  photography, I read to learn more about the the world around
                  me, and I play with AI because it is fascinating. A
                  well-rounded balance of hobbies and interesting work makes for
                  a entertaining, fulfilled life!
                </p>
              </div>
            </MotionText>
            <br />

            <MotionText invert noSize delay={0.2}>
              <div className="flex items-center justify-center w-full gap-3 ">
                <a
                  href="https://unsplash.com/@tyfiero"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-[3.7em] w-[10em] flex-col items-center  p-2 pt-1 transition bg-slate-900 dark:bg-white rounded-xl hover:scale-110 active:scale-90 shadow-2xl drop-shadow-lg"
                >
                  <span className="text-xs font-bold text-white dark:text-black">
                    View photos on
                  </span>
                  <div className="w-[8em]   dark:invert-0 invert h-auto">
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
                </a>
                <a
                  href="https://open.spotify.com/artist/3jxSd4I4g4AH76AzgPw006?si=NpMCWZEWT5uLvP5lyhI__A"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center justify-center p-2 transition h-fit bg-black/0 rounded-3xl hover:scale-110 active:scale-90 "
                >
                  <div className="h-auto md:w-40 sm:w-[10.4rem]">
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
                </a>
              </div>
            </MotionText>
          </TextSection>
          {/* <div className="md:w-1/2 sm:w-full"></div> */}

          <ImageSection
            src="/assets/other/Ty-lofi.webp"
            alt="Lofi Style image of Ty"
          />
        </DualSection>
        {/* separator */}
        <div className="md:mb-24 md:mt-28 sm:mb-16 sm:mt-12" />
        {/* Writing SECTION */}
        <section className="flex flex-col items-center w-full gap-10">
          <div className="flex flex-col items-center w-full">
            <MotionHeader xPx={0} yPx={-300}>
              <h2 className="font-bold heading-lg !mb-2">Writing</h2>
            </MotionHeader>

            <MotionText xPx={0} yPx={-300} noSize delay={0.1}>
              <div className="mx-auto md:w-2/3 sm:w-full text-box">
                <p>
                  Writing is thinking, my best thinking always comes from my
                  writing. I&apos;ve been sharing my recent writings on my{" "}
                  <Link className="anc " href={"/blog"}>
                    blog
                  </Link>
                  , where I write about technology and personal development
                  every few weeks. I try to pack as much helpful info as I can
                  into each post, and avoid fluff whenever I can.
                  <br />
                  <br />
                  In my monthly newsletter, Ty&apos;s Bytes, I include helpful
                  links from around the internet, a quote of the month, tech
                  tips, and my recent blog posts. Sign up below! No spam, I
                  promise.
                </p>
              </div>
            </MotionText>
          </div>
          <MotionText yPx={-300} xPx={0} noSize delay={0.2}>
            {" "}
            <CustomForm />
          </MotionText>
        </section>
        <div className="md:w-1/2 sm:w-full"></div>
        {/* separator */}
        <div className="mt-20 mb-20" />

        <div className="w-full">
          <MotionHeader yPx={-300} xPx={0} delay={0.4}>
            <h2 className="font-bold heading-lg !text-center">
              Latest From the blog
            </h2>
          </MotionHeader>
          {allPosts.length > 0 && <MdXHomePosts posts={allPosts} />}

          <br />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ preview }) {
  const posts = getAllPosts().filter((p) => {
    return p.frontmatter.published === true;
  });
  const allPosts = posts.sort((a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
  });
  return {
    props: { allPosts },
  };
}
