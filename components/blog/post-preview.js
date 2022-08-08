import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "../layout/cover-image";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div className="glass-box bg-white/80 dark:bg-slate-900/80 w-[70%]  group hover:scale-105 transition duration-500 hover:shadow-2xl !shadow-sky-400 cursor-pointer">
      <Link href={`/posts/${slug}`}>
        <div>
          <div className="mb-5">
            <CoverImage slug={slug} title={title} url={coverImage.imgix_url} />
          </div>
          <div className="p-2">
            <h3 className="mb-3 text-2xl leading-snug">
              <a className="transition duration-500 group-hover:text-sky-400 shadow-sky-200 group-hover:drop-shadow-lg text-sky-800 dark:text-sky-300 f1">
                {title}
              </a>
            </h3>
            <div className="mb-4 text-base italic text-slate-500 f2 dark:text-slate-300">
              <Date dateString={date} />
            </div>
            <p className="mb-4 text-base leading-relaxed">{excerpt}</p>
            <Avatar
              name={author.title}
              picture={author.metadata.picture.imgix_url}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
