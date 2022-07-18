import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./layout/cover-image";
import Link from "next/link";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section className="glass-box bg-white/80 dark:bg-slate-900/80 md:w-[50%] sm:w-[95%] group hover:scale-105 transition duration-500 hover:shadow-2xl !shadow-sky-400 cursor-pointer">
      <Link href={`/posts/${slug}`}>
        <div>
          <div className="mb-0 md:mb-4 !rounded-xl">
            <CoverImage title={title} url={coverImage.imgix_url} slug={slug} />
          </div>
          <div className="flex flex-col items-center px-5 mb-10 md:mb-5">
            <div>
              <h3 className="mb-2 text-4xl leading-tight lg:text-6xl">
                <a className="transition duration-500 group-hover:text-sky-400 shadow-sky-200 group-hover:drop-shadow-lg text-sky-800 dark:text-sky-300 f1">
                  {title}
                </a>
              </h3>
              <div className="mb-4 text-lg italic text-slate-500 f2 dark:text-slate-300">
                <Date dateString={date} />
              </div>
            </div>
            <div>
              <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>
              <Avatar
                name={author.title}
                picture={author.metadata.picture.imgix_url}
              />
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
