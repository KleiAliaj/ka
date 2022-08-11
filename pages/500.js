import React from "react";

function Custom500() {
  return (
    <div className="page-container ">
      <h2 className="!text-8xl f1 logo ">500</h2>
      <div className="w-fit h-fit">
        <div className="flex flex-col items-center ">
          <p className="text-3xl">An UnGnome error has occurred.</p>
          <p>The server didn&apos;t like that... Try refreshing maybe? </p>
          <img
            src="/assets/other/gnome.png"
            alt="ungnome error occured"
            className="h-80 rounded-3xl !m-0 !p-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Custom500;
