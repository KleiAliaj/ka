import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Carousel({ imgs, altText }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const previousSlide = () => {
    const lastIndex = imgs.length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;

    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = imgs.length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;

    setCurrentIndex(index);
  };

  return (
    <div className="w-full h-full ">
      <div className="relative flex justify-center w-full min-w-full h-fit">
        <ImageSlide url={imgs[currentIndex]} altText={altText}>
          <button
            className="absolute flex items-center justify-center w-8 h-8 text-xl transition rounded-full opacity-50 hover:opacity-100 hover:scale-110 active:scale-90 top-[39%] left-1 bg-sky-200/70"
            onClick={() => previousSlide()}
          >
            <FaArrowLeft className="text-sky-700 " />
          </button>
          <button
            className="absolute flex items-center justify-center w-8 h-8 text-xl transition rounded-full opacity-50 hover:opacity-100 hover:scale-110 active:scale-90 top-[39%] right-1 bg-sky-200/70"
            onClick={() => nextSlide()}
          >
            <FaArrowRight className="text-sky-700 " />
          </button>
          <div className="flex justify-center w-full mt-1 ">
            <div className="flex items-center gap-2 px-5 py-1 transition bg-white rounded-lg shadow-md dark:bg-slate-400 ">
              {imgs.map((img, index) => (
                <button
                  key={index}
                  className={
                    "flex items-center justify-center w-4 h-4 text-xl transition rounded-full opacity-75 hover:opacity-100 hover:scale-110 active:scale-90 " +
                    (index === currentIndex ? " bg-sky-900 " : " bg-sky-300/70")
                  }
                  onClick={() => setCurrentIndex(index)}
                ></button>
              ))}
            </div>
          </div>
        </ImageSlide>
      </div>
    </div>
  );
}

const ImageSlide = ({ url, children, altText = "" }) => {
  return (
    <div className="relative flex flex-col items-center h-auto w-fit fade-effect-quick ">
      <picture>
        <img
          key={url}
          src={url}
          style={{ animation: "fadeIn  .8s" }}
          alt={altText}
          className="rounded-lg  max-h-[25em] shadow-lg "
        />
      </picture>
      {children}
    </div>
  );
};

export default Carousel;
