import React from "react";
import Image from "next/image";

function About() {
  return (
    <div className="page-container">
      <h2 className="text-left heading-lg ">About Me</h2>

      <div className="w-[640px] h-[423px] relative shadow-xl rounded-xl shadow-sky-600/30">
        <Image
          src="/profileshot.jpg"
          alt="Ty Fiero image"
          layout="fill"
          className=" rounded-xl"
        />
      </div>
    </div>
  );
}

export default About;
