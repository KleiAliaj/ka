import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import Select from "react-select";

const DancingWaves = dynamic(
  () => import("../../components/projects/art/DancingWaves"),
  {
    ssr: false,
  }
);
const Spirals = dynamic(() => import("../../components/projects/art/Spirals"), {
  ssr: false,
});
const SineFlower = dynamic(
  () => import("../../components/projects/art/SineFlower"),
  {
    ssr: false,
  }
);
const CubeWave = dynamic(
  () => import("../../components/projects/art/CubeWave"),
  {
    ssr: false,
  }
);
const ETHArt = dynamic(() => import("../../components/projects/art/ETHArt"), {
  ssr: false,
});
function Art() {
  const [sketch, setSketch] = React.useState({
    value: "Cube Matrix",
    label: "🧊 Cube Matrix",
  });

  const options = [
    { value: "Cube Matrix", label: "🧊 Cube Matrix" },
    { value: "Ethereum", label: "✨ Ethereum" },
    { value: "Dancing Waves", label: "🌊 Dancing Waves" },
    { value: "Spirals", label: "🌀 Spirals" },
    { value: "Sine Flower", label: "🌸 Sine Flower" },
  ];

  return (
   <>
    <Head>
        <title>Generative Art</title>
        <meta
            name="description"
            content={"Creative coding art made with p5.js!"}
          />
      </Head>
      <div className="page-container ">
        <div className="flex flex-col">
          <div className="flex flex-col items-center mb-2">
            {" "}
            <h2 className="heading-md !mb-2">{sketch.label}</h2>
            <Select
              options={options}
              value={sketch}
              onChange={(e) => setSketch({ value: e.value, label: e.label })}
              className="min-w-[15em] f2 react-select-container "
              classNamePrefix="react-select"
              placeholder={options[0].label}
            />
          </div>
          {sketch.value === "Dancing Waves" && <DancingWaves />}
          {sketch.value === "Spirals" && <Spirals />}
          {sketch.value === "Sine Flower" && <SineFlower />}
          {sketch.value === "Cube Matrix" && <CubeWave />}
          {sketch.value === "Ethereum" && <ETHArt />}
        </div>
      </div>
   </>
  );
}

export default Art;
