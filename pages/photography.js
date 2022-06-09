import React from "react";
import Image from "next/image";
import axios from "axios";

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

  const axiosImages = await axios
    .get("https://api.unsplash.com/users/tyfiero/photos", {
      headers: {
        Authorization: "Client-ID " + process.env.UNSPLASH_ACCESS_KEY,
      },
    })
    .then(function (response) {
      if (response) {
        //   console.log(response.data);
        let urls = response.data.map(function (i) {
          return i.urls;
        });
        // console.log(urls);
        let oneUrl = urls.map(function (i) {
          return i.full;
        });
        //   console.log(oneUrl);
        tyImages = oneUrl;
        return tyImages;
      } else {
        console.log("Success!");
      }
    });

  //   console.log(tyImages);

  return {
    props: { tyImages }, // will be passed to the page component as props
  };
}

function Photography({ tyImages }) {
  //   console.log(tyImages);
  const [pics, setPics] = React.useState(tyImages);
  console.log(pics[0]);
  return (
    <div className="page-container">
      <h2>Photography</h2>
      <div className="flex justify-center gap-10 sm:flex-col-reverse md:flex-row">
        <div className="md:w-1/2 sm:w-full">
          <p className="font-bold text-large">Why I take pictures</p>
          <p>
            Photography is my creative outlet that gets me outside, and helps me
            notice and appreciate the beauty of the Pacific Northwest (and some
            of my pets). I am by no means a professional, far from it. But I do
            have a decent Nikon camera, an eye for nature photography, and the
            patience to find the right shot. Little by little, I feel myself
            getting better. I don't ever expect to be famous for my photography,
            or even make a single dollar. I do this for me. My mind is so much
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
          <br />
          <div className="max-w-4xl p-4 !pb-2 text-gray-800 bg-white rounded-lg shadow-xl shadow-sky-600/30">
            <div className="mb-2">
              <div className="h-3 text-3xl text-left text-gray-600">“</div>
              <blockquote className="px-4 text-base italic text-center text-gray-600">
                We cannot predict the value our work will provide to the world.
                That’s fine. It is not our job to judge our own work. It is our
                job to create it, to pour ourselves into it, and to master our
                craft as best we can. &nbsp; &nbsp;-James Clear
              </blockquote>
              <div className="h-3 mb-2 text-3xl text-right text-gray-600">
                “
              </div>
            </div>
          </div>
        </div>
        <div className="w-[640px] h-[423px] relative shadow-xl rounded-xl shadow-sky-600/30">
          <Image
            src="https://images.unsplash.com/photo-1653794280522-96224d9338c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
            alt="Aerial view of the Pacific Northwest"
            layout="fill"
            className=" rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center w-full gap-3 my-5">
        {pics.map((pic, index) => {
          //   console.log(pic);
          return (
            <div className="w-[640px] h-[423px]  relative shadow-xl rounded-xl shadow-sky-600/30">
              <a href={pic}>
                <Image
                  src={pic}
                  alt="Aerial view of the Pacific Northwest"
                  layout="fill"
                  className=" rounded-xl"
                  onClick={() => {
                    console.log(pic);
                  }}
                />
              </a>
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
