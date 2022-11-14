import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

function ShiftButton({ href, icon, title, classes = "" }) {
  return (
    <Link
      className={"button-1  overflow-hidden group !px-0  " + classes}
      href={href}
    >
      <div className="flex gap-2 text-xl items-center translate-x-4 group-hover:-translate-x-4 transition duration-500">
        {" "}
        <div className="text-2xl group-hover:opacity-0 opacity-100 group-hover:-translate-x-6 transition duration-300">
          {icon}
        </div>
        <p className="text-xl text-white font-bold">{title}</p>
        <FaArrowRight className="text-xl translate-x-4  delay-200   group-hover:translate-x-1 transition duration-300  " />
      </div>
    </Link>
  );
}

export default ShiftButton;
