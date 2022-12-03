import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "@/components/blog/post-body";
import PostHeader from "@/components/blog/post-header";
import PostTitle from "@/components/blog/post-title";
import Head from "next/head";
import dynamic from "next/dynamic";
import { createRef } from "react";
import HomePosts from "@/components/blog/homePosts";
import MotionHeader from "@/components/etc/animation/MotionHeader";
import ShiftButton from "@/components/layout/shiftButton";
import {
  MDXRemote,
  MDXRemoteProps,
  MDXRemoteSerializeResult,
} from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import MdxPostHeader from "./mdxPostHeader";

const ReadingBar = dynamic(() => import("@/components/blog/ReadingBar"), {
  ssr: false,
});

function PostLayout({ meta, children }) {
  //   console.log(new Date().toISOString());
  const router = useRouter();
  const target = createRef();
  return (
    <div className="page-container">
      <ReadingBar target={target} />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mt-16 sm:px-0 md:!px-60 " ref={target}>
            <Head>
              <title>{meta.title}</title>
              {/* <meta
                property="og:image"
                content={post.metadata.cover_image.imgix_url}
              /> */}
              <meta name="description" content={meta.description} />
            </Head>
            <MdxPostHeader
              title={meta.title}
              coverImage={meta.imgUrl}
              date={meta.date}
              blurb={meta.description}
            />
            {children}
            {/* <PostBody
              content={post.content}
              title={post.title}
              id={post.created_at}
              slug={post.slug}
            /> */}
          </article>
          <MotionHeader yPx={-50} xPx={0}>
            <h2 className="mb-8 heading-lg ">More Posts</h2>
          </MotionHeader>
          {/* {morePosts.length > 0 && <HomePosts posts={morePosts} />} */}
        </>
      )}
    </div>
  );
}

export default PostLayout;
