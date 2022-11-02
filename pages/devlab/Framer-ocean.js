import CodeBlock from "@/components/projects/Framer/CodeBlock";
import OceanArea from "@/components/projects/Framer/OceanArea";
import Gradient from "@/components/projects/Framer/Scenes/gradient";
import Simple from "@/components/projects/Framer/Scenes/simple";
import AllFramer from "@/components/projects/Framer/Scenes/simple copy";
import Svg from "@/components/projects/Framer/Scenes/svg";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { FaCamera, FaFish } from "react-icons/fa";
import {
  TbAccessible,
  TbAppWindow,
  TbClick,
  TbCode,
  TbColorSwatch,
  TbConfetti,
  TbFish,
  TbGridDots,
  TbLayoutBoard,
  TbList,
  TbMouse,
  TbMouse2,
  TbMovie,
  TbPencil,
  TbRefresh,
  TbTools,
  TbTrees,
} from "react-icons/tb";

function FramerOcean() {
  const [selected, setSelected] = React.useState("All");
  const [resetCount, setResetCount] = React.useState(0);
  const [current, setCurrent] = React.useState({
    name: "All",
    icon: <TbGridDots />,
    content: <AllFramer />,
  });

  const [showCode, setShowCode] = React.useState(false);
  let sections = [
    { name: "All", icon: <TbGridDots />, content: <AllFramer /> },
    {
      name: "Simple",
      icon: <TbFish />,
      content: <Simple />,
    },
    { name: "SVG Drawing", icon: <TbPencil />, content: <Svg /> },
    { name: "Scroll effects", icon: <TbMouse />, content: <Simple /> },
    { name: "useScroll", icon: <TbMouse2 />, content: <Simple /> },
    { name: "Stagger Children", icon: <TbList />, content: <Simple /> },
    { name: "Drag", icon: <TbClick />, content: <Simple /> },
    { name: "Animate Presence", icon: <TbConfetti />, content: <Simple /> },
    {
      name: "Prefer Reduced Motion",
      icon: <TbAccessible />,
      content: <Simple />,
    },
    { name: "Layout", icon: <TbLayoutBoard />, content: <Simple /> },
    { name: "Keyframes", icon: <TbMovie />, content: <Simple /> },
    { name: "Hooks?", icon: <TbTools />, content: <Simple /> },
    { name: "Gradients", icon: <TbColorSwatch />, content: <Gradient /> },
    { name: "Tree Shaking?", icon: <TbTrees />, content: <Simple /> },
  ];
  return (
    <>
      <Head>
        <title>Framer Motion Ocean</title>
        <meta
          name="description"
          content={`Framer motion animation library playground and examples`}
        />
      </Head>
      <div className="page-container !px-0 h-full min-h-screen !py-0">
        <div className="flex  md:flex-row sm:flex-col w-full h-full min-h-full ">
          <nav className="w-80 border-r-[1px] border-y-[1px] border-slate-700 rounded-tr-md rounded-br-md  h-full bg-gradient-to-b from-white via-white to-sky-50 min-h-screen">
            <div className="flex flex-col gap-0 items-center">
              <h1 className="heading-sm !mb-0 flex items-center gap-2">
                Framer Motion Ocean
                <FaFish />
              </h1>
              <p className="text-sm">An ocean of animation examples</p>
            </div>
            <div className="flex flex-col gap-2 px-2 h-full py-2">
              {sections.map((section, index) => {
                return (
                  <button
                    key={index}
                    className={
                      "w-full pl-8 rounded-md hover:bg-sky-200  flex gap-2 py-1 transition items-center " +
                      (selected === section.name
                        ? " bg-sky-600 text-white"
                        : " bg-white text-slate-700")
                    }
                    onClick={() => {
                      setCurrent(section);
                      console.log(section);
                      setSelected(section.name);
                    }}
                  >
                    {section.icon}{" "}
                    <p
                      className={
                        " " +
                        (selected === section.name
                          ? "  text-white"
                          : " text-slate-700 ")
                      }
                    >
                      {section.name}
                    </p>
                  </button>
                );
              })}
            </div>
          </nav>
          <div className="w-full relative bg-white/70 border-t-2">
            <button
              className="absolute top-2 right-2 bg-sky-600 text-3xl text-white rounded-full p-1 hover:scale-110 active:scale-90 transition"
              onClick={() => {
                setShowCode(!showCode);
              }}
            >
              {showCode ? <TbAppWindow /> : <TbCode />}
            </button>

            <AnimatePresence>
              {showCode ? (
                <motion.div
                  exit={{ opacity: 0, scale: 0.2 }}
                  initial={{ opacity: 0, scale: 0.2 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                  }}
                  className="w-full flex justify-center items-center h-4/5"
                >
                  <CodeBlock
                    setShowCode={setShowCode}
                    showCode={showCode}
                    code={`
                    <button
                    key={index}
                    className="w-full pl-8 rounded-md hover:bg-sky-300  flex gap-2 py-1 transition items-center "
                    onClick={() => {
                      setSelected(section.name);
                    }}
                  >
                    {section.icon}{" "}
                    <p
                      className={
                        " " +
                        (selected === section.name
                          ? "  text-white"
                          : " text-slate-700 ")
                      }
                    >
                      {section.name}
                    </p>
                  </button>`}
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
            <OceanArea name={current.name}>
              <button
                className="absolute top-3 right-[3.5rem] text-white bg-sky-600 text-2xl transition rounded-full p-1 hover:scale-105 active:scale-90"
                onClick={() => {
                  setResetCount(resetCount + 1);
                }}
              >
                <TbRefresh className="active:-rotate-180 hover:-rotate-45 transition duration-500" />
              </button>
              {/* {current.content} */}
              {/* <AnimatePresence> */}
              <div
                // exit={{ opacity: 0, scale: 0.2 }}
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{
                //   type: "spring",
                //   duration: 0.5,
                // }}
                className="w-full h-full flex justify-center items-center"
                key={resetCount}
              >
                {current.content}
              </div>
              {/* </AnimatePresence> */}
            </OceanArea>
          </div>
        </div>
      </div>
    </>
  );
}

export default FramerOcean;
