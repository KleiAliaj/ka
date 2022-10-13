import React from "react";

function Pics() {
  let pics = [
    "/assets/other/bookPics/80.webp",
    "/assets/other/bookPics/arch.webp",
    "/assets/other/bookPics/ayurveda.webp",
    "/assets/other/bookPics/big.webp",
    "/assets/other/bookPics/bitcoin.webp",
    "/assets/other/bookPics/confident.webp",
    "/assets/other/bookPics/cookbook.webp",
    "/assets/other/bookPics/default.webp",
    "/assets/other/bookPics/disliked.webp",
    "/assets/other/bookPics/fear.webp",
    "/assets/other/bookPics/going.webp",
    "/assets/other/bookPics/habits.webp",
    "/assets/other/bookPics/leo.webp",
    "/assets/other/bookPics/life.webp",
    "/assets/other/bookPics/love.webp",
    "/assets/other/bookPics/meaning.webp",
    "/assets/other/bookPics/meditations.webp",
    "/assets/other/bookPics/mind.webp",
    "/assets/other/bookPics/mom.webp",
    "/assets/other/bookPics/nextfive.webp",
    "/assets/other/bookPics/poet.webp",
    "/assets/other/bookPics/program.webp",
    "/assets/other/bookPics/proust.webp",
    "/assets/other/bookPics/send.webp",
    "/assets/other/bookPics/several.webp",
    "/assets/other/bookPics/shortness.webp",
    "/assets/other/bookPics/sorrows.webp",
    "/assets/other/bookPics/speed.webp",
    "/assets/other/bookPics/steal.webp",
    "/assets/other/bookPics/think.webp",
    "/assets/other/bookPics/tools.webp",
    "/assets/other/bookPics/work.webp",
    "/assets/other/bookPics/write.webp",
  ];
  return (
    <div className="page-container">
      <div className="flex flex-wrap gap-2">
        {pics.map((img, index) => {
          return (
            <div className="w-auto h-48" key={index}>
              <img src={img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pics;
