import React from "react";
import { FaMicrophone, FaRegEdit, FaSearch } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import ScrollContainer from "react-indiana-drag-scroll";

function HomeScreen({ setScreen, formattedTime, setMove }) {
  //   let date = currentdate.getHours() + ":" + currentdate.getMinutes();
  const contacts = [
    {
      name: "Innovation AI",
      icon: "IA",
      description: "An AI to help you come up with innovative new ideas.",
      intro:
        "Hi there! I'm an trained AI that helps you make great ideas through questions and conversation. Ask me anything! Though, questions about new ideas and innovation are what I'm best at 😁",
    },
    {
      name: "Business AI",
      icon: "BA",
      description: "An AI to help you solve business problems",
      intro:
        "Hi there! I'm an trained business AI that work through business problems through questions and conversation. I am here to solve your business issues, and maybe have a great conversation in the process!",
    },
  ];
  return (
    <>
      {" "}
      <ScrollContainer
        id="pane"
        className="fixed  pb-16  mt-40 px-10 w-full h-[61em] rounded-b-[6em] gap-5 flex flex-col   overflow-y-scroll pointer-events-auto "
      >
        <div className="flex flex-col w-full">
          {contacts.map((entry, index) => {
            return (
              <div
                className="flex gap-5 h-20 py-2 w-[31.2rem] overflow-hidden active:bg-slate-100"
                key={index}
                onClick={() => {
                  setScreen({
                    name: entry.name,
                    icon: entry.icon,
                    description: entry.description,
                    intro: entry.intro,
                  });
                  setMove(true);
                }}
              >
                <div className="rounded-full flex justify-center bg-slate-400 p-4 h-16 w-16">
                  {" "}
                  <p className="text-white text-3xl">{entry.icon}</p>
                </div>
                <div className="flex flex-col border-b-2 w-[25rem] max-w-full">
                  <div className="flex w-full justify-between">
                    <p className="text-2xl">{entry.name}</p>
                    <div className="flex gap-2 items-center">
                      <p className="text-lg">{formattedTime}</p>{" "}
                      <IoIosArrowBack className="text-2xl text-slate-700/50 dark:text-slate-200/50  cursor-pointer rotate-180" />
                    </div>
                  </div>
                  <p className="text-lg truncate w-[95%]">
                    {entry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollContainer>
      <div className={"w-full top-20 absolute flex justify-center  z-10  "}>
        <div className="w-full px-16 mt-0 flex justify-between items-center">
          <p className="text-2xl text-sky-400">Edit</p>
          <p className="text-2xl font-bold">Messages</p>
          <FaRegEdit className="text-3xl text-sky-400 " />
        </div>
      </div>
      <div className="w-[27.5rem] mx-16 h-10 z-10 mt-[7.2rem] flex justify-between items-center bg-slate-300 rounded-xl">
        <div className="flex justify-between px-2 w-full ">
          <div className="flex gap-1 items-center  ">
            <FaSearch className="text-2xl text-slate-500/70" />
            <p className="text-xl mt-1 text-slate-500/70">Search</p>
          </div>
          <FaMicrophone className="text-2xl text-slate-500/70 mt-1" />
        </div>
      </div>
    </>
  );
}

export default HomeScreen;
