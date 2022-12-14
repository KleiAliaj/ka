import React from "react";
import { motion } from "framer-motion";
import {
  TbArrowBarLeft,
  TbArrowBigLeft,
  TbArrowBigRight,
} from "react-icons/tb";

function Gradient() {
  const [rotation, setRotation] = React.useState(0);
  const [xVal, setXVal] = React.useState(50);
  const [yVal, setYVal] = React.useState(80);

  return (
    <div
    // initial={{ scale: 0 }}
    // animate={{ scale: 1 }}
    // transition={{ duration: 0.5 }}
    // className="bg-sky-400 rounded-full shadow-md w-40 h-40"
    >
      <motion.svg
        className="h-80 w-80 "
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.linearGradient
          gradientUnits="userSpaceOnUse"
          id="gradient"
          x1="0%"
          y1="25%"
          x2="100%"
          y2="75%"
          initial={{
            gradientTransform: "rotate(0 0.5 0.5)",
            x2: "100%",
            y2: "100%",
          }}
          animate={{
            gradientTransform: `rotate(${rotation} 0.5 0.5)`,
            x2: `${xVal}%`,
            y2: `${yVal}%`,
          }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 2 }}
        >
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="50%" stopColor="#f6e" />
          <stop offset="100%" stopColor="#fff" />
        </motion.linearGradient>

        <motion.rect width="400" height="400" fill="url(#gradient)" />
      </motion.svg>

      <div className="flex flex-col items-center gap-2 ">
        <div className="flex flex-col items-center">
          <p>Rotation: {rotation}</p>
          <input
            type="range"
            min={-180}
            max={180}
            step={1}
            defaultValue={rotation}
            onChange={(e) => {
              setRotation(Number(e.target.value));
            }}
          />
        </div>
        <div className="flex flex-col items-center">
          <p>X2 Value: {xVal}%</p>
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            defaultValue={xVal}
            onChange={(e) => {
              setXVal(Number(e.target.value));
            }}
          />
        </div>
        <div className="flex flex-col items-center">
          <p>Y2 Value: {yVal}%</p>
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            defaultValue={yVal}
            onChange={(e) => {
              setYVal(Number(e.target.value));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Gradient;
