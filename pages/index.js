import Container from "@/components/layout/container";
import MoreStories from "@/components/more-stories";
import HeroPost from "@/components/hero-post";
import Intro from "@/components/intro";
import Layout from "@/components/layout/layout";
import { getAllPostsForHome } from "@/lib/api";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Head>
        <title>Ty Fiero's blog on code, music, and life.</title>
      </Head>
      <Container>
        <Intro />
        <div className="w-[80%] h-auto rounded-lg drop-shadow-2xl">
          <img src="/Ty-lofi.jpeg" alt="Lofi Style image of Ty" className="rounded-lg"/>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps({ preview }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts },
  };
}
