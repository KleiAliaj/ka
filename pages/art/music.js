import MotionHeader from "@/components/etc/animation/MotionHeader";
import MotionImage from "@/components/etc/animation/MotionImage";
import MotionText from "@/components/etc/animation/MotionText";
import DualSection from "@/components/layout/DualSection";
import TextSection from "@/components/layout/TextSection";
import Head from "next/head";
import React from "react";
import { TbMusic } from "react-icons/tb";
import ReactPlayer from "react-player";

function Music() {
  const [domLoaded, setDomLoaded] = React.useState(false);
  React.useEffect(() => {
    setDomLoaded(true);
  }, []);
  return (
    <>
      <Head>
        <title>Ty&apos;s Music</title>
        <meta name="description" content={`LoFi beats from Ty Fiero`} />
      </Head>
      <div className="page-container">
        <MotionHeader>
          <h1
            className={
              "font-bold heading-lg flex gap-2 justify-center items-center "
            }
            id="music"
          >
            <TbMusic /> Music
          </h1>
        </MotionHeader>
        <DualSection centerText cn="w-full">
          <TextSection>
            <MotionText>
              <div className="text-box">
                <MotionHeader xPx={-100} delay={0.3}>
                  <h3 className="text-left heading-sm ">
                    Warm, mellow Lo-Fi beats
                  </h3>
                </MotionHeader>
                <p className="font-bold">
                  I was listening to Lo-Fi Hip Hop before it was cool (*puts on
                  hipster glasses*). For real though, for as long as I can
                  remember this genre has been the soundtrack to my life. The
                  magic of Lo-Fi is that it conveys the mood of the moment, the
                  same song can make you feel happy, reminiscent or melancholic,
                  depending on how you feel that day. When I&apos;m not
                  listening to Lo-Fi, I enjoy rap, classic rock, smooth jazz,
                  and classical music. But Lo-Fi will always have my heart.
                  <br />
                  <br />
                  My love for Lo-Fi grew stronger in 2019, when I began to learn
                  how to play the piano and make beats on my computer using
                  Logic Pro. Feeling an emotion from a song is one thing, but
                  expressing an emotion through your own song is another.
                  Playing along with the rhythm of your soul is something I wish
                  everyone could experience.
                  <br />
                  <br />
                  My music is far from platinum, but I&apos;m proud of it. And
                  it conveys the feelings I felt in those moments behind the
                  keyboard. I hope you enjoy it!
                </p>
              </div>
            </MotionText>

            <MotionText>
              <div className="flex items-center content-center justify-center w-full sm:gap-0 md:gap-2 sm:mt-5 sm:!scale-90 md:scale-100">
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
              </div>
            </MotionText>
          </TextSection>
          <div className="md:w-1/3 sm:w-full h-[23em] md:mb-12">
            <MotionImage>
              {domLoaded && (
                <ReactPlayer
                  width={"100%"}
                  height={"100%"}
                  url="https://soundcloud.com/ty-the-creatorr/sets/reflections"
                />
              )}
            </MotionImage>
          </div>
        </DualSection>
      </div>
    </>
  );
}

export default Music;
