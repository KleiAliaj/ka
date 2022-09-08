import React from "react";

function DualSection({ children, invert = false, cn, centerText = false }) {
  return (
    <section
      className={
        "flex justify-center gap-10  sm:flex-col-reverse  sm:items-center px-3 " +
        (invert ? "md:flex-row-reverse " : "md:flex-row ") +
        (centerText ? " md:items-center " : " md:items-start ") +
        cn
      }
    >
      {children}
    </section>
  );
}

export default DualSection;
