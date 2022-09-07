import React from "react";

function TextSection({ children, title }) {
  return (
    <div className="md:w-1/2 sm:w-full ">
      <h2 className="font-bold heading-md ">{title}</h2>
      {children}
    </div>
  );
}

export default TextSection;
