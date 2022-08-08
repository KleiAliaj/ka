import Container from "@/components/layout/container";
import MoreStories from "@/components/blog/more-stories";
import HeroPost from "@/components/blog/hero-post";
import Intro from "@/components/intro";
import Layout from "@/components/layout/layout";
import { getAllPostsForHome } from "@/lib/api";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import Image from "next/image";
import Loader from "@/components/Loader";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Head>
        <title>Ty Fiero's blog on code, music, and life.</title>
      </Head>
      <div className="fade-effect-quick page-container !items-start">
        <Intro />
        <div className="w-[80%] h-[30em] rounded-lg drop-shadow-2xl">
          <Image
            src="/assets/other/Ty-lofi.jpeg"
            alt="Lofi Style image of Ty"
            className="!rounded-lg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* <div className="w-full h-[20em] flex justify-center">
          {" "}
          <Loader />
        </div> */}
        <div className="flex flex-col gap-10 my-10">
          {/* DEV SECTION */}
          <div className="flex justify-center gap-10 sm:flex-col md:flex-row sm:items-center">
            <div className="md:w-1/2 sm:w-full">
              <p className="font-bold heading-md !text-left">Developer</p>
              <p>
                I'm a developer with a passion for building things that are
                useful to people. My journey in software development started
                during the covid lockdown of 2020. I began taking online courses
                for web development, starting with basic HTML and CSS. In May of
                2021 I left my job as a public health microbiologist to learn
                full time. Since then, I've worked on a variety of projects,
                from small vanilla javascript projects to full stack web
                applications in Next.js.
              </p>

              <br />
            </div>
            <div className="relative shadow-xl  md:min-w-[30em] rounded-xl shadow-sky-600/30 flex flex-wrap items-center justify-center gap-2 bg-gradient-to-t from-sky-500/40 to-white/20 dark:to-black/20 p-1">
              {/* <div className="w-1/4 !h-auto shadow-xl rounded-xl shadow-sky-600/30 image-container flex flex-col justify-center items-start"> */}
              {/* <img
                src="https://images.unsplash.com/photo-1653794280522-96224d9338c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                alt="A plant in the Pacific Northwest"
                layout="fill"
                className=" rounded-xl"
              /> */}
              <div className="flex flex-col items-center gap-2">
                <p>Technologies I'm comfortable with:</p>
                <div className="flex flex-wrap justify-center ring-2 rounded-xl w-[98%] gap-2">
                  <CodeLogo
                    title="React"
                    img="/assets/CodeLogos/react.png"
                    alt="React logo"
                    url="https://reactjs.org/"
                    imgStyle=" scale-[90%] hover:!scale-[100%] translate-y-2"
                  />
                  <CodeLogo
                    title="Next.js"
                    img="/assets/CodeLogos/nextjs.png"
                    alt="Next logo"
                    url="https://nextjs.org/"
                    imgStyle="  translate-y-3 invert-0 dark:invert"
                  />
                  <CodeLogo
                    title="Javascript"
                    img="/assets/CodeLogos/js.png"
                    alt="Js logo"
                    url="https://developer.mozilla.org/en-US/docs/Web/javascript"
                    imgStyle=" scale-[90%] hover:!scale-[100%] translate-y-2"
                  />
                  <CodeLogo
                    title="Tailwind CSS"
                    img="/assets/CodeLogos/tailwind.png"
                    alt="Tailwind logo"
                    url="https://tailwindcss.com/"
                    imgStyle="  translate-y-3"
                  />
                  <CodeLogo
                    title="Redux"
                    img="/assets/CodeLogos/redux.png"
                    alt="Redux logo"
                    url="https://redux.js.org/"
                    imgStyle=" scale-[80%] hover:!scale-[90%] translate-y-3"
                  />
                  <CodeLogo
                    title="Recoil js"
                    img="/assets/CodeLogos/recoil.png"
                    alt="Recoil logo"
                    url="https://recoiljs.org/"
                    imgStyle=" scale-[70%] hover:!scale-[80%] translate-y-3"
                  />
                  <CodeLogo
                    title="node.js"
                    img="/assets/CodeLogos/express.png"
                    alt="Express logo"
                    url="https://nodejs.org/"
                    imgStyle=" translate-y-4"
                  />
                  <CodeLogo
                    title="Firebase"
                    img="/assets/CodeLogos/firebase.png"
                    alt="Firebase logo"
                    url="https://firebase.google.com/"
                    imgStyle=" scale-[70%] hover:!scale-[80%] translate-y-3"
                  />
                  <CodeLogo
                    title="HTML5"
                    img="/assets/CodeLogos/html.png"
                    alt="HTML5 logo"
                    url="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                    imgStyle=" scale-[100%] hover:!scale-[110%] translate-y-3"
                  />
                  <CodeLogo
                    title="CSS3"
                    img="/assets/CodeLogos/css.png"
                    alt="CSS3 logo"
                    url="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    imgStyle=" scale-[72%] hover:!scale-[85%] translate-y-3"
                  />
                  <CodeLogo
                    title="D3.js"
                    img="/assets/CodeLogos/d3.png"
                    alt="D3 logo"
                    url="https://d3js.org/"
                    imgStyle=" scale-[85%]  hover:!scale-[95%] translate-y-2"
                  />
                  <CodeLogo
                    title="p5.js"
                    img="/assets/CodeLogos/p5.png"
                    alt="p5 logo"
                    url="https://p5js.org/"
                    imgStyle=" translate-y-3"
                  />
                  <CodeLogo
                    title="Chart.js"
                    img="/assets/CodeLogos/chartjs.png"
                    alt="chart.js logo"
                    url="https://www.chartjs.org/"
                    imgStyle=" scale-[75%]  hover:!scale-[85%] translate-y-2"
                  />
                  <CodeLogo
                    title="Chrome Extensions"
                    img="/assets/CodeLogos/chrome.png"
                    alt="chrome logo"
                    url="https://developer.chrome.com/docs/extensions/"
                    imgStyle=" scale-[75%]  hover:!scale-[85%] translate-y-2"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center w-full gap-2">
                <p>Technologies I'm learning right now:</p>
                <div className="flex flex-wrap justify-center gap-2 ring-2 rounded-xl w-fit">
                  <CodeLogo
                    title="TypeScript"
                    img="/assets/CodeLogos/ts.png"
                    alt="TypeScript logo"
                    url="https://www.typescriptlang.org/"
                    imgStyle=" scale-[75%] bg-white hover:!scale-[85%] translate-y-2"
                  />
                  <CodeLogo
                    title="Sass"
                    img="/assets/CodeLogos/Sass.png"
                    alt="Sass logo"
                    url="https://sass-lang.com/"
                    imgStyle=" scale-[125%]  hover:!scale-[135%] translate-y-3"
                  />
                  <CodeLogo
                    title="React Three"
                    img="/assets/CodeLogos/three.png"
                    alt="three logo"
                    url="https://docs.pmnd.rs/react-three-fiber/getting-started/introduction"
                    imgStyle=" scale-[75%] hover:!scale-[85%] translate-y-3"
                  />
                  <CodeLogo
                    title="Python"
                    img="/assets/CodeLogos/python.png"
                    alt="Python logo"
                    url="https://www.python.org/"
                    imgStyle=" scale-[75%] hover:!scale-[85%] translate-y-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PHOTOGRAPHY SECTION */}
        <div className="flex justify-center gap-10 sm:flex-col md:flex-row-reverse sm:items-center">
          <div className="md:w-1/2 sm:w-full">
            <p className="font-bold heading-md !text-left">Photographer</p>
            <p>
              Photography is my creative outlet that gets me outside, and helps
              me notice and appreciate the beauty of the Pacific Northwest (and
              some of my pets).
            </p>

            <a
              href="https://unsplash.com/@tyfiero"
              target="_blank"
              rel="noreferrer"
              className="flex h-[4em] w-[10em] flex-col items-center p-2 transition bg-slate-900 dark:bg-white rounded-3xl hover:scale-110 active:scale-90 shadow-2xl drop-shadow-lg"
            >
              <span className="text-xs font-bold text-white dark:text-black">
                View my photos on:
              </span>
              <div className="w-[8em]  dark:invert-0 invert h-[3em]">
                {" "}
                <img
                  src="/assets/other/u-logo.png"
                  alt="unsplash button"
                  className="object-contain"
                />
              </div>
            </a>
            <br />
          </div>
          <div className="md:w-[640px] md:h-[423px] sm:w-[320px] sm:h-[211px] relative shadow-xl rounded-xl shadow-sky-600/30 ">
            {/* <div className="w-1/4 !h-auto shadow-xl rounded-xl shadow-sky-600/30 image-container flex flex-col justify-center items-start"> */}
            <Image
              src="https://images.unsplash.com/photo-1653794280522-96224d9338c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
              alt="A plant in the Pacific Northwest"
              layout="fill"
              className=" rounded-xl"
            />
          </div>
        </div>

        {/* Music SECTION */}
        <div className="flex justify-center w-full gap-10 sm:flex-col md:flex-row sm:items-center">
          <div className="md:w-1/2 sm:w-full">
            <p className="font-bold heading-md !text-left">
              Latest From the blog
            </p>
            <p>Most recent blog post here</p>

            <br />
          </div>
          <div className="md:w-[640px] md:h-[423px] sm:w-[320px] sm:h-[211px] relative shadow-xl rounded-xl shadow-sky-600/30 ">
            {/* <div className="w-1/4 !h-auto shadow-xl rounded-xl shadow-sky-600/30 image-container flex flex-col justify-center items-start"> */}
            <Image
              src="https://images.unsplash.com/photo-1653794280522-96224d9338c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
              alt="A plant in the Pacific Northwest"
              layout="fill"
              className=" rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ preview }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts },
  };
}

function CodeLogo(props) {
  return (
    <div className="flex flex-col gap-1 transition hover:ring-2 ring-sky-500 max-w-[8em] items-center rounded-xl duration-500 px-3 py-2 hover:bg-gradient-to-b dark:from-black/10 from-white/10 to-sky-300/80 cursor-pointer">
      <a
        href={props.url}
        target="_blank"
        className={
          "w-20 h-20 transition hover:scale-110 relative " + props.imgStyle
        }
      >
        <Image
          src={props.img}
          alt={props.alt}
          layout="fill"
          objectFit="contain"
        />
      </a>
      <p className="font-bold text-center">{props.title}</p>
    </div>
  );
}
