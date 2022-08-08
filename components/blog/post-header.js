import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "../layout/cover-image";
import PostTitle from "./post-title";

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className=" md:block md:mb-6">
        <Avatar
          name={author.title}
          picture={author.metadata.picture.imgix_url}
        />
        <div className="my-4 text-lg italic text-slate-500 f2 dark:text-slate-300">
          <Date dateString={date} />
        </div>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0 ">
        <CoverImage title={title} url={coverImage.imgix_url} />
      </div>
      <div className="max-w-2xl mx-auto"></div>
    </>
  );
}
