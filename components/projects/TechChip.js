import React from "react";

function TechChip({ content }) {
  return (
    <div className="px-3 shadow-md dark:shadow-sky-900 shadow-sky-500/70 rounded-xl bg-sky-300/80 dark:bg-sky-600/80 ">
      <p className="text-sky-800 f1 dark:text-sky-100">{content}</p>
    </div>
  );
}

export default TechChip;
