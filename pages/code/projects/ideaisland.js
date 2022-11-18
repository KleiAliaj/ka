import React, { createRef } from "react";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import Carousel from "@/components/projects/Carousel";
import TechChip from "@/components/projects/TechChip";
import Link from "next/link";
import dynamic from "next/dynamic";
import Head from "next/head";
import GithubButton from "@/components/etc/githubButton";

const ReadingBar = dynamic(() => import("@/components/blog/ReadingBar"), {
  ssr: false,
});
function IdeaIsland() {
  let tech = [
    { name: "Next.js", icon: "/assets/CodeLogos/nextjs.png" },
    { name: "React", icon: "/assets/CodeLogos/react.png" },
    { name: "Tailwind", icon: "/assets/CodeLogos/tailwind.png" },
    { name: "Redux", icon: "/assets/CodeLogos/redux.png" },
    { name: "Firebase", icon: "/assets/CodeLogos/firebase.png" },
    { name: "GPT-3", icon: "/assets/CodeLogos/openAi.png" },
  ];
  const target = createRef();

  return (
    <>
      <Head>
        <title>ideaisland</title>
        <meta name="description" content={`Full-stack idea generation app`} />
      </Head>
      <div className="relative page-container">
        <ReadingBar target={target} />

        <Link
          className="absolute flex items-center gap-1 p-1 transition rounded-full top-3 text-sky-500 left-5 f2 hover:scale-105 hover:ring-2 ring-sky-500 "
          href={"/code/projects"}
        >
          <FaArrowLeft /> Back to Projects
        </Link>
        <div
          className={
            "flex flex-col items-center md:!px-10 !pt-5 !pb-10 grow-effect overflow-auto"
          }
          ref={target}
        >
          <div className="flex justify-center w-full fade-effect">
            <h1 className="heading-lg !mb-0">ideaisland</h1>
          </div>
          <section className="flex gap-4 lg:flex-row sm:flex-col">
            <div className="flex flex-col items-center w-full lg:w-1/2">
              <h2 className="w-full text-center heading-md !mb-0">Details</h2>

              <div className="flex flex-col items-center mb-2 text-box">
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

                <h2 className="w-full text-left !mb-0 !mt-2 heading-sm">
                  TLDR
                </h2>

                <ol className="ml-6 font-bold list-decimal f2 text-sky-600 dark:text-sky-200">
                  <li>
                    I spent five months building a full-stack web app for a SAAS
                    startup I founded with a friend.
                  </li>
                  <li>
                    Along the way, I learned React, Next.js, TailwindCSS,
                    Firebase, Redux, API&apos;s, and much more.{" "}
                  </li>
                  <li>
                    I failed to validate the startup idea before building it,
                    and I learned a lot about the process of building a product.
                  </li>
                  <li>
                    I&apos;m bummed that it failed, but proud that I built a
                    SAAS app from scratch myself and glad I learned what I did!
                  </li>
                </ol>
                <div className="flex justify-center w-full gap-4 mt-4">
                  <a
                    href="https://ideaisland.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-1 w-fit f2"
                  >
                    App <FaExternalLinkAlt />
                  </a>
                  <a
                    href="https://ideaisland.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-1 w-fit f2"
                  >
                    Website <FaExternalLinkAlt />
                  </a>{" "}
                  <GithubButton url="https://github.com/tyfiero/ideaisland" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full lg:w-1/2">
              <h2 className="w-full text-center heading-md !mb-0">Images</h2>
              <Carousel
                imgs={[
                  "/assets/other/projects/ii/ii4.jpg",
                  "/assets/other/projects/ii/ii1.jpg",
                  "/assets/other/projects/ii/ii2.jpg",
                  "/assets/other/projects/ii/ii3.jpg",
                  "/assets/other/projects/ii/ii5.jpg",
                  "/assets/other/projects/ii/ii6.jpg",
                  "/assets/other/projects/ii/ii7.jpg",
                  "/assets/other/projects/ii/ii8.jpg",
                  "/assets/other/projects/ii/ii9.jpg",
                  "/assets/other/projects/ii/ii10.jpg",
                  "/assets/other/projects/ii/ii11.jpg",
                  "/assets/other/projects/ii/ii12.jpg",
                  "/assets/other/projects/ii/ii13.jpg",
                  "/assets/other/ii.png",
                ]}
                altText={"Image of the ideaisland project"}
              />
            </div>
          </section>

          <div className="flex flex-col items-center text-box !px-10 mt-4">
            <h2 className="w-full text-center heading-md !mb-0 !mt-2">
              Description
            </h2>
            <p>
              My largest project to date, and boy does this one have a story. My
              friend and I had an idea to create an app that helps you come up
              with novel ideas using AI and a set of thinking tools, so I got to
              work building it. I was the coder between the two of us, and I
              decided that I would build the app in React as I learn the
              framework. I was six months into my dev journey, and it&apos;s
              safe to say I bit off more than I could chew, but I kept at it and
              ended up building the entire codebase myself. I started off using
              only create-react-app, but I quickly discovered that I would need
              a backend to send API requests to. This lead me to convert my
              entire project to a Next.js app and learn that as I went as well.
              As the complexity grew, as did my need for a global state manager,
              so I did a crash course in Redux and added Redux state management
              to the project. I then implemented Firebase authentication and a
              Firestore NoSQL database for user accounts and data. It was
              surprisingly easy to learn Firebase, but hard to master the
              intricacies down the road. I converted to Tailwind CSS halfway
              through my project, so I had a large CSS file and Tailwind on the
              same project (don&apos;t worry, I&apos;ll showcase ALL of my
              mistakes at the end of this).
            </p>

            <br />
            <p>
              Every day I would spend at least 3-4 hours watching code videos or
              reading books and articles to learn the new tech, then code for
              the rest of the day. I&apos;d say my average day was about 10
              hours of work, 6 days a week minimum. Non-stop coding for five
              months straight. I&apos;m skipping a lot of details here of
              specific implementations, I could write a book on everything that
              I did for this project, but you get the idea. At the end of the
              five-month period, I had a working app! It worked well, loaded
              quickly, was secure, and had an array of features. It was well and
              truly, a full stack Next.js SAAS app built from scratch with my
              own hands. I was super proud of it and excited to show it off to
              potential customers. (Yup, we made the mistake of building the
              entire app before validating the idea or getting customer
              feedback, oops.)
            </p>
            <br />
            <p>
              We invited 20 beta users to try the app and give proper feedback
              using a Tally form I created. The results weren&apos;t great. Tons
              of feedback about how the navigation didn&apos;t make sense, not
              enough context and help menus, and overall confusion as to what it
              was and what it does. Disheartening to say the least. I added help
              menus, modified the navigation and flow of the app, and added some
              new things over the next two weeks, but again, the feedback was
              exceedingly negative. That&apos;s when I realized that it
              wasn&apos;t the app, it was the underlying problem we were trying
              to solve. I had meetings with a few entrepreneurs and asked them
              questions about how they come up with ideas and manage them. I
              learned that most entrepreneurs have way too many ideas, not too
              few. And that the app I built was targeted at folks that wanted to
              start a business, but didn&apos;t have a business idea yet.
              That&apos;s a tough niche to market to, and even tougher to
              convince those folks to pay a monthly subscription fee for a tool
              that could * potentially * help them create an idea. After five
              months of development, it took less than a week to learn that the
              idea for an idea maker was weak, and not worth pursuing. Ouch.
            </p>
            <br />
            <p>
              This project helped me to learn a massive amount about full stack
              web development, but those learnings pale in comparison to the
              lesson of validating projects early on and talking to customers
              before building. Never again will I build business apps blindly,
              and I intend to never go at it fully alone again. Knowing what I
              know now, I could build a similar app in a fraction of the time,
              and that knowledge gained was worth the price of admission, but
              barely lol.
            </p>
            <br />
            <div className="w-full">
              {" "}
              <h4 className="text-left heading-sm">
                Mistakes and lessons learned
              </h4>
            </div>
            <ul className="ml-8 space-y-2 list-disc">
              <li>
                <p>
                  Only build a SAAS app if you have validated that the problem
                  your app will solve is worth solving in the first place.
                </p>
              </li>

              <li>
                <p>
                  Talk to users early and often. Their feedback should help to
                  guide the direction of the app.
                </p>
              </li>

              <li>
                <p>
                  One thing at a time. I should have learned React by building
                  some example projects first, then gone on to learn Next.js,
                  then built out the app. Learning them both at the same time
                  definitely slowed me down.
                </p>
              </li>

              <li>
                <p>Redux is probably overkill. Atomic state is the future.</p>{" "}
              </li>

              <li>
                <p>
                  Deciding to use TailwindCSS halfway through made styling a
                  nightmare. I love Tailwind, but jamming it into a project that
                  was working just fine with regular CSS classes added
                  unnecessary complexity, especially for a beginner.
                </p>
              </li>

              <li>
                <p>
                  Keep it simple stupid. I didn&apos;t need to spend four full
                  days implementing a rich text editor, but I did. I should have
                  kept complexity to a minimum until I knew that a feature is
                  worth pursuing.
                </p>
              </li>

              <li>
                <p>
                  Keep components small. Looking back, I&apos;m embarrassed at
                  the sheer size of some of the components. If I had to jump in
                  and fix something in that file I would have no idea where to
                  start.
                </p>
              </li>

              <li>
                <p>
                  Write comments in places where the code needs explaining. I
                  ignored this most of the time for the sake of speed.
                </p>
              </li>

              <li>
                <p>
                  Rely less on npm packages. They have their uses, for sure. But
                  I was unafraid of just tossing in another npm package
                  willy-nilly. Not again. I will use bundle phobia in the
                  future.
                </p>
              </li>

              <li>
                <p>
                  Clean code and refactor as you go. I left a lot of
                  commented-out code all over the place “just in case I needed
                  it later”. Bad idea. You can always access old code from old
                  commits, that&apos;s where it belongs. Not grayed out next to
                  functioning code.
                </p>
              </li>

              <li>
                <p>
                  Perfectionism is rarely helpful. I recall days when I would
                  spend several hours just micro-adjusting CSS positions and
                  colors to make it “perfect”. Perfect UI&apos;s don&apos;t
                  exist. Get it 80% of the way there, and come back to it later
                  if you have to. Even big sites like Apple.com have tiny
                  imperfections.
                </p>
              </li>
              <li>
                <p>
                  Burnout is real. After five months of 10-hour days six days a
                  week with zero vacations, I was exhausted. Add on top of that
                  the negative feedback and feeling like I was an idiot for
                  wasting all that time, my mental state got to an all-time low.
                  I&apos;ve since picked myself up and recovered, but lesson
                  learned.
                </p>
              </li>
            </ul>
          </div>
          <section className="flex gap-4 mt-12 lg:flex-row sm:flex-col">
            {/* <h2 className="w-full text-center heading-md !mb-0">Details</h2> */}
            <div className="flex flex-col items-center w-full lg:w-1/2 text-box !px-5 h-fit">
              {" "}
              <div className="w-full">
                <h2 className="w-full text-center !mb-0 !mt-2 heading-md">
                  Tech Learnings
                </h2>

                <p className="text-lg "> React</p>
                <ol className="ml-6 font-bold list-decimal f2 text-sky-600 dark:text-sky-200">
                  {" "}
                  <li> Component-based web architecture</li>
                  <li> JSX and the virtual DOM</li>
                  <li>Events and component life cycles</li>
                  <li>
                    React Hooks: useState, useEffect, useCallback, useMemo,
                    useContext, useRef
                  </li>
                  <li>
                    {" "}
                    Using useContext to provide global user state throughout the
                    component tree
                  </li>
                  <li> Custom hooks such as useClickOutside</li>
                  <li> Iterating over arrays in React using array.map()</li>
                  <li>
                    {" "}
                    npm, npm packages, package.json, and package-lock.json
                  </li>
                  <li>
                    {" "}
                    Using ESLint to enforce clean code rules. I also used
                    SonarLint which provides helpful security and performance
                    linting error messages
                  </li>
                  <li> Modals in React</li>
                  <li>
                    Using React-Table to create beautiful, interactive tables
                    with cells that allow for JSX children
                  </li>
                  <li>Using hotkeys in React</li>{" "}
                </ol>
                <p className="mt-2 text-lg"> Next.js</p>
                <ol className="ml-6 font-bold list-decimal f2 text-sky-600 dark:text-sky-200">
                  {" "}
                  <li> Next.js SSR, CSR, ISR</li>
                  <li>Next.js API routes</li>
                  <li>
                    Adding manifest.json to allow the app to be a Progressive
                    Web App
                  </li>
                  <li> Private environment variables</li>
                  <li> Layouts that persist between routes in Next.js</li>
                  <li>
                    {" "}
                    Protected routes to prevent unauthenticated visitors from
                    accessing private content
                  </li>
                  <li>
                    {" "}
                    Custom CSS loader to display between route changes in
                    Next.js
                  </li>
                  <li>
                    Using dynamic imports to run a component only on the client
                  </li>
                  <li> Custom 404 and 500 pages</li>{" "}
                </ol>
                <p className="mt-2 text-lg"> Firebase / Data</p>
                <ol className="ml-6 font-bold list-decimal f2 text-sky-600 dark:text-sky-200">
                  {" "}
                  <li>
                    {" "}
                    User Authentication with Firebase and sign in with Google
                  </li>
                  <li> NoSQL databases with Cloud Firestore</li>
                  <li> Data modeling and structuring a NoSQL database</li>
                  <li>Querying data from collections</li>
                  <li>
                    {" "}
                    Limiting read and write events to prevent a large Firebase
                    bill
                  </li>
                  <li>
                    Creating interactive calculators with graphs using chart.js
                  </li>
                  <li>
                    {" "}
                    Create, Read, Update, and Delete (CRUD) functionality in
                    Cloud Firestore
                  </li>
                  <li>Firestore security rules</li>
                  <li>
                    {" "}
                    Implementing custom usernames by searching a Firestore
                    collection of taken usernames to see if it is taken
                  </li>
                  <li>
                    Tree shaking in general, Firebase v9 taught me how to do it,
                    and the performance benefits of doing so
                  </li>{" "}
                </ol>
                <p className="mt-2 text-lg">Redux</p>
                <ol className="ml-6 font-bold list-decimal f2 text-sky-600 dark:text-sky-200">
                  {" "}
                  <li>
                    Redux (Store, actions, reducers, dispatch, selectors, and
                    middleware)
                  </li>
                  <li>
                    Redux-persist to store state between sessions, and make that
                    play nicely with server-side rendering
                  </li>
                </ol>
                <p className="mt-2 text-lg">Styling / UI</p>
                <ol className="ml-6 font-bold list-decimal f2 text-sky-600 dark:text-sky-200">
                  <li>Tailwind CSS</li>
                  <li> Custom Tailwind config file</li>
                  <li>
                    Using the @layer directive to create short class names using
                    tailwind
                  </li>
                  <li> Dark mode with Tailwind</li>
                  <li> Framer Motion basics</li>
                  <li> CSS variables, and modifying them with JS</li>
                  <li>Using and styling SVG icons</li>
                  <li>
                    The use of opacity and glassmorphism to make modern
                    UI&apos;s
                  </li>
                  <li> Loading skeletons while an image loads</li>{" "}
                </ol>
                <p className="mt-2 text-lg">APIs</p>
                <ol className="ml-6 font-bold list-decimal f2 text-sky-600 dark:text-sky-200">
                  {" "}
                  <li> OpenAI GPT-3 integration</li>
                  <li>GPT-J integration using the Text Synth API</li>
                  <li>API rate limiting using node.js</li>
                  <li>
                    Using webhooks in a Next.js API route to get payment events
                    and update a users cloud Firestore account using Firebase
                    Admin API
                  </li>
                  <li>Payment integration using Paddle.js</li>
                  <li>
                    Using Pexels and Similar words API to show images and
                    related words to the word displayed in the combinatorial
                    tool
                  </li>
                  <li>
                    {" "}
                    Using the Pexels API to allow a user to add an image header
                    to a note, and adjust the position of the image, similar to
                    Notion
                  </li>{" "}
                </ol>
                <p className="mt-2 text-lg"> Other</p>
                <ol className="ml-6 font-bold list-decimal f2 text-sky-600 dark:text-sky-200">
                  {" "}
                  <li> Hosting with Vercel</li>
                  <li>Cookies and session </li>
                  <li>
                    {" "}
                    Local Storage, in particular saving user settings to Local
                    Storage
                  </li>
                  <li> Google Analytics</li>
                  <li> Rich text editors (WYSIWYG)</li>
                  <li>
                    {" "}
                    Sanitizing HTML to prevent Cross-site scripting attacks
                  </li>
                  <li> Debouncing user inputs</li>
                  <li>
                    {" "}
                    Using a step wizard UI for interactive step-wise forms
                  </li>
                  <li> Help context menus for better UX</li>
                  <li> Browser cross-origin errors</li>
                  <li>
                    {" "}
                    Cascading menu using Ant Design&apos;s Cascader component
                  </li>
                  <li> Using array.filter() to allow for searching of notes</li>
                  <li> Toast messages</li>
                  <li>
                    {" "}
                    Integrating feedback forms in the help page using Tally
                  </li>
                  <li>
                    {" "}
                    Using Shepherd.js to create an interactive product demo
                  </li>
                  <li>
                    {" "}
                    Using LogRocket to track performance and replay user
                    sessions to find bugs
                  </li>
                  <li>
                    {" "}
                    Setting up a log drain on Vercel to monitor logs from edge
                    functions invoked from Next.js API routes
                  </li>
                </ol>
              </div>
            </div>
            <div className="flex flex-col items-center w-full lg:w-1/2 text-box !px-5 h-fit">
              <div className="w-full">
                <h2 className="w-full text-center !mb-0 !mt-2 heading-md">
                  Features
                </h2>
                <ol className="ml-6 font-bold list-decimal f2 text-sky-600 dark:text-sky-200">
                  <li>
                    <p>Dark mode</p>
                  </li>
                  <li>
                    <p>Mobile support</p>
                  </li>
                  <li>
                    <p>User accounts with Firebase</p>
                  </li>
                  <li>
                    <p>Sign in with google</p>
                  </li>
                  <li>
                    <p>CRUD notes using Cloud Firestore</p>
                  </li>
                  <li>
                    {" "}
                    <p>GPT-3 or GPT-J AI-assisted ideas</p>
                  </li>
                  <li>
                    <p>
                      Combinatorial thinking tool that displays three random
                      words with Pexels images for each word
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p>Problem discovery tool using a step wizard UI</p>
                  </li>
                  <li>
                    {" "}
                    <p>
                      Feature selection tool that allows a user to select
                      features for their idea and rank these features in an
                      interactive table UI
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p>
                      Tech Stack selection tool that lets you pick a tech stack
                      for your idea and estimate the cost of your stack
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p>Interactive pricing calculator with graph</p>
                  </li>
                  <li>
                    {" "}
                    <p>
                      Payments and subscriptions using Paddle.js and webhooks
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p>User customizable UI and color scheme</p>
                  </li>
                  <li>
                    {" "}
                    <p>Rich text editors with sanitized HTML</p>
                  </li>
                  <li>
                    {" "}
                    <p>
                      Customizable timer component for timed idea creation
                      sessions.
                    </p>
                  </li>
                  <li>
                    {" "}
                    <p>Global state that persists between sessions</p>
                  </li>
                  <li>
                    {" "}
                    <p>Integrated user feedback forms</p>
                  </li>
                  <li>
                    {" "}
                    <p>
                      Progressive Web App (PWA) support to add the app to mobile
                      home screen
                    </p>{" "}
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default IdeaIsland;
