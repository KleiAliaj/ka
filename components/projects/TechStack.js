import React from "react";

function TechStack() {
  return (
    <div className="relative shadow-xl  md:min-w-[30em] rounded-xl shadow-sky-600/30 flex flex-wrap items-center justify-center gap-2 bg-gradient-to-t from-sky-500/40 to-white/20 dark:to-black/20 p-1">
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
  );
}

export default TechStack;
