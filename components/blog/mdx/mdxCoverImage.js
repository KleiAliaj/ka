import cn from "classnames";
import Link from "next/link";
import Imgix from "react-imgix";

export default function MdxCoverImage({ title, url, slug, thumb = false }) {
  const image = (
    <img
      src={url}
      alt={`Cover Image for ${title}`}
      className={cn("rounded-lg", {
        "sm:mx-0": slug,
        "hover:shadow-md transition-shadow duration-200": slug,
      })}
    />
    // <Imgix
    //   src={url}
    //   alt={`Cover Image for ${title}`}
    //   sizes="70vw"
    //   className={
    //     cn(
    //       "lazyload shadow-md  shadow-sky-700/40   w-auto rounded-xl mx-auto  ",
    //       {
    //         "": slug,
    //       }
    //     ) +
    //     " " +
    //     (thumb ? " " : " sm:h-72 md:h-[500px]")
    //   }
    //   attributeConfig={{
    //     src: "data-src",
    //     srcSet: "data-srcset",
    //     sizes: "data-sizes",
    //   }}
    //   htmlAttributes={{
    //     src: `${url}?auto=format,compress&q=1&blur=500&w=auto`,
    //   }}
    // />
  );
  return (
    <div className=" sm:mx-0">
      {image}
      {/* {slug ? (
        <Link legacyBehavior href={`/blog/posts/${slug}`}>
          <a>{image}</a>
        </Link>
      ) : (
        image
      )} */}
    </div>
  );
}
