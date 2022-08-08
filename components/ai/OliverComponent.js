import { TypeWriter } from "@/components/ai/TypeWriter";
import React, { useEffect } from "react";
// import LoaderOli from "./LoaderOli";

function Oliver({ playing, aiLoading, responseReceived, answer, kind }) {
  const [imgSrc, setImgSrc] = React.useState("../oli-therapist.webp");

  useEffect(() => {
    if (kind === "therapist") {
      setImgSrc("../oli-therapist.webp");
      document.querySelector(":root").style.setProperty("--shirt", "#38bdf8");
      document
        .querySelector(":root")
        .style.setProperty("--shirt-collar", "#04344a");
      document
        .querySelector(":root")
        .style.setProperty("--border-shirt", "#0672a3");
      document.getElementById("glasses").style.display = "block";
      document.getElementById("glass-lens").style.display = "block";
      document.getElementById("heart").style.display = "none";
      document.getElementById("cross").style.display = "none";
      document.getElementById("cross2").style.display = "none";
    } else if (kind === "ceo") {
      setImgSrc("../oli-ceo.webp");
      document.querySelector(":root").style.setProperty("--shirt", "#050505");
      document
        .querySelector(":root")
        .style.setProperty("--shirt-collar", "#595857");
      document
        .querySelector(":root")
        .style.setProperty("--border-shirt", "#353535");

      document.getElementById("glasses").style.display = "none";
      document.getElementById("glass-lens").style.display = "none";
      document.getElementById("heart").style.display = "none";
      document.getElementById("cross").style.display = "none";
      document.getElementById("cross2").style.display = "none";
    } else if (kind === "relationship") {
      setImgSrc("../oli-love.webp");
      document.querySelector(":root").style.setProperty("--shirt", "#d651bb");
      document
        .querySelector(":root")
        .style.setProperty("--shirt-collar", "#933881");
      document
        .querySelector(":root")
        .style.setProperty("--border-shirt", "#b5449e");
      document.getElementById("glasses").style.display = "none";
      document.getElementById("glass-lens").style.display = "none";
      document.getElementById("heart").style.display = "block";
      document.getElementById("cross").style.display = "none";
      document.getElementById("cross2").style.display = "none";
    } else if (kind === "friend") {
      setImgSrc("../oli-bar.webp");
      document.querySelector(":root").style.setProperty("--shirt", "#3f54db");
      document
        .querySelector(":root")
        .style.setProperty("--shirt-collar", "#303fa5");
      document
        .querySelector(":root")
        .style.setProperty("--border-shirt", "#2b3991");
      document.getElementById("glasses").style.display = "none";
      document.getElementById("glass-lens").style.display = "none";
      document.getElementById("heart").style.display = "none";
      document.getElementById("cross").style.display = "none";
      document.getElementById("cross2").style.display = "none";
    } else if (kind === "speaker") {
      setImgSrc("../oli-stage.webp");
      document.querySelector(":root").style.setProperty("--shirt", "#71ff49");
      document
        .querySelector(":root")
        .style.setProperty("--shirt-collar", "#3cba1a");
      document
        .querySelector(":root")
        .style.setProperty("--border-shirt", "#4bdd23");
      document.getElementById("glasses").style.display = "none";
      document.getElementById("glass-lens").style.display = "none";
      document.getElementById("heart").style.display = "none";
      document.getElementById("cross").style.display = "none";
      document.getElementById("cross2").style.display = "none";
    } else if (kind === "doctor") {
      setImgSrc("../oli-hospital.webp");
      document.querySelector(":root").style.setProperty("--shirt", "#fff");
      document
        .querySelector(":root")
        .style.setProperty("--shirt-collar", "#babbbc");
      document
        .querySelector(":root")
        .style.setProperty("--border-shirt", "#e0e0e0");
      document.getElementById("glasses").style.display = "block";
      document.getElementById("glass-lens").style.display = "block";
      document.getElementById("heart").style.display = "none";
      document.getElementById("cross").style.display = "block";
      document.getElementById("cross2").style.display = "block";
    }
  }, [kind]);

  useEffect(() => {
    let eye = document.getElementById("eye");
    let eye2 = document.getElementById("eye2");
    setInterval(function () {
      eye.classList.add("eye-animation");
      eye2.classList.add("eye-animation2");
      setTimeout(function () {
        eye.classList.remove("eye-animation");
        eye2.classList.remove("eye-animation2");
      }, 2000);
    }, 5000);
  }, []);

  useEffect(() => {
    let mouth = document.getElementById("talking");
    if (playing) {
      mouth.classList.add("mouth-animation");
    } else {
      mouth.classList.remove("mouth-animation");
    }
  }, [playing]);

  function type(i, speed, input, output) {
    document.getElementById(oe).innerHTML += input.charAt(i);
    setTimeout(function () {
      i < input.length - 1 ? type(i + 1, t, ie, oe) : false;
    }, speed);
  }
  return (
    <div className="relative w-fit h-fit">
      <div className="absolute top-0 left-0 w-fit h-fit -z-10">
        <img src={imgSrc} className="rounded-lg object-fit w-fit h-fit" />
      </div>

      {responseReceived && (
        <div
          className={
            "absolute flex items-start justify-center p-3 text-left rounded-xl sm:w-[60vw] md:w-[50vw] sm:top-40 md:top-64 px-5 md:right-64 sm:right-36 h-fit min-h-10 bg-gradient-to-tr from-sky-200 via-sky-50 to-white !border-bg-sky-200 dark:bg-slate-800/60 shadow-lg  bubble bubble-arrow mb-40"
          }
        >
          <TypeWriter content={answer.trimStart()} speed={50} />
          <br />
          <br />
          <p className="hidden whitespace-pre-wrap">{answer.trimStart()}</p>
        </div>
      )}

      <div className="cartoon hb">
        <div className="cartoon hb">
          <div className="body ha"></div>
          <div className="neck"></div>
          <div className="collar"></div>
          <div className="line"></div>
          <div className="line2"></div>
          <div className="heart" id="heart"></div>
          <div className="cross" id="cross"></div>
          <div className="cross2" id="cross2"></div>
        </div>
        <div className=" cartoon hb head-ani">
          <div className="ear ha hb ear-back"></div>
          <div className="hair-back b r"></div>
          <div className="chin hb "></div>
          <div className="cheek ha hb"></div>
          <div className="cheek ha hb"></div>
          <div className="overflow-hidden eye ha hb" id="eye">
            <div className="pupil ha hb" id="pupil"></div>
            <div className="iris ha hb" id="iris"></div>
          </div>
          <div className="overflow-hidden eye ha hb" id="eye2">
            <div className="pupil ha hb" id="pupil"></div>
            <div className="iris ha hb" id="iris"></div>
          </div>
          <div className="eyebrow"></div>
          <div className="eyebrow"></div>
          <div className="glass-lens b r" id="glass-lens"></div>
          <div className="nose r ha"></div>
          <div className="glasses b r ha hb" id="glasses"></div>
          <div className="side-hair b r ha"></div>
          <div className="ear ha hb"></div>
          <div className="mouth r b ha hb"></div>
          <div
            className={"overflow-hidden half-circle "}
            id="talking"
            //   style={{ height: `${10}%` }}
          >
            <div className="tongue b r ha hb"></div>
          </div>
          <div className="hair-top b ha hb"></div>
        </div>
      </div>
      <style jsx>{`
        .loader-oli {
          width: 48px;
          height: 48px;
          display: inline-block;
          position: relative;
        }
        .loader-oli::after,
        .loader-oli::before {
          content: "";
          box-sizing: border-box;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #7dd3fc;
          position: absolute;
          left: 0;
          top: 0;
          animation: animloader 2s linear infinite;
        }
        .loader-oli::after {
          animation-delay: 1s;
        }

        @keyframes animloader {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }

        .bubble {
          line-height: 24px;
          text-align: center;
          color: #000;
        }

        .bubble-arrow:before {
          content: "";
          width: 0px;
          height: 0px;
          position: absolute;
          border-right: 48px solid #fff;
          border-left: 24px solid transparent;
          border-bottom: 24px solid #fff;
          border-top: 40px solid transparent;
          transform: rotate(20deg);
          right: -12px;
          top: -44px;
        }
        /*------------------Begin Character---------------------- */

        .cartoon {
          width: 40vmin;
          height: 40vmin;

          overflow: hidden;
        }

        .cartoon div {
          position: absolute;
          box-sizing: border-box;
        }

        .b {
          border: 0.25vmin solid;
        }

        .r {
          border-radius: 100%;
        }

        .hb::before,
        .ha::after {
          content: "";
          display: block;
          position: absolute;
          box-sizing: border-box;
        }

        .cross {
          position: relative;
          background: red;
          width: 10px;
          height: 30px;
          top: 83%;
          left: 62%;
        }
        .cross2 {
          width: 30px;
          background: red;
          height: 10px;
          top: 86%;
          left: 59.2%;
        }
        .heart {
          position: relative;
          top: 85%;
          left: 38%;
          width: 100px;
          height: 90px;
        }

        .heart:before,
        .heart:after {
          position: absolute;
          content: "";
          left: 50px;
          top: 0;
          width: 50px;
          height: 80px;
          background: #ad249f;
          border-radius: 50px 50px 0 0;
          transform: rotate(-45deg);
          transform-origin: 0 100%;
        }

        .heart:after {
          left: 0;
          transform: rotate(45deg);
          transform-origin: 100% 100%;
        }
        .chin {
          width: 40%;
          height: 25%;
          border: 0.25vmin solid var(--border-skin);
          background: var(--skin);
          border-radius: 5vmin 0 12vmin 10vmin;
          border-top-color: var(--skin);
          top: 40%;
          left: 50%;
          transform: translate(-50%, 0);
        }

        .chin::before {
          width: 98%;
          width: calc(99% - 0.25vmin);
          height: 70%;
          background: var(--skin);
          border-radius: 7vmin 6vmin 0 0;
          border: 0.25vmin solid var(--border-skin);
          border-bottom: 0;
          top: -60%;
          left: 4%;
          z-index: 2;
        }

        .ear {
          width: 10%;
          height: 12%;
          border: 0.25vmin solid var(--border-skin);
          border-radius: 80% 100% 100% 90%;
          border-left-color: var(--skin);
          background: var(--skin);
          transform: rotate(10deg);
          left: 65%;
          top: 40%;
        }

        .ear::after {
          width: 1.5vmin;
          height: 1.5vmin;
          border-radius: 50%;
          border: 0.25vmin solid var(--border-skin);
          border-left-color: var(--skin);
          background: var(--skin);
          top: 45%;
          left: 15%;
        }

        .ear::before {
          width: 60%;
          height: 60%;
          border: 0.25vmin solid var(--border-skin);
          border-radius: 50%;
          border-right-color: var(--skin);
          border-bottom-color: var(--skin);
          transform: rotate(10deg);
          top: 15%;
          left: 22%;
        }

        .nose {
          width: 6%;
          height: 6%;
          border: 0.12vmin solid var(--skin);
          border-top: 0.25vmin solid var(--border-skin);
          border-left: 0.25vmin solid var(--border-skin);
          top: 47%;
          left: 40%;
          transform: rotate(270deg);
          background: var(--skin);
          z-index: 4;
        }

        .nose::after {
          width: 50%;
          height: 97%;
          border-radius: 50%;
          border: 0.12vmin solid transparent;
          border-right: 0.25vmin solid var(--border-skin);
          border-bottom: 0.5vmin solid transparent;
          transform: rotate(-50deg);
          top: -7%;
          left: 80%;
          z-index: 4;
        }

        .glasses {
          color: var(--glasses);
          width: 18%;
          height: 18%;
          top: 33%;
          left: 46%;
          background: #fff2;
          z-index: 5;
        }

        .glasses::before {
          width: 50%;
          border-top: 0.12vmin solid var(--glasses);
          left: 99%;
          top: 35%;
          transform: rotate(10deg);
          z-index: 5;
        }

        .glasses::after {
          width: 1.5vmin;
          height: 1.5vmin;
          border-radius: 50%;
          border: 0.25vmin solid var(--glasses);
          top: 25%;
          left: -21%;
          border-right-color: transparent;
          border-bottom-color: transparent;
          transform: rotate(53deg);
          z-index: 5;
        }

        .glass-lens {
          color: var(--glasses);
          width: 17%;
          height: 17%;
          top: 32%;
          left: 26.5%;
          background: #fff2;
          z-index: 5;
        }
        /* .mic {
          width: 20%;
          height: 20%;
          border-color: black;
          background: var(--skin);
          z-index: 2;
          border-left: 0.12vmin solid black;
          border-bottom-color: transparent;
          top: 47%;
          left: 57%;
          transform: rotate(40deg);
        } */

        .mouth {
          width: 20%;
          height: 10%;
          border-color: transparent;
          background: var(--skin);
          z-index: 2;
          border-left: 0.12vmin solid transparent;
          border-bottom-color: var(--border-skin);
          top: 47%;
          left: 37%;
          transform: rotate(-5deg);
        }

        .mouth::after {
          width: 1vmin;
          height: 1vmin;
          border: 0.12vmin solid transparent;
          border-top: 0.25vmin solid var(--border-skin);
          border-right: 0.25vmin solid var(--border-skin);
          border-radius: 50%;
          top: 73%;
          right: 5%;
        }
        .half-circle {
          top: 54.5%;
          left: 39%;
          width: 17%;
          height: 0%;
          background: #432e1f;
          border: 0.3vmin solid var(--border-skin);

          border-bottom-left-radius: 580px;
          border-bottom-right-radius: 510px;

          border-top: 0;
          transform: rotate(-6deg);
        }
        .tongue {
          top: 70%;
          left: 25%;
          width: 80%;
          height: 90%;
          background: #c1708a;

          border-top-left-radius: 80px;
          border-top-right-radius: 80px;
          z-index: 3;
          border: none;
          transform: rotate(-7deg);
        }

        .mouth-animation {
          animation: aniMouth 0.3s ease infinite;
        }

        @keyframes aniMouth {
          0% {
            height: 0%;
            border-bottom-right-radius: 210px;

            border-bottom-left-radius: 280px;
          }
          50% {
            height: 7%;
            border-bottom-right-radius: 810px;

            border-bottom-left-radius: 780px;
          }
          100% {
            height: 0%;
            border-bottom-right-radius: 210px;

            border-bottom-left-radius: 280px;
          }
        }

        .head-ani {
          animation: aniHead 5s ease infinite;
        }

        @keyframes aniHead {
          0% {
            transform: rotate(0deg);
          }
          33% {
            transform: rotate(2deg);
          }
          66% {
            transform: rotate(-2deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .ear-back {
          left: 30%;
          top: 37%;
          transform: scaleX(-1);
        }

        .eye {
          width: 9%;
          height: 10%;
          border-radius: 100% / 120% 120% 30% 40%;
          border: 0.25vmin solid var(--border-skin);
          background: white;
          top: 36%;
          left: 50%;
          transform: rotate(3deg);
        }
        .eye-animation {
          animation: animeye 0.4s linear infinite;
          animation-iteration-count: 1;
        }

        @keyframes animeye {
          0% {
            height: 10%;
            top: 36%;
          }
          50% {
            height: 0.2%;
            top: 40%;
          }
          100% {
            height: 10%;
            top: 36%;
          }
        }

        .eye-animation2 {
          animation: animeye2 0.4s linear infinite;
          animation-iteration-count: 1;
        }

        @keyframes animeye2 {
          0% {
            height: 10%;
            top: 35%;
          }
          50% {
            height: 0.2%;
            top: 40%;
          }
          100% {
            height: 10%;
            top: 35%;
          }
        }

        .eye + .eye {
          left: 33.5%;
          top: 35%;
          transform: scale(0.95) rotate(3deg);
        }

        .pupil {
          width: 1.25vmin;
          height: 1.25vmin;
          border-radius: 50%;
          background: black;
          top: 40%;
          left: 30%;
          box-shadow: 0 0 0 0.25vmin var(--iris);
        }

        .iris {
          width: 0.5vmin;
          height: 0.5vmin;
          border-radius: 50%;
          background: white;
          top: 43%;
          left: 33%;
          box-shadow: 0.4vmin -0.25vmin 0 -0.15vmin white;
        }

        .neck {
          width: 15%;
          height: 20%;
          border: 0.25vmin solid var(--border-skin);
          background: var(--skin);
          top: 60%;
          left: 45%;
          border-bottom-right-radius: 5vmin;
          border-bottom-left-radius: 2vmin;
          z-index: 0;
        }
        .collar {
          width: 20%;
          height: 11%;
          border: 0.25vmin solid var(--shirt-collar);
          background: var(--border-shirt);
          top: 71.5%;
          left: 42%;
          border-top-right-radius: 1vmin;
          border-top-left-radius: 2vmin;
          border-bottom-right-radius: 9vmin;
          border-bottom-left-radius: 7vmin;
          z-index: -1;
        }
        .side-hair {
          border-color: var(--border-hair);
          background: var(--hair);
          width: 10%;
          height: 20%;
          top: 25%;
          left: 66%;
          transform: rotate(-10deg);
        }

        .side-hair::after {
          width: 2.5vmin;
          height: 2.5vmin;
          border-radius: 100% 0%;
          border: 0.25vmin solid var(--border-hair);
          background: var(--hair);
          transform: rotate(30deg);
          left: 50%;
          top: -15%;
        }

        .hair-top {
          width: 40%;
          height: 15%;
          border-color: var(--border-hair);
          background: var(--hair);
          border-radius: 100% 100% 40% 90%;
          transform: rotate(-2deg);
          top: 15%;
          left: 30%;
        }

        .hair-top::before {
          width: 2.5vmin;
          height: 2.5vmin;
          border-radius: 100% 0%;
          border: 0.25vmin solid var(--border-hair);
          background: var(--hair);
          bottom: -1vmin;
          right: 0%;
          box-shadow: 2vmin -2vmin 0 -0.25vmin var(--hair),
            2vmin -2vmin var(--border-hair);
        }

        .hair-top::after {
          width: 2.5vmin;
          height: 2.5vmin;
          background: var(--hair);
          top: 62%;
          left: 88%;
          border-radius: 50%;
          box-shadow: -0.5vmin 0.25vmin var(--hair),
            -0.15vmin -0.75vmin var(--hair), 0.65vmin 0 var(--hair);
        }

        .hair-back {
          width: 15%;
          height: 25%;
          border-color: var(--border-hair);
          background: var(--hair);
          transform: rotate(10deg);
          top: 25%;
          left: 31.5%;
        }

        .eyebrow {
          width: 10%;
          height: 3%;
          border: 0.25vmin solid var(--border-hair);
          background: var(--hair);
          border-radius: 5vmin 300% 0 0;
          transform: rotate(5deg);
          top: 32.5%;
          left: 50%;
        }

        .eyebrow + .eyebrow {
          transform: scale(0.95) scaleX(-1) rotate(2deg);
          left: 33%;
          top: 32%;
        }

        .cheek {
          width: 12%;
          height: 6%;
          top: 45%;
          left: 48.5%;
          transform: rotate(3deg);
          z-index: 4;
        }

        .cheek + .cheek {
          transform: scale(0.9) rotate(3deg);
          left: 32%;
          top: 43.5%;
        }

        .cheek::after {
          width: 0.25vmin;
          height: 0.25vmin;
          background: var(--border-skin);
          color: var(--border-skin);
          border-radius: 50%;
          top: 45%;
          left: 40%;
          box-shadow: 0.75vmin -0.25vmin, -0.8vmin -0.3vmin, 1.5vmin -0.25vmin;
        }

        .cheek::before {
          width: 100%;
          height: 100%;
          background: var(--flush);
          border-radius: 50%;
          filter: blur(0.5vmin);
          z-index: 4;
        }

        .shirt-neck {
          width: 15%;
          height: 8%;
          border-color: var(--border-shirt);
          background: var(--shirt);
          transform: rotate(-20deg) skew(7deg);
          top: 68%;
          left: 53%;
        }

        .shirt-neck-back {
          left: 39%;
          top: 67%;
          transform: rotate(-10deg) skew(-20deg);
        }

        .shirt-back {
          width: 10%;
          height: 5%;
          border-top: 0.25vmin solid var(--border-shirt);
          background: var(--shirt);
          top: 66%;
          left: 56%;
        }

        .shirt-vneck {
          width: 8%;
          height: 9%;
          border-left: 0.25vmin solid var(--border-shirt);
          border-bottom: 0.25vmin solid var(--border-shirt);
          transform: rotate(-35deg);
          top: 65.5%;
          left: 42%;
          box-shadow: 0 3vmin var(--shirt), 1vmin 12vmin 0 2.5vmin var(--shirt),
            -1.5vmin 2.75vmin var(--shirt);
        }

        .body {
          width: 67%;
          height: 50%;
          border: 0.25vmin solid var(--border-shirt);
          background: var(--shirt);
          border-radius: 100% / 50% 80% 80% 10%;
          top: 71%;
          left: 54%;
          transform: translate(-50%, 0) rotate(1deg);
          z-index: -2;
        }

        .line {
          background: var(--border-shirt);
          width: 2%;
          height: 2%;
          border-radius: 100% 100% 0 0;
          height: 20%;
          left: 33%;
          top: 95%;
        }

        .line2 {
          background: var(--border-shirt);
          width: 2%;
          height: 2%;
          border-radius: 100% 100% 0 0;
          height: 20%;
          left: 73%;
          top: 93%;
        }
      `}</style>
    </div>
  );
}

export default Oliver;
