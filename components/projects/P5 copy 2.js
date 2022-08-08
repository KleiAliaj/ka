import { useEffect, useRef, useState } from "react";
import p5 from "p5";

function sketch(p) {
  // p is a reference to the p5 instance this sketch is attached to
  p.setup = function () {
    let width = p.windowWidth > 600 ? p.windowWidth - 250 : p.windowWidth - 25;
    p.createCanvas(width, p.windowHeight - 220, p.WEBGL);
    p.background(0);
    p.circle(200, 200, 400);
  };

  p.draw = function () {
    // your draw code here
  };
}

function P5() {
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
          className="button-1"
          onClick={() => {
            setIsReset(!reset);
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

export default P5;
