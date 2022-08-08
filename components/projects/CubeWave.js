import { useEffect, useRef, useState } from "react";
import p5 from "p5";

let pCubeHeight = 190;
let pRotationX = 0;
let pRotationY = 0;
let pRotationZ = 0;
let pCubeColor = 80;
let pCubeColor2 = 240;
let pBW = 0;
function sketch(p) {
  let pCubeNum = 20;

  // p is a reference to the p5 instance this sketch is attached to
  p.setup = function () {
    let width = p.windowWidth > 600 ? p.windowWidth - 250 : p.windowWidth - 25;
    p.createCanvas(width, p.windowHeight - 220, p.WEBGL);
    p.colorMode(p.HSB);
    p.noiseDetail(1);
  };

  p.draw = function () {
    p.orbitControl();

    p.background(pBW);

    p.push();
    p.translate(-20, -50, 0);
    p.rotateX(1.0);
    p.noStroke();

    p.directionalLight([255], p.createVector(0, 30, -1));
    p.directionalLight([255], p.createVector(0, 110, -1));

    p.scale(0.5);

    var start = p.frameCount / 60;

    var xoffCube = 0;
    for (var x = -500; x <= p.width / 2; x += pCubeNum) {
      let yoffCube = 0;
      p.rotateX(pRotationX);
      p.rotateY(pRotationY);
      p.rotateZ(pRotationZ);

      for (var y = -50; y <= 500; y += pCubeNum) {
        var h = p.map(
          p.noise(xoffCube + start, yoffCube + start),
          0,
          1,
          -100,
          pCubeHeight
        );

        var hue = p.map(x, -p.width / 2, p.width / 2, pCubeColor, pCubeColor2);

        // hue = map(x, -width / 2, width / 2, 260, 360)

        var s = p.map(y, -p.height / 2, p.height / 2, 500, 150);
        var b = p.map(h, -100, 100, 0, 255);
        p.push();

        p.fill(hue, s, b);
        p.translate(x, y, -h / 2);
        p.box(pCubeNum, pCubeNum, h);
        p.pop();

        yoffCube += 0.1;
      }
      xoffCube += 0.08;
    }
    p.pop();

    //lights
  };
}

function CubeWave() {
  const p5ContainerRef = useRef();
  const [reset, setIsReset] = useState(false);
  const [dark, setDark] = useState(true);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);
  const [cubeH, setCubeH] = useState(190);

  const [color, setColor] = useState(80);
  const [color2, setColor2] = useState(240);

  useEffect(() => {
    // On component creation, instantiate a p5 object with the sketch and container reference
    const p5Instance = new p5(sketch, p5ContainerRef.current);

    // On component destruction, delete the p5 instance
    return () => {
      p5Instance.remove();
    };
  }, []);

  return (
    <div className="flex w-full h-full sm:items-center sm:justify-start lg:items-start lg:justify-center lg:flex-row sm:flex-col fade-effect-quick">
      <div className="flex flex-col items-center justify-start p-5 lg:mr-8 rounded-xl ring-2 ring-sky-400 h-fit w-fit lg:mb-0 sm:mb-4">
        <h3 className="heading-sm">Controls</h3>
        <div className="flex gap-2 lg:flex-col sm:flex-row">
          <div className="flex flex-col p-2 rounded-lg ring-1">
            <div className="flex flex-col items-start">
              <p>Cube Height</p>
              <div className="flex gap-2">
                <input
                  type="range"
                  className="slider"
                  min="0"
                  max="1200"
                  step="1"
                  value={cubeH}
                  onChange={(e) => {
                    setCubeH(e.target.value);
                    pCubeHeight = e.target.value;
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <p>Rotate X</p>
              <div className="flex gap-2">
                <input
                  type="range"
                  className="slider"
                  min="-2"
                  max="2"
                  step="0.01"
                  value={rotateX}
                  onChange={(e) => {
                    setRotateX(e.target.value);
                    pRotationX = e.target.value;
                  }}
                />
                <p className="w-8">{rotateX}</p>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <p>Rotate Y</p>
              <div className="flex gap-2">
                <input
                  type="range"
                  className="slider"
                  min="-2"
                  max="2"
                  step="0.01"
                  value={rotateY}
                  onChange={(e) => {
                    setRotateY(e.target.value);
                    pRotationY = e.target.value;
                  }}
                />
                <p className="w-8">{rotateY}</p>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <p>Rotate Z</p>
              <div className="flex gap-2 ">
                <input
                  type="range"
                  className="slider"
                  min="-2"
                  max="2"
                  step="0.01"
                  value={rotateZ}
                  onChange={(e) => {
                    setRotateZ(e.target.value);
                    pRotationZ = e.target.value;
                  }}
                />
                <p className="w-8">{rotateZ}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-2 rounded-lg ring-1">
            <div className="flex flex-col items-start">
              <p>Color Start</p>
              <div className="flex gap-2 ">
                <input
                  type="range"
                  className="slider"
                  min="0"
                  max="360"
                  step="1"
                  value={color}
                  onChange={(e) => {
                    setColor(e.target.value);
                    pCubeColor = e.target.value;
                  }}
                />
                <p className="w-8">{color}</p>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <p>Color Stop</p>
              <div className="flex gap-2 ">
                <input
                  type="range"
                  className="slider"
                  min="0"
                  max="360"
                  step="1"
                  value={color2}
                  onChange={(e) => {
                    setColor2(e.target.value);
                    pCubeColor2 = e.target.value;
                  }}
                />
                <p className="w-8">{color2}</p>
              </div>
            </div>

            <div className="flex flex-col items-start">
              <div className="flex gap-2 ">
                <p>White Background: </p>
                <input
                  type="checkbox"
                  className="slider"
                  value={dark}
                  onChange={(e) => {
                    setDark(e.target.checked);
                    pBW = e.target.checked ? 255 : 0;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className="mt-2 button-1"
          onClick={() => {
            setIsReset(!reset);
            setColor(80);
            setColor2(240);
            setRotateX(0);
            setRotateY(0);
            setRotateZ(0);
            setCubeH(190);
            pCubeColor = 80;
            pCubeColor2 = 240;
            pRotationX = 0;
            pRotationY = 0;
            pRotationZ = 0;
            pCubeHeight = 190;
          }}
        >
          Reset
        </button>
      </div>
      <div
        className="flex items-center justify-center rounded-xl"
        ref={p5ContainerRef}
      />
    </div>
  );
}

export default CubeWave;
