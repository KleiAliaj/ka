import cn from "classnames";
import Link from "next/link";
import Imgix from "react-imgix";

export default function CoverImage({ title, url, slug, thumb = false }) {
  const image = (
    <Imgix
      src={url}
      alt={`Cover Image for ${title}`}
      sizes="70vw"
      className={
        cn(
          "lazyload shadow-lg hover:shadow-xl hover:shadow-sky-700/40 shadow-sky-700/40  w-auto rounded-2xl mx-auto  transition-shadow",
          {
            "": slug,
          }
        ) +
        " " +
        (thumb ? " " : " sm:h-72 md:h-[500px]")
      }
      attributeConfig={{
        src: "data-src",
        srcSet: "data-srcset",
        sizes: "data-sizes",
      }}
      htmlAttributes={{
        src: `${url}?auto=format,compress&q=1&blur=500&w=auto`,
      }}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link aria-label={title} href={`/blog/posts/${slug}`}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
