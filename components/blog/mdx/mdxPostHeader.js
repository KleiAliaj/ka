import Avatar from "../avatar";
import Date from "../date";
import CoverImage from "../cover-image";
import PostTitle from "../post-title";
import MdxCoverImage from "./mdxCoverImage";

export default function MdxPostHeader({ title, coverImage, date }) {
  return (
    <>
      <PostTitle title={title} />
      <div className="mb-6 md:block">
        <Avatar
          date={date}
          name={"Ty Fiero"}
          picture={"/assets/other/ty-circle-image.webp"}
        />
      </div>

      <div className="sm:mb-8 md:mb-16 sm:px-0 ">
        <MdxCoverImage title={title} url={coverImage} />
      </div>
    </>
  );
}
