import Avatar from "./avatar";
import Date from "./date";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import MotionImage from "../etc/animation/MotionImage";
import MdxCoverImage from "./mdx/mdxCoverImage";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionImage classes="flex justify-center">
      <div className="glass-box bg-white/80 dark:bg-slate-900/80 sm:w-4/5 md:w-[90%]   h-auto  group hover:scale-105 transition shadow-lg duration-500 hover:shadow-2xl !shadow-sky-400 cursor-pointer relative">
        <Link href={`/blog/posts/${slug}`}>
          <div>
            <div className="p-2">
              <div className="sm:mb-2 md:mb-5">
                <MdxCoverImage
                  slug={slug}
                  title={title}
                  url={coverImage}
                  thumb
                />
              </div>
              <h3 className="text-2xl leading-snug ">
                <p className="transition duration-500 group-hover:text-sky-400 shadow-sky-200 group-hover:drop-shadow-lg text-sky-800 dark:text-sky-300 f1">
                  {title}
                </p>
              </h3>

              <div className="text-base italic md:mb-2 text-slate-500 f2 dark:text-slate-300">
                <Date dateString={date} />
              </div>

              <p className="text-base leading-relaxed  sm:hidden md:block">
                {excerpt}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </MotionImage>
  );
}
