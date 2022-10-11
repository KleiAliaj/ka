import Head from "next/head";
import React from "react";

function CanvasExp() {
  React.useEffect(() => {
    var canvas = document.getElementById("stars");
    var ctx = canvas.getContext("2d");
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    var stars = [];
    for (var i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        radius: Math.random() * 2 + 0.2,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ffffff";
      stars.forEach(function (star) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();
      });
      stars.forEach(function (star) {
        star.x += star.vx;
        star.y += star.vy;
        if (star.x < 0 || star.x > canvas.width) {
          star.vx = -star.vx;
        }
        if (star.y < 0 || star.y > canvas.height) {
          star.vy = -star.vy;
        }
      });
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
  }, []);

  return (
   <>
   <Head>
        <title>Devlab canvas</title>
        <meta name="description" content={`test page`} />
      </Head>
      <div className=" page-container">
        <h2 className="heading-lg !m-0">Canvas Experiment</h2>
  
        <div className="flex items-center justify-center w-full h-[50em] ">
          <div className="relative flex flex-col w-1/2 p-10 h-1/2 ring-2 rounded-xl">
            <canvas
              id="stars"
              width="300"
              height="200"
              className="absolute top-0 left-0 -z-10 ring-2 rounded-xl"
            >
              Your browser does not support the HTML canvas tag.
            </canvas>
            <h2 className="mx-auto text-3xl text-sky-300 ">
              AI Generated HTML Canvas
            </h2>
            <p className="mx-auto text-center text-white">
              Created with React and OpenAI&apos;s Codex
            </p>
            <p className="mx-auto text-center text-white">
              Prompt: Create an animated HTML canvas of a starfield
            </p>
          </div>
        </div>
      </div>
   </>
  );
}

export default CanvasExp;
