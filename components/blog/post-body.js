import markdownStyles from "./markdown-styles.module.css";

export default function PostBody({ content }) {
  return (
    <div className="md:max-w-3xl w-full mx-auto glass-box !border-0 !px-10 bg-white/80 dark:bg-slate-900/80">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
