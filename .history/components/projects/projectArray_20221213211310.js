export const projectArray = [
  {
    title: "CanvasCat",
    slug: "canvascat",
    feature: true,
    route: "/code/projects/canvascat",
    shortDescription: "AI business planner",
    description:
      "AI-powered web app that creates a business model canvas and brand identity for your business.",
    technologies: [
      { name: "Next.js", icon: "/assets/CodeLogos/nextjs.png" },
      { name: "React", icon: "/assets/CodeLogos/react.png" },
      { name: "Tailwind", icon: "/assets/CodeLogos/tailwind.png" },
      { name: "Framer Motion", icon: "/assets/CodeLogos/framer.png" },
      { name: "GPT-3", icon: "/assets/CodeLogos/openAi.png" },
    ],
    imgSrc: "/assets/other/projects/canvascat/cc.PNG",
    thumb: "/assets/other/projects/canvascat/cc.PNG",
    styles: {
      color: "bg-orange-800",
      bColor: "ring-orange-500 ",
      textColor: " text-orange-600 dark:text-orange-400",
      shadow:
        "!shadow-orange-500 bg-gradient-to-br from-white via-white to-orange-200 dark:from-slate-900 dark:via-slate-900 dark:to-orange-900",
    },
    content: {
      imgArray: [
        "/assets/other/projects/canvascat/cc1.webp",
        "/assets/other/projects/canvascat/cc2.webp",
        "/assets/other/projects/canvascat/cc3.webp",
        "/assets/other/projects/canvascat/cc4.webp",
        "/assets/other/projects/canvascat/cc5.webp",
        "/assets/other/projects/canvascat/cc6.webp",
      ],
      links: {
        url: true,
        urlLink: "https://canvas-cat.com",
        urlText: "Link",
        url2: false,
        url2Link: null,
        url2Text: null,
        github: true,
        githubLink: "https://github.com/tyfiero/CanvasCat",
        productHunt: false,
        phLink: null,
        phImgSrc: null,
      },
      longDescription: `<p>
      This project started off as an unfinished feature of <a href="/code/projects/ideaisland" class="anc">ideaisland</a>, I had built a feature that would create a full business model canvas from a single sentence of context, and I did&apos;t want that to go to waste. So I stripped out all of that code from the now sunsetted ideaisland repository, and turned it into it&apos;s own application. I added payments from Paddle, and added a few more features like a SWOT (Strengths, Weaknesses, Opportunities and Threats) analysis generator and a brand identity generator. This was a fun project to make, considering I had most of the code done already. And I <strong>love</strong> the cat logo!
    </p>`,
      learnings: `<li>GPT-3 is almost too easy to implement into new projects.</li>
      <li>
        Using the same component for each canvas section with different props drastically simplified the building process.
      </li>
      
      <li>
        Bold color palettes can work, so long as they are used tastefully.
      </li>`,
      features: "",
    },
  },
  {
    title: "ConsistenSea",
    slug: "consistensea",
    feature: true,
    route: "/code/projects/consistensea",
    shortDescription: "Habit-tracking extension",
    description:
      "Habit-tracking chrome extension built with React, framer motion, tailwind, and the Chrome extension API.",
    technologies: [
      { name: "React", icon: "/assets/CodeLogos/react.png" },
      { name: "Tailwind", icon: "/assets/CodeLogos/tailwind.png" },
      { name: "Framer Motion", icon: "/assets/CodeLogos/framer.png" },
      { name: "Chrome Extension API", icon: "/assets/CodeLogos/chrome.png" },
    ],
    imgSrc: "/assets/other/projects/consistensea/consistensea.png",
    thumb: "/assets/other/projects/thumbnails/cs.webp",
    styles: {
      color: "bg-blue-400",
      bColor: "ring-blue-500 ",
      textColor: " text-blue-600 dark:text-blue-400",
      shadow:
        "!shadow-blue-500 bg-gradient-to-br from-white via-white to-blue-200 dark:from-slate-900 dark:via-slate-900 dark:to-blue-900",
    },
    content: {
      imgArray: [
        "/assets/other/projects/consistensea/cs2.webp",
        "/assets/other/projects/consistensea/cs4.webp",
        "/assets/other/projects/consistensea/cs3.webp",
        "/assets/other/projects/consistensea/cs1.webp",
      ],
      links: {
        url: true,
        urlLink:
          "https://chrome.google.com/webstore/detail/consistensea-new-tab-page/kknggaienefkejfafpgdnjgokkangnhc",
        urlText: "Install",
        url2: false,
        url2Link: null,
        url2Text: null,
        github: true,
        githubLink: "https://github.com/tyfiero/consistensea",
        productHunt: true,
        phLink:
          "https://www.producthunt.com/posts/consistensea?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-consistensea",
        phImgSrc:
          "https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=357189&theme=light",
      },
      longDescription: `<p>
      This was a fun project to build. I wanted to create a habit
      tracker that I would actually remember to use, so I decided to
      make a new tab chrome extension so that I would see my habits
      on every single new tab. Turns out React plays well with
      chrome extensions, and there is so much you can do with the
      Chrome Extension API. Framer Motion is so fun to use, and
      brings life into an otherwise static site! This project took
      me about a week to build. I launched it on ProductHunt, and
      learned a lot from the process of launching a product!
    </p>`,
      learnings: `<li>Framer motion is a joy to work with.</li>
      <li>
        Chrome extensions are simpler than I imagined.
      </li>
      <li>
        The possibilities for extensions are endless due to
        the feature-rich Chrome API , and I will definitely
        make more extensions in the future.
      </li>
      <li>
        Building cool things you want for yourself makes
        coding way more fun.
      </li>`,
      features: "",
    },
  },

  {
    title: "Brainstorm Buddy",
    slug: "brainstorm-buddy-project",
    feature: true,
    route: "/code/projects/brainstorm-buddy-project",
    shortDescription: "Conversational idea AI",
    description:
      "Conversational AI designed to help you brainstorm, using GPT-3 and Next.js.",
    technologies: [
      { name: "Next.js", icon: "/assets/CodeLogos/nextjs.png" },
      { name: "React", icon: "/assets/CodeLogos/react.png" },
      { name: "Tailwind", icon: "/assets/CodeLogos/tailwind.png" },
      { name: "Framer Motion", icon: "/assets/CodeLogos/framer.png" },
      { name: "GPT-3", icon: "/assets/CodeLogos/openAi.png" },
    ],
    imgSrc: "/assets/other/projects/buddy/tile.webp",
    thumb: "/assets/other/projects/buddy/profile-square.webp",
    styles: {
      color: "bg-sky-400",
      bColor: "ring-sky-500 ",
      textColor: " text-sky-600 dark:text-sky-400 whitespace-nowrap",
      shadow:
        "!shadow-sky-500 bg-gradient-to-br from-white via-white to-sky-200 dark:from-slate-900 dark:via-slate-900 dark:to-sky-900",
    },
    content: {
      imgArray: [
        "/assets/other/projects/buddy/sc3.webp",
        "/assets/other/projects/buddy/sc2.webp",
        "/assets/other/projects/buddy/sc1.webp",
      ],
      links: {
        url: true,
        urlLink: "/code/ai/brainstorm-buddy",
        urlText: "Link",
        url2: false,
        url2Link: null,
        url2Text: null,
        github: true,
        githubLink:
          "https://github.com/tyfiero/tyfiero-blog/blob/main/pages/code/ai/brainstorm-buddy.js",
        productHunt: false,
        phLink: null,
        phImgSrc: null,
      },
      longDescription: ` <p>
      A GPT-3 experiment I made to simulate a knowledgeable friend to
      brainstorm with. The AI is designed to ask you questions about the
      ideas you present it, in order to challenge your assumptions and
      create better ideas. I&apos;ve found that my best ideas come when
      talking to friends, making ideas by myself is tougher. But I
      can&apos;t always talk to a buddy to brainstorm, so I made this!
      It works surprisingly well, I honestly wasn&apos;t expecting it to
      perform as well as it does.
      <a class="anc" href="/code/ai/brainstorm-buddy">
        Give it a try
      </a>, and
      <a class="anc" href="/contact">
        let me know
      </a> how it works for you.
      <br />
      <br />
      I&apos;m pretty happy with how it turned out. I could have made it
      with a simple UI, but emulating an Iphone sounded really fun in
      the moment, so here we are! Really made me appreciate how
      intricate IOS UI and animations are. Took me longer than I thought
      it would to recreate the messages app, but it was fun using framer
      motion and css animations to make the user experience feel
      familiar.
    </p>`,
      learnings: ` <li>
      There is a ton of UX work involved with making a UI look
      and work as simple as Apple&apos;s IOS.
    </li>
    <li>
      Framer motion makes animating the web so much fun, it
      might be my favorite JS library.
    </li>
    <li>
      This project only took me a day to make, credit to
      OpenAI for making an incredible API that makes AI easy.
    </li>
    <li>Brainstorming with a buddy is way more fun :)</li>`,
      features: "",
    },
  },
  {
    title: "Oliver",
    slug: "Oliver",
    feature: true,
    route: "/code/projects/Oliver",
    shortDescription: "AI life advice app",
    description:
      "Interactive AI life advice app built with Next.js, tailwind, GPT-3, and CSS illustration.",
    technologies: [
      { name: "Next.js", icon: "/assets/CodeLogos/nextjs.png" },
      { name: "React", icon: "/assets/CodeLogos/react.png" },
      { name: "Tailwind", icon: "/assets/CodeLogos/tailwind.png" },
      { name: "GPT-3", icon: "/assets/CodeLogos/openAi.png" },
      { name: "Voice RSS", icon: null },
    ],
    imgSrc: "/assets/other/projects/oliver/oliver.webp",
    thumb: "/assets/other/projects/thumbnails/oli.webp",
    styles: {
      color: "bg-red-400",
      bColor: "ring-red-500 ",
      textColor: " text-red-600 dark:text-red-400",
      shadow:
        "!shadow-red-500 bg-gradient-to-br from-white via-white to-red-200 dark:from-slate-900 dark:via-slate-900 dark:to-red-900",
    },
    content: {
      imgArray: [
        "/assets/other/projects/oliver/oliver.webp",
        "/assets/other/projects/oliver/oliver2.webp",
      ],
      links: {
        url: true,
        urlLink: "/code/ai/Oliver",
        urlText: "Link",
        url2: false,
        url2Link: null,
        url2Text: null,
        github: true,
        githubLink:
          "https://github.com/tyfiero/tyfiero-blog/tree/main/components/ai",
        productHunt: false,
        phLink: null,
        phImgSrc: null,
      },
      longDescription: ` <p>
      I&#39;ve had some experience with openAI&apos;s GPT-3 before, and
              I thought it would be so cool if I could ask it for life advice. I
              wrote a fairly detailed text prompt for it, and the results were
              astounding. Give it a try if you haven&apos;t already. It started
              with just therapist life advice, but I recently wrote new prompts
              and added a drop down menu to change the &quot;profession&quot;
              of Oliver. This will not be my last GPT-3 project, especially now
              that I have boilerplate code for it.
    </p>`,
      learnings: ` <li>
      GPT-3 is incredibly powerful, and does a great job at
      providing life advice of all sorts. I was blown away
      with the results after a few days of tweaking prompts.
    </li>
    <li>
      CSS animations are so fun! It was really enjoyable
      getting the mouth to &quot;talk&quot; and to get the
      eyes to blink.
    </li>
    <li>
      CSS is a medium for art just as much as painting or
      Photoshop is.
    </li>
    <li>
      Text to speech API&apos;s are easy to work with, and
      free!
    </li>
    <li>
      Learned how to stream text to make it look like he was
      writing it as it was coming in.
    </li>`,
      features: "",
    },
  },
  {
    title: "Deliberate Design",
    slug: "deliberate-design",
    feature: false,
    route: "/code/projects/deliberate-design",
    shortDescription: "AI art prompt designer",
    description:
      "A web app to generate creative, detailed text prompts for AI image generators. Built with Next.js, Tailwind, and Recoil.",
    technologies: [
      { name: "Next.js", icon: "/assets/CodeLogos/nextjs.png" },
      { name: "React", icon: "/assets/CodeLogos/react.png" },
      { name: "Tailwind", icon: "/assets/CodeLogos/tailwind.png" },
      { name: "Recoil.js", icon: "/assets/CodeLogos/recoil.png" },
    ],
    imgSrc: "/assets/other/projects/dd/deliberate.png",
    thumb: "/assets/other/projects/thumbnails/palm.webp",
    styles: {
      color: "bg-teal-400",
      bColor: "ring-teal-500 ",
      textColor: " text-teal-600 dark:text-teal-300 whitespace-nowrap",
      shadow:
        "!shadow-teal-500 bg-gradient-to-br from-white via-white to-teal-200 dark:from-slate-900 dark:via-slate-900 dark:to-teal-900",
    },
    content: {
      imgArray: ["/assets/other/projects/dd/deliberate.png"],
      links: {
        url: false,
        urlLink: null,
        urlText: "Link",
        url2: false,
        url2Link: null,
        url2Text: null,
        github: false,
        githubLink: null,
        productHunt: false,
        phLink: null,
        phImgSrc: null,
      },
      longDescription: ` 
      <p class="text-center"> *Work in Progress*</p>
      <br /> 
      <p>This started off as just a simple project that I could
      learn Recoil.js with, and it ended up being way more than that. I
      wanted to create a unique, walk-through wizard style prompt
      designer for image AI&apos;s, specifically for MidJourney. When I
      started using MidJourney, I noticed that I was having image prompt
      writers block. The AI could make <strong>anything</strong> you
      wanted, and that lead me to analysis paralysis, so I would just
      write whatever came to my mind. After a few off the top prompts
      like, &quot;A monkey on a spaceship painted by Picasso&quot;, I
      realized that I wanted to be more deliberate with my prompt
      design. Instead of just throwing whatever into the prompt, I
      wanted to plan out my prompts much like a professional artist
      would would plan an art piece. Thus, the idea for
      DeliberateDesign.art was born.
    </p>`,
      learnings: `  <li>
      Recoil.js is incredible. Amazing. World-class. Redux is
      good, it gets the job done, but Recoil makes global
      state so much easier.
    </li>
    <li>
      Next.js is my true love. I have enough experience with
      it now to take full advantage of its features and bend
      it to my will.
    </li>
    <li>
      This was my first project where I began with a defined
      color system first. It made styling decisions a lot
      easier.
    </li>
    <li>
      I wrote what felt like a million array.map()&apos;s,
      what a powerful tool to build numerous UI components
      from a single array in React.
    </li>`,
      features: "",
    },
  },
  {
    title: "tyfiero.com",
    slug: "tyfiero",
    feature: true,
    route: "/code/projects/tyfiero",
    shortDescription: "Personal Website",
    description: "My personal website built with Next.js, Tailwind, and MDX.",
    technologies: [
      { name: "Next.js", icon: "/assets/CodeLogos/nextjs.png" },
      { name: "React", icon: "/assets/CodeLogos/react.png" },
      { name: "Tailwind", icon: "/assets/CodeLogos/tailwind.png" },
      { name: "SASS", icon: "/assets/CodeLogos/Sass.png" },
      { name: "Framer Motion", icon: "/assets/CodeLogos/framer.png" },
      { name: "MDX", icon: null },
    ],
    imgSrc: "/assets/other/projects/ty/tyfierocom.webp",
    thumb: "/assets/other/projects/thumbnails/ty.webp",
    styles: {
      color: "bg-sky-400",
      bColor: "ring-sky-500 ",
      textColor: " text-sky-600 dark:text-sky-300",
      shadow:
        "!shadow-sky-500 bg-gradient-to-br from-white via-white to-sky-200 dark:from-slate-900 dark:via-slate-900 dark:to-sky-900",
    },
    content: {
      imgArray: ["/assets/other/projects/ty/tyfierocom.webp"],
      links: {
        url: true,
        urlLink: "/",
        urlText: "Home Page",
        url2: false,
        url2Link: null,
        url2Text: null,
        github: true,
        githubLink: "https://github.com/tyfiero/tyfiero-blog",
        productHunt: false,
        phLink: null,
        phImgSrc: null,
      },
      longDescription: ` 
      <p>
              I needed a place to put all of my work and display all that I have learned, so a personal website was a must. It took me a bit to think about what tech stack I would use for this project, I decided to work backwards from what I needed the site to do. It needed to be customizable, easily styled, friendly for SEO, easy to add add/edit blog posts, and fast to load. From these requirements, I decided to use Next.js and react as the framework to serve static HTML that can be crawled by search engines for SEO purposes. I also wanted experience working with a content management system (CMS) in React, so I decided on Cosmic CMS initially. After awhile I migrated to MDX, and it has been a dream to work with. For styling I went with Tailwind because I love tailwind, but also because it would speed up the site by shipping less CSS to the browser.
              <br />
              <br />
              The bones for this project took me about a week to build, but I have been iterating on the site ever since. Having a central hub to put all of my content and projects has been a game changer, it motivates me to continue to create and share who I am with the world. I plan on implementing a full 3D landing page experience with React Three Fiber soon, to give the site more of a wow factor while hopefully keeping loading times fast.
            </p>`,
      learnings: `   <li>CMS API.</li>
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
      <li>Implementing dark mode using Tailwind.</li>`,
      features: `<li>
    <p>
      Cosmic Content Management System for easy editing and
      adding of blog posts. (edit: I have since moved to MDX for adding more interactive React components into blog posts.)
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
  </li>`,
    },
  },
  {
    title: "ideaisland",
    slug: "ideaisland",
    feature: true,
    route: "/code/projects/ideaisland",
    shortDescription: "AI-powered idea generation",
    description:
      "A web application for idea generation. Built with Next.js, Tailwind, Firebase, and GPT-3.",
    technologies: [
      { name: "Next.js", icon: "/assets/CodeLogos/nextjs.png" },
      { name: "React", icon: "/assets/CodeLogos/react.png" },
      { name: "Tailwind", icon: "/assets/CodeLogos/tailwind.png" },
      { name: "Redux", icon: "/assets/CodeLogos/redux.png" },
      { name: "Firebase", icon: "/assets/CodeLogos/firebase.png" },
      { name: "GPT-3", icon: "/assets/CodeLogos/openAi.png" },
    ],
    imgSrc: "/assets/other/ii.png",
    thumb: "/assets/other/projects/thumbnails/ii.webp",
    styles: {
      color: "bg-pink-400",
      bColor: "ring-pink-500 ",
      textColor: " text-pink-600 dark:text-pink-300",
      shadow:
        "!shadow-pink-500 bg-gradient-to-br from-white via-white to-pink-200 dark:from-slate-900 dark:via-slate-900 dark:to-pink-900",
    },
    content: {
      imgArray: [],
      links: {
        url: false,
        urlLink: null,
        urlText: null,
        url2: false,
        url2Link: null,
        url2Text: null,
        github: false,
        githubLink: null,
        productHunt: false,
        phLink: null,
        phImgSrc: null,
      },
      longDescription: null,
      features: null,
    },
  },
  {
    title: "PriceArt ETH NFTs",
    slug: "pa-eth",
    feature: true,
    route: "/code/projects/pa-eth",
    shortDescription: "Polygon NFT project",
    description:
      "Generative art NFT project using real Ethereum price data. Built with P5.js, Polygon blockchain, and vanilla JavaScript.",
    technologies: [
      { name: "JavaScript", icon: "/assets/CodeLogos/js.png" },
      { name: "HTML", icon: "/assets/CodeLogos/html.png" },
      { name: "CSS", icon: "/assets/CodeLogos/css.png" },
      { name: "p5.js", icon: "/assets/CodeLogos/p5.png" },
      { name: "GLSL Shaders", icon: null },
    ],
    imgSrc: "/assets/other/projects/PA/eth6.jpg",
    thumb: "/assets/other/projects/thumbnails/eth.webp",
    styles: {
      color: "bg-indigo-400",
      bColor: "ring-indigo-500 ",
      textColor: " text-indigo-600 dark:text-indigo-300 whitespace-nowrap",
      shadow:
        "!shadow-indigo-500 bg-gradient-to-br from-white via-white to-indigo-200 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-900",
    },
    content: {
      imgArray: [
        "/assets/other/projects/PA/eth1.png",
        "/assets/other/projects/PA/eth2.png",
        "/assets/other/projects/PA/eth3.webp",
        "/assets/other/projects/PA/eth4.webp",
        "/assets/other/projects/PA/eth5.webp",
      ],
      links: {
        url: true,
        urlLink: "https://priceart.xyz/eth-explorer/",
        urlText: "Explorer",
        url2: true,
        url2Link: "https://opensea.io/collection/ethusd",
        url2Text: "OpenSea",
        github: true,
        githubLink: "https://github.com/tyfiero/ETH-PriceArt-explorer",
        productHunt: false,
        phLink: null,
        phImgSrc: null,
      },
      longDescription: ` 
      <p>
              This project took a lot of the learnings from the ADA PriceArt,
              and applied them to a new blockchain. Official write up coming
              soon, but I did write
              <a
                href="/blog/posts/timeless-lessons-from-shipping-an-nft-collection-as-a-new-developer"
                class="anc"
              >
                a full blog post
              </a>
              about this experience.
              <br />
              <br />
            </p>`,
      learnings: `    <li>How to mint NFT&apos;s on the Polygon Blockchain.</li>
      <li>Responsive web design using media queries</li>`,
      features: "",
    },
  },
  {
    title: "PriceArt ADA NFTs",
    slug: "pa-ada",
    feature: true,
    route: "/code/projects/pa-ada",
    shortDescription: "Cardano NFT project  ",
    description:
      "Generative art NFT project using real Cardano price data. Built with P5.js, GLSL shaders, and vanilla JavaScript.",
    technologies: [
      { name: "JavaScript", icon: "/assets/CodeLogos/js.png" },
      { name: "HTML", icon: "/assets/CodeLogos/html.png" },
      { name: "CSS", icon: "/assets/CodeLogos/css.png" },
      { name: "p5.js", icon: "/assets/CodeLogos/p5.png" },
      { name: "GLSL Shaders", icon: null },
    ],
    imgSrc: "/assets/other/projects/PA/ada7.jpg",
    thumb: "/assets/other/projects/thumbnails/ada.webp",
    styles: {
      color: "bg-green-400",
      bColor: "ring-green-500 ",
      textColor: " text-green-600 dark:text-green-300 whitespace-nowrap",
      shadow:
        "!shadow-green-500 bg-gradient-to-br from-white via-white to-green-200 dark:from-slate-900 dark:via-slate-900 dark:to-green-900",
    },
    content: {
      imgArray: [
        "/assets/other/projects/PA/ada8.jpg",
        "/assets/other/projects/PA/ada1.webp",
        "/assets/other/projects/PA/ada2.webp",
        "/assets/other/projects/PA/ada3.webp",
        "/assets/other/projects/PA/ada4.webp",
        "/assets/other/projects/PA/ada5.webp",
        "/assets/other/projects/PA/ada6.webp",
        "/assets/other/projects/PA/ada7.jpg",
      ],
      links: {
        url: true,
        urlLink: "https://priceart.xyz/ada-explorer/",
        urlText: "Explorer",
        url2: false,
        url2Link: null,
        url2Text: null,
        github: true,
        githubLink: "https://github.com/tyfiero/ADA-PriceArt-explorer",
        productHunt: false,
        phLink: null,
        phImgSrc: null,
      },
      longDescription: ` <p>Official write up coming soon, but I did write
              <a
              class="anc"
                href="/blog/posts/timeless-lessons-from-shipping-an-nft-collection-as-a-new-developer"
              >
                a full blog post
              </a>
              about this experience.
            </p>`,
      learnings: ` <li>More to come...</li>`,
      features: "",
    },
  },
  {
    title: "PriceArt Website",
    slug: "pa-web",
    feature: false,
    route: "/code/projects/pa-web",
    shortDescription: "Home page for PriceArt",
    description: "Home page for the PriceArt NFT project built with WordPress.",
    technologies: [
      { name: "WordPress", icon: "/assets/CodeLogos/wordpress.png" },
    ],
    imgSrc: "/assets/other/projects/PA/paweb1.png",
    thumb: "/assets/other/projects/thumbnails/pa.webp",
    styles: {
      color: "bg-lime-500",
      bColor: "ring-lime-500 ",
      textColor: " text-lime-600 dark:text-lime-300",
      shadow:
        "!shadow-lime-500 bg-gradient-to-br from-white via-white to-lime-200 dark:from-slate-900 dark:via-slate-900 dark:to-lime-900",
    },
    content: {
      imgArray: [
        "/assets/other/projects/PA/paweb1.png",
        "/assets/other/projects/PA/paweb3.jpg",
        "/assets/other/projects/PA/paweb2.png",
        "/assets/other/projects/PA/paweb4.jpg",
      ],
      links: {
        url: true,
        urlLink: "https://priceart.xyz/",
        urlText: "Link",
        url2: false,
        url2Link: null,
        url2Text: null,
        github: false,
        githubLink: null,
        productHunt: false,
        phLink: null,
        phImgSrc: null,
      },
      longDescription: ` <p>
      I needed a functional website to market the PriceArt NFT
      collection and serve as a home page. It had to handle lots of
      concurrent visitors on mint day, rank on SEO, and be easily
      customizable. I went with Wordpress primarily for the ease of
      development, but also for the large marketplace of extensions and
      flexible hosting. Wordpress is a breeze to work with, and was
      incredibly informative in my early web dev career. It&apos;s just
      so easy to add an SEO plugin like Yoast and watch the SEO
      lighthouse score double in less than two minutes of effort.
      <br />
      <br />
      While it isn&apos;t a particularly impressive website, it taught
      me a ton of key web development concepts like SEO, forms, web
      hosting, and security that laid the foundation for my React
      education several months later.
      <br />
      <br />
      I&apos;m happy with how it turned out, especially considering how
      little I knew at that point, and I plan on maintaining it into the
      future to show off the NFT collection.
    </p>`,
      learnings: `<li>
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
    <li>Web forms and protecting them with Captchas</li>`,
      features: `<li>
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
    </li>`,
    },
  },
  {
    title: "Formulata",
    slug: "formulata",
    feature: false,
    route: "/code/projects/formulata",
    shortDescription: "Combinatorial thinking app",
    description:
      "A simple web app to combine words for combinatorial ideation. Built with vanilla JavaScript and P5.js, library.",
    technologies: [
      { name: "JavaScript", icon: "/assets/CodeLogos/js.png" },
      { name: "HTML", icon: "/assets/CodeLogos/html.png" },
      { name: "CSS", icon: "/assets/CodeLogos/css.png" },
      { name: "p5.js", icon: "/assets/CodeLogos/p5.png" },
    ],
    imgSrc: "/assets/other/projects/combinator/formulata.png",
    thumb: "/assets/other/projects/thumbnails/shrublogo.webp",
    styles: {
      color: "bg-teal-400 dark:bg-teal-500",
      bColor: "ring-teal-500 ",
      textColor: " text-teal-600 dark:text-teal-300",
      shadow:
        "!shadow-teal-500 bg-gradient-to-br from-white via-white to-teal-200 dark:from-slate-900 dark:via-slate-900 dark:to-teal-900",
    },
    content: {
      imgArray: [
        "/assets/other/projects/combinator/comb1.webp",
        "/assets/other/projects/combinator/comb2.webp",
        "/assets/other/projects/combinator/comb3.webp",
      ],
      links: {
        url: true,
        urlLink: "https://editor.p5js.org/tyfiero/full/mvmllsRDI",
        urlText: "Link",
        url2: false,
        url2Link: null,
        url2Text: null,
        github: false,
        githubLink: null,
        productHunt: false,
        phLink: null,
        phImgSrc: null,
      },
      longDescription: ` <p>
      For several years, my friend and I were using an excel spreadsheet
      filled with columns of random words and concepts. You would read
      across the row and try to create an idea by jamming together words
      that don&apos;t really belong together. This was a great way to
      make wild ideas that I never would have come up with otherwise, so
      I decided to make a simple web app that displayed each row of the
      spreadsheet on the screen with buttons to individually randomize
      each word. I converted each column into an array of strings, and
      used a simple
      <code>array[Math.floor(Math.random(array.length))]</code> to
      randomly select a word from the array and display it to the
      screen.
      <br />
      <br />
      This was my first real &quot;web app&quot;, and I learned a lot
      about JS, CSS, and the DOM. I was super proud of my creation at
      the time, even though it took longer than I&apos;d like to admit
      lol. It was the seed for the idea that would become ideaisland
      several months later. In hindsight, before turning it into a
      larger application, I should have shared this tool with others to
      see if they found value in it, in which I would have discovered
      that making ideas without a defined problem was a lousy way to
      innovate. You live and you learn though right? 🤷‍♂️
    </p>`,
      learnings: ` <li>
      I enjoy making ideas with the combinatorial thinking
      technique.
    </li>
    <li>
      P5.js makes for a decent JS &quot;framework&quot; for
      creating simple websites, although I&apos;d never use it
      again.
    </li>
    <li>
      So much practice with DOM manipulation with javascript.
    </li>
    <li>
      I learned a lot about randomizing arrays of values.
    </li>
    <li>
      An excel sheet can be upgraded into a simple web app to
      improve the UX in certain situations.
    </li>
    <li>
      Although its fun making ideas with this platform, the
      best way to make innovations that are useful is to find
      actual problems in the world, then find solutions to
      them. Making random solutions without first having a
      real problem is a recipe for disaster.
    </li>`,
      features: "",
    },
  },
  {
    title: "JS Drum Set",
    slug: "drums",
    feature: false,
    route: "/code/projects/drums",
    shortDescription: "Drum kit made with JS",
    description:
      "Drum set from a tutorial from Wes Bos, one of my first JS projects.",
    technologies: [
      { name: "JavaScript", icon: "/assets/CodeLogos/js.png" },
      { name: "HTML", icon: "/assets/CodeLogos/html.png" },
      { name: "CSS", icon: "/assets/CodeLogos/css.png" },
    ],
    imgSrc: "/assets/other/projects/drum/drum.webp",
    thumb: "/assets/other/projects/thumbnails/drum.webp",
    styles: {
      color: "bg-yellow-500 ",
      bColor: "ring-yellow-500 ",
      textColor: " text-yellow-600 dark:text-yellow-300",
      shadow:
        "!shadow-yellow-500 bg-gradient-to-br from-white via-white to-yellow-200 dark:from-slate-900 dark:via-slate-900 dark:to-yellow-900",
    },
    content: {
      imgArray: [
        "/assets/other/projects/drum/drum2.webp",
        "/assets/other/projects/drum/drum3.webp",
      ],
      links: {
        url: true,
        urlLink:
          "https://codesandbox.io/embed/intelligent-joliot-p99m2g?fontsize=14&hidenavigation=1&theme=dark&view=preview",
        urlText: "CodeSandbox",
        url2: false,
        url2Link: null,
        url2Text: null,
        github: false,
        githubLink: null,
        productHunt: false,
        phLink: null,
        phImgSrc: null,
      },
      longDescription: `<p>
      Simple drum machine project that you can play with your keyboard.
      It was from a tutorial from Wes Bos, and one of my very first JS
      projects. I was so excited about it that I added my own custom
      designed drum samples to really personalize it. It&apos;s
      hilariously simple, I read through the code recently and it&apos;s
      so funny that I thought this code was hard back then. But, it was
      the first project I was really proud of with JS, so I had to
      include it here.
      <br />
      <br />
      Maybe one day I&apos;ll make an improved version of this in React
      that is more interactive with more fun features. But for now,
      it&apos;s a reminder of how far I have come with JavaScript.
    </p>`,
      learnings: `<li>
      Adding/removing class names using JavaScript to apply
      CSS.
    </li>
    <li>Keyboard events in JS.</li>
    <li>
      Using the <code>this</code> keyword.
    </li>
    <li>JavaScript is fun!</li>`,
      features: "",
    },
  },
];

const featuredProjects = projectArray.filter((item) => item.feature);
export const slimProjects = featuredProjects.map((project) => ({
  title: project.title,
  route: project.route,
  imgSrc: project.thumb,
  shortDescription: project.shortDescription,
  styles: project.styles,
  technologies: project.technologies,
}));
export const cardProjects = projectArray.map((project) => ({
  title: project.title,
  route: project.route,
  imgSrc: project.imgSrc,
  description: project.description,
  styles: project.styles,
  technologies: project.technologies,
}));
