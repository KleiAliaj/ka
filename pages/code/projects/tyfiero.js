import GithubButton from "@/components/etc/githubButton";
import React from "react";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import Carousel from "@/components/projects/Carousel";
import TechChip from "@/components/projects/TechChip";
import Link from "next/link";
import Head from "next/head";

function Ty() {
  let tech = ["Next.js", "React", "TailwindCSS", "Cosmic CMS"];
  return (
    <>
      <Head>
        <title>Ty&apos;s Portfolio Blog Site</title>
        <meta name="description" content={`Homepage for Ty.`} />
      </Head>
      <div className="relative page-container">
        <Link href={"/code/projects"}>
          <a className="absolute flex items-center gap-1 p-1 transition rounded-full top-3 text-sky-500 left-5 f2 hover:scale-105 hover:ring-2 ring-sky-500 ">
            <FaArrowLeft /> Back to Projects
          </a>
        </Link>
        <div
          className={
            "flex flex-col items-center sm:!px-3 md:!px-10 !pt-5 !pb-10 grow-effect overflow-auto w-full"
          }
        >
          <div className="flex justify-center w-full fade-effect">
            <h1 className="heading-lg !mb-0">Tyfiero.com</h1>
          </div>
          <div className="flex flex-col items-center mb-6 text-box">
            <p>
              I needed a place to put all of my work and display all that I have
              learned, so a personal website was a must. It took me a bit to
              think about what tech stack I would use for this project, I
              decided to work backwards from what I needed the site to do. It
              needed to be customizable, easily styled, friendly for SEO, easy
              to add add/edit blog posts, and fast to load. From these
              requirements, I decided to use Next.js and react as the framework
              to serve static HTML that can be crawled by search engines for SEO
              purposes. I also wanted experience working with a content
              management system (CMS) in React, so I decided on Cosmic CMS
              mostly due to the low cost and easy to understand API. For styling
              I went with Tailwind because I love tailwind, but also because it
              would speed up the site by shipping less CSS to the browser.
              <br />
              <br />
              The bones for this project took me about a week to build, but I
              have been iterating on the site ever since. Having a central hub
              to put all of my content and projects has been a game changer, it
              motivates me to continue to create and share who I am with the
              world. I plan on implementing a full 3D landing page experience
              with React Three Fiber soon, to give the site more of a wow factor
              while hopefully keeping loading times fast.
            </p>
          </div>
          <section className="flex gap-4 lg:flex-row sm:flex-col">
            <div className="w-full lg:w-1/2">
              <h2 className="w-full text-center heading-md !mb-0">Details</h2>
              <div className="flex flex-col items-center text-box h-fit">
                <div className="flex flex-col">
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
                          Cosmic Content Management System for easy editing and
                          adding of blog posts.
                        </p>
                      </li>
                      <li>
                        <p>CSS animation footer of waves.</p>
                      </li>
                      <li>
                        <p>
                          SASS animation for floating gradients in the
                          background.
                        </p>
                      </li>
                      <li>
                        <p>Responsive navigation menu.</p>
                      </li>
                      <li>
                        <p>
                          Airtable as an backend API for serving my AI artwork
                          and my favorite links (although in the future I
                          wouldn&apos;t use it for images, it&apos;s very slow).
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
                        Building my own image carousel to display project
                        images.
                      </li>
                      <li>
                        Using the Unsplash API to load all images from my
                        account as well as the real-time stats.
                      </li>
                      <li>
                        Dynamically generating the sitemap.xml file every time
                        there is a new blog post.
                      </li>
                      <li>
                        Using the Google search console to have the site indexed
                        on Google (Also did this for Bing).
                      </li>
                      <li>Implementing dark mode using Tailwind.</li>
                    </ol>
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
              </div>
            </div>
            <div className="flex flex-col items-center w-full lg:w-1/2">
              <h2 className="w-full text-center heading-md !mb-0">Images</h2>
              <Carousel
                imgs={["/assets/other/projects/ty/tyfierocom.webp"]}
                altText={"Image of the tyfiero blog project"}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Ty;
