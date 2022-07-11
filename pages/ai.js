import React from "react";
import { table } from "@/lib/Airtable";
import axios from "axios";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function AI({ aiImages }) {
  //   console.log(aiImages);
  const [pics, setPics] = React.useState(aiImages);
  return (
    <div className="page-container">
      <h2 className="text-left heading-lg ">AI Experiments</h2>

      <div className="flex flex-wrap justify-center w-full gap-3 my-5">
        {pics.map((pic, index) => {
          //   console.log(pic);
          const [imageLoading, setImageLoading] = React.useState(false);

          React.useEffect(() => {
            setImageLoading(true);
          }, []);
          return (
            <div
              key={index}
              className={
                "relative shadow-xl rounded-xl shadow-sky-600/30 md:h-[250px] md:w-[250px] sm:h-[300px] "
              }
            >
              {imageLoading && (
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
              )}

              <Image
                src={pic.image.url}
                alt={pic.name}
                layout="fill"
                className={
                  " rounded-xl cursor-pointer " +
                  +(imageLoading ? " !hidden" : "")
                }
                placeholder="blur"
                blurDataURL="/react.png"
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
    method: "POST",
    url: "http://tyfiero.com/api/airtable",
  })
    .then((response) => {
      let images = response.data;
      aiImages = images;
    })
    .catch((error) => {
      console.log(error);
    });

  return {
    props: { aiImages }, // will be passed to the page component as props
  };
}
