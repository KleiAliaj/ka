import PostPreview from "./post-preview";

export default function HomePosts({ posts }) {
  return (
    <section className="mt-8">
      <div className="grid grid-cols-1 mb-32 justify-items-center md:grid-cols-2 md:gap-x-5 lg:gap-x-5 gap-y-10 md:gap-y-16 ">
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
    </section>
  );
}
