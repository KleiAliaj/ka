import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { motion, useReducedMotion } from "framer-motion";
import DualSection from "@/components/layout/DualSection";
import TextSection from "@/components/layout/TextSection";
import Head from "next/head";

function Music() {
  const prefersReducedMotion = useReducedMotion();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const photoAnimate = {
    offscreen: { scale: prefersReducedMotion ? 1 : 0.6, opacity: 0 },
    onscreen: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1.5 },
    },
  };
  const headingAnimate = {
    offscreen: { x: prefersReducedMotion ? 0 : -300, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 1.5 },
    },
  };
  const textAnimate = {
    offscreen: {
      x: prefersReducedMotion ? 0 : -300,
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.2,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.2, duration: 1.5, delay: 0.2 },
    },
  };
  const thirdAnimate = {
    offscreen: {
      x: prefersReducedMotion ? 0 : -300,
      opacity: 0,
      scale: prefersReducedMotion ? 1 : 0.2,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", bounce: 0.2, duration: 1.5, delay: 0.4 },
    },
  };
  return (
   <>
      <Head>
        <title>Ty&apos;s Music and LoFi</title>
        <meta
            name="description"
            content={`Warm, mellow LoFi beats`}
          />
      </Head>
      <div className="page-container">
        <h2 className="text-left heading-lg fade-effect-quick">Music</h2>
        <DualSection centerText>
          <TextSection>
            <motion.h2
              variants={headingAnimate}
              className={"font-bold heading-md "}
            >
              Warm, mellow Lo-Fi beats
            </motion.h2>
            <motion.div variants={textAnimate} className="text-box">
              <p className="font-bold">
                I was listening to Lo-Fi Hip Hop before it was cool (*puts on
                hipster glasses*). For real though, for as long as I can remember
                this genre has been the soundtrack to my life. I can listen to it
                on a run, while coding, or even napping. The magic of Lo-Fi is
                that it conveys the mood of the moment, the same song can make you
                feel happy, reminiscent or melancholic, depending on how you feel
                that day. The lack of vocals and the use of soft piano and drum
                beats makes it the perfect music for, well, anything. When
                I&apos;m not listening to Lo-Fi, I enjoy rap, classic rock, smooth
                jazz, and classical music. But Lo-Fi will always have my heart.
                <br />
                <br />
                My love for Lo-Fi grew stronger in 2019, when I began to learn how
                to play the piano and make beats on my computer using Logic Pro.
                Feeling an emotion from a song is one thing, but expressing an
                emotion through your own song is another. Playing along with the
                rhythm of your soul is something I wish everyone could experience.
                <br />
                <br />
                My music is far from platinum, but I&apos;m proud of it. And it
                conveys the feelings I felt in those moments behind the keyboard.
                I hope you enjoy it!
              </p>
            </motion.div>
  
            <motion.div
              variants={thirdAnimate}
              className="flex items-center content-center justify-center w-full gap-2 sm:mt-5 sm:scale-90"
            >
              <a
                href="https://open.spotify.com/artist/3jxSd4I4g4AH76AzgPw006?si=NpMCWZEWT5uLvP5lyhI__A"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center p-2 transition shadow-xs bg-black/0 rounded-3xl hover:scale-110 active:scale-90 drop-shadow-sm "
              >
                <div className="md:w-40 sm:w-32 sm:h-16 md:h-20">
                  <picture>
                    <source
                      srcSet="/assets/CodeLogos/spotify.webp"
                      type="image/webp"
                    />
                    <img
                      src="/assets/CodeLogos/spotify.webp"
                      alt="spotify button"
                      className="object-contain"
                    />
                  </picture>
                </div>
              </a>
              <a
                href="https://music.apple.com/us/artist/ty-the-creator/1626735693"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center p-2 transition shadow-xs rounded-3xl hover:scale-110 active:scale-90 drop-shadow-sm"
              >
                <div className="md:w-40 sm:w-32 sm:h-16 md:h-20">
                  <picture>
                    <source
                      srcSet="/assets/CodeLogos/appleMusic.webp"
                      type="image/webp"
                    />
                    <img
                      src="/assets/CodeLogos/appleMusic.webp"
                      alt="Apple Music button"
                      className="object-contain"
                    />
                  </picture>
                </div>
              </a>
              <a
                href="https://soundcloud.com/ty-the-creatorr"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center p-2 transition shadow-xs rounded-3xl hover:scale-110 active:scale-90 drop-shadow-sm"
              >
                <div className="md:w-40 sm:w-32 sm:h-16 md:h-20">
                  <picture>
                    <source
                      srcSet="/assets/CodeLogos/soundcloud.webp"
                      type="image/webp"
                    />
                    <img
                      src="/assets/CodeLogos/soundcloud.webp"
                      alt="Soundcloud button"
                      className="object-contain"
                    />
                  </picture>
                </div>
              </a>
            </motion.div>
          </TextSection>
          <motion.div
            className="md:w-1/3 sm:w-full h-[23em] md:mb-12"
            variants={photoAnimate}
          >
            {domLoaded && (
              <ReactPlayer
                width={"100%"}
                height={"100%"}
                url="https://soundcloud.com/ty-the-creatorr/sets/reflections"
              />
            )}
          </motion.div>
        </DualSection>
      </div>
   </>
  );
}

export default Music;
