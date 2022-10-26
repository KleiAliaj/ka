import React from "react";
import { FaArrowUp } from "react-icons/fa";
import TextareaAutosize from "react-textarea-autosize";
import { IoIosArrowBack } from "react-icons/io";
import { DiSenchatouch } from "react-icons/di";
import { BsCircleFill } from "react-icons/bs";
import axios from "axios";
import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import { AnimatePresence, motion } from "framer-motion";
import { useKeyPress } from "@/lib/hooks/useKeyPress";

function MessageScreen({ setMove, screen, move }) {
  const [input, setInput] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [loadingIntro, setLoadingIntro] = React.useState(true);
  const [messages, setMessages] = React.useState([]);
  const [heightChange, setHeightChange] = React.useState(48);
  const [responseReceived, setResponseReceived] = React.useState(false);

  React.useEffect(() => {
    // console.log(loadingIntro + " " + move);
    if (loadingIntro) {
      if (move) {
        setTimeout(() => {
          setLoadingIntro(false);
        }, 2500);
      }
    }
  }, [screen.name, move]);

  const enter = useKeyPress("Enter");
  React.useEffect(() => {
    if (enter) {
      send();
    }
  }, [enter]);
  const scrollDown = () => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        let pane = document.getElementById("pane");
        pane.scroll({ top: pane.scrollHeight, behavior: "smooth" });
      }, 100);
    }
  };
  const send = () => {
    if (input.length > 0) {
      setMessages((prev) => {
        return [...prev, { msg: input, usr: "user" }];
      });
      setInput("");
      submitToAI();
      scrollDown();
    }
  };
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
        kind: screen.name,
      },
      // headers: headers,
    })
      .then((response) => {
        if (typeof response.data.results !== "string") {
          setMessages((prev) => {
            return [
              ...prev,
              {
                msg: "Sorry, an error occurred, I can't respond right now 😕",
                usr: "ai",
              },
            ];
          });
        } else {
          setMessages((prev) => {
            return [...prev, { msg: response.data.results, usr: "ai" }];
          });
        }
        setResponseReceived(true);
        setLoading(false);
        scrollDown();
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

  const variants = {
    initial: {
      opacity: 0,
      y: 300,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        mass: 0.2,
        damping: 20,
      },
    },
  };
  const loadVariant = {
    initial: {
      opacity: 0,
      y: 300,
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        mass: 0.2,
        damping: 20,
        delay: 0.9,
      },
    },
  };
  return (
    <>
      {" "}
      <ScrollContainer
        id="pane"
        className="fixed mt-8  pb-16 pt-40 px-10 w-full h-[64.2em] gap-5 flex flex-col  overflow-y-scroll pointer-events-auto  "
      >
        <AnimatePresence>
          {loadingIntro ? (
            <motion.div
              initial="initial"
              animate="enter"
              variants={loadVariant}
              layout
              className={
                "relative bg-[#e5e5ea] dark:bg-[#333333] p-2 rounded-full w-fit z-20 ml-1"
              }
            >
              <div className="flex gap-1 text-xs  z-10 py-2 px-2">
                <BsCircleFill className="bub1" />
                <BsCircleFill className="bub2" />
                <BsCircleFill className="bub3" />
              </div>
              <BsCircleFill className="text-[#e5e5ea] dark:text-[#333333] absolute -left-0 -z-10 rotate-45 text-lg top-7 " />
              <BsCircleFill className="text-[#e5e5ea] dark:text-[#333333] absolute -left-2 -z-10 rotate-45 text-[10px] top-[40px] " />
            </motion.div>
          ) : (
            <div
              className={
                " w-full flex justify-start relative  p-2 rounded-2xl  z-0"
              }
            >
              <motion.div
                initial="initial"
                animate="enter"
                variants={variants}
                layout
                className="bg-[#e5e5ea] dark:bg-[#333333] mr-24 p-2 relative rounded-2xl w-fit message after:bg-white dark:after:bg-black before:bg-[#e5e5ea] dark:before:bg-[#333333]"
              >
                <p className=" text-xl text-black z-[1]">{screen.intro}</p>
              </motion.div>
            </div>
          )}
          {messages.map((msg, index) => {
            if (msg.usr === "ai") {
              return (
                <div
                  key={index}
                  className={
                    " w-full flex justify-start relative  p-2 rounded-2xl  z-0"
                  }
                >
                  <motion.div
                    initial="initial"
                    animate="enter"
                    variants={variants}
                    layout
                    className="bg-[#e5e5ea] dark:bg-[#333333] mr-24 p-2 relative rounded-2xl w-fit message after:bg-white dark:after:bg-black before:bg-[#e5e5ea] dark:before:bg-[#333333]"
                  >
                    <p className=" text-xl text-black z-[1]">{msg.msg}</p>
                    {/* <DiSenchatouch className="text-slate-200 absolute -left-3 -z-10 rotate-45 text-5xl -bottom-3 " /> */}
                  </motion.div>
                </div>
              );
            }
            return (
              <div key={index} className={" w-full flex justify-end"}>
                <motion.div
                  initial="initial"
                  animate="enter"
                  variants={variants}
                  layout
                  className="bg-[#0b93f6] ml-24 p-2 relative rounded-2xl w-fit message2  after:bg-white dark:after:bg-black"
                >
                  {" "}
                  <p className=" text-xl text-white">{msg.msg}</p>
                </motion.div>
              </div>
            );
          })}
        </AnimatePresence>

        {loading && (
          <motion.div
            initial="initial"
            animate="enter"
            variants={loadVariant}
            layout
            className={
              "relative bg-[#e5e5ea] dark:bg-[#333333] p-2 rounded-full w-fit z-20 ml-1"
            }
          >
            <div className="flex gap-1 text-xs  z-10 py-2 px-2">
              <BsCircleFill className="bub1" />
              <BsCircleFill className="bub2" />
              <BsCircleFill className="bub3" />
            </div>
            <BsCircleFill className="text-[#e5e5ea] dark:text-[#333333] absolute -left-0 -z-10 rotate-45 text-lg top-7 " />
            <BsCircleFill className="text-[#e5e5ea] dark:text-[#333333] absolute -left-2 -z-10 rotate-45 text-[10px] top-[40px] " />
          </motion.div>
        )}
      </ScrollContainer>
      <div className="absolute bottom-0 pt-2   bg-slate-200 dark:bg-slate-900 h-32 rounded-b-[6em] w-full z-100"></div>
      <div
        className={
          "w-full top-20 absolute flex justify-center  z-10 scale-125  "
        }
      >
        <div className="flex flex-col items-center mt-1 ">
          <div className="rounded-full flex justify-center bg-slate-400 items-center h-12 w-12">
            {" "}
            {/* <button
              className={
                "absolute pointer-events-auto transition bottom-[10px] right-12  text-white f2 text-2xl rounded-full px-2 py-2 " +
                (input.length > 0 ? " bg-sky-400" : " bg-slate-400")
              }
              onClick={() => {
                if (input.length > 0) {
                  setMessages((prev) => {
                    return [
                      ...prev,
                      { msg: "demo text", usr: "ai" },
                      { msg: "demo demo demo", usr: "user" },
                      { msg: "demo text", usr: "ai" },
                      { msg: "demo demo demo", usr: "user" },
                      { msg: "demo text", usr: "ai" },
                      { msg: "demo demo demo", usr: "user" },
                      { msg: "demo text", usr: "ai" },
                      { msg: "demo demo demo", usr: "user" },
                    ];
                  });
                  setInput("");
                } else {
                  scrollDown();
                }
              }}
            >
              <FaArrowUp />
            </button> */}
            <p className="text-white text-2xl">{screen.icon}</p>
          </div>
          <div className="flex items-center gap-0 pl-2">
            <p className="text-xs text-slate-700">{screen.name}</p>
            <IoIosArrowBack className="text-xs text-slate-700/50 dark:text-slate-200/50  cursor-pointer rotate-180" />
          </div>
        </div>
      </div>
      <div className="absolute  top-14 w-full pt-3 px-10  z-10">
        <div
          className={
            "left-10 top-5 absolute  z-10 scale-125 pointer-events-auto "
          }
        >
          <IoIosArrowBack
            onClick={() => {
              setMove(false);
            }}
            className="text-6xl text-sky-600 hover:scale-105 cursor-pointer active:scale-90"
          />
        </div>
      </div>
      <div className="absolute  bottom-14 w-full pt-3 px-10  z-10">
        <div
          className={
            "left-[25px] -mt-3 absolute w-[91.2%] h-full bg-slate-200 dark:bg-slate-900 border-t-2 border-slate-300/50 -z-10  " +
            (heightChange > 48 ? " rounded-b-3xl" : " rounded-b-[6em]")
          }
        ></div>
        <div className="z-50 pointer-events-auto">
          <TextareaAutosize
            autoFocus
            className="w-full  rounded-3xl ring-1 ring-slate-300 f2  text-2xl pl-4 pr-12 py-2"
            value={input}
            tabIndex={1}
            placeholder={`Talk to ${screen.name}`}
            onFocus={scrollDown}
            onChange={(e) => {
              setInput(e.target.value);
              if (enter) {
                setInput("");
              }
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
            onClick={send}
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </>
  );
}

export default MessageScreen;
