import Image from "next/image";
import React from "react";

function TechChip({ content }) {
  return (
    <div className="flex items-center gap-1 px-3 py-1 shadow-md dark:shadow-sky-500 shadow-sky-500/70 rounded-xl bg-sky-200/30 dark:bg-sky-800/80">
      {content.icon !== null && (
        <div className="w-6 h-5 ">
          <div className="relative w-auto h-5">
            <Image
              src={content.icon}
              alt={`${content.name} icon`}
              fill
              className="object-contain"
              sizes="48px"
            />
          </div>
        </div>
      )}
      <p className="text-sky-800 f1 dark:text-sky-100">{content.name}</p>
    </div>
  );
}

export default TechChip;
