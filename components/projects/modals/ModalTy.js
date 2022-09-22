import GithubButton from "@/components/layout/githubButton";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Carousel from "./Carousel";
import TechChip from "./TechChip";

function ModalTy() {
  let tech = ["Next.js", "React", "TailwindCSS", "Cosmic CMS"];
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="w-full text-left heading-sm !mb-0 !mt-2">Description</h2>
        <p>
          I needed a place to put all of my work and display all that I have
          learned, so a personal website was a must. It took me a bit to think
          about what tech stack I would use for this project, I decided to work
          backwards from what I needed the site to do. It needed to be
          customizable, easily styled, friendly for SEO, easy to add add/edit
          blog posts, and fast to load. From these requirements, I decided to
          use Next.js and react as the framework to serve static HTML that can
          be crawled by search engines for SEO purposes. I also wanted
          experience working with a content management system (CMS) in React, so
          I decided on Cosmic CMS mostly due to the low cost and easy to
          understand API. For styling I went with Tailwind because I love
          tailwind, but also because it would speed up the site by shipping less
          CSS to the browser.
          <br />
          <br />
          The bones for this project took me about a week to build, but I have
          been iterating on the site ever since. Having a central hub to put all
          of my content and projects has been a game changer, it motivates me to
          continue to create and share who I am with the world. I plan on
          implementing a full 3D landing page experience with React Three Fiber
          soon, to give the site more of a wow factor while hopefully keeping
          loading times fast.
          <br />
          Also, weighing in at 987kb, I&apos;m a proud member of the{" "}
          <a
            href="https://1mb.club/"
            className="underline text-sky-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            1MB club
          </a>{" "}
          :)
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
                Features
              </h2>
              <ol className="ml-6 font-bold list-decimal f2 ">
                <li>
                  <p>
                    Cosmic Content Management System for easy editing and adding
                    of blog posts.
                  </p>
                </li>
                <li>
                  <p>CSS animation footer of waves.</p>
                </li>
                <li>
                  <p>
                    SASS animation for floating gradients in the background.
                  </p>
                </li>
                <li>
                  <p>Responsive navigation menu.</p>
                </li>
                <li>
                  <p>
                    Airtable as an backend API for serving my AI artwork and my
                    favorite links (although in the future I wouldn&apos;t use
                    it for images, it&apos;s very slow).
                  </p>
                </li>
              </ol>
            </div>
            <div className="w-full">
              <h2 className="w-full text-left !mb-0 !mt-2 heading-sm">
                Learnings
              </h2>
              <ol className="ml-6 font-bold list-decimal f2 text-sky-600 dark:text-sky-200">
                <li>CMS API.</li>
                <li>SASS.</li>
                <li>Airtable API.</li>
                <li>Parallax project cards using Atropos.js.</li>
                <li>Embedding P5.js sketches in a React page.</li>
                <li>
                  Building my own image carousel to display project images.
                </li>
                <li>
                  Using the Unsplash API to load all images from my account as
                  well as the real-time stats.
                </li>
                <li>
                  Dynamically generating the sitemap.xml file every time there
                  is a new blog post.
                </li>
                <li>
                  Using the Google search console to have the site indexed on
                  Google (Also did this for Bing).
                </li>
                <li>Implementing dark mode using Tailwind.</li>
              </ol>
            </div>
          </div>
          <div className="flex justify-center w-full gap-3 mt-4">
            <Link href={"/"}>
              <a className="button-1 w-fit f2">
                Link <FaExternalLinkAlt />
              </a>
            </Link>

            <GithubButton url="https://github.com/tyfiero/tyfiero-blog" />
          </div>
        </div>
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <h2 className="w-full text-left heading-sm !mb-0">Images</h2>
          <Carousel imgs={["/assets/other/projects/ty/tyfierocom.webp"]} />
        </div>
      </section>
    </div>
  );
}

export default ModalTy;
