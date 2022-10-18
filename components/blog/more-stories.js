import MotionHeader from "../etc/animation/MotionHeader";
import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section className="mt-8">
      <div className="flex justify-center w-full">
        <MotionHeader yPx={-50} xPx={0}>
          <h2 className="mb-8 heading-lg ">More Posts</h2>
        </MotionHeader>
      </div>
      <div className="flex flex-wrap justify-center mb-32 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.metadata.cover_image}
            date={post.created_at}
            author={post.metadata.author}
            slug={post.slug}
            excerpt={post.metadata.excerpt}
          />
        ))}
      </div>
      {/* <div className="flex justify-center w-full">
        <p>Total Posts: {posts.length + 1}</p>
      </div> */}
    </section>
  );
}
