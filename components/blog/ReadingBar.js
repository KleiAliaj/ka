import React from "react";

const ReadingBar = ({ target }) => {
  // inspiration from https://nehalist.io/creating-a-reading-progress-bar-in-react/
  const [readingProgress, setReadingProgress] = React.useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });

  return (
    <div
      className={` fixed top-0 left-0 z-50 h-[8px] bg-gradient-to-r from-sky-200/80 via-sky-400/80 to-sky-900/80 dark:from-sky-600/80 dark:via-sky-300/80 dark:to-sky-50/70 `}
      style={{ width: `${readingProgress}%` }}
    />
  );
};

export default ReadingBar;
