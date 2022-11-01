import React from "react";
import { motion } from "framer-motion";

function Simple({ reset }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-sky-200 to-sky-500 rounded-full shadow-md w-40 h-40"
    ></motion.div>
  );
}

export default Simple;
