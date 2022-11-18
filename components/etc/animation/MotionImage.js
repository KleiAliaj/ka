import React from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";

function MotionImage({ children, delay = 0, classes = "w-full h-full" }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={classes}
        initial={{ scale: prefersReducedMotion ? 1 : 0.6, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.5,
            delay: delay,
          },
        }}
        viewport={{ once: true }}
      >
        {children}{" "}
      </m.div>
    </LazyMotion>
  );
}

export default MotionImage;
