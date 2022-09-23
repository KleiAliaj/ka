import React from "react";
import { table } from "@/lib/Airtable";
import axios from "axios";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";

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
    <div className="page-container">
      <h2 className="text-left heading-lg fade-effect-quick">AI Experiments</h2>
      <div className="text-box sm:w-full md:w-2/3">
        <p>
          AI has always fascinated me, the notion that a computer can learn is a
          crazy concept. The first time I used GPT3 back in 2020, it was super
          inspiring. It felt like magic, almost anything I&apos;d ask it, it
          would send back a reply that made sense, both contextually and
          grammatically. I spent hours having conversations about philosophy,
          politics, and technology with a computer that didn&apos; even know my
          name. It will always be something I&apos;m interested in.
        </p>
      </div>
      <div className="flex flex-col items-start mt-5 sm:w-full md:w-2/3">
        <div className="flex flex-wrap justify-center w-full gap-3">
          {experiments.map((experiment) => (
            <Experiment
              key={experiment.name}
              name={experiment.name}
              description={experiment.description}
              path={experiment.path}
              imgSrc={experiment.imgSrc}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start mt-5 sm:w-full md:w-2/3">
        <h3 className="heading-md">AI Art Showcase</h3>
        <div className="text-box">
          <p>
            When the DALLE-2 was first released to the media, I knew right then
            how big AI image generation would be. Input one sentence and get a
            customized beautiful image back? Seemed too good to be true. I still
            have yet to get access to DALLE-2, but I&apos;ve been having a ton
            of fun playing with <a>Midjourney</a>, which some label as the
            &quot;artsy&quot; DALLE. Its really impressive what it makes, and
            I&apos;ve been enjoying the discord first approach more than I
            though I would. Here is a collection of some of my favorite AI
            artwork that I&apos;ve made.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center w-full gap-3 my-5 ">
        {pics.map((pic, index) => {
          return <AIImage key={index} pic={pic} />;
        })}
      </div>
    </div>
  );
}

function Experiment({ path, imgSrc, name, description }) {
  return (
    <Link href={path}>
      <a className="flex items-center px-2 py-1 transition sm:w-full md:w-1/2 ring-2 ring-sky-400 hover:ring-4 hover:scale-110 rounded-xl active:scale-95 bg-gradient-to-br from-sky-50 via-sky-100 to-sky-200 dark:from-sky-700 dark:via-sky-800 dark:to-black">
        <div className="flex flex-col justify-between items-between">
          <h4 className="heading-sm !text-left">{name}</h4>
          <p>{description}</p>
        </div>
        <picture>
          <source srcSet={imgSrc} type="image/png" />
          <img
            src={imgSrc}
            alt="logo"
            className="object-cover group-hover:scale-105 h-[10em] w-full transition duration-500 rounded-lg"
          />
        </picture>
      </a>
    </Link>
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
    url: "http://tyfiero.com/api/airtable",
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
