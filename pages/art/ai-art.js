import React from "react";
import { table } from "@/lib/Airtable";
import axios from "axios";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
import Head from "next/head";

export default function AI({ aiImages }) {
  const [pics, setPics] = React.useState(aiImages);
  const experiments = [
    {
      name: "Oliver - AI life advice",
      description:
        "GPT-3 powered life advice character that takes on various topics.",
      path: "/ai/Oliver",
      imgSrc: "/assets/other/projects/oliver/OliThumb.png",
    },
  ];
  return (
    <>
      <Head>
        <title>AI Artwork</title>
        <meta name="description" content={`Ty&apos;s AI artwork`} />
      </Head>
      <div className="page-container">
        <h2 className="text-left heading-lg !mb-0 fade-effect-quick">
          AI Art Showcase
        </h2>

        <div className="flex flex-col items-start sm:w-full md:w-2/3">
          <div className="text-box">
            <p>
              When the DALLE-2 was first released to the media, I knew right
              then how big AI image generation would be. Input one sentence and
              get a customized beautiful image back? Seemed too good to be true.
              I still have yet to get access to DALLE-2, but I&apos;ve been
              having a ton of fun playing with <a>Midjourney</a>, which some
              label as the &quot;artsy&quot; DALLE. Its really impressive what
              it makes, and I&apos;ve been enjoying the discord first approach
              more than I though I would. Here is a collection of some of my
              favorite AI artwork that I&apos;ve made.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center w-full gap-3 my-5 ">
          {pics.map((pic, index) => {
            return <AIImage key={index} pic={pic} />;
          })}
        </div>
      </div>
    </>
  );
}

function AIImage({ index, pic }) {
  const [imageLoading, setImageLoading] = React.useState(false);
  let textSize = pic.name.length > 200 ? "  !text-xs" : " !text-base";
  React.useEffect(() => {
    setImageLoading(true);
  }, []);
  return (
    <div
      key={index}
      className={
        "group relative shadow-xl rounded-xl shadow-sky-600/30 md:h-[250px] md:w-[250px] sm:w-[180px] sm:h-[180px] hover:scale-105 transition "
      }
    >
      {imageLoading ? (
        <div className="z-0 w-full h-full scale-[101%]">
          <Skeleton
            width={"100%"}
            height={"100%"}
            className=" w-full h-full object-cover !leading-loose !rounded-xl  !p-0 fade-effect-quick z-100"
            baseColor="#DBF2FD"
            highlightColor="#A2DEF9
              "
          />
        </div>
      ) : (
        <div className="absolute top-0 z-50 w-full h-full bg-slate-800/70 rounded-xl  opacity-0 group-hover:!opacity-100 transition duration-300  justify-center items-center p-2 flex flex-col ">
          <p
            className={
              " text-white  opacity-0 group-hover:!opacity-100 duration-200  " +
              textSize
            }
          >
            {pic.name.charAt(0).toUpperCase() + pic.name.slice(1)}
          </p>
          <div className="  text-white !text-xs  opacity-0 group-hover:!opacity-100 duration-200  bg-sky-300/40 rounded-full px-2 py-1">
            {pic.algorithm}
          </div>
        </div>
      )}
      {/* <p>{pic.name.length}</p> */}
      <Image
        src={pic.image.url}
        alt={pic.name}
        layout="fill"
        className={
          " rounded-xl z-0 cursor-pointer " + +(imageLoading ? " !hidden" : "")
        }
        onLoadingComplete={() => {
          // console.log("IMG LOADED");

          setImageLoading(false);
        }}
        onClick={() => {
          if (typeof window !== "undefined") {
            window.open(pic.image.url, "_blank");
          }
        }}
      />
    </div>
  );
}

export async function getStaticProps(context) {
  let aiImages = [];
  const axiosStats = await axios({
    method: "GET",
    url: "http://www.tyfiero.com/api/airtable",
    // url: "http://localhost:3000/api/airtable",
  })
    .then((response) => {
      let images = response.data;
      let sorted = images.sort(function (a, b) {
        return b.rank - a.rank;
      });
      aiImages = sorted;
    })
    .catch((error) => {
      console.log(error);
    });

  return {
    props: { aiImages },
    revalidate: 21600,
  };
}
