import React from "react";
import { m, useReducedMotion } from "framer-motion";
function ReusableShowBox({
  children,
  imgSrc,
  imgAlt = "",
  bgImg,
  width = 1000,
  height = 575,
}) {
  const prefersReducedMotion = useReducedMotion();

  let frameStyle = {
    width: `${width * 0.9}px`,
    height: `${height * 0.9}px`,
  };
  let mainStyle = {
    width: `${width * 0.9}px`,
    height: `${height * 0.9}px`,
  };
  let bgStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: `${width}px`,
    height: `${height}px`,
  };
  return (
    <div
      //   initial={{
      //     scale: prefersReducedMotion ? 1 : 0.75,
      //     rotateY: "-30deg",
      //     rotateX: "45deg",
      //     translateZ: "4.5rem",
      //   }}
      //   whileInView={{
      //     scale: 1,
      //     rotateY: "0deg",
      //     rotateX: "0deg",
      //     translateZ: "0rem",
      //     transition: {
      //       type: "spring",
      //       bounce: 0.4,
      //       duration: 1.5,
      //     },
      //   }}
      //   whileHover={{
      //     scale: 0.85,
      //     rotateY: "-10deg",
      //     rotateX: "20deg",
      //     translateZ: "2.5rem",
      //     transition: {
      //       type: "spring",
      //       bounce: 0.4,
      //       duration: 1.5,
      //     },
      //   }}
      //   viewport={{ once: false }}
      id="background-plane"
      className=" reuse-bg  z-10 flex justify-center items-center group   "
      style={bgStyle}
    >
      <div
        id="main-plane"
        className=" reuse-main   flex justify-center items-center "
        style={mainStyle}
      >
        {children}
        {imgSrc && (
          <img
            src={imgSrc}
            alt={imgAlt}
            className="h-[100%] w-auto  object-contain opacity-75 z-0 group-hover:opacity-50 opacity-100 transition duration-500 ease-in-out transition"
          />
        )}
        <div
          id="plane-frame"
          className=" absolute reuse-frame"
          style={frameStyle}
        ></div>
      </div>
    </div>
  );
}

export default ReusableShowBox;
