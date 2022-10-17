import React from "react";
import Image from "next/image";
import axios from "axios";
import {
  FaArrowRight,
  FaDownload,
  FaEye,
  FaHeart,
  FaImage,
  FaImages,
  FaPeopleArrows,
  FaRedo,
  FaRegHeart,
  FaRegImages,
  FaRobot,
  FaUserAlt,
} from "react-icons/fa";
import ImageSection from "@/components/layout/ImageSection";
import DualSection from "@/components/layout/DualSection";
import TextSection from "@/components/layout/TextSection";
import { motion, useReducedMotion } from "framer-motion";
import Head from "next/head";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import ReactPlayer from "react-player";
import Link from "next/link";
import dynamic from "next/dynamic";
import { TbCamera, TbCode, TbMusic } from "react-icons/tb";
const WavesSketch = dynamic(
  () => import("../../components/projects/art/WavesSketch.js"),
  {
    ssr: false,
  }
);

export async function getStaticProps(context) {
  let tyImages = [];
  let tyStats;
  let allViews = 0;
  let altDescription;

  const getImages = async (page = 1) => {
    const axiosImages = await axios
      .get(
        `https://api.unsplash.com/users/tyfiero/photos?per_page=30&page=${page}&stats=true`,
        {
          headers: {
            Authorization: "Client-ID " + process.env.UNSPLASH_ACCESS_KEY,
          },
        }
      )
      .then(function (response) {
        if (response) {
          let alt = response.data.map((image) => {
            return image.description;
          });
          let dimensions = response.data.map((image) => {
            return image.width / image.height;
          });
          let urls = response.data.map(function (i) {
            return i.urls;
          });
          let oneUrl = urls.map(function (i) {
            return [i.regular, i.raw];
          });

          let dataArray = oneUrl.map(function (value, index) {
            return {
              displaySrc: value[0],
              src: value[1],
              alt: alt[index],
              ratio: dimensions[index],
            };
          });

          let stats = response.data.map(function (i) {
            return i.statistics.views.total;
          });

          let totalViews = stats.reduce(function (accumVariable, curValue) {
            return accumVariable + curValue;
          }, 0);
          allViews = allViews + totalViews;
          if (page === 1) {
            tyImages = dataArray;
          } else {
            tyImages = [...tyImages, ...dataArray];
          }
          altDescription = alt;
          return tyImages;
        } else {
          console.log("Something went wrong...");
        }
      });
  };

  //This gets the total number of images
  let totalImages = await axios
    .get(`https://api.unsplash.com/users/tyfiero/photos?per_page=1`, {
      headers: {
        Authorization: "Client-ID " + process.env.UNSPLASH_ACCESS_KEY,
      },
    })
    .then(function (response) {
      if (response) {
        return response.data[0].user.total_photos;
      }
    });

  //This determines how many pages to get based on total images and a max load of 30
  let totalPagesToGet = Math.ceil(totalImages / 30);

  //this loop runs the get images function as many times as there are pages.
  for (let i = 0; i < totalPagesToGet; i++) {
    await getImages(i + 1);
  }

  //This gathers all of the stats.
  const axiosStats = await axios
    .get("https://api.unsplash.com/users/tyfiero/", {
      headers: {
        Authorization: "Client-ID " + process.env.UNSPLASH_ACCESS_KEY,
      },
    })
    .then(function (response) {
      if (response) {
        let data = {
          likes: response.data.total_likes,
          followers: response.data.followers_count,
          downloads: response.data.downloads,
          photoNum: response.data.total_photos,
          views: allViews,
        };
        tyStats = data;
        return tyStats;
      } else {
        console.log("Something went wrong...");
      }
    });
  return {
    props: { tyImages, tyStats, altDescription },
    revalidate: 21600,
  };
}

function Art({ tyImages, tyStats, altDescription }) {
  const prefersReducedMotion = useReducedMotion();
  const size = useWindowSize();
  let baseWidth = size.width > 768 ? 423 : 256;
  const [pics, setPics] = React.useState(tyImages);
  const [altText, setAltText] = React.useState(altDescription);
  const [domLoaded, setDomLoaded] = React.useState(false);
  const aiImgs = [
    "/assets/other/projects/art/aiImgs/4.webp",
    "/assets/other/projects/art/aiImgs/3.webp",
    "/assets/other/projects/art/aiImgs/9.png",
    "/assets/other/projects/art/aiImgs/5.webp",
    "/assets/other/projects/art/aiImgs/2.webp",
    "/assets/other/projects/art/aiImgs/1.webp",
    "/assets/other/projects/art/aiImgs/6.webp",
    "/assets/other/projects/art/aiImgs/7.webp",
    "/assets/other/projects/art/aiImgs/8.png",
  ];
  React.useEffect(() => {
    setDomLoaded(true);
  }, []);

  const scrollToSection = (section) => {
    if (typeof window !== "undefined") {
      let e = document.getElementById(section);
      e.scrollIntoView({
        block: "start",
        behavior: "smooth",
        inline: "start",
      });
    }
  };
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
        duration: 1,
        delay: 0.2,
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const tileAnimate = {
    offscreen: { opacity: 0, scale: 0 },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 5.4,
        duration: 0.2,
      },
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
  const rightThird = {
    offscreen: {
      x: prefersReducedMotion ? 0 : 300,
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
    <>
      <Head>
        <title>Ty&apos;s Art</title>
        <meta
          name="description"
          content={`Photos, music, AI images, and generative art from Ty Fiero`}
        />
      </Head>
      <div className="page-container">
        <h1 className="text-left heading-lg !mb-1 fade-effect-quick">Art</h1>
        <motion.div
          className="flex flex-wrap justify-center gap-2"
          variants={groupAnimate}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.button
            variants={tileAnimate}
            onClick={() => {
              scrollToSection("music");
            }}
            className="flex flex-col items-center shadow-lg !shadow-teal-400/40 hover:shadow-xl rounded-xl  h-20 justify-center w-36 hover:!bg-teal-200/30 dark:hover:!bg-teal-600/50 duration-500 transition group"
          >
            <div className="p-2 text-2xl text-teal-800 transition duration-500 rounded-full shadow-sm bg-teal-400/40 dark:bg-teal-300/90 group-hover:bg-teal-400/50 dark:group-hover:bg-teal-200">
              {" "}
              <TbMusic />
            </div>
            <p className="text-teal-700 transition dark:text-teal-200 f1">
              Music
            </p>
          </motion.button>
          <motion.button
            variants={tileAnimate}
            onClick={() => {
              scrollToSection("generative");
            }}
            className="flex flex-col items-center shadow-lg !shadow-sky-400/40 hover:shadow-xl rounded-xl  h-20 justify-center w-36 hover:!bg-sky-200/30 dark:hover:!bg-sky-600/50 duration-500 transition group"
          >
            <div className="p-2 text-2xl text-teal-800 transition duration-500 rounded-full shadow-sm bg-sky-400/40 dark:bg-sky-300/90 group-hover:bg-sky-400/50 dark:group-hover:bg-sky-200">
              <TbCode />
            </div>
            <p className="transition text-sky-700 dark:text-sky-200 f1">
              Generative
            </p>
          </motion.button>

          <motion.button
            variants={tileAnimate}
            onClick={() => {
              scrollToSection("ai-images");
            }}
            className="flex flex-col items-center shadow-lg !shadow-blue-400/40 hover:shadow-xl rounded-xl  h-20 justify-center w-36 hover:!bg-blue-200/30 dark:hover:!bg-blue-600/50 duration-500 transition group"
          >
            <div className="p-2 text-2xl text-blue-800 transition duration-500 rounded-full shadow-sm bg-blue-400/40 dark:bg-blue-300/90 group-hover:bg-blue-400/50 dark:group-hover:bg-blue-200">
              {" "}
              <FaRegImages />
            </div>
            <p className="text-blue-700 transition dark:text-blue-200 f1">
              AI Art
            </p>
          </motion.button>
          <motion.button
            variants={tileAnimate}
            onClick={() => {
              scrollToSection("photography");
            }}
            className="flex flex-col items-center shadow-lg !shadow-violet-400/40 hover:shadow-xl rounded-xl  h-20 justify-center w-36 hover:!bg-violet-200/30 dark:hover:!bg-violet-600/50 duration-500 transition group"
          >
            <div className="p-2 text-2xl transition duration-500 rounded-full shadow-sm text-violet-800 bg-violet-400/40 dark:bg-violet-300/90 group-hover:bg-violet-400/50 dark:group-hover:bg-violet-200">
              {" "}
              <TbCamera />
            </div>
            <p className="transition text-violet-700 dark:text-violet-200 f1">
              Photography
            </p>
          </motion.button>
        </motion.div>
        <div className="my-8" />

        <DualSection centerText>
          <TextSection>
            <motion.h2
              variants={headingAnimate}
              className={
                "font-bold heading-md flex gap-2 justify-center items-center !text-teal-400"
              }
              id="music"
            >
              <TbMusic /> Music
            </motion.h2>
            <motion.div variants={textAnimate} className="text-box">
              <h3 className="text-left heading-sm !text-teal-400">
                Warm, mellow Lo-Fi beats
              </h3>
              <p className="font-bold">
                I was listening to Lo-Fi Hip Hop before it was cool (*puts on
                hipster glasses*). For real though, for as long as I can
                remember this genre has been the soundtrack to my life. The
                magic of Lo-Fi is that it conveys the mood of the moment, the
                same song can make you feel happy, reminiscent or melancholic,
                depending on how you feel that day. When I&apos;m not listening
                to Lo-Fi, I enjoy rap, classic rock, smooth jazz, and classical
                music. But Lo-Fi will always have my heart.
                <br />
                <br />
                My love for Lo-Fi grew stronger in 2019, when I began to learn
                how to play the piano and make beats on my computer using Logic
                Pro. Feeling an emotion from a song is one thing, but expressing
                an emotion through your own song is another. Playing along with
                the rhythm of your soul is something I wish everyone could
                experience.
                <br />
                <br />
                My music is far from platinum, but I&apos;m proud of it. And it
                conveys the feelings I felt in those moments behind the
                keyboard. I hope you enjoy it!
              </p>
            </motion.div>

            <motion.div
              variants={thirdAnimate}
              className="flex items-center content-center justify-center w-full gap-2 sm:mt-5 sm:scale-90"
            >
              <a
                href="https://open.spotify.com/artist/3jxSd4I4g4AH76AzgPw006?si=NpMCWZEWT5uLvP5lyhI__A"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center p-2 transition shadow-xs bg-black/0 rounded-3xl hover:scale-110 active:scale-90 drop-shadow-sm "
              >
                <div className="md:w-40 sm:w-32 sm:h-16 md:h-20">
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
              <a
                href="https://music.apple.com/us/artist/ty-the-creator/1626735693"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center p-2 transition shadow-xs rounded-3xl hover:scale-110 active:scale-90 drop-shadow-sm"
              >
                <div className="md:w-40 sm:w-32 sm:h-16 md:h-20">
                  <picture>
                    <source
                      srcSet="/assets/CodeLogos/appleMusic.webp"
                      type="image/webp"
                    />
                    <img
                      src="/assets/CodeLogos/appleMusic.webp"
                      alt="Apple Music button"
                      className="object-contain"
                    />
                  </picture>
                </div>
              </a>
              <a
                href="https://soundcloud.com/ty-the-creatorr"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center p-2 transition shadow-xs rounded-3xl hover:scale-110 active:scale-90 drop-shadow-sm"
              >
                <div className="md:w-40 sm:w-32 sm:h-16 md:h-20">
                  <picture>
                    <source
                      srcSet="/assets/CodeLogos/soundcloud.webp"
                      type="image/webp"
                    />
                    <img
                      src="/assets/CodeLogos/soundcloud.webp"
                      alt="Soundcloud button"
                      className="object-contain"
                    />
                  </picture>
                </div>
              </a>
            </motion.div>
          </TextSection>
          <motion.div
            className="md:w-1/3 sm:w-full h-[23em] md:mb-12"
            variants={photoAnimate}
          >
            {domLoaded && (
              <ReactPlayer
                width={"100%"}
                height={"100%"}
                url="https://soundcloud.com/ty-the-creatorr/sets/reflections"
              />
            )}
          </motion.div>
        </DualSection>

        <div className="my-28" />
        <DualSection centerText invert>
          <TextSection>
            <motion.h2
              variants={rightHeading}
              className={
                "font-bold heading-md flex gap-2 justify-center items-center"
              }
              id="generative"
            >
              <TbCode /> Generative Art
            </motion.h2>
            <motion.div variants={rightSection} className="text-box">
              <h3 className="text-left heading-sm">Beauty through code</h3>
              <p className="font-bold">
                Leveraging code to create art opens a world of creative
                possibilities. Code allows for motion and interactivity,
                breathing life and depth into the two-dimensional pixelated
                canvas. I have so much fun tweaking algorithms to create a set
                of pixels that looks pleasing to my eye.
                <br />
                <br />I learned how to code through art, and in a way, learned
                art through code. Check out my generative art pieces, not all of
                them made it to the website, but my favorites are there to be
                played with, or remixed and made your own!
              </p>
            </motion.div>

            <motion.div
              variants={rightThird}
              className="flex items-center content-center justify-center w-full gap-2 sm:mt-5 sm:scale-90"
            >
              <Link href="/art/generative">
                <a className="mt-2 text-xl font-bold cursor-pointer button-1 w-fit">
                  All Generative Art <FaArrowRight />
                </a>
              </Link>
            </motion.div>
          </TextSection>
          <motion.div
            className="md:w-1/3 sm:w-full h-[23em] md:mb-12"
            variants={photoAnimate}
          >
            <WavesSketch />
          </motion.div>
        </DualSection>
        <div className="my-28" />

        <DualSection centerText>
          <TextSection>
            <motion.h2
              variants={headingAnimate}
              className={
                "font-bold heading-md flex gap-2 justify-center items-center !text-blue-500"
              }
              id="ai-images"
            >
              <FaRegImages /> AI Images
            </motion.h2>
            <motion.div
              variants={textAnimate}
              className="text-box !shadow-blue-400/40"
            >
              <h3 className="text-left heading-sm !text-blue-500">
                Infinite creativity with prompt engineering
              </h3>
              <p className="font-bold">
                AI fascinates me, particularly AI generated artwork using
                DALLE-2, Stable Diffusion, and MidJourney. No longer am I
                restrained by my drawing skills, the only limit to what can be
                created is my own imagination. What a time to be alive!
                <br />
                <br />I save all of my best AI artwork to share with others,
                check out the entire collection!
              </p>
            </motion.div>

            <motion.div
              variants={thirdAnimate}
              className="flex items-center content-center justify-center w-full gap-2 sm:mt-5 sm:scale-90"
            >
              <Link href="/art/ai-art">
                <a className="mt-2 text-xl font-bold cursor-pointer button-1 w-fit !bg-blue-400 !shadow-blue-300">
                  All AI Images <FaArrowRight />
                </a>
              </Link>
            </motion.div>
          </TextSection>
          <motion.div
            className="flex items-center justify-center md:w-1/3 sm:w-full h-fit "
            variants={photoAnimate}
          >
            <Link href={"/art/ai-art"}>
              <a className="grid grid-cols-3 grid-rows-3 cursor-pointer w-fit lg:gap-2 sm:gap-1">
                {aiImgs.map((img, index) => {
                  return (
                    <img
                      key={index}
                      className="h-auto mx-auto rounded-md shadow-md xl:w-36 lg:w-28 md:w-20 sm:w-24 shadow-blue-400/60"
                      src={img}
                      alt="AI image from Ty Fiero"
                    />
                  );
                })}
              </a>
            </Link>
          </motion.div>
        </DualSection>
        <div className="my-28" />
        <DualSection invert>
          <TextSection>
            <motion.h2
              variants={rightHeading}
              className={
                "font-bold heading-md flex gap-2 justify-center items-center !text-violet-500"
              }
              id="photography"
            >
              <TbCamera /> Photography
            </motion.h2>
            <motion.div
              variants={rightSection}
              className="text-box !shadow-violet-400/40"
            >
              <h3 className="text-left heading-sm !text-violet-500">
                Capturing the beauty of the Pacific Northwest
              </h3>
              <p>
                Photography is my creative outlet that gets me outside and helps
                me notice the small things. I am by no means a professional, far
                from it. But I do have a decent Nikon camera, an eye for nature
                photography, and the patience to find the right shot! <br />
                <br /> I don&apos;t ever expect to be famous for my photography,
                or even make a single dollar, it&apos;s just so fun! My mind is
                so much clearer when I spend time in nature every week. I share
                all my best work to{" "}
                <a
                  href="https://unsplash.com/@tyfiero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-violet-500 "
                >
                  unsplash
                </a>{" "}
                for anyone to use in their creative projects.
              </p>
            </motion.div>
            <br />
            <motion.div
              variants={rightSection}
              className="max-w-4xl p-4 !pb-2 text-gray-800   rounded-lg shadow-xl shadow-violet-600/30 dark:shadow-violet-400/30 bg-violet-50 dark:bg-violet-700/90"
            >
              <div className="mb-2">
                <div className="h-3 text-3xl text-left text-gray-600 dark:text-slate-200">
                  “
                </div>
                <blockquote className="px-4 text-base italic text-center text-gray-600 dark:text-slate-200 f2">
                  We cannot predict the value our work will provide to the
                  world. That&apos;s fine. It is not our job to judge our own
                  work. It is our job to create it, to pour ourselves into it,
                  and to master our craft as best we can. &nbsp; &nbsp;-James
                  Clear
                </blockquote>
                <div className="h-3 mb-2 text-3xl text-right text-gray-600 dark:text-slate-200">
                  “
                </div>
              </div>
            </motion.div>
            <div className="flex justify-center w-full mt-5">
              <motion.a
                variants={rightThird}
                href="https://unsplash.com/@tyfiero"
                target="_blank"
                rel="noreferrer"
                className="flex h-[4em] w-[18em] flex-col items-center p-2 transition bg-slate-900 dark:bg-white rounded-3xl hover:scale-110 active:scale-90 shadow-2xl drop-shadow-lg"
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
            </div>
          </TextSection>
          <ImageSection
            src="/assets/other/typhotography.jpg"
            alt="Image of Ty taking a photo"
          />
        </DualSection>

        <div className="flex justify-center gap-10 md:items-start sm:flex-col-reverse md:flex-row sm:items-center"></div>

        <div className="flex flex-col items-center px-5 pt-2 pb-2 mt-20 ring-2 rounded-xl ring-violet-400">
          <a
            href="https://unsplash.com/@tyfiero"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 rounded-full shadow-lg">
              <picture>
                <source
                  srcSet={"/assets/other/unsplash-profile.png"}
                  type="image/png"
                />
                <img
                  src={"/assets/other/unsplash-profile.png"}
                  alt="Unsplash profile image"
                  className="rounded-full "
                />
              </picture>
            </div>
            <p className="italic text-violet-300">@tyfiero</p>
            <h3 className="heading-sm !text-violet-500">Unsplash Stats</h3>
          </a>

          <div className="flex justify-center mt-3 sm:gap-1 md:gap-10 sm:flex-col-reverse md:flex-row">
            <div className="flex items-center gap-2">
              <FaImage className="text-violet-600 dark:text-violet-300" />
              <p>
                Photos:&nbsp;{"  "}
                <span className="text-lg font-bold text-violet-600 dark:text-violet-300">
                  {tyStats.photoNum}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaEye className="text-violet-600 dark:text-violet-300" />
              <p>
                Total Views:&nbsp;{"  "}
                <span className="text-lg font-bold text-violet-600 dark:text-violet-300">
                  {tyStats.views.toLocaleString("en-US")}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2 ">
              <FaDownload className="scale-75 text-violet-600 dark:text-violet-300" />
              <p>
                Downloads:&nbsp;{"  "}
                <span className="text-lg font-bold text-violet-600 dark:text-violet-300">
                  {tyStats.downloads}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaUserAlt className="text-violet-600 dark:text-violet-300" />
              <p>
                Followers: &nbsp; {"  "}
                <span className="text-lg font-bold text-violet-600 dark:text-violet-300">
                  {tyStats.followers}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaHeart className="text-violet-600 dark:text-violet-300" />
              <p>
                Likes:&nbsp;{" "}
                <span className="text-lg font-bold text-violet-600 dark:text-violet-300">
                  {tyStats.likes}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center w-full gap-3 my-5">
          {pics.map((pic, index) => {
            //   console.log(pic);
            // let width =
            //   pic.ratio > 1
            //     ? " md:w-[640px] sm:w-[320px]"
            //     : " md:w-[320px] sm:w-[170px]";

            return (
              <div
                key={index}
                className={
                  "relative shadow-lg rounded-xl transition duration-500 hover:shadow-violet-400/60 shadow-violet-600/30 md:h-[423px] sm:h-[256px] hover:shadow-xl hover:scale-[99%]"
                }
                style={{
                  width: `${Math.floor(baseWidth * pic.ratio)}px`,
                }}
              >
                <Image
                  src={pic.displaySrc}
                  alt={pic.alt || "Photo from Ty Fiero"}
                  layout="fill"
                  className="transition-transform duration-500 cursor-pointer !rounded-xl  "
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.open(pic.src, "_blank");
                    }
                  }}
                />
              </div>
            );
          })}
        </div>
        <p className="my-8 text-sm text-slate-400">
          For all the nerds out there, this page was statically rendered using
          Next.js, and my photos were fetched from unsplash using the
          getStaticProps function.
        </p>
      </div>
    </>
  );
}

export default Art;
