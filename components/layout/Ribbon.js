import React from "react";

function Ribbon() {
  return (
      <>
            {/* Ribbon */}
            {/* <div className="relative h-56 rounded-sm bg-slate-200 w-80"> */}
            <div className="absolute w-32 h-32 overflow-hidden rounded-md -top-2 -right-2 ">
              <div className="absolute top-0 left-0 w-2 h-2 bg-sky-500"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-sky-500"></div>
              <a
                href="#"
                className="py-1.5 bg-sky-300 text-sky-800 font-semibold uppercase text-sm tracking-wider block w-square-diagonal text-center absolute bottom-0 right-0 rotate-45 origin-bottom-right shadow-sm"
              >
                <p className="f1">My cool ribbon</p>
              </a>
              </div>
            {/* </div> */}
      </>
  );
}

export default Ribbon;
