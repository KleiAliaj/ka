import Head from "next/head";
import Link from "next/link";
import React from "react";
import { FaBox, FaImage, FaKeyboard, FaPhone } from "react-icons/fa";

function DevLabPage() {
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
            <Link className="button-1" href={"/devlab/canvas"}>
              npm Enter hook
              <FaKeyboard />
            </Link>
            <Link className="button-1" href={"/devlab/Framer-ocean"}>
              Framer Ocean
              <FaImage />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default DevLabPage;
