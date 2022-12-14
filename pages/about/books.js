import React from "react";
import axios from "axios";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Head from "next/head";

function Books({ books }) {
  //   console.log(books.fiveStar);
  return (
    <>
      <Head>
        <title>Best Books</title>
        <meta name="description" content={`The best books I have read.`} />
      </Head>
      <div className="page-container">
        <h1 className="heading-lg">Books</h1>
        <section className="flex flex-col w-full h-full gap-5">
          <div className="flex flex-col items-center">
            <h2 className="mb-3 heading-md">Life Changing Books</h2>
            <div className="flex flex-wrap justify-center w-full h-full gap-4">
              {books.best.map((book, index) => {
                // console.log(book);
                return (
                  <BookCard
                    key={book.properties.Title.title[0].plain_text}
                    title={book.properties.Title.title[0].plain_text}
                    img={book.cover.external}
                    url={book.properties.URL.url}
                    colors={
                      "bg-gradient-to-br from-white via-white to-sky-200 dark:from-slate-900 dark:via-slate-800 dark:to-sky-600   shadow-sky-600/40 dark:shadow-sky-600 hover:shadow-sky-600/40"
                    }
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-2 mt-16 mb-3 text-3xl text-teal-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex flex-wrap justify-center w-full h-full gap-4">
              {books.fiveStar.map((book, index) => {
                let imgUrl =
                  book.cover.type === "external"
                    ? book.cover.external
                    : book.cover.file;

                return (
                  <BookCard
                    key={book.properties.Title.title[0].plain_text}
                    title={book.properties.Title.title[0].plain_text}
                    img={book.cover.external}
                    url={book.properties.URL.url}
                    colors={
                      " bg-gradient-to-br from-white via-white to-teal-200 dark:from-slate-900 dark:via-slate-800 dark:to-teal-600  shadow-teal-600/40 dark:shadow-teal-600 hover:shadow-teal-600/40"
                    }
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-2 mt-16 mb-3 text-3xl text-green-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex flex-wrap justify-center w-full h-full gap-4">
              {books.fourStar.map((book, index) => {
                // console.log(book.properties.Rank.select.name);
                return (
                  <BookCard
                    key={book.properties.Title.title[0].plain_text}
                    title={book.properties.Title.title[0].plain_text}
                    img={book.cover.external}
                    url={book.properties.URL.url}
                    colors={
                      " bg-gradient-to-br from-white via-white to-green-200 dark:from-slate-900 dark:via-slate-800 dark:to-green-600  shadow-green-600/40 dark:shadow-green-600 hover:shadow-green-600/40"
                    }
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex text-3xl gap-2 mt-16 mb-3 !text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex flex-wrap justify-center w-full h-full gap-4">
              {books.threeStar.map((book, index) => {
                return (
                  <BookCard
                    key={book.properties.Title.title[0].plain_text}
                    title={book.properties.Title.title[0].plain_text}
                    img={book.cover.external}
                    url={book.properties.URL.url}
                    colors={
                      " bg-gradient-to-br from-white via-white to-yellow-200 dark:from-slate-900 dark:via-slate-800 dark:to-yellow-600  shadow-yellow-600/40 dark:shadow-yellow-600 hover:shadow-yellow-600/40"
                    }
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-2 mt-16 mb-3 text-3xl text-orange-500">
              <FaStar />
              <FaStar />
            </div>
            <div className="flex flex-wrap justify-center w-full h-full gap-4">
              {books.twoStar.map((book, index) => {
                return (
                  <BookCard
                    key={book.properties.Title.title[0].plain_text}
                    title={book.properties.Title.title[0].plain_text}
                    img={book.cover.external}
                    url={book.properties.URL.url}
                    colors={
                      " bg-gradient-to-br from-white via-white to-orange-200 dark:from-slate-900 dark:via-slate-800 dark:to-orange-600  shadow-orange-600/40 dark:shadow-orange-600 hover:shadow-orange-600/40"
                    }
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex gap-2 mt-16 mb-3 text-3xl text-red-500">
              <FaStar />
            </div>
            <div className="flex flex-wrap justify-center w-full h-full gap-4">
              {books.oneStar.map((book, index) => {
                return (
                  <BookCard
                    key={book.properties.Title.title[0].plain_text}
                    title={book.properties.Title.title[0].plain_text}
                    img={book.cover.external}
                    url={book.properties.URL.url}
                    colors={
                      " bg-gradient-to-br from-white via-white to-red-200 dark:from-slate-900 dark:via-slate-800 dark:to-red-600  shadow-red-600/40 dark:shadow-red-600 hover:shadow-red-600/40"
                    }
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function BookCard({ title, img, colors, url }) {
  const [imageLoading, setImageLoading] = React.useState(false);

  let imageSRC =
    "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60";
  if (img?.url) {
    imageSRC = img?.url;
  }
  React.useEffect(() => {}, []);
  return (
    <a
      href={url}
      target={"_blank"}
      rel={"noreferrer"}
      className={
        "relative flex flex-col h-64 !px-1 !py-1 rounded-lg w-fit shadow-lg cursor-pointer hover:shadow-xl transition hover:scale-105 " +
        colors
      }
    >
      <div className="relative h-48 w-36">
        <Image
          src={imageSRC}
          alt={"Image of the book: " + title}
          className={"!rounded-sm z-0 "}
          fill
          sizes="9rem"
        />
      </div>
      <div className="px-2 w-36">
        {" "}
        <p
          className={
            "text-center whitespace-pre-wrap " +
            (title.length > 32 ? " text-xs" : " text-sm")
          }
        >
          {title}
        </p>
      </div>
      {/* <img src={url} alt={title} /> */}
    </a>
  );
}
export default Books;

export async function getStaticProps(context) {
  let books = {};

  const axiosRequest = await axios({
    method: "POST",
    // url: "http://localhost:3000/api/notion",
    url: "http://www.tyfiero.com/api/notion",
  })
    .then((response) => {
      let results = response.data.response.results;
      let best = results.filter(
        (item) => item.properties.Rank.select.name === "Life Changing"
      );
      let fiveStar = results.filter(
        (item) => item.properties.Rank.select.name === "???????????????"
      );
      let fourStar = results.filter(
        (item) => item.properties.Rank.select.name === "????????????"
      );
      let threeStar = results.filter(
        (item) => item.properties.Rank.select.name === "?????????"
      );
      let twoStar = results.filter(
        (item) => item.properties.Rank.select.name === "??????"
      );
      let oneStar = results.filter(
        (item) => item.properties.Rank.select.name === "???"
      );
      let dataToPass = {
        fiveStar: fiveStar,
        fourStar: fourStar,
        threeStar: threeStar,
        twoStar: twoStar,
        oneStar: oneStar,
        best: best,
      };
      books = dataToPass;
    })
    .catch((error) => {
      console.log(error);
    });

  return {
    props: { books },
    revalidate: 21600,
  };
}
