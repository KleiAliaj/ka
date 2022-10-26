import React from "react";
import { FaBatteryQuarter, FaWifi } from "react-icons/fa";
import { IoCellular } from "react-icons/io5";
import { motion } from "framer-motion";
import MessageScreen from "@/components/ai/MessageScreen";
import HomeScreen from "@/components/ai/homeScreen";
function Iphone() {
  const [screen, setScreen] = React.useState({
    name: "Innovation AI",
    icon: "IA",
    description: "An AI to help you come up with innovative new ideas.",
    intro:
      "Hi there! I'm an trained AI that helps you make great ideas through questions and conversation. Ask me anything! Though, questions about new ideas and innovation are what I'm best at 😁",
  });
  const [move, setMove] = React.useState(false);
  let time = new Date().toLocaleTimeString("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
  let regex = /^0+/;
  let formattedTime = time.replace(regex, "");

  return (
    <div className="page-container relative">
      <div className=" w-full flex md:flex-row sm:flex-col-reverse relative sm:h-fit md:h-[60rem] md:bg-slate-200/60 p-10 rounded-2xl md:text-box md:backdrop-blur-md ">
        <div className="md:w-1/2 sm:w-full md:translate-y-0 sm:-translate-y-[32rem] ">
          {" "}
          <h1 className="heading-lg sm:!text-2xl md:!text-4xl !mb-0">
            Brainstorm Buddy
          </h1>
          <div className="text-box w-full">
            <h2 className="heading-sm text-left">Instructions</h2>
            <ol>
              <li>
                <p>1. Select what AI model you want to use</p>
              </li>
              <li>
                <p>
                  2. Ask the AI a question or ask for feedback on an idea you
                  have by typing it into the text input at the bottom, then send
                  your message. (Or hit enter)
                </p>
              </li>
              <li>
                <p>
                  3. Await the response from the AI, then ask follow up
                  questions!
                </p>
              </li>
            </ol>
            <h2 className="heading-sm text-left mt-5">Tips</h2>
            <ol className="list-disc list-outside pl-5">
              <li>
                <p>
                  The AI understands questions best. Think of it as an
                  experienced innovator.
                </p>
              </li>
              <li>
                <p>
                  It understands the context of the conversation because it
                  receives the entire transcript, so feel free to ask follow up
                  questions.
                </p>
              </li>
            </ol>
            <h2 className="heading-sm text-left mt-5">What is this?</h2>
            <p>
              This is a GPT-3 experiment I made to simulate a knowledgable
              friend to brainstorm with. The AI is designed to ask you questions
              about the ideas you present it, in order to challenge your
              assumptions and create better ideas. I&apos;ve found that my best
              ideas come when talking to friends, making ideas by myself is
              tougher. But I can&apos;t always talk to a buddy to brainstorm, so
              I made this!{" "}
            </p>
            <br />
            <p>
              I&apos;m pretty happy with how it turned out. I could have made it
              with a simple UI, but emulating an Iphone sounded really fun in
              the moment, so here we are! Really made me appreciate how
              intricate IOS UI and animations are. Took me longer than I thought
              it would to recreate the messages app.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full h-fit  md:scale-[60%] sm:scale-50 md:-translate-y-[14rem] sm:-translate-y-[18rem]">
          {/* Start Iphone */}
          <section className="mobile-body  relative  pointer-events-none !overflow-hidden">
            <div
              className="absolute top-0 pt-2  backdrop-blur-md
  bg-slate-200/80 dark:bg-slate-900/80 border-b-2 border-slate-300/50 dark:border-slate-700/50 h-40 rounded-t-[6em] w-full "
            ></div>
            <div className="absolute bg-white dark:bg-[#181818] w-full h-full rounded-[6em] -z-20 "></div>

            <motion.div
              style={{ x: move ? "-570px" : "0px" }}
              className="flex w-[71rem] transition duration-500 "
            >
              <div className="w-[35.5rem]">
                <HomeScreen
                  setScreen={setScreen}
                  formattedTime={formattedTime}
                  setMove={setMove}
                />
              </div>
              <div className="w-fit ">
                <MessageScreen
                  setScreen={setScreen}
                  screen={screen}
                  setMove={setMove}
                  move={move}
                />
              </div>
            </motion.div>

            <div className="top-bar">
              <div className="camera"></div>
              <div className="speaker"></div>
            </div>
            <div className="button volume-up"></div>
            <div className="button volume-down"></div>
            <div className="button silent"></div>
            <div className="button power"></div>
            <div className="layer-2 z-0 "></div>
            <div className="layer-1 "></div>
            <div className="absolute   top-9 left-16 ml-2">
              <p className="text-lg">{formattedTime}</p>
            </div>
            <div className="absolute  flex gap-2 top-9 right-16 text-xl ml-2 mt-1">
              <IoCellular />
              <FaWifi />
              <FaBatteryQuarter />
            </div>
            <div className="absolute bottom-10 w-full flex justify-center">
              <div className="bg-slate-600 h-2 w-1/3 rounded-full"></div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Iphone;
