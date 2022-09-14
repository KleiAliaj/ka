import cn from "classnames";
import Link from "next/link";
import Imgix from "react-imgix";

export default function CoverImage({ title, url, slug }) {
  const image = (
    <Imgix
      src={url}
      alt={`Cover Image for ${title}`}
      className={cn(
        "lazyload shadow-lg hover:shadow-xl hover:shadow-sky-700/40 shadow-sky-700/40 h-50 w-auto rounded-2xl mx-auto  transition-shadow",
        {
          "": slug,
        }
      )}
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
        <Link href={`/blog/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
