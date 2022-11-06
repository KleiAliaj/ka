import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

function BooksSection() {
  const books = [
    { name: "Atomic Habits", url: "/assets/other/about/habits.webp" },
    { name: "80/20 Principle", url: "/assets/other/about/80.webp" },
    { name: "Show Your Work", url: "/assets/other/about/work.webp" },
    { name: "The Mind Illuminated", url: "/assets/other/about/mind.webp" },
    {
      name: "How Proust Can Change Your Life",
      url: "/assets/other/about/proust.webp",
    },
  ];
  return (
    <Link legacyBehavior href={"/about/books"}>
      <a className="!p-3 overflow-hidden rounded-xl cursor-pointer text-box w-72 h-32 hover:bg-sky-100/60 dark:hover:bg-sky-700/60 transition duration-500 group hover:shadow-xl">
        <div className="flex gap-1 absolute top-2 left-2 items-center">
          <p className="f1 transition group-hover:text-sky-400 text-sky-600 dark:text-sky-300 dark:group-hover:text-sky-200 text-xl ">
            Bookshelf
          </p>
          <FaArrowRight className="opacity-0 group-hover:opacity-100 transition duration-500  text-sm text-sky-400 dark:text-sky-200" />
        </div>
        <div className="flex mt-12  z-10 relative w-[140%]">
          {books.map((book, index) => {
            return (
              <div
                key={index}
                className="hover:!-translate-y-6 -translate-y-1 group-hover:-translate-y-3 transition duration-300  absolute -rotate-[10deg]"
                style={{
                  zIndex: index * -1,
                  left: 50 * index,
                }}
              >
                <img
                  className="rounded-xl h-auto w-20  shadow-md"
                  src={book.url}
                  alt={book.name + " book cover"}
                />
              </div>
            );
          })}
        </div>
      </a>
    </Link>
  );
}

export default BooksSection;
