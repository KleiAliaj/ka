import React from "react";
import Image from "next/image";
import axios from "axios";
import {
  FaArrowRight,
  FaDownload,
  FaEye,
  FaHeart,
  FaImage,
  FaRegImages,
  FaUserAlt,
} from "react-icons/fa";
import ImageSection from "@/components/layout/ImageSection";
import DualSection from "@/components/layout/DualSection";
import TextSection from "@/components/layout/TextSection";
import { motion, useReducedMotion } from "framer-motion";
import Head from "next/head";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
// import ReactPlayer from "react-player";
import Link from "next/link";
import dynamic from "next/dynamic";
import { TbCamera, TbCode, TbMusic } from "react-icons/tb";
import MotionHeader from "@/components/etc/animation/MotionHeader.js";
import MotionText from "@/components/etc/animation/MotionText.js";
import MotionImage from "@/components/etc/animation/MotionImage.js";
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
    "/assets/other/projects/art/aiImgs/9.webp",
    "/assets/other/projects/art/aiImgs/5.webp",
    "/assets/other/projects/art/aiImgs/6.webp",
    "/assets/other/projects/art/aiImgs/3.webp",
    "/assets/other/projects/art/aiImgs/7.webp",
    "/assets/other/projects/art/aiImgs/4.webp",
    "/assets/other/projects/art/aiImgs/2.webp",
    "/assets/other/projects/art/aiImgs/8.webp",
    "/assets/other/projects/art/aiImgs/1.webp",
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
        <h1 className=" heading-lg !mb-1 fade-effect-quick">Art</h1>
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

        <DualSection centerText cn="w-full">
          <TextSection>
            <MotionHeader>
              <h2
                className={
                  "font-bold heading-md flex gap-2 justify-center items-center !text-teal-400"
                }
                id="music"
              >
                <TbMusic /> Music
              </h2>
            </MotionHeader>
            <MotionText>
              <div className="text-box">
                <MotionHeader xPx={-100} delay={0.3}>
                  <h3 className="text-left heading-sm !text-teal-400">
                    Auditorial Creativity
                  </h3>
                </MotionHeader>
                <p className="font-bold">
                  After years of curiosity, I finally started making music in{" "}
                  <a
                    href="https://www.apple.com/logic-pro/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="anc"
                  >
                    Logic Pro
                  </a>{" "}
                  back in 2019. I make primarily LoFi hip hop beats, the type of
                  music you&apos;d want to hear on a moody rainy day. Music is
                  an incredible medium for expressing emotions, I can still
                  remember the way I was feeling when I listen to any of my old
                  tracks. Something about a blank musical canvas and a keyboard
                  makes my soul really happy.
                  <br />
                  <br />
                  It&apos;s certainly not perfect, but I&apos;m proud of how it
                  turned out. Creativity isn&apos;t about perfection, it&apos;s
                  about expressing who you are through a medium you enjoy. Give
                  it a listen, and{" "}
                  <Link className="anc" href={"/contact"}>
                    let me know
                  </Link>
                  what you think!
                </p>
              </div>
            </MotionText>

            <MotionText delay={0.4}>
              <div className="flex items-center content-center justify-center w-full gap-2 sm:mt-5 sm:scale-90">
                <Link
                  className="mt-2 text-xl font-bold cursor-pointer button-1 w-fit !bg-teal-500 !shadow-teal-300"
                  href="/art/music"
                >
                  Listen Now <FaArrowRight />
                </Link>
              </div>
            </MotionText>
          </TextSection>
          {/* <div className="md:w-1/3 sm:w-full h-[23em] md:mb-12"> */}
          <ImageSection
            src="/assets/other/Ty-lofi.webp"
            alt="Lofi Style image of Ty"
          />
          {/* </div> */}
        </DualSection>

        <div className="my-28" />
        <DualSection centerText invert>
          <TextSection>
            <MotionHeader invert>
              <h2
                className={
                  "font-bold heading-md flex gap-2 justify-center items-center"
                }
                id="generative"
              >
                <TbCode /> Generative Art
              </h2>
            </MotionHeader>
            <MotionText invert>
              <div className="text-box">
                <MotionHeader delay={0.3} xPx={-100} invert>
                  {" "}
                  <h3 className="text-left heading-sm">Beauty through code</h3>
                </MotionHeader>
                <p className="font-bold">
                  Leveraging code to create art opens a world of creative
                  possibilities. Code allows for motion and interactivity,
                  breathing life and depth into the two-dimensional pixelated
                  canvas. I have so much fun tweaking algorithms to create a set
                  of pixels that looks pleasing to my eye.
                  <br />
                  <br />I learned how to code through art, and in a way, learned
                  art through code. Check out my generative art pieces, not all
                  of them made it to the website, but my favorites are there to
                  be played with, or remixed and made your own!
                </p>
              </div>
            </MotionText>

            <MotionText invert delay={0.4}>
              <div className="flex items-center content-center justify-center w-full gap-2 sm:mt-5 sm:scale-90">
                <Link
                  className="mt-2 text-xl font-bold cursor-pointer button-1 w-fit"
                  href="/art/generative"
                >
                  View Generative Art <FaArrowRight />
                </Link>
              </div>
            </MotionText>
          </TextSection>
          <div className="md:w-1/3 sm:w-full h-[23em] md:mb-12">
            <MotionImage>
              <WavesSketch />
            </MotionImage>
          </div>
        </DualSection>
        <div className="my-28" />

        <DualSection centerText>
          <TextSection>
            <MotionHeader>
              <h2
                className={
                  "font-bold heading-md flex gap-2 justify-center items-center !text-blue-500 dark:!text-blue-400"
                }
                id="ai-images"
              >
                <FaRegImages /> AI Images
              </h2>
            </MotionHeader>
            <MotionText>
              <div className="text-box !shadow-blue-400/40">
                <MotionHeader delay={0.3} xPx={-100}>
                  <h3 className="text-left heading-sm !text-blue-500 dark:!text-blue-400">
                    Infinite creativity with prompt engineering
                  </h3>
                </MotionHeader>
                <p className="font-bold">
                  AI fascinates me, particularly AI generated artwork using
                  DALLE-2, Stable Diffusion, and MidJourney. No longer am I
                  restrained by my drawing skills, the only limit to what can be
                  created is my own imagination. What a time to be alive!
                  <br />
                  <br />I save all of my best AI artwork to share with others,
                  check out the entire collection!
                </p>
              </div>
            </MotionText>

            <MotionText delay={0.4}>
              <div className="flex items-center content-center justify-center w-full gap-2 sm:mt-5 sm:scale-90">
                <Link
                  href="/art/ai-art"
                  className="mt-2 text-xl font-bold cursor-pointer button-1 w-fit !bg-blue-500 !shadow-blue-300"
                >
                  View AI Images <FaArrowRight />
                </Link>
              </div>
            </MotionText>
          </TextSection>
          <div className="flex items-center justify-center md:w-1/3 sm:w-full h-fit ">
            <MotionImage classes="">
              <Link
                className="grid grid-cols-3 grid-rows-3 cursor-pointer w-fit lg:gap-2 sm:gap-1"
                href={"/art/ai-art"}
              >
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
              </Link>
            </MotionImage>
          </div>
        </DualSection>
        <div className="my-28" />
        <DualSection invert centerText>
          <TextSection>
            <MotionHeader invert>
              <h2
                className={
                  "font-bold heading-md flex gap-2 justify-center items-center !text-violet-500"
                }
                id="photography"
              >
                <TbCamera /> Photography
              </h2>
            </MotionHeader>
            <MotionText invert>
              <div className="text-box !shadow-violet-400/40">
                <MotionHeader delay={0.3} xPx={-100} invert>
                  <h3 className="text-left heading-sm !text-violet-500">
                    Capturing the beauty of the Pacific Northwest
                  </h3>
                </MotionHeader>
                <p>
                  Photography might be my most &quot;productive&quot; hobby, it
                  gets me outdoors, keeps me active, and has massively improved
                  my creativity in general. Thanks to photography, I see the
                  world through a whole new lens (
                  <span className="italic">pun intended</span>). I find myself
                  noticing things in my daily life that I would have overlooked
                  otherwise. Now, a bee on a flower will make pause for a
                  second; to appreciate the beauty in the tiny things, but also
                  to say,{" "}
                  <span className="italic">
                    &quot;Damn, I wish I brought my camera&quot;
                  </span>
                  .
                </p>
              </div>
            </MotionText>

            <div className="flex justify-center w-full ">
              <MotionText delay={0.4}>
                <div className="flex items-center content-center justify-center w-full gap-2 sm:mt-5 sm:scale-90">
                  <Link
                    className="mt-2 text-xl font-bold cursor-pointer button-1 w-fit !bg-violet-500 !shadow-violet-300"
                    href="/art/photography"
                  >
                    View Photos <FaArrowRight />
                  </Link>
                </div>
              </MotionText>
            </div>
          </TextSection>
          <ImageSection
            src="/assets/other/typhotography.jpg"
            alt="Image of Ty taking a photo"
          />
        </DualSection>
      </div>
    </>
  );
}

export default Art;
