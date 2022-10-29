import CodeBlock from "@/components/projects/Framer/CodeBlock";
import Head from "next/head";
import React from "react";
import { FaCamera, FaFish } from "react-icons/fa";
import { TbAppWindow, TbCode } from "react-icons/tb";

function FramerOcean() {
  const [selected, setSelected] = React.useState("All");
  const [showCode, setShowCode] = React.useState(false);
  let sections = [
    { name: "All", icon: <FaCamera /> },
    { name: "Animate Presence", icon: <FaCamera /> },
    { name: "Animate Presence", icon: <FaCamera /> },
    { name: "Animate Presence", icon: <FaCamera /> },
    { name: "Animate Presence", icon: <FaCamera /> },
    { name: "Animate Presence", icon: <FaCamera /> },
    { name: "Animate Presence", icon: <FaCamera /> },
    { name: "Animate Presence", icon: <FaCamera /> },
    { name: "Animate Presence", icon: <FaCamera /> },
    { name: "Animate Presence", icon: <FaCamera /> },
    { name: "Animate Presence", icon: <FaCamera /> },
    { name: "Animate Presence", icon: <FaCamera /> },
    { name: "Animate Presence", icon: <FaCamera /> },
    { name: "Animate Presence", icon: <FaCamera /> },
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
                      "w-full pl-8 rounded-md hover:bg-sky-300  flex gap-2 py-1 transition items-center " +
                      (selected === section.name
                        ? " bg-sky-600 text-white"
                        : " bg-white text-slate-700")
                    }
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

            {showCode ? (
              <CodeBlock
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
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default FramerOcean;
