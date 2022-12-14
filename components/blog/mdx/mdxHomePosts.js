import PostPreview from "../post-preview";
import { m, useReducedMotion } from "framer-motion";

export default function MdXHomePosts({ posts }) {
  const prefersReducedMotion = useReducedMotion();

  const groupAnimate = {
    offscreen: {
      y: prefersReducedMotion ? 0 : -200,
      opacity: 0,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.05,
        staggerDirection: -1,
      },
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1.5,
        staggerChildren: prefersReducedMotion ? 0 : 0.2,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };
  return (
    <m.section
      variants={groupAnimate}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.5 }}
      className="mt-8"
    >
      <div className="grid grid-cols-1 mb-32 justify-items-center md:grid-cols-3 md:gap-x-5 lg:gap-x-5 gap-y-10 md:gap-y-16 ">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.frontmatter.title}
            coverImage={post.frontmatter.imgUrl}
            date={post.frontmatter.date}
            slug={post.slug}
            excerpt={post.frontmatter.description}
          />
        ))}
      </div>
    </m.section>
  );
}
