import React from "react";
import Image from "next/image";
import axios from "axios";
import {
  FaDownload,
  FaEye,
  FaHeart,
  FaImage,
  FaPeopleArrows,
  FaRegHeart,
  FaUserAlt,
} from "react-icons/fa";

export async function getStaticProps(context) {
  //   let images;

  //   axios({
  //     method: "POST",
  //     url: "/api/unsplashTy",
  //     // headers: headers,
  //   })
  //     .then((response) => {
  //       console.log("index response");
  //       console.log(response);

  //       images = response.data.results.photos;
  //       console.log(images);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  let tyImages = [];
  let tyStats;
  let allViews;
  let altDescription;

  const axiosImages = await axios
    .get(
      "https://api.unsplash.com/users/tyfiero/photos?per_page=50&stats=true",
      {
        headers: {
          Authorization: "Client-ID " + process.env.UNSPLASH_ACCESS_KEY,
        },
      }
    )
    .then(function (response) {
      if (response) {
        // console.log(response.data);
        let alt = response.data.map((image) => {
          return image.description;
        });
        let dimensions = response.data.map((image) => {
          return image.width / image.height;
        });
        // console.log(altDescription);
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

        allViews = totalViews;

        tyImages = dataArray;
        altDescription = alt;
        return tyImages;
      } else {
        // console.log("Success!");
      }
    });

  const axiosStats = await axios
    .get("https://api.unsplash.com/users/tyfiero/", {
      headers: {
        Authorization: "Client-ID " + process.env.UNSPLASH_ACCESS_KEY,
      },
    })
    .then(function (response) {
      if (response) {
        // console.log(response.data);

        // let urls = response.data.map(function (i) {
        //   return i.urls;
        // });
        // // console.log(urls);
        // let oneUrl = urls.map(function (i) {
        //   return i.full;
        // });

        let data = {
          likes: response.data.total_likes,
          followers: response.data.followers_count,
          downloads: response.data.downloads,
          photoNum: response.data.total_photos,
          views: allViews,
        };
        // console.log(data);
        tyStats = data;
        return tyStats;
      } else {
        // console.log("Success!");
      }
    });

  //   console.log(tyImages);

  return {
    props: { tyImages, tyStats, altDescription }, // will be passed to the page component as props
  };
}

function Photography({ tyImages, tyStats, altDescription }) {
  //   console.log(tyStats);
  const [pics, setPics] = React.useState(tyImages);
  const [altText, setAltText] = React.useState(altDescription);
  //   console.log(pics[0]);
  return (
    <div className="page-container">
      <h2 className="text-left heading-lg ">Photography</h2>
      <div className="flex justify-center gap-10 sm:flex-col-reverse md:flex-row sm:items-center">
        <div className="md:w-1/2 sm:w-full ">
          <p className="font-bold heading-sm !text-left">Why I take pictures</p>
          <div className="glass-box bg-white/80 dark:bg-black/80">
            <p>
              Photography is my creative outlet that gets me outside, and helps
              me notice and appreciate the beauty of the Pacific Northwest (and
              some of my pets). I am by no means a professional, far from it.
              But I do have a decent Nikon camera, an eye for nature
              photography, and the patience to find the right shot. Little by
              little, I feel myself getting better. <br />
              <br /> I don't ever expect to be famous for my photography, or
              even make a single dollar. I do this for me. My mind is so much
              clearer when I spend time every week to bask in the glory of what
              nature has to offer, and capture it for all to see. I share all my
              best work to{" "}
              <a
                href="https://unsplash.com/@tyfiero"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sky-500 "
              >
                unsplash
              </a>{" "}
              for the world to see and use for their creative projects. I LOVE
              putting my work out there, even if no one was to see it.
            </p>
          </div>
          <br />
          <div className="max-w-4xl p-4 !pb-2 text-gray-800   rounded-lg shadow-xl shadow-sky-600/30 bg-sky-50 dark:bg-sky-700/90">
            <div className="mb-2">
              <div className="h-3 text-3xl text-left text-gray-600 dark:text-slate-200">
                “
              </div>
              <blockquote className="px-4 text-base italic text-center text-gray-600 dark:text-slate-200 f2">
                We cannot predict the value our work will provide to the world.
                That’s fine. It is not our job to judge our own work. It is our
                job to create it, to pour ourselves into it, and to master our
                craft as best we can. &nbsp; &nbsp;-James Clear
              </blockquote>
              <div className="h-3 mb-2 text-3xl text-right text-gray-600 dark:text-slate-200">
                “
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[640px] md:h-[423px] sm:w-[320px] sm:h-[211px] relative shadow-xl rounded-xl shadow-sky-600/30">
          {/* <div className="w-1/4 !h-auto shadow-xl rounded-xl shadow-sky-600/30 image-container flex flex-col justify-center items-start"> */}
          <Image
            src="https://images.unsplash.com/photo-1653794280522-96224d9338c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
            alt="A plant in the Pacific Northwest"
            layout="fill"
            className=" rounded-xl"
          />
        </div>
      </div>

      <div className="flex flex-col items-center px-5 pt-2 pb-2 mt-20 ring-2 rounded-xl">
        <a
          href="https://unsplash.com/@tyfiero"
          target="_blank"
          className="flex flex-col items-center"
        >
          <div className="w-20 h-20 rounded-full shadow-lg">
            <img
              src={"/unsplash-profile.png"}
              alt="Aerial view of the Pacific Northwest"
              className="rounded-full "
            />
          </div>
          <p className="italic text-sky-300">@tyfiero</p>
          <h3 className="heading-sm">Unsplash Stats</h3>
        </a>

        <div className="flex justify-center mt-3 sm:gap-1 md:gap-10 sm:flex-col-reverse md:flex-row">
          <div className="flex items-center gap-2">
            <FaImage className="text-sky-600" />
            <p>
              Photos:&nbsp;{"  "}
              <span className="text-lg font-bold text-sky-600">
                {tyStats.photoNum}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaEye className="text-sky-600" />
            <p>
              Total Views:&nbsp;{"  "}
              <span className="text-lg font-bold text-sky-600">
                {tyStats.views}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2 ">
            <FaDownload className="scale-75 text-sky-600" />
            <p>
              Downloads:&nbsp;{"  "}
              <span className="text-lg font-bold text-sky-600">
                {tyStats.downloads}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaUserAlt className="text-sky-600" />
            <p>
              Followers: &nbsp; {"  "}
              <span className="text-lg font-bold text-sky-600">
                {tyStats.followers}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaHeart className="text-sky-600" />
            <p>
              Likes:&nbsp;{" "}
              <span className="text-lg font-bold text-sky-600">
                {tyStats.likes}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-3 my-5">
        {pics.map((pic, index) => {
          //   console.log(pic);
          let width =
            pic.ratio > 1
              ? " md:w-[640px] sm:w-[320px]"
              : " md:w-[320px] sm:w-[640px]";

          return (
            <div
              key={index}
              className={
                "relative shadow-xl rounded-xl shadow-sky-600/30 md:h-[423px] sm:h-[211px] " +
                width
              }
            >
              <Image
                src={pic.displaySrc}
                alt={pic.alt}
                layout="fill"
                className="cursor-pointer  rounded-xl"
                placeholder="blur"
                blurDataURL="/react.png"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open(pic.src, "_blank");
                  }
                }}
              />
              {/* <p>{pic}</p> */}
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
  );
}

export default Photography;
