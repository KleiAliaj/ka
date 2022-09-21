import { DiscussionEmbed } from "disqus-react";
import { useEffect } from "react";
import { useState } from "react";

const Comments = ({ title, id, slug }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  const disqusShortname = "tyfiero-blog";
  const disqusConfig = {
    url: `https://www.tyfiero.com/blog/posts/${slug}:`,
    identifier: id,
    title: title,
  };

  return (
    <div className="px-5 py-3 mb-10 bg-white shadow-lg shadow-sky-200 dark:bg-slate-200 rounded-2xl">
      {loaded && (
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      )}
    </div>
  );
};

export default Comments;
