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
      className="glass-box bg-white/80 dark:bg-slate-900/80 w-[70%] md:max-w-[30em] h-auto  group hover:scale-105 transition shadow-lg duration-500 hover:shadow-2xl !shadow-sky-400 cursor-pointer relative"
    >
      <Link href={`/blog/posts/${slug}`}>
        <div>
          <div className="p-2">
            <div className="mb-5">
              <CoverImage
                slug={slug}
                title={title}
                url={coverImage.imgix_url}
                thumb
              />
            </div>
            <h3 className="mb-3 text-2xl leading-snug">
              <Link href={`/blog/posts/${slug}`}>
                <a className="transition duration-500 group-hover:text-sky-400 shadow-sky-200 group-hover:drop-shadow-lg text-sky-800 dark:text-sky-300 f1">
                  {title}
                </a>
              </Link>
            </h3>

            <div className="mb-4 text-base italic text-slate-500 f2 dark:text-slate-300">
              <Date dateString={date} />
            </div>

            <p className="mb-16 text-base leading-relaxed">{excerpt}</p>
            <div className="absolute bottom-4">
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
