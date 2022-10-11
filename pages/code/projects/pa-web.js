import React from "react";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import Carousel from "@/components/projects/Carousel";
import TechChip from "@/components/projects/TechChip";
import Link from "next/link";
import Head from "next/head";

function PAWeb() {
  let tech = ["Wordpress"];
  return (
     <>
      <Head>
      <title>PriceArt Website</title>
        <meta name="description" content={`Wordpress site for PriceArt`} />
      </Head><div className="relative page-container">
      <Link href={"/code/projects"}>
        <a className="absolute flex items-center gap-1 p-1 transition rounded-full top-3 text-sky-500 left-5 f2 hover:scale-105 hover:ring-2 ring-sky-500 ">
          <FaArrowLeft /> Back to Projects
        </a>
      </Link>
      <div
        className={
          "flex flex-col items-center sm:!px-3 md:!px-10 !pt-5 !pb-10 grow-effect overflow-auto"
        }
      >
        <div className="flex justify-center w-full fade-effect">
          <h1 className="heading-lg !mb-0">PriceArt Website</h1>
        </div>
        <div className="flex flex-col items-center mb-2 text-box">
          <p>
            I needed a functional website to market the PriceArt NFT collection
            and serve as a home page. It had to handle lots of concurrent
            visitors on mint day, rank on SEO, and be easily customizable. I
            went with Wordpress primarily for the ease of development, but also
            for the large marketplace of extensions and flexible hosting.
            Wordpress is a breeze to work with, and was incredibly informative
            in my early web dev career. It&apos;s just so easy to add an SEO
            plugin like Yoast and watch the SEO lighthouse score double in less
            than two minutes of effort.
            <br />
            <br />
            While it isn&apos;t a particularly impressive website, it taught me
            a ton of key web development concepts like SEO, forms, web hosting,
            and security that laid the foundation for my React education several
            months later.
            <br />
            <br />
            I&apos;m happy with how it turned out, especially considering how
            little I knew at that point, and I plan on maintaining it into the
            future to show off the NFT collection.
          </p>
        </div>
        <section className="flex gap-4 lg:flex-row sm:flex-col">
          <div className="w-full lg:w-1/2">
            <h2 className="w-full text-center heading-md !mb-0">Details</h2>
            <div className="flex flex-col items-center text-box h-fit">
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
                      <p>Captcha protected form for NFT minting.</p>
                    </li>
                    <li>
                      <p>
                        Interactive candle stick charts thanks to the Trading
                        View Widget.
                      </p>
                    </li>
                    <li>
                      <p>Image carousels to display example NFTs.</p>
                    </li>
                    <li>
                      <p>
                        Custom illustration on the landing page that I had
                        commissioned.
                      </p>
                    </li>
                  </ol>
                </div>
                <div className="w-full">
                  <h2 className="w-full text-left !mb-0 !mt-2 heading-sm">
                    Learnings
                  </h2>
                  <ol className="ml-6 font-bold list-decimal f2 text-sky-600 dark:text-sky-200">
                    <li>
                      Optimizing for mobile screens with responsive design
                    </li>
                    <li>Formatting favicons</li>
                    <li>Customizing navigation menus</li>
                    <li>The inner workings of SEO thanks to YoastSEO</li>
                    <li>
                      Different methods of hosting on platforms like BlueHost
                    </li>
                    <li>
                      Using dedicated hosting to enable at least 5,000
                      concurrent visitors
                    </li>
                    <li>
                      Using load testing to to ensure 5,000 visitors
                      doesn&apos;t break the site
                    </li>
                    <li>Cookies and GDPR</li>
                    <li>Installing and customizing Wordpress extensions</li>
                    <li>
                      Using a low code website builder to create a frontend
                    </li>
                    <li>Writing web copy</li>
                    <li>
                      Using the cPanel in Wordpress to upload custom HTML, CSS
                      and JavaScript for the explorer pages
                    </li>
                    <li>
                      Backing up Wordpress data and restoring from back ups
                    </li>
                    <li>
                      Working with a lawyer to write a protective terms and
                      conditions page
                    </li>
                    <li>Web forms and protecting them with Captchas</li>
                  </ol>
                </div>
              </div>
              <div className="flex justify-center w-full mt-4">
                <a
                  href="https://priceart.xyz/ada-explorer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-1 w-fit f2"
                >
                  Link <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/2">
            <h2 className="w-full text-center heading-md !mb-0">Images</h2>
            <Carousel
              imgs={[
                "/assets/other/projects/PA/paweb1.png",
                "/assets/other/projects/PA/paweb3.jpg",
                "/assets/other/projects/PA/paweb2.png",
                "/assets/other/projects/PA/paweb4.jpg",
              ]}
              altText={"Image of the PriceArt website project"}

            />
          </div>
        </section>
      </div>
    </div>
    </>
  );
}

export default PAWeb;
