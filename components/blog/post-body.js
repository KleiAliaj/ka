import Comments from "./Comments";
import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ content, title, id }) {

  return (
    <div className="w-full">
      <div className=" w-full mx-auto glass-box shadow-lg shadow-sky-700/40 dark:shadow-sky-300/20 !border-0 sm:px-5 md:!px-40 bg-white/80 dark:bg-slate-900/80">
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <Comments title={title} id={id}  />
      </div>
    </div>
  );
}
