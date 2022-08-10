import Container from "@/components/layout/container";
import MoreStories from "@/components/blog/more-stories";
import HeroPost from "@/components/blog/hero-post";
import Intro from "@/components/intro";
import Layout from "@/components/layout/layout";
import { getAllPostsForHome } from "@/lib/api";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import Image from "next/image";
import Loader from "@/components/Loader";
import HomePosts from "@/components/blog/homePosts";
import TechStack from "@/components/projects/TechStack";

export default function Index({ allPosts }) {
  return (
    <>
      <Head>
        <title>Ty Fiero's blog on code, music, and life.</title>
      </Head>
      <div className="fade-effect-quick page-container !items-start">
        <Intro />
        <div className="w-[80%] h-[30em] rounded-lg drop-shadow-2xl">
          <Image
            src="/assets/other/Ty-lofi.jpeg"
            alt="Lofi Style image of Ty"
            className="!rounded-lg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* <div className="w-full h-[20em] flex justify-center">
          {" "}
          <Loader />
        </div> */}
        <div className="flex flex-col gap-10 my-10">
          {/* DEV SECTION */}
          <div className="flex justify-center gap-10 sm:flex-col md:flex-row sm:items-center">
            <div className="md:w-1/2 sm:w-full">
              <p className="font-bold heading-md !text-left">Developer</p>
              <p>
                I'm a developer with a passion for building things that are
                useful to people. My journey in software development started
                during the covid lock down of 2020. I began taking online courses
                for web development, starting with basic HTML and CSS. In May of
                2021 I left my job as a public health microbiologist to learn
                full time. Since then, I've worked on a variety of projects,
                from small vanilla javascript projects to full stack web
                applications in Next.js.
              </p>

              <br />
            </div>
            <TechStack />
          </div>
        </div>

        {/* PHOTOGRAPHY SECTION */}
        <div className="flex justify-center gap-10 sm:flex-col md:flex-row-reverse sm:items-center">
          <div className="md:w-1/2 sm:w-full">
            <p className="font-bold heading-md !text-left">Photographer</p>
            <p>
              Photography is my creative outlet that gets me outside, and helps
              me notice and appreciate the beauty of the Pacific Northwest (and
              some of my pets).
            </p>

            <a
              href="https://unsplash.com/@tyfiero"
              target="_blank"
              rel="noreferrer"
              className="flex h-[4em] w-[10em] flex-col items-center p-2 transition bg-slate-900 dark:bg-white rounded-3xl hover:scale-110 active:scale-90 shadow-2xl drop-shadow-lg"
            >
              <span className="text-xs font-bold text-white dark:text-black">
                View my photos on:
              </span>
              <div className="w-[8em]  dark:invert-0 invert h-[3em]">
                {" "}
                <img
                  src="/assets/other/u-logo.png"
                  alt="unsplash button"
                  className="object-contain"
                />
              </div>
            </a>
            <br />
          </div>
          <div className="md:w-[640px] md:h-[423px] sm:w-[320px] sm:h-[211px] relative shadow-xl rounded-xl shadow-sky-600/30 ">
            {/* <div className="w-1/4 !h-auto shadow-xl rounded-xl shadow-sky-600/30 image-container flex flex-col justify-center items-start"> */}
            <Image
              src="https://images.unsplash.com/photo-1653794280522-96224d9338c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
              alt="A plant in the Pacific Northwest"
              layout="fill"
              className=" rounded-xl"
            />
          </div>
        </div>

        {/* Music SECTION */}
        <div className="flex justify-center w-full gap-10 sm:flex-col md:flex-row sm:items-center">
          <div className="w-full">
            <p className="font-bold heading-md !text-left">
              Latest From the blog
            </p>
            {allPosts.length > 0 && <HomePosts posts={allPosts} />}

            <br />
          </div>
        </div>
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
