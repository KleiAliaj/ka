import React from "react";
import ReactPlayer from "react-player";

function Music() {
  return (
    <div className="page-container">
      <h2 className="text-left heading-lg ">Music</h2>
      <div className="flex justify-center gap-10 sm:flex-col-reverse md:flex-row sm:items-center">
        <div className="w-full fade-effect">
          <ReactPlayer url="https://soundcloud.com/user-977088049-503240331/sets/reflections?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing" />
        </div>
      </div>
    </div>
  );
}

export default Music;
