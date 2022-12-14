// import ScrollThree from "@/components/devlab/scrollThree";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

const ThreeTest = dynamic(() => import("@/components/devlab/three"), {
  ssr: false,
});

function DevLab() {
  return (
   <>
   <Head>
        <title>Devlab threejs</title>
        <meta name="description" content={`test page`} />
      </Head>
      <div className="w-full h-screen page-container !p-0">
        <div className="flex w-full h-full">
          <ThreeTest />
          {/* <ScrollThree /> */}
        </div>
      </div>
   </>
  );
}
export default DevLab;
