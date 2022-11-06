import React, { useEffect, useRef, useState } from "react";
import p5 from "p5";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useWindowSize } from "@/lib/hooks/useWindowSize";

let codeCanvasWidth = 700;
let codeCanvasTheme = "light";
let sketch2Playing = false;
let mobileScale = false;
function sketch(p) {
  let isHovered = false;
  p.setup = function () {
    let canvas = p.createCanvas(codeCanvasWidth, 400, p.WEBGL);
    canvas.mouseOver(() => {
      isHovered = true;
    });
    canvas.mouseOut(() => {
      isHovered = false;
    });
    p.colorMode(p.HSB);
    p.noiseDetail(1);
  };

  p.draw = function () {
    let boxSize, xAlign, zAlign;
    if (mobileScale) {
      boxSize = 80;
      xAlign = 50;
      zAlign = -100;
    } else {
      boxSize = 30;
      xAlign = 20;
      zAlign = 0;
    }
    if (p.width !== codeCanvasWidth) {
      console.log("resize");
      p.resizeCanvas(codeCanvasWidth, 400);
    }
    let BoW = codeCanvasTheme === "light" ? 100 : 0;
    p.background(BoW);
    let bounce = p.map(p.sin(p.frameCount / 150), -1, 1, 60, -80);
    let bounceRotateX = p.map(bounce, 60, -80, 1.3, 0.6);
    p.translate(0, isHovered ? bounce / 4 : bounce, 0);
    p.push();
    p.translate(xAlign, -50, zAlign);
    p.rotateX(bounceRotateX);
    p.noStroke();

    p.directionalLight([255], p.createVector(0, 30, -1));
    p.directionalLight([255], p.createVector(0, 110, -1));
    let mouseScaleY = p.map(p.mouseY, 0, p.height, 0.5, 0.2);

    p.scale(isHovered ? mouseScaleY : 0.4);

    var start = p.frameCount / 80;

    var xoffCube = 0;
    let bounceRotate = p.map(p.sin(p.frameCount / 150), -1, 1, -0.1, 0.1);
    let mouseBounce = p.map(p.mouseX, 0, p.width, -0, 0.2);
    let mouseBounceY = p.map(p.mouseY, 0, p.height, 0.3, -0.3);
    for (var x = -500; x <= p.width / 2; x += boxSize) {
      let yoffCube = 0;
      p.rotateX(isHovered ? mouseBounceY : 0);
      p.rotateY(isHovered ? mouseBounce : 0);

      for (var y = -50; y <= 500; y += boxSize) {
        var h = p.map(
          p.noise(xoffCube + start, yoffCube + start),
          0,
          1,
          -100,
          190
        );
        var hue = p.map(x, -p.width / 2, p.width / 2, 140, 270);
        var s = p.map(y, -p.height / 2, p.height / 2, 400, 170);
        var b = p.map(h, -100, 100, 0, 200);
        p.push();

        p.fill(hue, s, b);
        p.translate(x, y, -h / 2);
        p.box(boxSize, boxSize, h);
        p.pop();

        yoffCube += 0.1;
      }
      xoffCube += 0.08;
    }
    p.pop();

    //lights
  };
}
function CubeWaveSketch() {
  const { theme } = useTheme();
  const p5ContainerRef = useRef();
  const frame = useRef();
  const [reset, setIsReset] = useState(false);
  const size = useWindowSize();

  const handleWindowSizeChange = () => {
    codeCanvasWidth = frame.current.clientWidth;
  };

  useEffect(() => {
    codeCanvasTheme = theme;
  }, [theme]);
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    codeCanvasWidth = frame.current.clientWidth;
    let p5Instance;
    if (sketch2Playing) {
      p5Instance = new p5(sketch, p5ContainerRef.current);
      mobileScale = size.width < 700 ? true : false;

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
      className="w-full h-[400px] shadow-sky-600/30 shadow-xl rounded-xl dark:bg-black bg-white mt-4 scale-100 relative"
    >
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
          sketch2Playing = true;
          setIsReset(!reset);
        }}
        onViewportLeave={() => {
          sketch2Playing = false;
          setIsReset(!reset);
        }}
        className="absolute top-0 flex items-center justify-center w-full h-full scale-[98%] rounded-xl"
        ref={p5ContainerRef}
      />
    </div>
  );
}

export default CubeWaveSketch;
