import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLink } from "react-icons/fa";
import DualSection from "@/components/layout/DualSection";
import TextSection from "@/components/layout/TextSection";
import ImageSection from "@/components/layout/ImageSection";

function About() {
  return (
    <div className="page-container">
      <h2 className="text-left heading-lg ">About Me</h2>

      <DualSection centerText>
        <TextSection title="Who I am">
          <p className="pb-3 text-2xl font-bold text-sky-600">
            Web developer, artist, and AI enthusiast in Seattle.{" "}
          </p>
          <div className="w-full glass-box bg-white/80 dark:bg-black/80">
            <p className="pb-3 font-bold text-sky-600">
              I have always been a science geek, I love learning how the world
              works and thinking about how it might work better. Initially, I
              was fascinated with the natural sciences and biology, which led me
              to getting a B.S. in Microbiology with a minor in Zoology from
              Colorado State University. While I still enjoy biology, I made a
              decision to pivot my career to pursue computer science for more
              opportunities to express my creativity and to build useful things.
              This scientific background has given me a unique lens on computer
              science. Follow along on my journey to see what I create next!
            </p>
          </div>
        </TextSection>
        <ImageSection
          src="/assets/other/profileshot.jpg"
          alt="Ty Fiero about image"
        />
      </DualSection>
      <Link href="/links">
        <a className="mt-10 text-xl font-bold button-1">
          My Fav Links & Resources <FaLink />
        </a>
      </Link>
    </div>
  );
}

export default About;
