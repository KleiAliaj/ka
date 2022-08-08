import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Carousel from "./Carousel";

function ModalOliverAIProject() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="w-full text-left heading-sm !mb-0 !mt-2">Description</h2>
        <p>
          I&#39;ve had some experience with openAI's GPT-3 before, and I thought
          it would be so cool if I could ask it for life advice. I wrote a
          fairly detailed text prompt for it, and the results were astounding.
          Give it a try if you haven't already. It started with just therapist
          life advice, but I recently wrote new prompts and added a drop down
          menu to change the &quot;proffession&quot; of Oliver. This will not be
          my last GPT-3 project, especially now that I have boilerplate code for
          it.
        </p>
      </div>
      <section className="flex gap-4 lg:flex-row sm:flex-col">
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <div className="flex flex-row-reverse lg:flex-col">
            <div className="w-full">
              {" "}
              <h2 className="w-full text-left heading-sm !mb-0 !mt-2 ">
                Tech Stack
              </h2>
              <ul className="ml-6 font-bold list-disc f2">
                <li>Next.js</li>
                <li>Tailwind</li>
                <li>React</li>
                <li>Voice RSS</li>
                <li>Open AI</li>
              </ul>
            </div>

            <div className="w-full">
              <h2 className="w-full text-left !mb-0 !mt-2 heading-sm">
                Learnings
              </h2>
              <ol className="ml-6 font-bold list-decimal f2 text-sky-600 dark:text-sky-200">
                <li>
                  GPT-3 is incredibly powerful, and does a great job at
                  providing life advice of all sorts. I was blown away with the
                  results after a few days of tweaking prompts.
                </li>
                <li>
                  CSS animations are so fun! It was really enjoyable getting the
                  mouth to &quot;talk&quot; and to get the eyes to blink.
                </li>
                <li>
                  CSS is a medium for art just as much as painting or Photoshop
                  is.
                </li>
                <li>Text to speech API's are easy to work with, and free!</li>
                <li>
                  Learned how to stream text to make it look like he was writing
                  it as it was coming in.{" "}
                </li>
              </ol>
            </div>
          </div>
          <div className="flex justify-center w-full mt-4">
            <a href="" className="button-1 w-fit f2">
              Link <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <h2 className="w-full text-left heading-sm !mb-0">Images</h2>
          <Carousel
            imgs={[
              "/assets/other/projects/oliver/oliver.webp",
              "/assets/other/projects/oliver/oliver2.webp",
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export default ModalOliverAIProject;
