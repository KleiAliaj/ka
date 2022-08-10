import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Carousel from "./Carousel";
import TechChip from "./TechChip";

function ModalCombinator() {
  let tech = ["P5.js", "Vanilla Javascript", "HTML", "CSS"];
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="w-full text-left heading-sm !mb-0 !mt-2">Description</h2>
        <p>
          For several years, my friend and I were using an excel spreadsheet
          filled with columns of random words and concepts. You would read
          across the row and try to create an idea by jamming together words
          that don't really belong together. This was a great way to make wild
          ideas that I never would have come up with otherwise, so I decided to
          make a simple web app that displayed each row of the spreadsheet on
          the screen with buttons to individually randomize each word. I
          converted each column into an array of strings, and used a simple{" "}
          <code>array[Math.floor(Math.random(array.length))]</code> to randomly
          select a word from the array and display it to the screen.
          <br />
          <br />
          This was my first real "web app", and I learned a lot about JS, CSS,
          and the DOM. I was super proud of my creation at the time, even though
          it took longer than I'd like to admit lol. It was the seed for the
          idea that would become ideaisland several months later. In hindsight,
          before turning it into a larger application, I should have shared this
          tool with others to see if they found value in it, in which I would
          have discovered that making ideas without a defined problem was a
          lousy way to innovate. You live and you learn though right? 🤷‍♂️
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
              <div className="flex flex-wrap gap-2 px-3 py-1">
                {tech.map((tech) => (
                  <TechChip key={tech} content={tech} />
                ))}
              </div>
            </div>

            <div className="w-full">
              <h2 className="w-full text-left !mb-0 !mt-2 heading-sm">
                Learnings
              </h2>
              <ol className="ml-6 font-bold list-decimal f2 text-sky-600 dark:text-sky-200">
                <li>
                  I enjoy making ideas with the combinatorial thinking
                  technique.
                </li>
                <li>
                  P5.js makes for a decent JS "framework" for creating simple
                  websites, although I'd never use it again.
                </li>
                <li>So much practice with DOM manipulation with javascript.</li>
                <li>I learned a lot about randomizing arrays of values.</li>
                <li>
                  An excel sheet can be upgraded into a simple web app to
                  improve the UX in certain situations.
                </li>
                <li>
                  Although its fun making ideas with this platform, the best way
                  to make innovations that are useful is to find actual problems
                  in the world, then find solutions to them. Making random
                  solutions without first having a real problem is a recipe for
                  disaster.
                </li>
              </ol>
            </div>
          </div>
          <div className="flex justify-center w-full mt-4">
            <a
              href="https://editor.p5js.org/tyfiero/full/mvmllsRDI"
              target="_blank"
              rel="noopener noreferrer"
              className="button-1 w-fit f2"
            >
              Link <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <h2 className="w-full text-left heading-sm !mb-0">Images</h2>
          <Carousel
            imgs={[
              "/assets/other/projects/combinator/comb1.webp",
              "/assets/other/projects/combinator/comb2.webp",
              "/assets/other/projects/combinator/comb3.webp",
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export default ModalCombinator;
