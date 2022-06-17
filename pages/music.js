import React from "react";
import ReactPlayer from "react-player";

function Music() {
  return (
    <div className="page-container">
      <h2 className="text-left heading-lg ">Music</h2>
      <div className="flex justify-center gap-10 sm:flex-col-reverse md:flex-row sm:items-center">
        <div className="w-full fade-effect">
          <p className="pb-3 text-2xl font-bold text-sky-600">
            Why do I make music?
          </p>
          <p className="pb-3 font-bold text-sky-600">
            Keep it short and sweet.
          </p>
          <p className="pb-3 text-2xl font-bold text-sky-600">
            Inspirations and favorite music
          </p>
          <p className="pb-3 font-bold text-sky-600">
            Keep it short and sweet.
          </p>
          <ReactPlayer url="https://soundcloud.com/user-977088049-503240331/sets/reflections?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
        </div>
      </div>
    </div>
  );
}

export default Music;
