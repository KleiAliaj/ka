import React from "react";

function TextSection({ children, title = "", cn = "" }) {
  return <div className={"md:w-1/2 sm:w-full " + cn}>{children}</div>;
}

export default TextSection;
