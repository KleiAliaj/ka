import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  const prefersReducedMotion = useReducedMotion();
  const postsAnimate = {
    offscreen: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.4 },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.3,
      },
    },
  };
  return (
    <motion.div
      variants={postsAnimate}
      className="glass-box bg-white/80 dark:bg-slate-900/80 sm:w-4/5 md:w-[70%] md:max-w-[30em] h-auto  group hover:scale-105 transition shadow-lg duration-500 hover:shadow-2xl !shadow-sky-400 cursor-pointer relative"
    >
      <Link href={`/blog/posts/${slug}`}>
        <div>
          <div className="p-2">
            <div className="sm:mb-2 md:mb-5">
              <CoverImage
                slug={slug}
                title={title}
                url={coverImage.imgix_url}
                thumb
              />
            </div>
            <h3 className="text-2xl leading-snug md:mb-3">
              <Link href={`/blog/posts/${slug}`}>
                <a className="transition duration-500 group-hover:text-sky-400 shadow-sky-200 group-hover:drop-shadow-lg text-sky-800 dark:text-sky-300 f1">
                  {title}
                </a>
              </Link>
            </h3>

            <div className="text-base italic md:mb-4 text-slate-500 f2 dark:text-slate-300">
              <Date dateString={date} />
            </div>

            <p className="mb-16 text-base leading-relaxed sm:hidden md:block">
              {excerpt}
            </p>
            <div className="absolute sm:right-0 md:right-auto md:bottom-4 sm:bottom-2 sm:scale-75 md:scale-100 ">
              <Avatar
                name={author.title}
                picture={author.metadata.picture.imgix_url}
              />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
