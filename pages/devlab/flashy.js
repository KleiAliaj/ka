import { useKeyPress } from "@/lib/hooks/useKeyPress";
import React, { useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRecycle,
  FaRegStar,
  FaStar,
} from "react-icons/fa";

function Flashy() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % flashCards.length);
  };

  const handlePrevious = () => {
    const previousIndex = activeIndex - 1;
    setActiveIndex(previousIndex < 0 ? flashCards.length - 1 : previousIndex);
  };

  const handleStar = () => {
    const newFlashCards = [...flashCards];
    newFlashCards[activeIndex].star = !newFlashCards[activeIndex].star;
    setFlashCards(newFlashCards);
  };
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [showStarred, setShowStarred] = React.useState(false);
  const [cardSet, setCardSet] = React.useState("TypeScript");

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
  const [flashCards, setFlashCards] = React.useState([
    {
      num: 1,
      star: false,
      front: "What is TypeScript?",
      back: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing and class-based object-oriented programming to JavaScript.",
    },
    {
      num: 2,
      star: false,
      front: "Why should I use TypeScript?",
      back: "TypeScript can help to improve the quality and reliability of your code by providing static type checking and other features that are not available in JavaScript. It can also make your code easier to read and maintain, and can help you to catch bugs and other errors before they happen.",
    },
    {
      num: 3,
      star: false,
      front: "How do I start using TypeScript?",
      back: "To start using TypeScript, you will need to install the TypeScript compiler and a code editor that supports TypeScript. You can then create a new TypeScript file and start writing TypeScript code using the appropriate file extension, such as .ts or .tsx.",
    },
    {
      num: 4,
      star: false,
      front: "What are the main features of TypeScript?",
      back: "The main features of TypeScript include static type checking, interfaces, classes, modules, and advanced type declarations. These features can help you to write more powerful and reliable code, and can make your code easier to read and maintain.",
    },
    {
      num: 5,
      star: false,
      front: "How is TypeScript related to JavaScript?",
      back: "TypeScript is a typed superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. This means that you can use TypeScript to write JavaScript code with the added benefits of static type checking and other features.",
    },
    {
      num: 6,
      star: false,
      front: "Is TypeScript only for large-scale projects?",
      back: "No, TypeScript can be used for projects of any size",
    },
  ]);

  const starred = flashCards.filter((card) => card.star);
  return (
    <div className="h-screen page-container">
      <div className="flex justify-center w-full h-20">
        <div className="flex flex-col items-center ">
          <h1 className="heading-lg !m-0">{cardSet}</h1>
          <p>{`${activeIndex + 1}/${flashCards.length}`}</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        {showStarred ? (
          <div className="relative flex justify-center w-full h-fit ">
            {starred.map((card) => {
              return (
                <Card
                  key={card.num}
                  num={card.num}
                  activeIndex={activeIndex}
                  front={card.front}
                  back={card.back}
                  star={card.star}
                  flip={isFlipped}
                />
              );
            })}
          </div>
        ) : (
          <div className="relative flex justify-center w-full h-fit ">
            {flashCards.map((card) => {
              return (
                <Card
                  key={card.num}
                  num={card.num}
                  activeIndex={activeIndex}
                  front={card.front}
                  back={card.back}
                  star={card.star}
                  flip={isFlipped}
                />
              );
            })}
          </div>
        )}
        <div className="flex gap-4 mt-10">
          <Button
            icon={<FaArrowLeft />}
            name="Back"
            hotKey={"d"}
            callback={handlePrevious}
          />
          <Button
            icon={<FaArrowRight />}
            hotKey={"f"}
            name="Next"
            callback={handleNext}
          />
          <Button
            icon={<FaRecycle />}
            hotKey={"a"}
            name="Flip"
            callback={handleFlip}
          />

          <Button
            icon={<FaStar />}
            hotKey={"s"}
            name="Star"
            callback={handleStar}
          />
          <Button
            icon={<FaStar />}
            hotKey={"S"}
            name={showStarred ? "View All" : "View Starred"}
            callback={
              showStarred
                ? () => {
                    setShowStarred(false);
                  }
                : () => {
                    setShowStarred(true);
                    setActiveIndex(0);
                  }
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Flashy;

function Card({ num, front, back, flip = false, star = false, activeIndex }) {
  let isActive = activeIndex === num - 1 ? true : false;
  return (
    <div
      className={
        " flex flex-col items-center justify-center w-[50rem] h-[30rem] p-10 shadow-xl h-1/3 rounded-xl  " +
        (isActive ? ` bg-sky-300` : ` absolute -translate-z-10 bg-sky-400/20`)
      }
      style={{
        transform: isActive
          ? `translateZ(0px)` + `rotateZ(0deg)`
          : `translateZ(-${num * 10}px)` +
            `translateX(${num * -10}px)` +
            `translateY(${num * -10}px)` +
            `rotateZ(${num * 1}deg)`,
        zIndex: isActive ? 10 : -num,
      }}
    >
      <div>
        <p className="text-xl">{flip ? back : front}</p>
      </div>
      {star ? (
        <div className="absolute text-xl top-3 right-3 text-sky-400">
          <FaRegStar />
        </div>
      ) : (
        <div className="absolute text-2xl text-sky-400 top-3 right-3">
          <FaStar />
        </div>
      )}
    </div>
  );
}

function Button({ icon, name, callback, hotKey }) {
  let clicked = useKeyPress(hotKey);

  useEffect(() => {
    if (clicked) {
      callback();
    }
  }, [clicked]);

  return (
    <button
      className="relative flex items-center gap-2 p-3 text-xl text-white transition shadow-md hover:scale-110 hover:shadow-xl active:scale-90 rounded-xl bg-sky-400"
      onClick={callback}
    >
      {icon} {name ? name : ""}
      <div
        className={
          "absolute px-2 text-sm   rounded-md ring-slate-300 -right-1 -top-1  " +
          (clicked
            ? "ring-4 bg-sky-700 !ring-teal-300 text-teal"
            : "ring-2 bg-black text-white")
        }
      >
        {hotKey}
      </div>
    </button>
  );
}
