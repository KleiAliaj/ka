import { useClickOutside } from "@/lib/hooks/useClickOutside";
import { useKeyPress } from "@/lib/hooks/useKeyPress";

import React, { createRef, useEffect } from "react";
import { FaArrowRight, FaCoffee, FaTimes } from "react-icons/fa";

function OliverModal({ oliModal, setOliModal, children, header, className }) {
  const menuRef = createRef();

  const onClickOutside = (e) => {
    setOliModal(false);
  };
  useClickOutside(menuRef, onClickOutside);

  const esc = useKeyPress("Escape");
  useEffect(() => {
    if (esc) {
      setOliModal(false);
    }
  }, [esc]);

  return (
    <>
      <div className="fixed top-0 left-0 z-40 w-screen h-screen fade-effect-quick bg-slate-800/50" />
      <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen ">
        <div
          ref={menuRef}
          className={
            " glass-box md:h-[80vh] h-[92vh]   shadow-2xl flex flex-col lg:w-2/3 md:w-4/5 sm:w-[95%]  items-center !px-10 !pt-5 !pb-10 z-100 bg-white/80 dark:bg-slate-600/80 grow-effect overflow-auto"
          }
        >
          <div className={"modalHeader"}>
            <h3 className="text-4xl f1 text-sky-700 dark:text-sky-100">
              Who&apos;s Oliver?
            </h3>
          </div>
          <button
            className="absolute text-3xl text-sky-700 dark:sky-100 top-2 right-5"
            onClick={() => setOliModal(false)}
          >
            <FaTimes />
          </button>

          <div className="flex flex-col items-center w-4/5 pb-5">
            <h4 className="text-2xl font-bold text-pink-400 f1">
              **OLIVER IS AN AI, NOT A REAL PERSON**
            </h4>
            <h4 className="mb-4 text-xl font-bold text-center underline f1">
              Please don&apos;t take the advice seriously, this is NOT a
              substitute for a real therapist, doctor, or other professional,
              and is intended for entertainment purposes only!!
            </h4>
            <p>
              The AI powered by GPT-3 from openAI. The API provided by&nbsp;
              <a
                href="https://openai.com/"
                className="underline text-sky-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                openAI
              </a>
              &nbsp; makes it simple to create impressive AI implementations
              that are incredibly powerful.{" "}
            </p>
            <br />
            <p>
              Your question is bundled into custom prompts that I have written
              and tweaked over time to make it more relevant to your question,
              based on what profession you selected. These prompts I have made
              are rather long which makes them more expensive to generate, but I
              found that the more context I could provide to Oliver, the better
              the responses are. In total it took me about six hours to tweak
              the prompts to get the responses that I wanted, and another 12ish
              hours to code up this project.
            </p>

            <br />
            <p>
              As for the design of the character, I am a lousy character
              illustrator so I adapted a design from
              <a
                href="https://codepen.io/alvaromontoro/pen/ExyvEJY"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sky-400"
              >
                &nbsp;Alvaro Montoro&nbsp;
              </a>
              (with permission from him) and I adjusted it to my liking, then I
              added images from midJourney AI as backgrounds. I also added css
              animations to the mouth, eyes and head to make Oliver come to
              life. I know, the talking animation isn&apos;t great, it makes me
              giggle too. But I wanted to make it more fun and interactive. To
              give him a voice, I fed the response into the free
              <a
                href="https://codepen.io/alvaromontoro/pen/ExyvEJY"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sky-400"
              >
                &nbsp;VoiceRSS&nbsp;
              </a>
              API. Why did I gave him a british accent? Honestly, he sounded
              smarter as a british guy lol.{" "}
            </p>
            <br />
            <p>
              I hope you enjoy the AI, and if you have any questions, please
              reach out. Also, I am providing this free of charge and pay for
              each request sent, so please be courteous as to the amount of
              requests you send. If you want to send more, consider{" "}
              <a
                href="https://www.buymeacoffee.com/tyfiero"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-sky-500"
              >
                buying me a coffee
              </a>{" "}
              :)
            </p>

            <button className="button-1" onClick={() => setOliModal(false)}>
              <p>Continue</p>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OliverModal;
