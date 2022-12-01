import ReusableShowBox from "@/components/devlab/ReusableShowBox";
import Head from "next/head";
import React from "react";

function Diagram() {
  return (
    <>
      <Head>
        <title>Diagram visuals</title>
        <meta name="description" content={`Visuals for diagram posts`} />
      </Head>
      <div className="page-container !px-0 h-full min-h-screen !py-0 mt-28">
        <div className="flex flex-col items-center justify-center h-full">
          {/* <section className="w-[1200px] h-[675px] ring-4 ring-white rounded-xl bg-white relative overflow-hidden flex justify-center items-center"> */}
          {/* <img
            src="/assets/other/sky.png"
            alt="gradient bg"
            className="w-[1200px] h-auto absolute top-0 left-0 object-contain opacity-75 z-0"
          /> */}

          {/* <div className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl overflow-hidden w-[89%] h-[90%] shadow-lg z-10 diagram-box"></div> */}
          {/* <div className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl overflow-hidden w-[89%] h-[90%] z-10 diagram-box"></div> */}

          <ReusableShowBox
            imgSrc={"/assets/other/ex.png"}
            bgImg={"/assets/other/color.png"}
          ></ReusableShowBox>

          <div className="z-10 flex items-center justify-center diagram-anim group">
            <div className="p-3 diagram-main">
              <img
                src="/assets/other/ex.png"
                alt="ven diagram"
                className="h-[100%] w-auto  object-contain opacity-75 z-0 group-hover:opacity-100 opacity-80 transition duration-500 ease-in-out scale-75 group-hover:scale-100 translate-z-10"
              />
            </div>
          </div>

          {/* </section> */}
        </div>
        <div className="w-full h-full mt-48 ">
          {" "}
          <div className="mx-auto bg-white testbox">Hello world</div>
        </div>
      </div>
    </>
  );
}

export default Diagram;
