import React, { useEffect, useRef } from "react";
import p5 from "p5";

let codeCanvasHeight = 500;
let codeCanvasWidth = 700;

function sketch(p) {
  // p is a reference to the p5 instance this sketch is attached to
  let isHovered = false;
  p.setup = function () {
    // console.log(codeCanvasWidth);
    console.log(codeCanvasWidth + " " + codeCanvasHeight);

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
    if (p.width !== codeCanvasWidth) {
      console.log("resize");
      p.resizeCanvas(codeCanvasWidth, 400);
    }
    p.background(100);
    let bounce = p.map(p.sin(p.frameCount / 150), -1, 1, 40, -100);
    p.translate(0, isHovered ? bounce / 4 : bounce, 0);
    p.push();
    p.translate(20, -50, 0);
    p.rotateX(1.0);
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
    for (var x = -500; x <= p.width / 2; x += 30) {
      let yoffCube = 0;
      p.rotateX(isHovered ? mouseBounceY : 0);
      p.rotateY(isHovered ? mouseBounce : 0);
      // p.rotateZ(bounceRotate);

      for (var y = -50; y <= 500; y += 30) {
        var h = p.map(
          p.noise(xoffCube + start, yoffCube + start),
          0,
          1,
          -100,
          190
        );

        var hue = p.map(x, -p.width / 2, p.width / 2, 140, 270);

        // hue = map(x, -width / 2, width / 2, 260, 360)

        var s = p.map(y, -p.height / 2, p.height / 2, 400, 150);
        var b = p.map(h, -100, 100, 0, 200);
        p.push();

        p.fill(hue, s, b);
        p.translate(x, y, -h / 2);
        p.box(30, 30, h);
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
  const p5ContainerRef = useRef();
  const frame = useRef();
  const handleWindowSizeChange = () => {
    codeCanvasWidth = frame.current.clientWidth;
    codeCanvasHeight = Math.round(codeCanvasWidth * 0.7);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    codeCanvasWidth = frame.current.clientWidth;
    codeCanvasHeight = Math.round(codeCanvasWidth * 0.7);

    const p5Instance = new p5(sketch, p5ContainerRef.current);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
      p5Instance.remove();
    };
  }, []);
  //   console.log(frame.current.clientHeight);

  return (
    <div
      ref={frame}
      className="relative w-full mt-4 h-[400px] scale-100 bg-white shadow-xl rounded-xl shadow-sky-600/30"
    >
      <div
        className="absolute top-0 flex items-center justify-center w-full h-full scale-[98%] rounded-xl"
        ref={p5ContainerRef}
      />
    </div>
  );
}

export default CubeWaveSketch;
