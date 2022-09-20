import Link from "next/link";
import React from "react";
import { FaBox, FaKeyboard } from "react-icons/fa";

function IndexDevLab() {
  return (
    <div className="w-full h-full">
      <h2 className="heading-lg">Ty&apos;s Dev Laboratory</h2>

      <div className="w-full h-full p-5">
        <div className="flex flex-wrap items-center justify-center w-full h-full gap-5">
          <Link href={"/devlab/three"}>
            <a className="button-1">
              Three.js <FaBox />
            </a>
          </Link>
          <Link href={"/devlab/enterHook"}>
            <a className="button-1">
              npm Enter hook
              <FaKeyboard />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IndexDevLab;
