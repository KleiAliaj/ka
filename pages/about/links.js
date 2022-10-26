import React from "react";
import { Collapse } from "react-collapse";
import { BsArrow90DegDown } from "react-icons/bs";
import { FaCaretRight, FaList, FaStar } from "react-icons/fa";
import axios from "axios";
import { TbRectangleVertical } from "react-icons/tb";
import Head from "next/head";

function Links({ links }) {
  const [linksList, setLinksList] = React.useState(links);
  const [cardOrList, setCardOrList] = React.useState(true);
  return (
    <>
      <Head>
        <title>Ty&apos;s Links and Resources</title>
        <meta
          name="description"
          content={`Useful and fun links from across the web.`}
        />
      </Head>
      <div className="page-container">
        <h2 className="text-left heading-lg ">Links</h2>
        <p>
          This is a list of the best links on the internet I&apos;ve come
          across, since I started keeping track in 2020. Lots of cool resources
          and articles in here.
        </p>
        <div className="flex items-center gap-1">
          <p>Favorite Links are labelled with a &quot;</p>
          <FaStar className="text-sky-500" />
          <p>&quot;</p>
        </div>
        <div className="flex justify-end w-full my-3">
          <button
            className="button-1 !px-2 !py-1"
            onClick={() => setCardOrList(!cardOrList)}
          >
            {cardOrList ? <FaList /> : <TbRectangleVertical />}
            {cardOrList ? "List View" : "Card View"}
          </button>
        </div>
        <Category
          title="Code"
          textColor=" text-sky-700 dark:text-sky-300"
          cn=" rounded-lg bg-sky-300/20 mb-3"
        >
          {cardOrList ? (
            <div className="flex flex-wrap items-center justify-center h-full gap-3 p-1 pb-5">
              {linksList.code.map((link, index) => {
                return (
                  <ResourceCard
                    key={index}
                    name={link.title}
                    fav={link.fav}
                    url={link.url}
                    note={link.note}
                    textColor=" text-sky-700 dark:text-sky-300"
                  />
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 p-1 pb-5">
              {linksList.code.map((link, index) => {
                return (
                  <Resource
                    key={index}
                    name={link.title}
                    fav={link.fav}
                    url={link.url}
                    note={link.note}
                    textColor=" text-sky-700 dark:text-sky-300"
                    ring={" ring-sky-500"}
                  />
                );
              })}
            </div>
          )}
        </Category>

        <Category
          title="Crypto"
          textColor=" text-indigo-700 dark:text-indigo-300"
          cn=" rounded-lg bg-indigo-300/20 mb-3"
        >
          {cardOrList ? (
            <div className="flex flex-wrap items-center justify-center h-full gap-3 p-1 pb-5">
              {linksList.crypto.map((link, index) => {
                return (
                  <ResourceCard
                    key={index}
                    name={link.title}
                    fav={link.fav}
                    url={link.url}
                    note={link.note}
                    textColor=" text-indigo-700 dark:text-indigo-300"
                  />
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 p-1 pb-5">
              {linksList.crypto.map((link, index) => {
                return (
                  <Resource
                    key={index}
                    name={link.title}
                    fav={link.fav}
                    url={link.url}
                    note={link.note}
                    textColor=" text-indigo-700 dark:text-indigo-300"
                    ring={" ring-indigo-500"}
                  />
                );
              })}
            </div>
          )}
        </Category>
        <Category
          title="Personal Development"
          textColor=" text-purple-700 dark:text-purple-300"
          cn=" rounded-lg bg-purple-300/20 mb-3"
        >
          {cardOrList ? (
            <div className="flex flex-wrap items-center justify-center h-full gap-3 p-1 pb-5">
              {linksList.personalDev.map((link, index) => {
                return (
                  <ResourceCard
                    key={index}
                    name={link.title}
                    fav={link.fav}
                    url={link.url}
                    note={link.note}
                    textColor=" text-purple-700 dark:text-purple-300"
                  />
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 p-1 pb-5">
              {linksList.personalDev.map((link, index) => {
                return (
                  <Resource
                    key={index}
                    name={link.title}
                    fav={link.fav}
                    url={link.url}
                    note={link.note}
                    textColor=" text-purple-700 dark:text-purple-300"
                    ring={" ring-purple-500"}
                  />
                );
              })}
            </div>
          )}
        </Category>
        <Category
          title="AI"
          textColor=" text-fuchsia-700 dark:text-fuchsia-300"
          cn=" rounded-lg bg-fuchsia-300/20 mb-3"
        >
          {cardOrList ? (
            <div className="flex flex-wrap items-center justify-center h-full gap-3 p-1 pb-5">
              {linksList.ai.map((link, index) => {
                return (
                  <ResourceCard
                    key={index}
                    name={link.title}
                    fav={link.fav}
                    url={link.url}
                    note={link.note}
                    textColor=" text-fuchsia-700 dark:text-fuchsia-300"
                  />
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 p-1 pb-5">
              {linksList.ai.map((link, index) => {
                return (
                  <Resource
                    key={index}
                    name={link.title}
                    fav={link.fav}
                    url={link.url}
                    note={link.note}
                    textColor=" text-fuchsia-700 dark:text-fuchsia-300"
                    ring={" ring-fuchsia-500"}
                  />
                );
              })}
            </div>
          )}
        </Category>
        <Category
          title="Tools"
          textColor=" text-orange-700 dark:text-orange-300"
          cn=" rounded-lg bg-orange-300/20 mb-3"
        >
          {cardOrList ? (
            <div className="flex flex-wrap items-center justify-center h-full gap-3 p-1 pb-5">
              {linksList.tools.map((link, index) => {
                return (
                  <ResourceCard
                    key={index}
                    name={link.title}
                    fav={link.fav}
                    url={link.url}
                    note={link.note}
                    textColor=" text-orange-700 dark:text-orange-300"
                  />
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 p-1 pb-5">
              {linksList.tools.map((link, index) => {
                return (
                  <Resource
                    key={index}
                    name={link.title}
                    fav={link.fav}
                    url={link.url}
                    note={link.note}
                    textColor=" text-orange-700 dark:text-orange-300"
                    ring={" ring-orange-500"}
                  />
                );
              })}
            </div>
          )}
        </Category>
        <Category
          title="Innovation"
          textColor=" text-yellow-700 dark:text-yellow-300"
          cn=" rounded-lg bg-yellow-300/20 mb-3"
        >
          {cardOrList ? (
            <div className="flex flex-wrap items-center justify-center h-full gap-3 p-1 pb-5">
              {linksList.innovation.map((link, index) => {
                return (
                  <ResourceCard
                    key={index}
                    name={link.title}
                    fav={link.fav}
                    url={link.url}
                    note={link.note}
                    textColor=" text-yellow-700 dark:text-yellow-300"
                  />
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 p-1 pb-5">
              {linksList.innovation.map((link, index) => {
                return (
                  <Resource
                    key={index}
                    name={link.title}
                    fav={link.fav}
                    url={link.url}
                    note={link.note}
                    textColor=" text-yellow-700 dark:text-yellow-300"
                    ring={" ring-yellow-500"}
                  />
                );
              })}
            </div>
          )}
        </Category>

        <Category
          title="Tools"
          textColor=" text-green-700 dark:text-green-300"
          cn=" rounded-lg bg-green-300/20 mb-3"
        >
          {cardOrList ? (
            <div className="flex flex-wrap items-center justify-center h-full gap-3 p-1 pb-5">
              {linksList.tools.map((link, index) => {
                return (
                  <ResourceCard
                    key={index}
                    name={link.title}
                    fav={link.fav}
                    url={link.url}
                    note={link.note}
                    textColor=" text-green-700 dark:text-green-300"
                  />
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 p-1 pb-5">
              {linksList.tools.map((link, index) => {
                return (
                  <Resource
                    key={index}
                    name={link.title}
                    fav={link.fav}
                    url={link.url}
                    note={link.note}
                    textColor=" text-green-700 dark:text-green-300"
                    ring={" ring-green-500"}
                  />
                );
              })}
            </div>
          )}
        </Category>
        <Category
          title="Fun Stuff"
          textColor=" text-teal-700 dark:text-teal-300"
          cn=" rounded-lg bg-teal-300/20 mb-3"
        >
          {cardOrList ? (
            <div className="flex flex-wrap items-center justify-center h-full gap-3 p-1 pb-5">
              {linksList.fun.map((link, index) => {
                return (
                  <ResourceCard
                    key={index}
                    name={link.title}
                    fav={link.fav}
                    url={link.url}
                    note={link.note}
                    textColor=" text-teal-700 dark:text-teal-300"
                  />
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-2 p-1 pb-5">
              {linksList.fun.map((link, index) => {
                return (
                  <Resource
                    key={index}
                    name={link.title}
                    fav={link.fav}
                    url={link.url}
                    note={link.note}
                    textColor=" text-teal-700 dark:text-teal-300"
                    ring={" ring-teal-500"}
                  />
                );
              })}
            </div>
          )}
        </Category>
      </div>
    </>
  );
}

function Resource({ name, url, cn, fav, note, textColor, ring }) {
  return (
    <div
      className={
        "w-4/5 p-2  ml-2 bg-white/60 dark:bg-slate-800/90 ring-1  rounded-xl " +
        ring
      }
    >
      <div className="flex items-center gap-2 ">
        {fav ? (
          <FaStar className="text-sky-600" />
        ) : (
          <FaStar className="opacity-0 text-sky-200" />
        )}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-alias w-fit"
          href={url}
        >
          <div className="flex items-center gap-2">
            <picture>
              <source
                srcSet={
                  "https://s2.googleusercontent.com/s2/favicons?domain_url=" +
                  url
                }
                type="image/png"
              />
              <img
                src={
                  "https://s2.googleusercontent.com/s2/favicons?domain_url=" +
                  url
                }
                alt={"Favicon for " + name}
                className="scale-125"
              />
            </picture>
            <p
              className={
                "transition hover:underline visited:text-indigo-600 hover:text-sky-700 hover:dark:text-sky-300 " +
                textColor
              }
            >
              {name}
            </p>
          </div>
        </a>
      </div>
      {/* {note && (
        <div className="flex items-center gap-2 ml-12 cursor-default ">
          <BsArrow90DegDown className="-rotate-90 -translate-y-1 text-sky-900 dark:text-sky-700" />
          <p className="text-sm text-slate-500 dark:text-slate-200">{note}</p>
        </div>
      )} */}
    </div>
  );
}
function ResourceCard({ name, url, cn, fav, note, textColor }) {
  return (
    <div className=" sm: w-full md:w-52 h-auto min-h-[100%] p-2 transition shadow-xl bg-white/90 dark:bg-slate-800/90 rounded-xl md:hover:scale-105 active:scale-90 md:hover:ring-4 ring-sky-400 cursor-alias flex flex-col items-center relative">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className=" w-fit"
        href={url}
      >
        <div className="flex justify-center w-full">
          <picture>
            <source
              srcSet={
                "https://s2.googleusercontent.com/s2/favicons?domain_url=" + url
              }
              type="image/png"
            />
            <img
              src={
                "https://s2.googleusercontent.com/s2/favicons?domain_url=" + url
              }
              alt={"Favicon for " + name}
              className="scale-150"
            />
          </picture>
        </div>
        <div className="absolute flex items-center gap-2 top-2 right-2">
          {fav ? (
            <FaStar className={"scale-125 " + textColor} />
          ) : (
            <FaStar className="opacity-0 " />
          )}
        </div>

        <div className="flex justify-center mt-5 text-center">
          <p
            className={
              "text-base font-bold transition hover:underline visited:text-indigo-600 hover:text-sky-700 hover:dark:text-sky-300 f1 " +
              textColor
            }
          >
            {name}
          </p>
        </div>
        {note && (
          <div className="flex justify-center gap-2 ">
            <p className="text-sm text-center text-slate-500 dark:text-slate-200">
              {note}
            </p>
          </div>
        )}
      </a>
    </div>
  );
}

function Category({ children, title, cn, textColor }) {
  const [isOpened, setIsOpened] = React.useState(true);

  return (
    <div className={"w-full h-fit " + cn}>
      {" "}
      <div
        className="flex items-center gap-2 cursor-pointer "
        onClick={() => setIsOpened(!isOpened)}
      >
        <FaCaretRight
          className={
            "transition text-3xl  " +
            (isOpened ? " rotate-90  " : "rotate-0  ") +
            textColor
          }
        />
        <p
          className={
            "text-xl select-none md:hover:scale-105 transition " +
            (isOpened
              ? " font-bold  " + textColor
              : " font-normal  text-slate-900 dark:text-white")
          }
        >
          {title}
        </p>
      </div>
      <Collapse
        isOpened={isOpened}
        hasNestedCollapse
        className="fade-effect-quick"
      >
        {children}
      </Collapse>
    </div>
  );
}

export default Links;

export async function getStaticProps(context) {
  let links = {};

  const axiosRequest = await axios({
    method: "POST",
    // url: "http://localhost:3000/api/airtable-links",
    url: "http://www.tyfiero.com/api/airtable-links",
  })
    .then((response) => {
      let data = response.data;
      let codeArray = data.filter((item) => item.type === "Code");
      codeArray.sort(function (a, b) {
        return b.fav - a.fav;
      });

      let personalDevArray = data.filter(
        (item) => item.type === "Personal Development"
      );
      personalDevArray.sort(function (a, b) {
        return b.fav - a.fav;
      });
      let aiArray = data.filter((item) => item.type === "AI");
      aiArray.sort(function (a, b) {
        return b.fav - a.fav;
      });
      let innovationArray = data.filter((item) => item.type === "Innovation");
      innovationArray.sort(function (a, b) {
        return b.fav - a.fav;
      });
      let toolsArray = data.filter((item) => item.type === "Tools");
      toolsArray.sort(function (a, b) {
        return b.fav - a.fav;
      });
      let funArray = data.filter((item) => item.type === "Fun");
      funArray.sort(function (a, b) {
        return b.fav - a.fav;
      });
      let cryptoArray = data.filter((item) => item.type === "Crypto");
      cryptoArray.sort(function (a, b) {
        return b.fav - a.fav;
      });

      let dataToPass = {
        code: codeArray,
        personalDev: personalDevArray,
        ai: aiArray,
        innovation: innovationArray,
        tools: toolsArray,
        fun: funArray,
        crypto: cryptoArray,
      };
      links = dataToPass;
    })
    .catch((error) => {
      console.log(error);
    });

  return {
    props: { links },
    revalidate: 21600,
  };
}
