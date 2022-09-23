import { useEffect, useRef, useState } from "react";
import p5 from "p5";
import GithubButton from "../../etc/githubButton";

function sketch(p) {
  // p is a reference to the p5 instance this sketch is attached to
  var loopSize; //between 10-200
  var zDistance; //between 0.1 - 5
  var colorMax = 360;
  var colorMin = 0;
  var radSize; // between 1 - 20

  p.setup = function () {
    let width = p.windowWidth > 600 ? p.windowWidth - 250 : p.windowWidth - 25;
    p.createCanvas(width, p.windowHeight - 220, p.WEBGL);
    p.angleMode(p.DEGREES);
    p.colorMode(p.HSB);
    radSize = p.random(1, 10);
    zDistance = p.random(0.1, 5);
    loopSize = p.random(10, 200);
  };

  p.draw = function () {
    p.background(0);

    p.rotateX(60);

    p.noFill();

    for (var i = 0; i < 50; i++) {
      var r = p.map(p.sin(p.frameCount / 2), -1, 1, colorMin, 200);
      var g = p.map(i, 0, 50, 100, 200);
      var b = p.map(p.cos(p.frameCount / 2), -1, 1, colorMin, 100);

      p.stroke(r, g, b);
      p.fill(g, 100, 100, 0.015);
      p.rotate(p.frameCount * 0.02);

      p.beginShape();
      for (var j = 0; j < loopSize; j += 2) {
        var rad = i * radSize;
        var x = rad * p.cos(j);
        var y = rad * p.sin(j);
        var z = p.sin(p.frameCount * zDistance + i * 5) * 50;

        p.vertex(x, y, z);
      }
      p.endShape(p.CLOSE);
    }
  };
}

function DancingWaves() {
  const p5ContainerRef = useRef();
  const [reset, setIsReset] = useState(false);

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
      <div className="flex flex-col items-center justify-start p-5 lg:mr-8 rounded-xl ring-2 ring-sky-400 h-fit w-fit lg:mb-0 sm:mb-4">
        <h3 className="heading-sm">Controls</h3>
        <button
          className="my-2 button-1"
          onClick={() => {
            setIsReset(!reset);
          }}
        >
          Regenerate
        </button>

        <GithubButton url="https://github.com/tyfiero/tyfiero-blog/blob/main/components/projects/DancingWaves.js" />
      </div>
      <div
        className="flex items-center justify-center rounded-xl"
        ref={p5ContainerRef}
      />
    </div>
  );
}

export default DancingWaves;
