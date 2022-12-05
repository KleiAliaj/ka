import Avatar from "./avatar";
import Date from "./date";
import Link from "next/link";
import MotionImage from "../etc/animation/MotionImage";
import MdxCoverImage from "./mdx/mdxCoverImage";

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
      <section className="glass-box bg-white/80 dark:bg-slate-900/80  md:w-[40%] lg:w-[90%] sm:w-[80%] group hover:scale-105 transition shadow-lg duration-500 hover:shadow-2xl !shadow-sky-400 cursor-pointer  relative">
        <div className="absolute w-32 h-32 overflow-hidden rounded-md -top-2 -right-2 ">
          <div className="absolute top-0 left-0 w-2 h-2 bg-sky-500"></div>
          <div className="absolute bottom-0 right-0 w-2 h-2 bg-sky-500"></div>
          <a
            href="#"
            className="py-1.5 bg-sky-300 text-sky-800 font-semibold uppercase text-sm tracking-wider block w-square-diagonal text-center absolute bottom-0 right-0 rotate-45 origin-bottom-right shadow-sm"
          >
            <p className="f1">Latest Post!</p>
          </a>
        </div>
        <Link href={`/blog/posts/${slug}`}>
          <div className="flex w-full h-full lg:flex-row sm:flex-col">
            <div className="h-full sm:w-full lg:w-1/3 ">
              <div className=" flex justify-center flex-grow !rounded-xl sm:w-full lg:min-h-[100%]  sm:h-auto lg:h-full lg:w-auto ">
                <MdxCoverImage
                  title={title}
                  url={coverImage}
                  slug={slug}
                  thumb
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-between h-full px-5 pt-2 ">
              <div>
                <h3 className="leading-tight sm:text-2xl lg:text-4xl lg:mb-2 sm:mb-0 lg:pr-14">
                  <div className="transition duration-500 group-hover:text-sky-400 shadow-sky-200 group-hover:drop-shadow-lg text-sky-800 dark:text-sky-300 f1">
                    {title}
                  </div>
                </h3>
                <div className="pb-1 text-lg italic text-slate-500 f2 dark:text-slate-300 sm:block lg:hidden">
                  <Date dateString={date} />
                </div>
                <p className="leading-relaxed lg:text-lg sm:text-base lg:mb-4 ">
                  {excerpt}
                </p>
              </div>
              <div className="items-end justify-between w-full lg:flex sm:hidden ">
                {/* <Avatar /> */}
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
