import React, { useEffect, useRef, useState } from "react";
import p5 from "p5";
import { useTheme } from "next-themes";
import { FaUndo, FaUndoAlt } from "react-icons/fa";
import { motion } from "framer-motion";

let codeCanvasWidth = 700;
let artCanvasTheme = "light";
let sketchPlaying = false;
function sketch(p) {
  let loopSize; //between 10-200
  let zDistance; //between 0.1 - 5
  let colorMax = 360;
  let colorMin = 40;
  let radSize; // between 1 - 20
  let isHovered = false;
  p.setup = function () {
    let canvas = p.createCanvas(codeCanvasWidth, 400, p.WEBGL);
    canvas.mouseOver(() => {
      isHovered = true;
    });
    canvas.mouseOut(() => {
      isHovered = false;
    });
    p.angleMode(p.DEGREES);

    p.colorMode(p.HSB);
    p.noiseDetail(1);
    radSize = p.random(1, 10);
    zDistance = p.random(0.1, 5);
    loopSize = p.random(10, 200);
  };

  p.draw = function () {
    // if (p.width !== codeCanvasWidth) {
    //   console.log("resize");
    //   p.resizeCanvas(codeCanvasWidth, 400);
    // }
    let BoW = artCanvasTheme === "light" ? 100 : 0;
    p.background(BoW);

    p.rotateX(80);

    p.noFill();
    let mouseX = isHovered ? p.map(p.mouseX, 0, p.width, 0.001, 0.06) : 0.02;
    let mouseY = isHovered ? p.map(p.mouseY, 0, p.height, 0.2, -0.2) : 1;
    for (var i = 0; i < 50; i++) {
      var r = 2 * i + p.map(p.sin(p.frameCount / 2), -1, 1, colorMin, 200);
      var g = i + p.map(p.sin(p.frameCount / 2), -1, 1, colorMin, 200);
      var b = 3 * i + p.map(p.sin(p.frameCount / 2), -1, 1, colorMin, 200);
      p.stroke(r, g, b);
      p.fill(r, r, r, 0.15);
      p.rotate(p.frameCount * mouseX);

      p.beginShape();
      for (var j = 0; j < loopSize; j += 2) {
        var rad = i * radSize;
        var x = rad * p.cos(j);
        var y = rad * p.sin(j);
        var z = p.sin((p.frameCount / 2) * (zDistance * mouseY) + i * 5) * 50;

        p.vertex(x, y, z);
      }
      p.endShape(p.CLOSE);
    }
  };
}
function WavesSketch() {
  const { theme } = useTheme();
  const p5ContainerRef = useRef();
  const frame = useRef();
  const [reset, setIsReset] = useState(false);

  const handleWindowSizeChange = () => {
    codeCanvasWidth = frame.current.clientWidth;
  };

  useEffect(() => {
    artCanvasTheme = theme;
  }, [theme]);
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    codeCanvasWidth = frame.current.clientWidth;

    if (sketchPlaying) {
      const p5Instance = new p5(sketch, p5ContainerRef.current);
      // console.log(")))))))))CREATED CANVAS(((((((((((");
    }

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
      if (p5Instance) {
        p5Instance.remove();
        // console.log("*************REMOVED CANVAS************");
      }
    };
  }, [reset]);
  //   console.log(frame.current.clientHeight);

  return (
    <div
      ref={frame}
      className="relative w-full mt-4 h-[400px] scale-100 dark:bg-black bg-white shadow-xl rounded-xl shadow-sky-600/30 group"
    >
      <button
        className="absolute z-50 p-2 transition rounded-full text-sky-700/10 top-1 right-1 bg-sky-300/10 group-hover:text-sky-700 group-hover:bg-sky-300/70"
        onClick={() => {
          setIsReset(!reset);
        }}
      >
        <FaUndo />
      </button>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.5,
          },
        }}
        viewport={{ once: false, amount: 0.2 }}
        onViewportEnter={() => {
          sketchPlaying = true;
          setIsReset(!reset);
        }}
        onViewportLeave={() => {
          sketchPlaying = false;
          setIsReset(!reset);
        }}
        className="absolute top-0 flex items-center justify-center w-full h-full !scale-[98%] rounded-xl z-0 "
        ref={p5ContainerRef}
      />
    </div>
  );
}

export default WavesSketch;
