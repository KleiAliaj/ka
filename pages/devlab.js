import ScrollThree from "@/components/devlab/scrollThree";
import ThreeTest from "@/components/devlab/three";
import React, { useState } from "react";

function DevLab() {
  return (
    <div className="w-full h-screen page-container !p-0">
      <div className="flex w-full h-full">
        <ThreeTest />
        {/* <ScrollThree /> */}
      </div>
    </div>
  );
}
export default DevLab;
