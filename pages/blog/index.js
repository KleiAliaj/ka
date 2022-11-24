import Container from "@/components/layout/container";
import MoreStories from "@/components/blog/more-stories";
import HeroPost from "@/components/blog/hero-post";

import Layout from "@/components/layout/layout";
import { getAllPostsForHome } from "@/lib/api";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import CustomForm from "@/components/blog/NewsletterForm";
import MotionImage from "@/components/etc/animation/MotionImage";
import MotionText from "@/components/etc/animation/MotionText";
import MotionHeader from "@/components/etc/animation/MotionHeader";
import HomePosts from "@/components/blog/homePosts";

export default function Index({ allPosts }) {
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

        {/* <MotionHeader yPx={-100} xPx={0} noSize>
          <h3 className="mb-4 text-3xl f1 text-sky-800 dark:text-sky-300">
            Latest:
          </h3>
        </MotionHeader> */}

       

        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.metadata.cover_image}
            date={heroPost.created_at}
            author={heroPost.metadata.author}
            slug={heroPost.slug}
            excerpt={heroPost.metadata.excerpt}
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
        {morePosts.length > 0 && <HomePosts posts={morePosts} />}
      </div>
    </>
  );
}

export async function getStaticProps({ preview }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts },
  };
}
