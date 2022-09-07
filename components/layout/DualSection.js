import React from "react";

function DualSection({ children, invert = false, cn }) {
  return (
    <section
      className={
        "flex justify-center gap-10 md:items-start sm:flex-col-reverse  sm:items-center px-3 " +
        (invert ? "md:flex-row-reverse " : "md:flex-row ") +
        cn
      }
    >
      {children}
    </section>
  );
}

export default DualSection;
