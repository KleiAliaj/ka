import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";

function Music() {
  return (
    <div className="page-container">
      <h2 className="text-left heading-lg ">Music</h2>
      <div className="flex justify-center w-full gap-10 sm:flex-col md:flex-row sm:items-center">
        <div className="md:w-1/2 sm:w-full ">
          <h3 className="heading-md">Cool, mellow Lo-Fi beats.</h3>
          <div className=" glass-box bg-white/80 dark:bg-black/80">
            <p className="pb-3 font-bold text-sky-600">
              I was listening to Lo-Fi Hip Hop before it was cool (on go the
              hipster glasses lol). For real though, for as long as I can
              remember this genre has been the soundtrack to my life. I can
              listen to it on a run, while coding, or even napping. The magic of
              Lo-Fi is that it conveys the mood of the moment, the same song can
              make you feel happy, determined or melancholic, depending on how
              you feel. The lack of vocals and the use of soft piano and drum
              beats makes it the perfect music for, well, anything. When I'm not
              listening to Lo-Fi, I enjoy rap, classic rock, smooth jazz, and
              classical music. But Lo-Fi will always have my heart.
              <br />
              <br />
              My love for Lo-Fi became even stronger in 2019, when I began to
              learn how to play the piano and make beats on my computer using
              Logic Pro. It's one thing to listen to a song and feel some way,
              but creating a song with your own two hands is another. Playing
              along with the rhythm of your soul is an experience that I wish
              everyone could have.
              <br />
              <br />
              My music is far from platinum, but I'm proud of it. And it conveys
              the feelings I felt in those moments behind the keyboard. I hope
              you enjoy it.
            </p>
          </div>
          <a
            href="https://open.spotify.com/artist/3jxSd4I4g4AH76AzgPw006?si=NpMCWZEWT5uLvP5lyhI__A"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center p-2 transition shadow-xs bg-black/0 rounded-3xl hover:scale-110 active:scale-90 drop-shadow-sm sm:mt-5"
          >
            <div className="w-[10em]  h-[3em]">
              <Image
                src="/assets/other/spotify.png"
                alt="spotify button"
                className=""
                layout="fill"
                objectFit="contain"
              />
            </div>
          </a>
        </div>{" "}
        <div className="md:w-1/3 sm:w-full h-[23em] md:mb-12">
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            url="https://soundcloud.com/user-977088049-503240331/sets/reflections?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          />
        </div>
      </div>
    </div>
  );
}

export default Music;
