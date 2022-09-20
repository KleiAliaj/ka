import { DiscussionEmbed } from "disqus-react";

const Comments = ({ title, id }) => {
  const disqusShortname = "tyfiero";

  const disqusConfig = {
    // url: `http://localhost:3000/blog/posts/${title}`,
    url: `https://tyfiero.com`,
    identifier: id,
    title: title,
  };

  return (
    <div className="px-5 py-3 mb-10 bg-white shadow-lg shadow-sky-200 dark:bg-slate-200 rounded-2xl">
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default Comments;
