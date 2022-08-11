import dynamic from "next/dynamic";
import React from "react";
import Select from "react-select";

const DancingWaves = dynamic(
  () => import("../../components/projects/DancingWaves"),
  {
    ssr: false,
  }
);
const Spirals = dynamic(() => import("../../components/projects/Spirals"), {
  ssr: false,
});
const SineFlower = dynamic(() => import("../../components/projects/SineFlower"), {
  ssr: false,
});
const CubeWave = dynamic(() => import("../../components/projects/CubeWave"), {
  ssr: false,
});
const ETHArt = dynamic(() => import("../../components/projects/ETHArt"), {
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
  );
}

export default Art;