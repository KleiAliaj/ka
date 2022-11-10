import React from "react";
import { table } from "@/lib/Airtable";
import axios from "axios";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
import Head from "next/head";
import { FaExpandAlt, FaExpandArrowsAlt } from "react-icons/fa";

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
              No longer am I constrained by how well I can draw. Prompt
              engineering is a new kind of artistic skill, one that I tend to
              think will be rather valuable in the future. Here is a collection
              of some of my favorite AI artwork that I&apos;ve made.
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
  const [clicked, setClicked] = React.useState(false);
  let textSize =
    pic.name.length < 200
      ? " sm:!text-xs md:!text-base"
      : pic.name.length > 350
      ? " sm:!text-[8px] md:!text-[10px]"
      : " sm:!text-[10px] md:!text-xs";
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
      ) : null}
      {clicked && (
        <div
          className="absolute top-0 z-50 flex flex-col items-center justify-center w-full h-full p-2 transition duration-300 select-none bg-slate-800/70 rounded-xl fade-effect-turbo"
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          <p className={" text-white pt-5   " + textSize}>
            {pic.name.charAt(0).toUpperCase() + pic.name.slice(1)}
          </p>
          <div
            className={
              "absolute top-2 left-2  text-white !text-xs    duration-200   rounded-full px-2 py-1 " +
              (pic.algorithm === "DALLE-2"
                ? " bg-sky-300/70"
                : pic.algorithm === "MidJourney"
                ? " bg-green-400/70"
                : " bg-violet-400/70")
            }
          >
            {pic.algorithm}
          </div>
          <button
            className="absolute text-white top-2 right-2"
            onClick={() => {
              if (typeof window !== "undefined") {
                window.open(pic.image.url, "_blank");
              }
            }}
          >
            <FaExpandAlt />
          </button>
        </div>
      )}
      <Image
        src={pic.image.url}
        alt={pic.name}
        fill
        sizes="(max-width: 768px) 100px,
        250px"
        className={
          " rounded-xl z-0 cursor-pointer " + +(imageLoading ? " !hidden" : "")
        }
        onLoadingComplete={() => {
          setImageLoading(false);
        }}
        onClick={() => {
          setClicked(!clicked);
          setTimeout(() => {
            setClicked(false);
          }, 7000);
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
