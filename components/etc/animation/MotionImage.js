import React from "react";
import { motion, useReducedMotion } from "framer-motion";

function MotionImage({ children, delay = 0, classes="w-full h-full" }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
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
    </motion.div>
  );
}

export default MotionImage;
