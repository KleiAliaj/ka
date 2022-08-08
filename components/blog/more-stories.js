import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section className="mt-8">
      <h2 className="mb-8 text-5xl font-bold leading-tight tracking-tighter md:text-4xl f1 text-sky-800 dark:text-sky-300 ">
        More Posts
      </h2>
      <div className="grid grid-cols-1 mb-32 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
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
      <div className="flex justify-center w-full">
        <p>Total Posts: {posts.length + 1}</p>
      </div>
    </section>
  );
}
