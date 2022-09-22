import { useEffect, useRef, useState } from "react";
import p5 from "p5";
import GithubButton from "../../layout/githubButton";

function sketch(p) {
  let kMax = 10; // between 2-10
  let scaleMax = 2; //between 0.6-2
  let sinColor;
  let direction = -1;

  p.setup = function () {
    let width = p.windowWidth > 600 ? p.windowWidth - 250 : p.windowWidth - 25;
    p.createCanvas(width, p.windowHeight - 220, p.WEBGL);

    if (direction > 0) {
      sinColor = 140;
    } else {
      sinColor = 0;
    }
  };

  p.draw = function () {
    p.background(20);
    p.strokeWeight(1);
    p.noFill();
    p.colorMode(p.HSB);
    // fill(100,200,100,10);
    // p.translate(p.width / 2, 0);

    //map percent change to scale and t max
    p.scale(1.3);
    // p.circle(0, 0, p.width / 2);
    for (let k = 0; k < 14; k++) {
      p.stroke(sinColor - k * 3, 100 - k * 4.5, 20 + k * 9);
      p.beginShape();
      for (let i = 0; i < 6.283185; i += 0.06885) {
        let r1Min = p.map(p.tan(p.frameCount * 0.008), -1, 1, 50, 120);
        let r1Max = p.map(p.cos(p.frameCount * 0.005), -1, 1, 100, 20);

        let r2Min = p.map(p.sin(p.frameCount * 0.005), -1, 1, 120, 50);
        let r2Max = p.map(p.sin(p.frameCount * 0.005), -1, 1, 20, 100);

        var r1 = p.map(p.cos(i * 3), -1, 1, r1Min, r1Max);
        var r2 = p.map(p.cos(i * 6 + 90), -1, 1, r2Min, r2Max);
        var r = r1 + r2 - k * 10;
        var x = r * p.cos(i);
        var y = r * p.sin(i);
        p.vertex(x, y);
      }
      p.endShape(p.CLOSE);
    }
  };
}

function SineFlower() {
  const p5ContainerRef = useRef();
  const [reset, setIsReset] = useState(false);

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
        <button
          className="my-2 button-1"
          onClick={() => {
            setIsReset(!reset);
          }}
        >
          Reset
        </button>

        <GithubButton url="https://github.com/tyfiero/tyfiero-blog/blob/main/components/projects/SineFlower.js" />
      </div>
      <div
        className="flex items-center justify-center rounded-xl"
        ref={p5ContainerRef}
      />
    </div>
  );
}

export default SineFlower;
