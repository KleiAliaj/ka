import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ content }) {
  return (
    <div className=" w-full mx-auto glass-box shadow-lg shadow-sky-700/40 dark:shadow-sky-300/20 !border-0 sm:px-5 md:!px-10 bg-white/80 dark:bg-slate-900/80">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
