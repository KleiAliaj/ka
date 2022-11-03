import MotionHeader from "@/components/etc/animation/MotionHeader";
import MotionText from "@/components/etc/animation/MotionText";
import DualSection from "@/components/layout/DualSection";
import ImageSection from "@/components/layout/ImageSection";
import TextSection from "@/components/layout/TextSection";
import Head from "next/head";
import React from "react";
import { TbCamera } from "react-icons/tb";
import axios from "axios";
import Image from "next/image";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import { FaDownload, FaEye, FaHeart, FaImage, FaUserAlt } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";

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

function Photography({ tyImages, tyStats, altDescription }) {
  const size = useWindowSize();
  let baseWidth = size.width > 768 ? 423 : 256;
  const [pics, setPics] = React.useState(tyImages);

  return (
    <>
      <Head>
        <title>Ty&apos;s Photos</title>
        <meta
          name="description"
          content={`Photography and pictures from Ty Fiero`}
        />
      </Head>
      <div className="page-container">
        <MotionHeader>
          <h1
            className={
              "font-bold heading-lg flex gap-2 justify-center items-center "
            }
            id="photography"
          >
            <TbCamera /> Photography
          </h1>
        </MotionHeader>
        <DualSection>
          <TextSection>
            <MotionText>
              <div className="text-box md:mt-8">
                <MotionHeader delay={0.3} xPx={-100}>
                  <h3 className="text-left heading-sm !text-sky-500">
                    More than just a photo
                  </h3>
                </MotionHeader>
                <p>
                  Photography is my creative outlet that gets me outside and
                  helps me notice the small things. I am by no means a
                  professional, far from it. But I do have a decent Nikon
                  camera, an eye for nature photography, and the patience to
                  find the right shot! <br />
                  <br /> I don&apos;t ever expect to be famous for my
                  photography, or even make a single dollar, it&apos;s just so
                  fun! My mind is so much clearer when I spend time in nature
                  every week. I share all my best work to{" "}
                  <a
                    href="https://unsplash.com/@tyfiero"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="anc "
                  >
                    unsplash
                  </a>{" "}
                  for anyone to use in their creative projects.
                </p>
              </div>
            </MotionText>
            <br />
            <MotionText invert delay={0.2}>
              <div className="text-box  bg-sky-50 dark:bg-sky-700/90">
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
              </div>
            </MotionText>
            <div className="flex justify-center w-full mt-5">
              <MotionText invert delay={0.4} noSize>
                <a
                  href="https://unsplash.com/@tyfiero"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-[4em] w-[18em] flex-col items-center p-2 transition bg-slate-900 dark:bg-white rounded-3xl hover:scale-110 active:scale-90 shadow-xl drop-shadow-lg"
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
                </a>
              </MotionText>
            </div>
          </TextSection>
          <ImageSection
            src="/assets/other/typhotography2.webp"
            alt="Image of Ty taking a photo"
          />
        </DualSection>
        <MotionText yPx={-200} xPx={0} noSize>
          <div className="flex flex-col items-center px-5 pt-2 pb-2 mt-20 ring-2 rounded-xl ring-sky-400">
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
              <p className="italic text-sky-300">@tyfiero</p>
              <h3 className="heading-sm !text-sky-500">Unsplash Stats</h3>
            </a>

            <div className="flex justify-center mt-3 sm:gap-1 md:gap-10 sm:flex-col-reverse md:flex-row">
              <div className="flex items-center gap-2">
                <FaImage className="text-sky-600 dark:text-sky-300" />
                <div className="w-full flex items-center sm:justify-between">
                  <p>Photos:&nbsp;{"  "}</p>
                  <p className="text-lg font-bold text-sky-600 dark:text-sky-300">
                    {tyStats.photoNum}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaEye className="text-sky-600 dark:text-sky-300" />
                <div className="w-full flex items-center sm:justify-between">
                  <p>Views:&nbsp;{"  "}</p>
                  <p className="text-lg font-bold text-sky-600 dark:text-sky-300">
                    {tyStats.views.toLocaleString("en-US")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <FaDownload className="scale-75 text-sky-600 dark:text-sky-300" />
                <div className="w-full flex items-center sm:justify-between">
                  <p>Downloads:&nbsp;{"  "}</p>
                  <p className="text-lg font-bold text-sky-600 dark:text-sky-300 sm:ml-8 md:ml-0">
                    {tyStats.downloads}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaUserAlt className="text-sky-600 dark:text-sky-300" />
                <div className="w-full flex items-center sm:justify-between">
                  <p>Followers: &nbsp; {"  "}</p>
                  <p className="text-lg font-bold text-sky-600 dark:text-sky-300">
                    {tyStats.followers}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaHeart className="text-sky-600 dark:text-sky-300" />
                <div className="w-full flex items-center sm:justify-between">
                  <p>Likes:&nbsp; </p>
                  <p className="text-lg font-bold text-sky-600 dark:text-sky-300">
                    {tyStats.likes}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </MotionText>
        <div className="flex flex-wrap justify-center w-full gap-3 my-5">
          {pics.map((pic, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0.2, filter: "blur(3px)" }}
                whileInView={{
                  filter: "blur(0px)",
                  opacity: 1,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1.5,
                  },
                }}
                viewport={{ once: true }}
                className={
                  "relative shadow-lg rounded-xl transition duration-500 hover:shadow-sky-400/60 shadow-sky-600/30 md:h-[423px] sm:h-[256px] hover:shadow-xl hover:scale-[99%]"
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
              </motion.div>
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

export default Photography;
