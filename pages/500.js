import Head from "next/head";
import React from "react";

function Custom500() {
  return (
    <>
     <Head>
        <title>500 Error</title>
        <meta
            name="description"
            content={`Website error 500`}
          />
      </Head>
      <div className="page-container ">
        <h2 className="!text-8xl f1 logo ">500</h2>
        <div className="w-fit h-fit">
          <div className="flex flex-col items-center ">
            <p className="text-3xl">An UnGnome error has occurred.</p>
            <p>The server didn&apos;t like that... Try refreshing maybe? </p>
            <picture>
                <source
                  srcSet="/assets/other/gnome.png"
                  type="image/png"
                />
            <img
              src="/assets/other/gnome.png"
              alt="ungnome error occured"
              className="h-80 rounded-3xl !m-0 !p-0"
            />
            </picture>
          </div>
        </div>
      </div>
    </>
    
  );
}

export default Custom500;
