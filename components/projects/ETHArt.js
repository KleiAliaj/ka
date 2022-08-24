import { useEffect, useRef, useState } from "react";
import p5 from "p5";

let pStarsOn = true;

let pETHRotateY = true;
let pETHRotateZ = true;
let p5BG = 0;
let p5Variation = "Wings";

function sketch(p) {
  let radSize, zDistance, loopSize, starSpeed;
  let pStarsObject = [];

  let logo3D;
  p.preload = function () {
    logo3D = p.loadModel("/assets/other/projects/art/ETH/ethereum.obj", true);
  };
  // p is a reference to the p5 instance this sketch is attached to
  p.setup = function () {
    let width = p.windowWidth > 600 ? p.windowWidth - 250 : p.windowWidth - 25;
    p.createCanvas(width, p.windowHeight - 220, p.WEBGL);
    p.colorMode(p.HSB);
    p.noiseDetail(1);

    function makeStar() {
      this.x = p.random(-width3D, width3D);
      this.y = p.random(-height3D, height3D);
      this.z = p.random(width3D);
      this.randLength = p.random(3, 8);
      let width3D = p.width;
      let height3D = p.height;
      // display
      this.update = function () {
        this.z -= starSpeed;
        this.lz = this.z + this.randLength * starSpeed;

        // console.log(this.lz);
        if (this.z < 100) {
          // this.z = width3D;
          this.z = p.random(width3D, width3D * 1.5);
          this.x = p.random(-width3D, width3D);
          this.y = p.random(-height3D, height3D);
          this.lz = this.z;
        }
      };
      this.display = function () {
        let starMapX = p.map(this.x / this.z, 0, 1, 0, width3D);
        let starMapY = p.map(this.y / this.z, 0, 1, 0, height3D);
        let lineMapX = p.map(this.x / this.lz, 0, 1, 0, width3D);
        let lineMapY = p.map(this.y / this.lz, 0, 1, 0, height3D);

        let r = p.map(this.z, 0, width3D, this.randLength, 0);
        let sStarColor = p.map(this.z, 0, width3D, 0, 255);
        p.stroke(sStarColor, 70, 80);
        p.strokeWeight(0.7);
        p.noFill();
        p.line(lineMapX, lineMapY, starMapX, starMapY);
        p.fill(255);

        p.ellipse(starMapX, starMapY, r, r);
      };
    }
    for (let i = 0; i < 100; i += 1) {
      pStarsObject[i] = new makeStar();
    }
  };

  p.draw = function () {
    p.noStroke();
    p.background(p5BG);
    let colorMod = 1;
    let darkMod = 1;
    let r;
    r = p.map(p.sin(p.frameCount / 520), -1, 1, 0, 360);
    p.stroke(255);

    radSize = 3;
    starSpeed = 10;
    if (pStarsOn) {
      for (let i = 0; i < pStarsObject.length; i += 1) {
        pStarsObject[i].update();
        pStarsObject[i].display();
      }
    }
    let spinSpeed = 0.9;
    p.stroke(r + 20, 100, 100);
    p.fill(r, 100, 80, 0.4);
    p.strokeWeight(2);
    p.push();
    p.rotateX(3);

    p.rotateY(p.frameCount * 0.009);
    p.model(logo3D);
    p.pop();
    r = p.map(p.sin(p.frameCount / 120), -1, 1, 0, 360);
    p.strokeWeight(0.8);
    p.rotateY(p.frameCount * 0.0008);

    for (var u = 0; u < 5; u++) {
      p.scale(0.8);
      if (pETHRotateY) {
        p.rotateY(p.frameCount * 0.0008);
      }
      if (pETHRotateZ) {
        p.rotateZ(p.frameCount * 0.00008);
      }
      for (var i = 0; i < 10; i++) {
        var g = p.map(i, 0, 50, 100, 200);
        var b = p.map(p.cos(p.frameCount / 20), -1, 1, 20, 100);
        p.stroke(r, g, b);
        p.rotate(p.frameCount * 0.0006);

        p.push();
        p.stroke(r - colorMod * 3, 100, 100);
        p.fill(r, 100, 80, 0.5);
        let radTor = u * radSize;
        let torX = radTor * p.cos(u * 0.8);
        p.push();
        if (p5Variation === "Triangle") {
          p.scale(2.2);
          let point = 100 * p.cos(p.frameCount * 0.005);
          let m = p.sin(p.frameCount * 0.005);
          let h = 10 * p.cos(p.frameCount * 0.05);
          let gg = p.sin(p.frameCount * 0.005);
          let offset = 150;
          p.translate(offset, offset, offset / 3);
          p.triangle(point, m, 10, 10, h, gg);
          offset = offset + 50;
          colorMod = colorMod + 0.5;
          darkMod = darkMod + 0.01;
          p.pop();
        } else if (p5Variation === "Wings") {
          p.scale(2.5);
          let point = 100 * p.cos(p.frameCount * 0.005);
          let m = p.sin(p.frameCount * 0.005);
          let o = 50;
          let offset = 10;
          p.translate(offset / 3, offset / 3, offset / 3);
          p.beginShape();
          p.vertex(o + 20, point + 30);
          p.bezierVertex(
            torX,
            point * 2,
            m,
            o / 2,
            point / 2,
            m * 2,
            o + 20,
            point + 30,
            0
          );
          p.endShape();
          offset = offset + 50;
          colorMod = colorMod + 0.5;
          darkMod = darkMod + 0.01;
          point = point + 5;
          o = o + 10;
          p.pop();
        } else if (p5Variation === "ETH") {
          let offset = 100;
          p.scale(2.5);
          p.translate(offset * 1.8, offset / 2, offset / 3);
          p.rotateZ(p.frameCount * 0.008 + colorMod);
          p.scale(0.2 - colorMod * 0.004);
          p.model(logo3D);
          offset = offset + 50;
          colorMod = colorMod + 0.5;
          darkMod = darkMod + 0.01;
          p.pop();
        }
      }
    }
  };
}

function ETHArt() {
  const p5ContainerRef = useRef();
  const [reset, setIsReset] = useState(false);
  const [dark, setDark] = useState(true);
  const [rotateY, setRotateY] = useState(true);
  const [rotateZ, setRotateZ] = useState(true);
  const [stars, setStars] = useState(true);
  const [option, setOption] = useState("Wings");

  useEffect(() => {
    // On component creation, instantiate a p5 object with the sketch and container reference
    const p5Instance = new p5(sketch, p5ContainerRef.current);

    // On component destruction, delete the p5 instance
    return () => {
      p5Instance.remove();
    };
  }, [reset]);

  return (
    <div className="flex w-full h-full sm:items-center sm:justify-start lg:items-start lg:justify-center lg:flex-row sm:flex-col fade-effect-quick">
      <div className="flex flex-col items-center justify-start p-2 lg:mr-8 rounded-xl ring-2 ring-sky-400 h-fit w-fit lg:mb-0 sm:mb-4">
        <h3 className="heading-sm">Controls</h3>
        <div className="flex gap-2 lg:flex-col sm:flex-row">
          <div className="flex flex-col p-2 rounded-lg ring-1">
            <div className="flex items-center gap-1">
              <p>Type:</p>
              <button
                className=" button-1 !py-1 !px-1 !w-fit"
                onClick={() => {
                  let next =
                    option === "Wings"
                      ? "Triangle"
                      : option === "Triangle"
                      ? "ETH"
                      : "Wings";
                  setOption(next);
                  p5Variation = next;
                }}
              >
                {option}
              </button>
            </div>
            <div className="flex gap-2 ">
              <p>Stars On: </p>
              <input
                type="checkbox"
                className="slider"
                value={stars}
                defaultChecked={true}
                onChange={(e) => {
                  setStars(e.target.checked);
                  pStarsOn = e.target.checked ? true : false;
                }}
              />
            </div>
            <div className="flex gap-2 ">
              <p>Rotate Y: </p>
              <input
                type="checkbox"
                className="slider"
                value={rotateY}
                defaultChecked={true}
                onChange={(e) => {
                  setRotateY(e.target.checked);
                  pETHRotateY = e.target.checked ? true : false;
                }}
              />
            </div>
            <div className="flex gap-2 ">
              <p>Rotate Z: </p>
              <input
                type="checkbox"
                className="slider"
                value={rotateZ}
                defaultChecked={true}
                onChange={(e) => {
                  setRotateZ(e.target.checked);
                  pETHRotateZ = e.target.checked ? true : false;
                }}
              />
            </div>
            <div className="flex gap-2 ">
              <p>White Bg: </p>
              <input
                type="checkbox"
                className="slider"
                value={dark}
                onChange={(e) => {
                  setDark(e.target.checked);
                  p5BG = e.target.checked ? 255 : 0;
                }}
              />
            </div>
          </div>
        </div>
        <button
          className="mt-2 button-1"
          onClick={() => {
            setIsReset(!reset);
            setDark(true);
            setRotateY(true);
            setRotateZ(true);
            setStars(true);
            setOption("Wings");
            p5Variation = "Wings";
            pStarsOn = true;
            pETHRotateY = true;
            pETHRotateZ = true;
            p5BG = 0;
          }}
        >
          Reset
        </button>
        <a
          href="https://github.com/tyfiero/tyfiero-blog/blob/main/components/projects/ETHArt.js"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 button-bw w-fit f2"
        >
          Github
          <img
            src="/assets/CodeLogos/github.png"
            alt="github logo"
            className="w-6 h-6 dark:invert invert-0"
          />
        </a>
      </div>
      <div
        className="flex items-center justify-center rounded-xl"
        ref={p5ContainerRef}
      />
    </div>
  );
}

export default ETHArt;
