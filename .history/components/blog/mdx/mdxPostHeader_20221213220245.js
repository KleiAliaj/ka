import Avatar from "../avatar";
import PostTitle from "../post-title";
import MdxCoverImage from "./mdxCoverImage";

export default function MdxPostHeader({ title, coverImage, date }) {
  return (
    <div className=" md:w-[46rem] sm:w-full mx-auto ">
      <PostTitle title={title} />
      <div className="mx-auto mb-6 md:block">
        <Avatar
          date={date}
          name={"Ty Fiero"}
        />
      </div>

      <div className="md:w-[46rem] sm:w-full mx-auto sm:mb-8 md:mb-16 sm:px-0">
        <MdxCoverImage title={title} url={coverImage} />
      </div>
    </div>
  );
}
