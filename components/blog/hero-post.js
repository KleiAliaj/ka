import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import MotionImage from "../etc/animation/MotionImage";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <MotionImage classes="flex justify-center">
      <section className="glass-box bg-white/80 dark:bg-slate-900/80 md:w-[40%] sm:w-[95%] group hover:scale-105 transition shadow-lg duration-500 hover:shadow-2xl !shadow-sky-400 cursor-pointer">
        <Link href={`/blog/posts/${slug}`}>
          <div>
            <div className="mb-0 md:mb-4 !rounded-xl sm:w-full md:w-full h-1/5  mx-auto">
              <CoverImage
                title={title}
                url={coverImage.imgix_url}
                slug={slug}
                thumb
              />
            </div>
            <div className="flex flex-col items-center px-5 sm:mb-2 md:mb-5">
              <div>
                <h3 className="leading-tight sm:text-2xl md:text-4xl md:mb-2 sm:mb-0 ">
                  <a className="transition duration-500 group-hover:text-sky-400 shadow-sky-200 group-hover:drop-shadow-lg text-sky-800 dark:text-sky-300 f1">
                    {title}
                  </a>
                </h3>
                <div className="text-lg italic sm:mb-2 md:mb-4 text-slate-500 f2 dark:text-slate-300">
                  <Date dateString={date} />
                </div>
              </div>
              <div>
                <p className="text-lg leading-relaxed md:mb-4 ">{excerpt}</p>
                <div className="sm:hidden md:block">
                  <Avatar
                    name={author.title}
                    picture={author.metadata.picture.imgix_url}
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </MotionImage>
  );
}
