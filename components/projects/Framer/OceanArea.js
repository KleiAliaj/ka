import React from "react";
import { TbRefresh } from "react-icons/tb";
function OceanArea({ name, children }) {
  console.log(name);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h3 className="mt-2 heading-md">{name}</h3>
      {children}
    </div>
  );
}

export default OceanArea;
