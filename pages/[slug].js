import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/layout/container";
import PostBody from "@/components/post-body";
import MoreStories from "@/components/more-stories";
import Header from "@/components/header";
import PostHeader from "@/components/post-header";
import SectionSeparator from "@/components/section-separator";
import Layout from "@/components/layout/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "@/lib/api";
import PostTitle from "@/components/post-title";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import dynamic from "next/dynamic";
import { createRef } from "react";
// import ReadingBar from "@/components/ReadingBar";
const ReadingBar = dynamic(() => import("@/components/ReadingBar"), {
  ssr: false,
});
export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  const target = createRef();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    // <Layout preview={preview}>
    <Container>
      <ReadingBar target={target} />
      {/* <Header /> */}
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mt-16" ref={target}>
            <Head>
              <title>
                {post.title} Ty Fiero Blog on Life, Code, and Music.
              </title>
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
            <PostBody content={post.content} />
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
  return {
    paths: allPosts.map((post) => `/posts/${post.slug}`),
    fallback: true,
  };
}
