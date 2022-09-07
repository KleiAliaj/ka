import Container from "@/components/layout/container";
import MoreStories from "@/components/blog/more-stories";
import HeroPost from "@/components/blog/hero-post";
import Intro from "@/components/intro";
import Layout from "@/components/layout/layout";
import { getAllPostsForHome } from "@/lib/api";
import Head from "next/head";
import { CMS_NAME } from "@/lib/constants";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "@/components/blog/NewsletterForm";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const url =
    "https://tyfiero.us13.list-manage.com/subscribe/post?u=81ddc1bd6ec9ec4e48aa4e4b7&amp;id=4de0cd91bb&amp;f_id=00ccc3e2f0";

  return (
    <>
      <Head>
        <title>Ty Fiero&apos;s blog posts on code, music, and life.</title>
      </Head>
      <Container>
        {/* <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-8xl md:pr-8 f1">
          Blog
        </h1> */}
        <div className="page-container">
          <h2 className="text-left heading-lg ">Blog</h2>

          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <div>
                <CustomForm
                  status={status}
                  message={message}
                  onValidated={(formData) => subscribe(formData)}
                />
              </div>
            )}
          />
          {/* <Intro /> */}
          <h3 className="mb-4 text-2xl f1 text-sky-800 dark:text-sky-300">
            Latest Post:
          </h3>
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
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
