import Head from "next/head";
import React from "react";

function Travel() {
  return (
    <>
      <Head>
        <title>Places I have been</title>
        <meta name="description" content={`Ty's travels.`} />
      </Head>
      <div className="page-container">
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=17RHxjwzkrJIq_GPtHD4D5qRzErpuvB4&ehbc=2E312F"
            width="100%"
            height="600"
          ></iframe>
        </div>
        <article className="w-full px-10 pb-10 pt-5 overflow-y-auto max-w-[620px] mx-auto">
          <h2 className="heading-lg ">Travels</h2>
          <div className="w-full">
            <div className="text-box">
              <p className="">
                My family loved road trips, we hardly ever flew anywhere if we
                could drive there instead. I saw so much of the country this
                way, in fact, before I was even 16 I had visited over 30 states
                and 4 countries. To me, there is no better way to see the world
                than by car, it helps to feel the &apos;vibe&apos; of the place
                you are visiting or driving through. My goal is to see all 50
                states, and at least 20 countries in my lifetime.
              </p>
            </div>
            <h2 className="heading-md mt-10">Stats</h2>
            <div className="w-full flex md:flex-row sm:flex-col justify-between items-center">
              <div className="flex-col gap-1 items-center">
                <div className="flex flex-col items-center  rounded-lg bg-white/70 dark:bg-slate-800/70 shadow-lg shadow-sky-500/40 p-2 max-w-[12em]">
                  <h3 className="heading-sm">States Visited</h3>
                  <h3 className="heading-md !text-sky-700">
                    <span className="text-sky-400">43</span>/50
                  </h3>
                  <div className="w-4/5 rounded-md bg-gray-200 h-3">
                    <div
                      className="bg-sky-400 h-3 rounded-md"
                      style={{ width: "86%" }}
                    ></div>
                  </div>
                </div>
                <h3 className="heading-sm mt-5">States Left to Visit</h3>
                <ul className=" flex flex-col items-start px-5 list-disc ">
                  <li>
                    <p>North Dakota</p>
                  </li>
                  <li>
                    <p>Rhode Island</p>
                  </li>
                  <li>
                    <p>Maine</p>
                  </li>
                  <li>
                    <p>Connecticut</p>
                  </li>
                  <li>
                    <p>Vermont</p>
                  </li>
                  <li>
                    <p>New Hampshire</p>
                  </li>
                  <li>
                    <p>Hawaii</p>
                  </li>
                </ul>
              </div>
              <div className="flex-col gap-1 items-center sm:mt-16">
                <div className="flex flex-col items-center  rounded-lg bg-white/70 dark:bg-slate-800/70 shadow-lg shadow-sky-500/40 p-2 max-w-[12em]">
                  <h3 className="heading-sm ">Countries Visited</h3>
                  <h3 className="heading-md !text-sky-700">
                    <span className="text-sky-400">7</span>/20
                  </h3>
                  <div className="w-4/5 rounded-md bg-gray-200 h-3">
                    <div
                      className="bg-sky-400 h-3 rounded-md"
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                </div>

                <h3 className="heading-sm mt-5">Countries Visited</h3>
                <ul className=" flex flex-col items-start px-5 list-decimal ">
                  <li>
                    <p>USA</p>
                  </li>
                  <li>
                    <p>Canada</p>
                  </li>
                  <li>
                    <p>Mexico</p>
                  </li>
                  <li>
                    <p>Costa Rica</p>
                  </li>
                  <li>
                    <p>England</p>
                  </li>
                  <li>
                    <p>Scotland</p>
                  </li>
                  <li>
                    <p>Wales</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default Travel;
