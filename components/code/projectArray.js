export const projectArray = [
  {
    title: "ConsistentSea",
    route: "/code/projects/consistensea",
    shortDescription: "Habit tracking chrome extension",
    description:
      "Habit tracking chrome extension built with React, framer motion, tailwind, and the Chrome extension API.",
    technologies: [
      "React",
      "Framer Motion",
      "Tailwind",
      "Chrome Extension API",
    ],
    imgSrc: "/assets/other/consistensea.png",
    styles: {
      color: "bg-blue-400",
      bColor: "hover:ring-blue-500 ",
      textColor: " text-blue-600 dark:text-blue-400",
    },
  },
  {
    title: "Oliver",
    route: "/code/projects/Oliver",
    shortDescription: "AI life advice app",
    description:
      "Interactive AI life advice app built with Next.js, tailwind, GPT-3, and CSS illustration.",
    technologies: ["React", "Next.js", "Tailwind", "GPT-3", "Voice RSS"],
    imgSrc: "/assets/other/projects/oliver/oliver.webp",
    styles: {
      color: "bg-red-400",
      bColor: "hover:ring-red-500 ",
      textColor: " text-red-600 dark:text-red-400",
    },
  },
  {
    title: "Deliberate Design",
    route: "/code/projects/deliberate-design",
    shortDescription: "Prompt generator for AI image generators",
    description:
      "A web app to generate creative, detailed text prompts for AI image generators. Built with Next.js, Tailwind, and Recoil.",
    technologies: ["React", "Next.js", "Tailwind", "Recoil.js"],
    imgSrc: "/assets/other/projects/dd/deliberate.png",
    styles: {
      color: "bg-teal-400",
      bColor: "hover:ring-teal-500 ",
      textColor: " text-teal-600 dark:text-teal-300 whitespace-nowrap",
    },
  },
  {
    title: "tyfiero.com",
    route: "/code/projects/tyfiero",
    shortDescription: "Personal Website",
    description:
      "My personal website built with Next.js, Tailwind, and Cosmic CMS.",
    technologies: ["React", "Next.js", "Tailwind", "Cosmic CMS"],
    imgSrc: "/assets/other/projects/ty/tyfierocom.webp",
    styles: {
      color: "bg-sky-400",
      bColor: "hover:ring-sky-500 ",
      textColor: " text-sky-600 dark:text-sky-300",
    },
  },
  {
    title: "ideaisland",
    route: "/code/projects/ideaisland",
    shortDescription: "AI powered Idea generation web app",
    description:
      "A web application for idea generation. Built with Next.js, Tailwind, Firebase, and GPT-3.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind",
      "Firebase",
      "GPT-3",
      "Redux",
    ],
    imgSrc: "/assets/other/ii.png",
    styles: {
      color: "bg-pink-400",
      bColor: "hover:ring-pink-500 ",
      textColor: " text-pink-600 dark:text-pink-300",
    },
  },
  {
    title: "PriceArt ETH NFTs",
    route: "/code/projects/pa-eth",
    shortDescription: "Generative art NFT project on Polygon",
    description:
      "Generative art NFT project using real Ethereum price data. Built with P5.js, Polygon blockchain, and vanilla JavaScript.",
    technologies: ["HTML", "CSS", "JS", "p5.js", "GLSL Shaders"],
    imgSrc: "/assets/other/projects/PA/eth6.jpg",
    styles: {
      color: "bg-indigo-400",
      bColor: "hover:ring-indigo-500 ",
      textColor: " text-indigo-600 dark:text-indigo-300 whitespace-nowrap",
    },
  },
  {
    title: "PriceArt ADA NFTs",
    route: "/code/projects/pa-ada",
    shortDescription: "Generative art NFT project on Cardano",
    description:
      "Generative art NFT project using real Cardano price data. Built with P5.js, GLSL shaders, and vanilla JavaScript.",
    technologies: ["HTML", "CSS", "JS", "p5.js", "GLSL Shaders"],
    imgSrc: "/assets/other/projects/PA/ada7.jpg",
    styles: {
      color: "bg-green-400",
      bColor: "hover:ring-green-500 ",
      textColor: " text-green-600 dark:text-green-300 whitespace-nowrap",
    },
  },
  {
    title: "PriceArt Website",
    route: "/code/projects/pa-web",
    shortDescription: "Home page for PriceArt",
    description: "Home page for the PriceArt NFT project built with WordPress.",
    technologies: ["Wordpress"],
    imgSrc: "/assets/other/projects/PA/paweb1.png",
    styles: {
      color: "bg-lime-500",
      bColor: "hover:ring-lime-500 ",
      textColor: " text-lime-600 dark:text-lime-300",
    },
  },
  {
    title: "Formulata",
    route: "/code/projects/formulata",
    shortDescription: "Simple combinatorial thinking app",
    description:
      "A simple web app to combine words for combinatorial ideation. Built with vanilla JavaScript and P5.js, library.",
    technologies: ["HTML", "CSS", "JS", "p5.js"],
    imgSrc: "/assets/other/projects/combinator/formulata.png",
    styles: {
      color: "bg-teal-400 dark:bg-teal-500",
      bColor: "hover:ring-teal-500 ",
      textColor: " text-teal-600 dark:text-teal-300",
    },
  },
  {
    title: "JS Drum Set",
    route: "/code/projects/drums",
    shortDescription: "Drum kit made with JS",
    description:
      "Drum set from a tutorial from Wes Bos, one of my first JS projects.",
    technologies: ["HTML", "CSS", "JS", "p5.js"],
    imgSrc: "/assets/other/projects/drum/drum.webp",
    styles: {
      color: "bg-yellow-500 ",
      bColor: "hover:ring-yellow-500 ",
      textColor: " text-yellow-600 dark:text-yellow-300",
    },
  },
];

export const slimProjects = projectArray.map((project) => ({
  title: project.title,
  shortDescription: project.shortDescription,
  styles: project.styles,
}));
