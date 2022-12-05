import { useEnter } from "@/lib/hooks/useEnter";
import Head from "next/head";
import React from "react";

function EnterHook() {
  // console.log("----------------");
  const [hit, setHit] = React.useState(false);
  const [hitNum, setHitNum] = React.useState(0);

  // const handleHit = React.useCallback(() => {
  const handleHit = () => {
    console.log(hit);
    if (hit) {
      console.log("hit");
      setHit(false);
    } else {
      console.log("NOT");
      setHit(true);
    }
    setHitNum((prev) => prev + 1);
  };
  // }, [hit]);

  const handleHitNum = () => {
    setHitNum((prev) => prev + 1);
  };
  const enter = useEnter(handleHit);

  return (
    <>
      <Head>
        <title>Devlab enter</title>
        <meta name="description" content={`test page`} />
      </Head>
      <div>
        <h1 className="heading-lg">EnterHook Test</h1>
        <div className="flex flex-wrap items-center justify-center w-full h-full gap-5">
          <input type="text" name="" id="" className="textarea-tw" />
          <button className="button-1" onClick={handleHit}>
            Enter to submit
          </button>
        </div>
        <div
          className={
            "mt-20 h-40 flex items-center justify-center   " +
            (hit ? "bg-sky-400" : "bg-teal-600")
          }
        >
          <p className="text-5xl text-white ">
            {" "}
            {hit ? "Enter HIT!!" : "Not hit :("}
          </p>
          <p className="ml-10 text-5xl text-white">{hitNum}</p>
        </div>
      </div>
    </>
  );
}

export default EnterHook;
