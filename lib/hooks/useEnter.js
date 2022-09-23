import { useState, useEffect } from "react";

export function useEnter(callback) {
  //Ideas. Add option to make callback async? Add a command+ enter option?
  //   const [keyPressed, setKeyPressed] = useState(false);
  function downHandler(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      callback();
      //   setKeyPressed(true);
    //   console.log("enter clicked");
    }
  }

  //   const upHandler = ({ key }) => {
  //     if (key === "Enter") {
  //         callback();
  //       setKeyPressed(false);
  //       console.log("UP enter clicked");

  //     }
  //   };
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    // window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
      //   window.removeEventListener("keyup", upHandler);
    };
  }, []);
  //   return keyPressed;
}
