import React from "react";
import { FaArrowUp } from "react-icons/fa";
import TextareaAutosize from "react-textarea-autosize";
import { IoIosArrowBack } from "react-icons/io";
import { DiSenchatouch } from "react-icons/di";
import { BsCircleFill } from "react-icons/bs";
import axios from "axios";
function Iphone() {
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [messages, setMessages] = React.useState([]);
  const [heightChange, setHeightChange] = React.useState(48);
  const [responseReceived, setResponseReceived] = React.useState(false);

  const submitToAI = async (values) => {
    setResponseReceived(false);
    setLoading(true);
    let allMessages = "";
    for (let i in messages) {
      allMessages += messages[i].msg;
    }
    allMessages = allMessages + " " + input;
    await axios({
      method: "POST",
      url: "/api/innovationAI",
      data: {
        input: allMessages,
        // kind: kind.value,
      },
      // headers: headers,
    })
      .then((response) => {
        setMessages((prev) => {
          return [...prev, { msg: response.data.results, usr: "ai" }];
        });
        setResponseReceived(true);
        setLoading(false);
        if (typeof window !== "undefined") {
          let pane = document.getElementById("pane");
          pane.scrollTop = pane.offsetHeight;
        }
        return response;
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 429") {
          setResponseReceived(true);
          setLoading(false);
          setMessages((prev) => {
            return [
              ...prev,
              {
                msg: "Rate limit exceeded, to many requests sent in one minute ",
                usr: "ai",
              },
            ];
          });
        } else {
          setResponseReceived(true);
          setLoading(false);
          setMessages((prev) => {
            return [
              ...prev,
              {
                msg: "Something went wrong. Please try again later.",
                usr: "ai",
              },
            ];
          });
        }
      });
  };
  return (
    <div className="page-container">
      <h1 className="heading-lg">Conversational Innovation AI</h1>
      <div className="flex flex-col items-center justify-start w-full h-fit">
        {/* <div className="bg-content"></div> */}
        <div className="mobile-body scale-50 relative ">
          <div className="absolute bg-white w-full h-full rounded-[6em] ">
            <div
              id="pane"
              className=" mt-8 pl-10 pb-12 pt-36 pr-8 w-full h-[64.2em] gap-2 flex flex-col overflow-y-scroll"
            >
              {messages.map((msg, index) => {
                if (msg.usr === "ai") {
                  return (
                    <div
                      key={index}
                      className={
                        " w-full flex justify-start relative  p-2 rounded-2xl  z-0"
                      }
                    >
                      <div className="bg-[#e5e5ea] mr-24 p-2 relative rounded-2xl w-fit ">
                        <p className=" text-xl text-black z-[1]">{msg.msg}</p>
                        <DiSenchatouch className="text-slate-200 absolute -left-3 -z-10 rotate-45 text-5xl -bottom-3 " />
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={index} className={" w-full flex justify-end"}>
                    <div className="bg-[#0b93f6] ml-24 p-2 relative rounded-2xl w-fit ">
                      {" "}
                      <p className=" text-xl text-white">{msg.msg}</p>
                    </div>
                  </div>
                );
              })}
              {loading && (
                <div
                  className={
                    "relative bg-slate-200 p-2 rounded-full w-fit z-20"
                  }
                >
                  <div className="flex gap-1 text-xs  z-10 py-2 px-2">
                    <BsCircleFill className="bub1" />
                    <BsCircleFill className="bub2" />
                    <BsCircleFill className="bub3" />
                  </div>
                  <BsCircleFill className="text-slate-200 absolute -left-0 -z-10 rotate-45 text-lg top-7 " />
                  <BsCircleFill className="text-slate-200 absolute -left-2 -z-10 rotate-45 text-[10px] top-[40px] " />
                </div>
              )}
            </div>
          </div>
          <div className="absolute bottom-0 pt-2   bg-slate-200 h-32 rounded-b-[6em] w-full z-100"></div>
          <div
            className="absolute top-0 pt-2 backdrop-blur-md

bg-slate-200/80 border-b-2 h-40 rounded-t-[6em] w-full z-100"
          ></div>
          <div className="top-bar">
            <div className="camera"></div>
            <div className="speaker"></div>
          </div>
          <div className="button volume-up"></div>
          <div className="button volume-down"></div>
          <div className="button silent"></div>
          <div className="button power"></div>
          <div className="layer-2 z-0 "></div>
          <div className="layer-1 ">
            <div
              className={
                "w-full top-20 absolute flex justify-center  z-10 scale-125 "
              }
            >
              <div className="flex flex-col items-center">
                <div className="rounded-full ml-1 bg-slate-400 py-2 px-3">
                  {" "}
                  <button
                    className={
                      "absolute transition bottom-[10px] right-12  text-white f2 text-2xl rounded-full px-2 py-2 " +
                      (input.length > 0 ? " bg-sky-400" : " bg-slate-400")
                    }
                    onClick={() => {
                      if (input.length > 0) {
                        setMessages((prev) => {
                          return [...prev, { msg: input, usr: "ai" }];
                        });
                        setInput("");
                      }
                    }}
                  >
                    <FaArrowUp />
                  </button>
                  <p className="text-white text-xl">AI</p>
                </div>
                <div className="flex items-center gap-0">
                  <p className="text-xs text-slate-700">Innovation AI</p>
                  <IoIosArrowBack className="text-xs text-slate-700/50  cursor-pointer rotate-180" />
                </div>
              </div>
            </div>
            <div className="absolute  top-14 w-full pt-3 px-10  z-10">
              <div className={"left-10 top-5 absolute  z-10 scale-125 "}>
                <IoIosArrowBack className="text-6xl text-sky-600 hover:scale-105 cursor-pointer active:scale-90" />
              </div>
            </div>
            <div className="absolute  bottom-14 w-full pt-3 px-10  z-10">
              <div
                className={
                  "left-[25px] -mt-3 absolute w-[91.2%] h-full bg-slate-200 border-t-2 border-slate-300/50 -z-10  " +
                  (heightChange > 48 ? " rounded-b-3xl" : " rounded-b-[6em]")
                }
              ></div>
              <div className="z-50">
                <TextareaAutosize
                  autoFocus
                  className="w-full  rounded-3xl ring-1 ring-slate-300 f2  text-2xl pl-4 pr-12 py-2"
                  value={input}
                  tabIndex={1}
                  placeholder="Talk to Innovation AI"
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                  onHeightChange={(e, b) => {
                    setHeightChange(e);
                  }}
                />
                <button
                  className={
                    "absolute transition bottom-[10px] right-12  text-white f2 text-2xl rounded-full px-2 py-2 " +
                    (input.length > 0 ? " bg-sky-400" : " bg-slate-400")
                  }
                  onClick={() => {
                    if (input.length > 0) {
                      setMessages((prev) => {
                        return [...prev, { msg: input, usr: "user" }];
                      });
                      setInput("");
                      submitToAI();
                      if (typeof window !== "undefined") {
                        let pane = document.getElementById("pane");
                        pane.scrollTop = pane.offsetHeight;
                      }
                    }
                  }}
                >
                  <FaArrowUp />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Iphone;
