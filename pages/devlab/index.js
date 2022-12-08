import Head from "next/head";
import Link from "next/link";
import React from "react";
import {
  FaBolt,
  FaBox,
  FaImage,
  FaKeyboard,
  FaPhone,
  FaPills,
} from "react-icons/fa";

function IndexDevLab() {
  return (
    <>
      <Head>
        <title>Ty&apos;s Dev Lab. shhhh secret!</title>
        <meta
          name="description"
          content={`um... you arent supposed to be here!`}
        />
      </Head>
      <div className="w-full h-full">
        <h2 className="heading-lg">Ty&apos;s Dev Laboratory</h2>

        <div className="w-full h-full p-5">
          <div className="flex flex-wrap items-center justify-center w-full h-full gap-5">
            <Link className="button-1" href={"/devlab/three"}>
              Three.js <FaBox />
            </Link>
            <Link className="button-1" href={"/devlab/enterHook"}>
              npm Enter hook
              <FaKeyboard />
            </Link>
            <Link className="button-1" href={"/devlab/pharma"}>
              Pharma QA
              <FaPills />
            </Link>
            <Link className="button-1" href={"/devlab/Framer-ocean"}>
              Framer Ocean
              <FaImage />
            </Link>
            <Link className="button-1" href={"/devlab/Framer-ocean"}>
              Flashy
              <FaBolt />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexDevLab;
