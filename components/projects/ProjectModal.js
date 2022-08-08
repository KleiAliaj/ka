import { useClickOutside } from "@/lib/hooks/useClickOutside";

import React, { createRef } from "react";
import { FaTimes } from "react-icons/fa";

function ProjectModal({ modalOpen, setModalOpen, content, selected }) {
  const menuRef = createRef();

  const onClickOutside = (e) => {
    setModalOpen(false);
  };
  useClickOutside(menuRef, onClickOutside);

  return (
    <>
      <div className="fixed top-0 left-0 z-40 w-screen h-screen fade-effect-quick bg-slate-800/50" />
      <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen ">
        <div
          ref={menuRef}
          className={
            " glass-box md:h-[80vh] h-[92vh]   shadow-2xl flex flex-col lg:w-2/3 md:w-4/5 sm:w-[95%]  items-center !px-10 !pt-5 !pb-10 z-100 bg-white/80 dark:bg-slate-600/80 grow-effect overflow-auto"
          }
        >
          <div className={"modalHeader"}>
            <h3 className="heading-lg !mb-0">{selected}</h3>
          </div>
          <button
            className="absolute text-3xl text-sky-700 dark:sky-100 top-2 right-5 hover:scale-110 dark:text-sky-300"
            onClick={() => setModalOpen(false)}
          >
            <FaTimes />
          </button>

          {content}
        </div>
      </div>
    </>
  );
}

export default ProjectModal;
