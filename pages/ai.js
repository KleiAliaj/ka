import React from "react";
import { table } from "@/lib/Airtable";
import axios from "axios";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function AI({ aiImages }) {
  console.log(aiImages);

  const [pics, setPics] = React.useState(aiImages);
  return (
    <div className="page-container">
      <h2 className="text-left heading-lg ">AI Experiments</h2>
      <p>
        AI has always fascinated me, the idea that a computer can make an
        informed decision based on information it has learned is game changing.
        The first time I used GPT3 back in 2020, it was massively inspiring. It
        felt like magic, almost anything I'd ask it, it would send back a reply
        that made sense, both contextually and grammatically. I spent hours
        having conversations about philosophy, politics, and technology with a
        non-sentient computer. It will always be something I'm fascinated with.{" "}
      </p>
      <p>
        GPT3 experiments: (Maybe I can write up 3 to 5 gpt3 text experiments to
        showcase my AI credibility)
      </p>
      <p>
        MidJourney/DALLE-2 experiments: (Maybe I can write up 3 to 5 image AI
        experiments to showcase my AI credibility)
      </p>
      <p>
        When the DALLE-2 was first released to the media, I knew right then how
        big AI image generation would be. Input one sentence and get a
        customized beatiful image back? Seemed too good to be true. I still have
        yet to get access to DALLE-2, but I've been having a ton of fun playing
        with <a>Midjourney</a>, which some label as the "artsy" DALLE. Its
        really impressive what it makes, and I've been enjoying the discord
        first approach more than I though I would. Here is a collection of some
        of my favorite AI artwork that I've made.
      </p>

      <div className="flex flex-wrap justify-center w-full gap-3 my-5">
        {pics.map((pic, index) => {
          //   console.log(pic);
          const [imageLoading, setImageLoading] = React.useState(false);
          let textSize = pic.name.length > 200 ? "  !text-xs" : " !text-base";
          React.useEffect(() => {
            setImageLoading(true);
          }, []);
          return (
            <div
              key={index}
              className={
                "group relative shadow-xl rounded-xl shadow-sky-600/30 md:h-[250px] md:w-[250px] sm:h-[300px] hover:scale-105 transition "
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
                <div className="absolute top-0 z-50 w-full h-full bg-slate-800/70 rounded-xl  opacity-0 group-hover:!opacity-100 transition duration-300 flex justify-center items-center p-2">
                  <p
                    className={
                      " text-white  opacity-0 group-hover:!opacity-100 duration-200 " +
                      textSize
                    }
                  >
                    {pic.name}
                  </p>
                </div>
              )}
              {/* <p>{pic.name.length}</p> */}
              <Image
                src={pic.image.url}
                alt={pic.name}
                layout="fill"
                className={
                  " rounded-xl z-0 cursor-pointer " +
                  +(imageLoading ? " !hidden" : "")
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

              {/* <p>{pic}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  let aiImages = [];
  const axiosStats = await axios({
    method: "GET",
    url: "http://tyfiero.com/api/airtable",
    //url: "http://localhost:3000/api/airtable",
  })
    .then((response) => {
      let images = response.data;
      //   console.log(response.data);
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
