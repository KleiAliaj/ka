import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/layout/container";
import PostBody from "@/components/blog/post-body";
import MoreStories from "@/components/blog/more-stories";
import Header from "@/components/blog/header";
import PostHeader from "@/components/blog/post-header";
import SectionSeparator from "@/components/blog/section-separator";
import Layout from "@/components/layout/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/api";
import PostTitle from "@/components/blog/post-title";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import dynamic from "next/dynamic";
import { createRef } from "react";
const ReadingBar = dynamic(() => import("@/components/blog/ReadingBar"), {
  ssr: false,
});
export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  const target = createRef();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Container>
      <ReadingBar target={target} />
      {/* <Header /> */}
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mt-16" ref={target}>
            <Head>
              <title>{post.title}</title>
              <meta
                property="og:image"
                content={post.metadata.cover_image.imgix_url}
              />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.metadata.cover_image}
              date={post.created_at}
              author={post.metadata.author}
            />
            <PostBody
              content={post.content}
              title={post.title}
              id={post.created_at}
              slug={post.slug}
            />
          </article>
          <SectionSeparator />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </>
      )}
    </Container>
    // </Layout>
  );
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  const content = await markdownToHtml(data.post?.metadata?.content || "");

  return {
    props: {
      preview,
      post: {
        ...data.post,
        content,
      },
      morePosts: data.morePosts || [],
    },
  };
}

export async function getStaticPaths() {
  const allPosts = (await getAllPostsWithSlug()) || [];

  // add "404" as default
  //  const paths = allPosts.map(({ slug }) => ({ params: { slug: slug || "404" } }));
  return {
    paths: allPosts.map((post) => `/blog/posts/${post.slug}` || "404"),
    fallback: true,
  };
}
