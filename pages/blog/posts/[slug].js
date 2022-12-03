// import Container from "@/components/layout/container";
// import Header from "@/components/blog/header";
// import SectionSeparator from "@/components/blog/section-separator";
// import Layout from "@/components/layout/layout";
// import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/api";
// import markdownToHtml from "@/lib/markdownToHtml";
// import * as fs from "fs";
import React from "react";
import { useRouter } from "next/router";
import PostHeader from "@/components/blog/post-header";
import PostTitle from "@/components/blog/post-title";
import Head from "next/head";
import dynamic from "next/dynamic";
import { createRef } from "react";
import HomePosts from "@/components/blog/homePosts";
import MotionHeader from "@/components/etc/animation/MotionHeader";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "utils/mdxUtils";
import MdxPostHeader from "@/components/blog/mdx/mdxPostHeader";
import Comments from "@/components/blog/Comments";
import MdXHomePosts from "@/components/blog/mdx/mdxHomePosts";

const ReadingBar = dynamic(() => import("@/components/blog/ReadingBar"), {
  ssr: false,
});
export default function Post({ code, frontmatter, morePosts }) {
  const router = useRouter();
  const target = createRef();
  console.log(morePosts);

  const MdxComponent = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <div className="page-container">
      <ReadingBar target={target} />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mt-16 sm:px-0 md:!px-60 " ref={target}>
            <Head>
              <title>{frontmatter.title}</title>
              <meta property="og:image" content={frontmatter.imgUrl} />
              <meta name="description" content={frontmatter.description} />
            </Head>
            <MdxPostHeader
              title={frontmatter.title}
              coverImage={frontmatter.imgUrl}
              date={frontmatter.date}
              blurb={frontmatter.description}
            />

            <div className="w-full">
              <div className="w-full mx-auto  glass-box shadow-lg shadow-sky-700/40 dark:shadow-sky-300/20 !border-0 sm:!px-5 md:!px-10 py-5 bg-white/80 dark:bg-slate-900/80 mb-28">
                <MdxComponent
                  components={{
                    p: (props) => (
                      <p {...props} className="my-6 text-lg leading-relaxed" />
                    ),
                    a: (props) => <a {...props} className="anc" />,
                    strong: (props) => (
                      <strong {...props} className=" !font-bold" />
                    ),
                    h2: (props) => (
                      <h2
                        {...props}
                        className="mt-20 mb-4 leading-snug sm:text-2xl md:text-3xl f1 text-sky-600 dark:text-sky-300"
                      />
                    ),
                    h3: (props) => (
                      <h3
                        {...props}
                        className="sm:text-xl md:!text-4xl mt-24 mb-4 leading-snug f1  text-sky-500 dark:text-sky-200"
                      />
                    ),
                    blockquote: (props) => (
                      <blockquote
                        {...props}
                        className="bg-sky-100  !text-black rounded-md shadow-lg shadow-sky-700/30  ml-5 p-5 border-l-4 text-xl border-sky-400 italic font-extrabold"
                      />
                    ),
                  }}
                />
                <Comments
                  title={frontmatter.title}
                  id={frontmatter.date}
                  slug={frontmatter.slug}
                />
              </div>
            </div>
          </article>
          <MotionHeader yPx={-50} xPx={0}>
            <h2 className="mb-8 heading-lg ">More Posts</h2>
          </MotionHeader>
          {morePosts.length > 0 && <MdXHomePosts posts={morePosts} />}
        </>
      )}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const post = await getSinglePost(params.slug);
  const allPosts = getAllPosts();
  const morePosts = allPosts.filter((p) => p.slug !== params.slug);

  return {
    props: { ...post, morePosts },
  };
}

export async function getStaticPaths() {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
}
