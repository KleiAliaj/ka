import React from "react";

function GithubButton({ url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="button-bw w-fit f2"
    >
      GitHub
      <picture>
        <source srcSet="/assets/CodeLogos/github.png" type="image/png" />
        <img
          src="/assets/CodeLogos/github.png"
          alt="github logo"
          className="w-6 h-auto max-w-xl invert dark:invert-0"
        />
      </picture>
    </a>
  );
}

export default GithubButton;
