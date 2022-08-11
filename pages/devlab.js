import ThreeTest from "@/components/devlab/three";
import React, { useState } from "react";

function DevLab() {
  return (
    <div className="w-full h-screen page-container">
      <div className="flex w-full h-full">
        <ThreeTest />
      </div>
    </div>
  );
}

export default DevLab;
