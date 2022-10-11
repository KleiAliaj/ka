// import Goo from "gooey-react";
import React from "react";
import Goo from "./Gooey";
function Loader() {
  return (
    <Goo intensity="weak">
      <svg role="img" aria-label="gooey-loader">
        <defs>
          <filter id="filter" x="0" y="0">
            <feGaussianBlur
              result="blurOut"
              in="SourceGraphic"
              stdDeviation="4"
            />
          </filter>
        </defs>
        <g
          style={{
            animation: "rotate 5s linear infinite",
            willChange: "transform",
          }}
        >
          <circle
            cx="50%"
            cy="35%"
            r="24"
            fill="#1fd7e8"
            filter="url(#filter)"
          />
          <circle
            cx="50%"
            cy="50%"
            r="8"
            fill="#73b8ea"
            filter="url(#filter)"
          />
          <circle
            cx="65%"
            cy="50%"
            r="24"
            fill="#26a3c2"
            filter="url(#filter)"
          />
          <circle
            cx="50%"
            cy="65%"
            r="24"
            fill="#2563eb"
            filter="url(#filter)"
          />
          <circle
            cx="35%"
            cy="50%"
            r="24"
            fill="#4f46e5"
            filter="url(#filter)"
          />
          <circle
            cx="27%"
            cy="50%"
            r="20"
            fill="#1fd7e8"
            style={{
              animation: "rotate 5.5s linear infinite",
              willChange: "transform",
            }}
            filter="url(#filter)"
          />
          <circle
            cx="73%"
            cy="50%"
            r="20"
            fill="#26a3c2"
            style={{
              animation: "rotate 5.5s linear infinite",
              willChange: "transform",
            }}
            filter="url(#filter)"
          />
          <circle
            cx="50%"
            cy="27%"
            r="20"
            fill="#2563eb"
            style={{
              animation: "rotate 5.5s linear infinite",
              willChange: "transform",
            }}
            filter="url(#filter)"
          />
          <circle
            cx="50%"
            cy="73%"
            r="20"
            fill="#4f46e5"
            style={{
              animation: "rotate 5.5s linear infinite",
              willChange: "transform",
            }}
            filter="url(#filter)"
          />
          {/* <circle
            cx="50%"
            cy="60%"
            r="14"
            fill="#v"
            style={{ animation: "rotate 2.5s linear infinite" }}
          /> */}
        </g>
      </svg>
    </Goo>
  );
}

export default Loader;
