import Image from "next/image";
import React from "react";

function ImageSection({ src, alt }) {
  return (
    <div className="md:w-1/2 md:h-[425px] sm:w-4/5 sm:h-[311px] relative shadow-xl rounded-xl shadow-sky-600/30 md:mt-11">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        sizes="100%"
        objectFit="cover"
        className="object-cover rounded-xl"
      />
    </div>
  );
}

export default ImageSection;
