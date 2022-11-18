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
      <section className="glass-box bg-white/80 dark:bg-slate-900/80 md:w-[90%] sm:w-[80%] group hover:scale-105 transition shadow-lg duration-500 hover:shadow-2xl !shadow-sky-400 cursor-pointer">
        <Link href={`/blog/posts/${slug}`}>
          <div className="flex w-full h-full md:flex-row sm:flex-col">
            <div className=" !rounded-xl sm:w-full md:w-1/3 sm:h-auto md:h-full  mx-auto">
              <CoverImage
                title={title}
                url={coverImage.imgix_url}
                slug={slug}
                thumb
              />
            </div>
            <div className="flex flex-col items-center justify-between h-full px-5 pt-2 ">
              <div>
                <h3 className="leading-tight sm:text-2xl md:text-4xl md:mb-2 sm:mb-0 ">
                  <div className="transition duration-500 group-hover:text-sky-400 shadow-sky-200 group-hover:drop-shadow-lg text-sky-800 dark:text-sky-300 f1">
                    {title}
                  </div>
                </h3>
                <div className="pb-1 text-lg italic text-slate-500 f2 dark:text-slate-300 sm:block md:hidden">
                  <Date dateString={date} />
                </div>
                <p className="text-lg leading-relaxed md:mb-4 ">{excerpt}</p>
              </div>
              <div className="items-end justify-between w-full md:flex sm:hidden ">
                <Avatar
                  name={author.title}
                  picture={author.metadata.picture.imgix_url}
                />
                <div className="pb-1 text-lg italic text-slate-500 f2 dark:text-slate-300">
                  <Date dateString={date} />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>
    </MotionImage>
  );
}
