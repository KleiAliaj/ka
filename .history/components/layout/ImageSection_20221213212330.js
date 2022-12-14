import Image from "next/image";
import React from "react";
import MotionImage from "../etc/animation/MotionImage";

function ImageSection({ src, alt }) {
  return (
    <MotionImage classes="md:w-1/2 md:h-[425px] sm:w-4/5 sm:h-[311px] relative shadow-xl rounded-xl shadow-sky-600/30 md:mt-11 ring-offset-8 hover:ring-8 dark:ring-offset-sky-600 dark:ring-sky-700  ring-offset-sky-400 ring-sky-300 transition duration-500">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        // sizes="(max-width: 768px) 80vw,
        //         50vw"
        className="object-cover rounded-xl "
      />
    </MotionImage>
  );
}

export default ImageSection;
