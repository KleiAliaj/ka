import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";

export default function PostHeader({ title, coverImage, date, author, blurb }) {
  return (
    <>
      <PostTitle title={title} blurb={blurb} />
      <div className="mb-6 md:block">
        <div className="text-lg italic text-slate-500 f2 dark:text-slate-300"></div>
        <Avatar
          date={date}
          name={author.title}
          picture={author.metadata.picture.imgix_url}
        />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0 ">
        <CoverImage title={title} url={coverImage.imgix_url} />
      </div>
      <div className="max-w-2xl mx-auto"></div>
    </>
  );
}
