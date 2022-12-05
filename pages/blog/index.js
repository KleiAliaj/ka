import HeroPost from "@/components/blog/hero-post";

import Head from "next/head";
import CustomForm from "@/components/blog/NewsletterForm";
import MotionImage from "@/components/etc/animation/MotionImage";
import MotionText from "@/components/etc/animation/MotionText";
import MotionHeader from "@/components/etc/animation/MotionHeader";
// import { getAllPosts } from "utils/mdxUtils";
import MdXHomePosts from "@/components/blog/mdx/mdxHomePosts";

export default function Index({
  allPosts = [
    {
      frontmatter: {
        title: "From Spectator to Contributor, My New Online Perspective",
        slug: "from-spectator-to-contributor",
        description:
          "For too long I have been comsuming. It's time to start creating.",
        date: "2022-12-03T07:13:20.263Z",
        imgUrl: "/assets/blog/laptop-man.webp",
        published: true,
      },
      slug: "from-spectator-to-contributor",
    },
    {
      frontmatter: {
        title: "Why Do We Blindly Trust Software?",
        slug: "why-do-we-blindly-trust-software",
        description:
          "Trust is not easy to get in the physical world, why do we throw caution to the wind online?",
        date: "2022-11-18T06:42:55.089Z",
        imgUrl: "/assets/blog/keys.jpeg",
        published: true,
      },
      slug: "why-do-we-blindly-trust-software",
    },
    {
      frontmatter: {
        title:
          "Timeless Lessons from Shipping an NFT Collection as a New Developer",
        slug: "timeless-lessons-from-shipping-an-nft-collection-as-a-new-developer",
        description:
          "Turns out that launching a large-scale, generative art NFT collection as a newbie dev is tough, here are a few of the most important things I learned.",
        date: "2022-09-14T19:04:39.963Z",
        imgUrl: "/assets/blog/pa.webp",
        published: true,
      },
      slug: "timeless-lessons-from-shipping-an-nft-collection-as-a-new-developer",
    },
    {
      frontmatter: {
        title: "Learning to Code is the Best Thing I've Done",
        slug: "learning-to-code-is-the-best-thing-ive-done",
        description:
          "Everyone should learn how to code, it changes the way you think, and how you view the world.",
        date: "2022-06-17T20:02:44.785Z",
        imgUrl: "/assets/blog/laptop.webp",
        published: true,
      },
      slug: "learning-to-code-is-the-best-thing-ive-done",
    },
  ],
}) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Head>
        <title>Ty Fiero&apos;s blog posts on code, music, and life.</title>
        <meta
          name="description"
          content={"All blog posts written by Ty Fiero."}
        />
      </Head>

      {/* <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-8xl md:pr-8 f1">
          Blog
        </h1> */}
      <div className="page-container">
        <h1 className="text-left heading-lg fade-effect-quick">Blog</h1>

        {heroPost && (
          <HeroPost
            title={heroPost.frontmatter.title}
            coverImage={heroPost.frontmatter.imgUrl}
            date={heroPost.frontmatter.date}
            author={"Ty Fiero"}
            slug={heroPost.slug}
            excerpt={heroPost.frontmatter.description}
          />
        )}

        <div className="my-10" />
        <MotionText yPx={-100} xPx={0} noSize>
          <CustomForm />
        </MotionText>
        <div className="my-10" />
        <MotionHeader yPx={-100} xPx={0} noSize>
          <h3 className="text-3xl f1 text-sky-800 dark:text-sky-300">
            More Posts
          </h3>
        </MotionHeader>
        {morePosts.length > 0 && <MdXHomePosts posts={morePosts} />}
      </div>
    </>
  );
}

// export async function getStaticProps({ preview }) {
//   const posts = getAllPosts().filter((p) => {
//     return p.frontmatter.published === true;
//   });
//   //sorted by date (newest first)
//   const allPosts = posts.sort((a, b) => {
//     return new Date(b.frontmatter.date) - new Date(a.frontmatter.date);
//   });

//   return {
//     props: { allPosts },
//   };
// }
