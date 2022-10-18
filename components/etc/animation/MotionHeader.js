import React from "react";
import { motion, useReducedMotion } from "framer-motion";

function MotionHeader({ children }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ x: prefersReducedMotion ? 0 : -300, opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.4, duration: 1.5 },
      }}
      viewport={{ once: true }}
    >
      {children}{" "}
    </motion.div>
  );
}

export default MotionHeader;
