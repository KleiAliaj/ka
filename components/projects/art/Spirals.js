import { useEffect, useRef, useState } from "react";
import p5 from "p5";
import GithubButton from "../../etc/githubButton";
let pSpeed = 1;
let pRotate = 1;
function sketch(p) {
  // p is a reference to the p5 instance this sketch is attached to
  p.setup = function () {
    let width = p.windowWidth > 600 ? p.windowWidth - 250 : p.windowWidth - 25;
    p.createCanvas(width, p.windowHeight - 220, p.WEBGL);
    p.angleMode(p.DEGREES);
    p.rectMode(p.CENTER);
  };

  p.draw = function () {
    p.background(10, 20, 30);
    p.noFill();
    p.strokeWeight(2);
    p.scale(0.4);
    // p.translate(p.width / 2, p.height / 2);

    var h = p.map(p.sin(p.frameCount), -1, 1, 50, 255);
    var g = p.map(p.cos(p.frameCount / 2), -1, 1, 50, 255);
    var b = p.map(p.sin(p.frameCount / 4), -1, 1, 50, 255);

    for (var i = 0; i < 50; i++) {
      p.push();

      p.rotate(p.sin(p.frameCount + i) * 500);

      p.stroke(h, g, b, 90);

      p.ellipse(0, 0, 2 - i * 8, 200 - i * 3, 200 - i);
      p.rect(0, 0, 6000 - i * 8, 600 - i * 3, 200 - i);

      p.pop();
    }
  };
}

function Spirals() {
  const p5ContainerRef = useRef();
  const [reset, setIsReset] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [rotate, setRotate] = useState(1);

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
        <GithubButton url="https://github.com/tyfiero/tyfiero-blog/blob/main/components/projects/Spirals.js" />
      </div>
      <div
        className="flex items-center justify-center rounded-xl"
        ref={p5ContainerRef}
      />
    </div>
  );
}

export default Spirals;
